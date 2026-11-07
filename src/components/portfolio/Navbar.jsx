import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SiteControls from '@/components/portfolio/SiteControls';
import { useSite } from '@/lib/siteSettings';

const NAV_ITEMS = ['home', 'about', 'skills', 'projects', 'services', 'contact'];

export default function Navbar({ onNavigate, activeSection }) {
  const { t } = useSite();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[var(--header-bg)] backdrop-blur-xl border-b border-[var(--line)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20 gap-4">
            <button onClick={() => handleNavClick('home')} className="flex items-center gap-3 group shrink-0">
              <img
                src="https://media.base44.com/images/public/6936e7ec2b77d79277e60051/90c7a42d8_Logo_SteeveDev-removebg-preview.png"
                alt="Steeve.Dev"
                className="h-11 w-11 object-cover rounded-xl border border-[var(--line)] shadow-sm shadow-black/20 transition-transform group-hover:scale-105"
              />
              <span className="text-left hidden sm:block">
                <span className="block text-lg font-heading font-bold text-[var(--ink)] leading-tight">
                  Steeve<span className="text-[#8B5CF6]">.Dev</span>
                </span>
                <span className="block text-[9px] tracking-[0.22em] text-[var(--ink-muted)]">
                  CODE • SOLUTIONS • IMPACT
                </span>
              </span>
            </button>

            <div className="hidden lg:flex items-center gap-7 xl:gap-8">
              {NAV_ITEMS.map((id) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`relative text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                    activeSection === id ? 'text-[var(--ink)]' : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
                  }`}
                >
                  {t.nav[id]}
                  {activeSection === id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3D5AFE] to-[#8B5CF6]"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="hidden md:block">
                <SiteControls />
              </div>
              <div className="hidden lg:block">
                <Button
                  onClick={() => handleNavClick('contact')}
                  className="px-6 py-2 font-heading font-medium bg-[#3D5AFE] hover:bg-[#3049d6] text-white rounded-xl shadow-lg shadow-[#3D5AFE]/25"
                >
                  {t.nav.cta}
                </Button>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
                className="lg:hidden p-2 rounded-xl bg-[var(--panel)] border border-[var(--line)]"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-[var(--ink)]" />
                ) : (
                  <Menu className="w-6 h-6 text-[var(--ink)]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed inset-x-0 top-20 z-40 lg:hidden"
          >
            <div className="mx-4 p-6 rounded-2xl bg-[var(--surface-2)] border border-[var(--line)] shadow-2xl shadow-black/20">
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((id) => (
                  <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className={`text-left py-3 px-4 rounded-xl transition-all duration-300 ${
                      activeSection === id
                        ? 'bg-gradient-to-r from-[#3D5AFE]/15 to-[#8B5CF6]/15 text-[var(--ink)]'
                        : 'text-[var(--ink-muted)] hover:bg-[var(--panel)] hover:text-[var(--ink)]'
                    }`}
                  >
                    {t.nav[id]}
                  </button>
                ))}

                <div className="flex items-center justify-between mt-3 pt-4 border-t border-[var(--line)]">
                  <SiteControls />
                  <Button
                    onClick={() => handleNavClick('contact')}
                    className="px-5 py-4 bg-[#3D5AFE] hover:bg-[#3049d6] text-white rounded-xl font-heading text-sm"
                  >
                    {t.nav.cta}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}