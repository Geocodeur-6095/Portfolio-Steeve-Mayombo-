import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useSite } from '@/lib/siteSettings';

const LANGUAGES = ['fr', 'en'];

export default function SiteControls() {
  const { lang, setLang, isDark, toggleTheme, t } = useSite();

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center rounded-xl border border-[var(--line)] bg-[var(--panel)] p-1">
        {LANGUAGES.map((code) => (
          <button
            key={code}
            onClick={() => setLang(code)}
            aria-label={`${t.controls.language} : ${code.toUpperCase()}`}
            className={`px-2.5 py-1.5 text-[11px] font-heading font-semibold uppercase rounded-lg transition-colors ${
              lang === code
                ? 'bg-[#3D5AFE] text-white shadow-sm shadow-[#3D5AFE]/30'
                : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
            }`}
          >
            {code}
          </button>
        ))}
      </div>

      <button
        onClick={toggleTheme}
        aria-label={t.controls.theme}
        className="p-2.5 rounded-xl border border-[var(--line)] bg-[var(--panel)] hover:bg-[var(--panel-hover)] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
      >
        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>
    </div>
  );
}