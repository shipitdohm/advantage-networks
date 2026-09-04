"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { Dictionary, Locale } from "@/lib/content";
import { getDictionary } from "@/lib/content";

interface LanguageContextValue {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Every fresh visit starts in English — no restoring a previously
  // stored preference. Switching languages still works for the session.
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = (next: Locale) => setLocaleState(next);

  const toggleLocale = () => setLocale(locale === "en" ? "de" : "en");

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, t: getDictionary(locale), setLocale, toggleLocale }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
