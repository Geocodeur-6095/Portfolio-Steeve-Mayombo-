import React from 'react';
import { motion } from 'framer-motion';
import { Download, Quote, Briefcase, Calendar, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSite } from '@/lib/siteSettings';

const STAT_ICONS = [Briefcase, Calendar, Users, Award];

export default function AboutSection() {
  const { t } = useSite();

  return (
    <section id="about" className="relative py-24 bg-[var(--surface)] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#3D5AFE]/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-gradient-to-r from-[#3D5AFE] to-[#8B5CF6]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#8B5CF6] font-medium">
              {t.about.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--ink)] leading-tight">
            {t.about.titleA} <span className="text-brand-gradient">{t.about.titleB}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative rounded-[2rem] p-[2px] bg-gradient-to-br from-[#3D5AFE] via-[#6D6FF5] to-[#8B5CF6]">
              <div className="rounded-[calc(2rem-2px)] overflow-hidden bg-[var(--surface-3)]">
                <img
                  src="https://media.base44.com/images/public/6936e7ec2b77d79277e60051/5bc385d66_Profil.jpg"
                  alt="Steeve Mayombo, développeur web et designer créatif"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 left-4 right-4 p-4 rounded-2xl bg-[var(--surface-3)] border border-[var(--line)] shadow-xl shadow-black/20">
              <span className="font-signature text-xl text-[#8B5CF6] block leading-none mb-1">
                Steeve Mayombo
              </span>
              <span className="text-[11px] tracking-[0.2em] uppercase text-[var(--ink-muted)]">
                {t.about.role}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <blockquote className="relative pl-6 mb-8 border-l-2 border-[#8B5CF6]/50">
              <Quote className="absolute -left-2 -top-3 w-6 h-6 text-[#3D5AFE]/60" />
              <p className="text-lg md:text-xl text-[var(--ink-soft)] leading-relaxed italic">
                {t.about.quote}
              </p>
            </blockquote>

            <div className="space-y-4 text-[var(--ink-muted)] leading-relaxed">
              <p>
                {t.about.p1a}
                <span className="text-[var(--ink)] font-medium">Steeve</span>
                {t.about.p1b}
                <span className="text-[var(--ink)] font-medium">{t.contact.location}</span>
                {t.about.p1c}
              </p>
              <p>
                {t.about.p2a}
                <span className="text-[#3D5AFE]">Vue.js / Nuxt.js</span>
                {t.about.p2b}
                <span className="text-[#3D5AFE]">TailwindCSS</span>
                {t.about.p2c}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {t.about.stats.map((stat, index) => {
                const StatIcon = STAT_ICONS[index];
                return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.08 }}
                  className="p-4 rounded-2xl bg-[var(--panel)] border border-[var(--line)] hover:border-[#3D5AFE]/40 transition-colors"
                >
                  <StatIcon className="w-5 h-5 mb-3 text-[#8B5CF6]" />
                  <div className="text-2xl font-heading font-bold text-[var(--ink)]">{stat.value}</div>
                  <div className="text-[11px] text-[var(--ink-muted)] mt-1 leading-tight">{stat.label}</div>
                </motion.div>
                );
              })}
            </div>

            <Button className="mt-8 px-6 py-5 font-heading bg-[var(--panel)] border border-[var(--line-strong)] hover:bg-[var(--panel-hover)] text-[var(--ink)] rounded-xl">
              <Download className="w-4 h-4 mr-2" />
              {t.about.cv}
            </Button>
          </motion.div>
        </div>

        <div className="mt-20">
          <h3 className="text-xs tracking-[0.3em] uppercase text-[var(--ink-muted)] mb-8">
            {t.about.journey}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.about.timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-[var(--panel)] border border-[var(--line)] hover:border-[#8B5CF6]/40 transition-colors"
              >
                <span className="text-3xl font-heading font-bold text-[var(--ink-faint)] absolute top-3 right-4">
                  {item.year.slice(2)}
                </span>
                <span className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-[#8B5CF6]/15 text-[#8B5CF6] mb-3">
                  {item.year}
                </span>
                <h4 className="text-base font-semibold text-[var(--ink)] mb-1.5">{item.title}</h4>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}