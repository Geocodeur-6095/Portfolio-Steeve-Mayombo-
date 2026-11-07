import React from 'react';
import { Github, Linkedin, Instagram, Mail, Heart, ArrowUp } from 'lucide-react';
import { useSite } from '@/lib/siteSettings';
import EmailContact from '@/components/portfolio/EmailContact';
import { CONTACT_EMAIL } from '@/lib/contactInfo';

const SOCIALS = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' }
];

const NAV_ITEMS = ['home', 'about', 'skills', 'projects', 'services', 'contact'];

export default function Footer({ onNavigate }) {
  const { t } = useSite();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[var(--surface-2)] border-t border-[var(--line)]">
      <button
        onClick={scrollToTop}
        aria-label={t.footer.top}
        className="absolute -top-6 left-1/2 -translate-x-1/2 p-3 rounded-full bg-gradient-to-r from-[#3D5AFE] to-[#8B5CF6] hover:opacity-90 transition-opacity shadow-lg shadow-[#3D5AFE]/25"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>

      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://media.base44.com/images/public/6936e7ec2b77d79277e60051/90c7a42d8_Logo_SteeveDev-removebg-preview.png"
                alt="Steeve.Dev"
                className="h-11 w-11 object-cover rounded-xl border border-[var(--line)] shadow-sm shadow-black/20"
              />
              <div>
                <span className="block text-lg font-heading font-bold text-[var(--ink)] leading-tight">
                  Steeve<span className="text-[#8B5CF6]">.Dev</span>
                </span>
                <span className="block text-[9px] tracking-[0.22em] text-[var(--ink-muted)]">
                  CODE • SOLUTIONS • IMPACT
                </span>
              </div>
            </div>
            <p className="text-[var(--ink-muted)] text-sm leading-relaxed mb-3">{t.footer.essence}</p>
            <p className="font-signature text-lg text-[#8B5CF6] mb-6">By Steeve Mayombo</p>

            <div className="flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-xl bg-[var(--panel)] border border-[var(--line)] hover:border-[#3D5AFE]/50 hover:bg-[var(--panel-hover)] transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-[var(--ink-muted)] group-hover:text-[var(--ink)] transition-colors" />
                </a>
              ))}
              <EmailContact
                className="p-2 rounded-xl bg-[var(--panel)] border border-[var(--line)] hover:border-[#3D5AFE]/50 hover:bg-[var(--panel-hover)] transition-all duration-300 group"
                ariaLabel="Email"
              >
                <Mail className="w-4 h-4 text-[var(--ink-muted)] group-hover:text-[var(--ink)] transition-colors" />
              </EmailContact>
            </div>

            <div className="mt-6 flex items-center gap-4 p-3 rounded-2xl bg-[var(--panel)] border border-[var(--line)]">
              <img
                src="https://media.base44.com/images/public/6936e7ec2b77d79277e60051/ebe0dfa60_QrCodeSteeveDev.png"
                alt="QR code Steeve.Dev"
                className="h-20 w-20 shrink-0 rounded-lg bg-white p-1"
              />
              <div>
                <p className="text-sm font-medium text-[var(--ink)] mb-1">{t.footer.scan}</p>
                <p className="text-xs text-[var(--ink-muted)] leading-relaxed">{t.footer.scanText}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[var(--ink)] font-semibold mb-4 text-sm tracking-[0.15em] uppercase">
              {t.footer.navigation}
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(id)}
                    className="text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors text-sm"
                  >
                    {t.nav[id]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[var(--ink)] font-semibold mb-4 text-sm tracking-[0.15em] uppercase">
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-3">
              {t.footer.services.map((service) => (
                <li key={service} className="text-[var(--ink-muted)] text-sm">
                  {service}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-[var(--ink-muted)]">
              {t.contact.location}
              <br />
              <EmailContact className="hover:text-[#8B5CF6] transition-colors" ariaLabel="Email">
                {CONTACT_EMAIL}
              </EmailContact>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--line)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[var(--ink-muted)] text-sm">
              © {new Date().getFullYear()} Steeve.Dev. {t.footer.rights}
            </p>
            <p className="text-[var(--ink-muted)] text-sm flex items-center gap-1">
              {t.footer.madeWith} <Heart className="w-4 h-4 text-[#8B5CF6]" /> {t.footer.in}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}