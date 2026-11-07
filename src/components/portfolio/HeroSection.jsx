import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSite } from '@/lib/siteSettings';
import EmailContact from '@/components/portfolio/EmailContact';

const TAGLINE = ['CODE', 'SOLUTIONS', 'IMPACT'];

export default function HeroSection({ onNavigate }) {
  const { t } = useSite();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--surface)]">
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-5%] w-[520px] h-[520px] bg-[var(--glow-1)] rounded-full filter blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[520px] h-[520px] bg-[var(--glow-2)] rounded-full filter blur-[140px]" />
        <div className="absolute inset-0 hero-grid" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-28">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--panel)] backdrop-blur-sm border border-[var(--line)] mb-7">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-sm text-[var(--ink-muted)]">{t.hero.badge}</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
              {TAGLINE.map((word, i) => (
                <React.Fragment key={word}>
                  <span className="text-[11px] md:text-xs tracking-[0.35em] font-medium text-[var(--ink-muted)]">
                    {word}
                  </span>
                  {i < TAGLINE.length - 1 && (
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#3D5AFE]' : 'bg-[#8B5CF6]'}`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-[4.2rem] font-bold leading-[1.05] tracking-tight text-[var(--ink)] mb-6">
              {t.hero.titleA}
              <br className="hidden sm:block" />{' '}
              <span className="text-brand-gradient">{t.hero.titleB}</span>.
            </h1>

            <p className="text-lg text-[var(--ink-muted)] max-w-xl mx-auto lg:mx-0 mb-9 leading-relaxed">
              {t.hero.lead1}
              <span className="text-[var(--ink)] font-medium">{t.hero.leadName}</span>
              {t.hero.lead2}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => onNavigate('projects')}
                className="px-8 py-6 text-base font-heading font-medium bg-[#3D5AFE] hover:bg-[#3049d6] text-white rounded-xl shadow-lg shadow-[#3D5AFE]/30 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                {t.hero.ctaPrimary}
              </Button>
              <Button
                variant="outline"
                onClick={() => onNavigate('contact')}
                className="px-8 py-6 text-base font-heading font-medium border border-[var(--line-strong)] bg-[var(--panel)] hover:bg-[var(--panel-hover)] text-[var(--ink)] rounded-xl backdrop-blur-sm"
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-10 justify-center lg:justify-start">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 rounded-xl bg-[var(--panel)] border border-[var(--line)] hover:border-[#3D5AFE]/60 hover:bg-[var(--panel-hover)] transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-[var(--ink-muted)] group-hover:text-[var(--ink)] transition-colors" />
                </a>
              ))}
              <EmailContact
                className="p-3 rounded-xl bg-[var(--panel)] border border-[var(--line)] hover:border-[#3D5AFE]/60 hover:bg-[var(--panel-hover)] transition-all duration-300 group"
                ariaLabel="Email"
              >
                <Mail className="w-5 h-5 text-[var(--ink-muted)] group-hover:text-[var(--ink)] transition-colors" />
              </EmailContact>
              <span className="font-signature text-xl text-[#8B5CF6] ml-2 hidden sm:block">
                Le Geocodeur
              </span>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3D5AFE] to-[#8B5CF6] rounded-full blur-3xl opacity-25 scale-110" />

              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem]">
                <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-[#3D5AFE] via-[#6D6FF5] to-[#8B5CF6]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[var(--surface)]">
                    <img
                      src="https://media.base44.com/images/public/6936e7ec2b77d79277e60051/5bc385d66_Profil.jpg"
                      alt="Portrait de Steeve Mayombo, développeur web et designer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-[var(--surface-3)] border border-[var(--line)] shadow-xl shadow-black/20 whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="font-signature text-lg text-[#8B5CF6]">Steeve Mayombo</span>
                </motion.div>

                {[
                  { label: 'Vue.js', className: 'absolute -top-2 -right-2', animate: { y: [0, -8, 0] }, delay: 0 },
                  { label: 'Nuxt.js', className: 'absolute top-1/3 -left-4', animate: { y: [0, 8, 0] }, delay: 0.4 },
                  { label: 'TailwindCSS', className: 'absolute bottom-1/4 -right-4', animate: { x: [0, 8, 0] }, delay: 0.8 }
                ].map((tech) => (
                  <motion.div
                    key={tech.label}
                    className={`${tech.className} px-3.5 py-1.5 rounded-lg bg-[var(--surface-3)] border border-[var(--line)] shadow-lg shadow-black/10`}
                    animate={tech.animate}
                    transition={{ duration: 3.5, repeat: Infinity, delay: tech.delay }}
                  >
                    <span className="text-xs font-medium text-[var(--ink)]">{tech.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-1.5 text-[var(--ink-muted)]">
          <span className="text-[10px] tracking-[0.3em] uppercase">{t.hero.scroll}</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </motion.div>
    </section>
  );
}