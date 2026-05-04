import { createContext, useContext, useEffect, useRef, useState, ReactNode, useCallback } from "react";

type LangCode = "en" | "hi" | "es" | "fr" | "de" | "ar" | "zh" | "ja";

interface LanguageContextValue {
  lang: LangCode;
  setLang: (l: LangCode) => void;
  translating: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "site_lang";
const CACHE_PREFIX = "tr_cache_";
const TRANSLATE_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/translate`;

// Skip these tags entirely
const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE", "INPUT", "TEXTAREA", "SVG", "PATH"]);

const isVisibleText = (node: Text): boolean => {
  const text = node.nodeValue?.trim();
  if (!text) return false;
  // Skip pure-symbol / pure-number / very short non-letter strings
  if (!/[a-zA-Z]/.test(text)) return false;
  if (text.length < 2) return false;
  const parent = node.parentElement;
  if (!parent) return false;
  if (SKIP_TAGS.has(parent.tagName)) return false;
  if (parent.closest("[data-no-translate]")) return false;
  return true;
};

const collectTextNodes = (root: Node): Text[] => {
  const nodes: Text[] = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => (isVisibleText(n as Text) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT),
  });
  let n: Node | null;
  while ((n = walker.nextNode())) nodes.push(n as Text);
  return nodes;
};

// Originals stored on each text node so we can restore / re-translate
const ORIGINAL_KEY = "__orig_text__";

const getOriginal = (node: Text): string => {
  const n = node as Text & { __orig_text__?: string };
  if (n.__orig_text__ == null) {
    n.__orig_text__ = node.nodeValue ?? "";
  }
  return n.__orig_text__;
};

const loadCache = (lang: LangCode): Record<string, string> => {
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + lang);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const saveCache = (lang: LangCode, cache: Record<string, string>) => {
  try {
    localStorage.setItem(CACHE_PREFIX + lang, JSON.stringify(cache));
  } catch {
    // ignore quota errors
  }
};

async function translateBatch(texts: string[], target: LangCode): Promise<string[]> {
  const resp = await fetch(TRANSLATE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ texts, target }),
  });
  if (!resp.ok) throw new Error(`translate failed ${resp.status}`);
  const data = await resp.json();
  return Array.isArray(data.translations) && data.translations.length === texts.length
    ? data.translations
    : texts;
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<LangCode>(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem(STORAGE_KEY) as LangCode | null) : null;
    return saved ?? "en";
  });
  const [translating, setTranslating] = useState(false);
  const currentLangRef = useRef<LangCode>(lang);

  const applyLanguage = useCallback(async (target: LangCode) => {
    currentLangRef.current = target;
    document.documentElement.lang = target;
    document.documentElement.dir = target === "ar" ? "rtl" : "ltr";

    const nodes = collectTextNodes(document.body);

    if (target === "en") {
      // Restore originals
      nodes.forEach((node) => {
        const orig = getOriginal(node);
        if (node.nodeValue !== orig) node.nodeValue = orig;
      });
      return;
    }

    const cache = loadCache(target);
    const missing: string[] = [];
    const missingSet = new Set<string>();

    nodes.forEach((node) => {
      const orig = getOriginal(node);
      if (!cache[orig] && !missingSet.has(orig)) {
        missingSet.add(orig);
        missing.push(orig);
      }
    });

    // Apply cached translations immediately
    nodes.forEach((node) => {
      const orig = getOriginal(node);
      const tr = cache[orig];
      if (tr && node.nodeValue !== tr) node.nodeValue = tr;
    });

    if (missing.length === 0) return;

    setTranslating(true);
    try {
      // Batch ~40 strings per request
      const BATCH = 40;
      for (let i = 0; i < missing.length; i += BATCH) {
        const slice = missing.slice(i, i + BATCH);
        try {
          const translated = await translateBatch(slice, target);
          slice.forEach((src, idx) => {
            cache[src] = translated[idx] ?? src;
          });
          // Apply as we go
          if (currentLangRef.current !== target) return; // user switched mid-flight
          const freshNodes = collectTextNodes(document.body);
          freshNodes.forEach((node) => {
            const orig = getOriginal(node);
            const tr = cache[orig];
            if (tr && node.nodeValue !== tr) node.nodeValue = tr;
          });
          saveCache(target, cache);
        } catch (e) {
          console.error("translate batch failed", e);
        }
      }
    } finally {
      setTranslating(false);
    }
  }, []);

  const setLang = useCallback((l: LangCode) => {
    localStorage.setItem(STORAGE_KEY, l);
    setLangState(l);
    // Apply on next tick to allow React re-renders to commit if any
    setTimeout(() => applyLanguage(l), 0);
  }, [applyLanguage]);

  // Apply on first mount + observe DOM mutations to re-translate new content
  useEffect(() => {
    // Initial apply (after a short delay so the page has rendered)
    const t = setTimeout(() => applyLanguage(lang), 300);

    // Re-translate when new nodes are added (route changes, dialogs, etc.)
    let pending = false;
    const observer = new MutationObserver(() => {
      if (currentLangRef.current === "en") return;
      if (pending) return;
      pending = true;
      setTimeout(() => {
        pending = false;
        applyLanguage(currentLangRef.current);
      }, 250);
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: false });

    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, translating }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
