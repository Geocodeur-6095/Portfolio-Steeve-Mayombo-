import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code2, Lightbulb, Rocket, Star } from 'lucide-react';
import { useSite } from '@/lib/siteSettings';

const VALUE_ICONS = [Shield, Code2, Lightbulb, Rocket, Star];

export default function BrandValues() {
  const { t } = useSite();

  return (
    <section className="relative py-16 bg-[var(--surface)] border-y border-[var(--line)]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {t.values.map((value, index) => {
            const Icon = VALUE_ICONS[index];
            return (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group text-center px-4 py-6 rounded-2xl bg-[var(--panel)] border border-[var(--line)] hover:border-[#3D5AFE]/40 hover:bg-[var(--panel-hover)] transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#3D5AFE]/20 to-[#8B5CF6]/20 mb-4 group-hover:from-[#3D5AFE]/30 group-hover:to-[#8B5CF6]/30 transition-colors">
                  <Icon className="w-5 h-5 text-[#8B5CF6] group-hover:text-[#3D5AFE] transition-colors" />
                </div>
                <h4 className="text-sm font-semibold tracking-[0.18em] uppercase text-[var(--ink)] mb-2">
                  {value.label}
                </h4>
                <p className="text-xs text-[var(--ink-muted)] leading-relaxed">{value.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}