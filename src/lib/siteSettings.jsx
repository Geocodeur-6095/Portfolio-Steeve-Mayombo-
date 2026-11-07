import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '@/lib/translations';

const SiteSettingsContext = createContext(null);

export function SiteSettingsProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('steeve-lang') || 'fr');
  const [theme, setTheme] = useState(() => localStorage.getItem('steeve-theme') || 'dark');

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('steeve-lang', lang);
  }, [lang]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    localStorage.setItem('steeve-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <SiteSettingsContext.Provider
      value={{ lang, setLang, t: translations[lang], theme, toggleTheme, isDark: theme === 'dark' }}
    >
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSite() {
  const context = useContext(SiteSettingsContext);
  if (!context) throw new Error('useSite must be used inside SiteSettingsProvider');
  return context;
}