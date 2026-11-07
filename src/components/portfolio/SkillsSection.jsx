import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Palette, PenTool, Video, ChevronRight, Globe, Layers, Smartphone, Sparkles } from 'lucide-react';
import { useSite } from '@/lib/siteSettings';

const CATEGORY_META = {
  dev: { icon: Code, color: '#3D5AFE', subIcons: [Globe, Layers] },
  design: { icon: Palette, color: '#8B5CF6', subIcons: [Smartphone, Sparkles] },
  graphisme: { icon: PenTool, color: '#6366F1', subIcons: [Palette, Sparkles] },
  video: { icon: Video, color: '#7C3AED', subIcons: [Video] }
};

export default function SkillsSection() {
  const { t } = useSite();
  const [activeCategory, setActiveCategory] = useState('dev');

  const categories = t.skills.categories;
  const activeSkill = categories.find((c) => c.id === activeCategory) || categories[0];
  const meta = CATEGORY_META[activeSkill.id];

  return (
    <section id="skills" className="relative py-24 bg-[var(--surface-2)]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#3D5AFE]/10 to-[#8B5CF6]/10 rounded-full blur-3xl" />
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
              {t.skills.eyebrow}
            </span>
            <span className="h-px w-10 bg-gradient-to-r from-[#8B5CF6] to-[#3D5AFE]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--ink)]">{t.skills.title}</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => {
            const Icon = CATEGORY_META[category.id].icon;
            const isActive = activeCategory === category.id;
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#3D5AFE] to-[#8B5CF6] text-white shadow-lg shadow-[#3D5AFE]/25'
                    : 'bg-[var(--panel)] text-[var(--ink-muted)] hover:bg-[var(--panel-hover)] hover:text-[var(--ink)] border border-[var(--line)]'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium hidden sm:inline">{category.title}</span>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSkill.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                style={{ background: `linear-gradient(135deg, ${meta.color}33, ${meta.color}14)` }}
              >
                <meta.icon className="w-8 h-8" style={{ color: meta.color }} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--ink)] mb-2">{activeSkill.title}</h3>
              <p className="text-[var(--ink-muted)] max-w-lg mx-auto">{activeSkill.description}</p>
            </div>

            <div
              className={`grid gap-6 max-w-4xl mx-auto ${
                activeSkill.subcategories.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'
              }`}
            >
              {activeSkill.subcategories.map((sub, idx) => {
                const SubIcon = meta.subIcons[idx] || Sparkles;
                return (
                  <motion.div
                    key={sub.title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group p-6 rounded-3xl bg-[var(--panel)] border border-[var(--line)] hover:border-[#3D5AFE]/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl" style={{ background: `${meta.color}1f` }}>
                        <SubIcon className="w-5 h-5" style={{ color: meta.color }} />
                      </div>
                      <h4 className="text-lg font-semibold text-[var(--ink)]">{sub.title}</h4>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {sub.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 text-sm rounded-full bg-[var(--panel-hover)] text-[var(--ink-soft)] border border-[var(--line)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-[var(--ink-muted)]">
                      <ChevronRight className="w-4 h-4" style={{ color: meta.color }} />
                      <span>{sub.projects}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}