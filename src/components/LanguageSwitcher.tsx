import { useState, useRef, useEffect } from "react";
import { Globe, Check, ChevronDown, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Lang = { code: "en" | "hi" | "es" | "fr" | "de" | "ar" | "zh" | "ja"; label: string; flag: string };

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
  const { lang, setLang, translating } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const select = (l: Lang) => {
    setOpen(false);
    if (l.code !== lang) setLang(l.code);
  };

  const triggerClasses =
    variant === "header"
      ? "flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-sm text-foreground/90 hover:text-foreground hover:bg-foreground/5 transition-colors border border-border/50"
      : "flex items-center gap-1.5 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-primary transition-colors border border-border/50 bg-card/40";

  return (
    <div ref={ref} className="relative" data-no-translate>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={triggerClasses}
        aria-label="Change language"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline uppercase text-xs font-medium">{current.code}</span>
        {translating ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin opacity-70" />
        ) : (
          <ChevronDown className="h-3.5 w-3.5 opacity-70" />
        )}
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
            {LANGUAGES.map((l) => (
              <li key={l.code}>
                <button
                  onClick={() => select(l)}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-primary/10 transition-colors"
                >
                  <span className="text-base leading-none">{l.flag}</span>
                  <span className="flex-1 text-left">{l.label}</span>
                  {lang === l.code && <Check className="h-4 w-4 text-primary" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
