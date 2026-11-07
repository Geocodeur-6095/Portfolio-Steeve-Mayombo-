import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, PenTool, Video, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSite } from '@/lib/siteSettings';

const SERVICE_META = [
  { icon: Code, gradient: 'from-[#3D5AFE] to-[#2563EB]' },
  { icon: Palette, gradient: 'from-[#8B5CF6] to-[#A78BFA]' },
  { icon: PenTool, gradient: 'from-[#6366F1] to-[#818CF8]' },
  { icon: Video, gradient: 'from-[#7C3AED] to-[#A78BFA]' }
];

export default function ServicesSection({ onContact }) {
  const { t } = useSite();

  return (
    <section id="services" className="relative py-24 bg-[var(--surface-2)]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#3D5AFE]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-gradient-to-r from-[#3D5AFE] to-[#8B5CF6]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#8B5CF6] font-medium">
              {t.services.eyebrow}
            </span>
            <span className="h-px w-10 bg-gradient-to-r from-[#8B5CF6] to-[#3D5AFE]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--ink)] mb-5">{t.services.title}</h2>
          <p className="text-[var(--ink-muted)] max-w-2xl mx-auto">{t.services.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.services.items.map((service, index) => {
            const meta = SERVICE_META[index];
            const Icon = meta.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-3xl bg-[var(--panel)] border border-[var(--line)] hover:border-[#3D5AFE]/40 transition-all duration-500 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`}
                  />

                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${meta.gradient} mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-[var(--ink)] mb-3">{service.title}</h3>
                  <p className="text-[var(--ink-muted)] mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-[var(--ink-soft)]">
                        <div className={`p-1 rounded-full bg-gradient-to-r ${meta.gradient}`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={onContact}
                    variant="outline"
                    className="w-full py-5 border border-[var(--line-strong)] bg-[var(--panel)] hover:bg-[var(--panel-hover)] text-[var(--ink)] rounded-xl group/btn"
                  >
                    {t.services.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}