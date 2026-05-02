import { useState, useRef, useEffect } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";

type Lang = { code: string; label: string; flag: string };

const LANGUAGES: Lang[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
];

interface Props {
  variant?: "header" | "footer";
}

export const LanguageSwitcher = ({ variant = "header" }: Props) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    return LANGUAGES.find((l) => l.code === saved) ?? LANGUAGES[0];
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const applyTranslation = (code: string) => {
    // Set Google Translate cookie on root and parent domains so the widget picks it up
    const value = code === "en" ? "/en/en" : `/en/${code}`;
    const host = window.location.hostname;
    document.cookie = `googtrans=${value};path=/`;
    document.cookie = `googtrans=${value};path=/;domain=${host}`;
    const parts = host.split(".");
    if (parts.length > 1) {
      const parent = "." + parts.slice(-2).join(".");
      document.cookie = `googtrans=${value};path=/;domain=${parent}`;
    }
  };

  // Apply saved language on first load
  useEffect(() => {
    if (current.code !== "en") {
      applyTranslation(current.code);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const select = (lang: Lang) => {
    setCurrent(lang);
    localStorage.setItem("lang", lang.code);
    document.documentElement.lang = lang.code;
    applyTranslation(lang.code);
    setOpen(false);
    // Reload so Google Translate re-processes the entire DOM with the new language
    window.location.reload();
  };

  const triggerClasses =
    variant === "header"
      ? "flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-sm text-foreground/90 hover:text-foreground hover:bg-foreground/5 transition-colors border border-border/50"
      : "flex items-center gap-1.5 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-primary transition-colors border border-border/50 bg-card/40";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={triggerClasses}
        aria-label="Change language"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline uppercase text-xs font-medium">{current.code}</span>
        <ChevronDown className="h-3.5 w-3.5 opacity-70" />
      </button>

      {open && (
        <div
          className={`absolute z-50 ${
            variant === "header" ? "right-0 top-full mt-2" : "left-0 bottom-full mb-2"
          } w-48 rounded-lg border border-border bg-popover/95 backdrop-blur-md shadow-elegant overflow-hidden`}
        >
          <div className="px-3 py-2 text-xs uppercase tracking-wider text-muted-foreground border-b border-border flex items-center gap-1.5">
            <Globe className="h-3.5 w-3.5" /> Language
          </div>
          <ul className="max-h-64 overflow-y-auto py-1">
            {LANGUAGES.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => select(lang)}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-primary/10 transition-colors"
                >
                  <span className="text-base leading-none">{lang.flag}</span>
                  <span className="flex-1 text-left">{lang.label}</span>
                  {current.code === lang.code && <Check className="h-4 w-4 text-primary" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
