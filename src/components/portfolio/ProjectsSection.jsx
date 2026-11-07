import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSite } from '@/lib/siteSettings';

export default function ProjectsSection() {
  const { t } = useSite();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = t.projects.items.map((project, index) => ({ ...project, id: index }));

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 bg-[var(--surface)]">
      <div className="container mx-auto px-6">
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
              {t.projects.eyebrow}
            </span>
            <span className="h-px w-10 bg-gradient-to-r from-[#8B5CF6] to-[#3D5AFE]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--ink)]">{t.projects.title}</h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {t.projects.filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-[#3D5AFE] to-[#8B5CF6] text-white'
                  : 'bg-[var(--panel)] text-[var(--ink-muted)] hover:text-[var(--ink)] border border-[var(--line)] hover:border-[var(--line-strong)]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="group relative rounded-3xl overflow-hidden bg-[var(--panel)] border border-[var(--line)] hover:border-[#3D5AFE]/50 transition-all duration-500"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute inset-0 bg-gradient-to-r from-[#3D5AFE]/85 to-[#8B5CF6]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Voir ${project.title}`}
                        className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--ink)] mb-2 group-hover:text-[#8B5CF6] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--ink-muted)] text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-[var(--panel-hover)] text-[var(--ink-soft)] border border-[var(--line)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button
            variant="outline"
            className="px-8 py-5 border border-[var(--line-strong)] bg-[var(--panel)] hover:bg-[var(--panel-hover)] text-[var(--ink)] rounded-xl group"
          >
            {t.projects.viewAll}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}