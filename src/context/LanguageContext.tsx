"use client";

import * as React from "react";
import { translations, type Language, type TranslationSchema } from "@/lib/i18n/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationSchema;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(
  undefined
);

const STORAGE_KEY = "sylven_language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Mặc định mới vô trang web là tiếng Anh ("en")
  const [language, setLanguageState] = React.useState<Language>("en");

  React.useEffect(() => {
    document.title = "SYLVEN";
  }, [language]);

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === "vi" || saved === "en") {
        setLanguageState(saved);
      }
    } catch {
      // Ignore localStorage errors (e.g., incognito mode)
    }
  }, []);

  const setLanguage = React.useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore
    }
  }, []);

  const toggleLanguage = React.useCallback(() => {
    setLanguageState((prev: Language) => {
      const next: Language = prev === "en" ? "vi" : "en";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Ignore
      }
      return next;
    });
  }, []);

  const value = React.useMemo<LanguageContextType>(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: translations[language],
    }),
    [language, setLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = React.useContext(LanguageContext);
  if (!context) {
    // Graceful fallback for SSR or components rendered outside provider
    return {
      language: "en",
      setLanguage: () => {},
      toggleLanguage: () => {},
      t: translations.en,
    };
  }
  return context;
}
