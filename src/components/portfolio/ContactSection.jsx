import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Instagram, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { base44 } from '@/api/base44Client';
import { useSite } from '@/lib/siteSettings';
import EmailContact from '@/components/portfolio/EmailContact';
import { CONTACT_EMAIL } from '@/lib/contactInfo';

const SOCIALS = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: '#', label: 'Instagram' }
];

export default function ContactSection() {
  const { t, isDark } = useSite();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    { icon: Mail, label: t.contact.infoLabels.email, value: CONTACT_EMAIL },
    { icon: Phone, label: t.contact.infoLabels.phone, value: '+241 74 82 15 94', href: 'tel:+24174821594' },
    { icon: MapPin, label: t.contact.infoLabels.location, value: t.contact.location, href: '#' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await base44.entities.ContactMessage.create(formData);

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const fieldClass =
    'bg-[var(--panel)] border-[var(--line)] text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:border-[#3D5AFE] rounded-xl';

  return (
    <section id="contact" className="relative py-24 bg-[var(--surface)]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#3D5AFE]/10 to-[#8B5CF6]/10 rounded-full blur-3xl" />
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
              {t.contact.eyebrow}
            </span>
            <span className="h-px w-10 bg-gradient-to-r from-[#8B5CF6] to-[#3D5AFE]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--ink)] mb-5">{t.contact.title}</h2>
          <p className="text-[var(--ink-muted)] max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="p-8 rounded-3xl bg-[var(--panel)] border border-[var(--line)] backdrop-blur-sm">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex p-4 rounded-full bg-emerald-500/15 mb-4">
                    <CheckCircle className="w-12 h-12 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--ink)] mb-2">{t.contact.successTitle}</h3>
                  <p className="text-[var(--ink-muted)]">{t.contact.successText}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--ink-soft)] mb-2">
                        {t.contact.name}
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.namePh}
                        className={`${fieldClass} h-12`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--ink-soft)] mb-2">
                        {t.contact.email}
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.emailPh}
                        className={`${fieldClass} h-12`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--ink-soft)] mb-2">
                      {t.contact.subject}
                    </label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => setFormData({ ...formData, subject: value })}
                    >
                      <SelectTrigger className={`${fieldClass} h-12`}>
                        <SelectValue placeholder={t.contact.subjectPh} />
                      </SelectTrigger>
                      <SelectContent className="bg-[var(--surface-3)] border-[var(--line)] text-[var(--ink)]">
                        {t.contact.subjects.map((subject) => (
                          <SelectItem
                            key={subject.value}
                            value={subject.value}
                            className="text-[var(--ink)] focus:bg-[var(--panel-hover)]"
                          >
                            {subject.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--ink-soft)] mb-2">
                      {t.contact.message}
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.messagePh}
                      rows={5}
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 bg-gradient-to-r from-[#3D5AFE] to-[#8B5CF6] hover:opacity-90 rounded-xl text-base font-heading font-medium text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        {t.contact.sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t.contact.send}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-emerald-600 dark:text-emerald-400">{t.contact.availability}</span>
            </div>

            <div className="space-y-5">
              {contactInfo.map((info, index) => {
                const rowClass =
                  'flex w-full items-center gap-4 p-5 rounded-2xl bg-[var(--panel)] border border-[var(--line)] hover:border-[#3D5AFE]/40 transition-all duration-300 group text-left';
                const content = (
                  <>
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#3D5AFE] to-[#8B5CF6]">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--ink-muted)]">{info.label}</p>
                      <p className="text-[var(--ink)] font-medium group-hover:text-[#8B5CF6] transition-colors break-words">
                        {info.value}
                      </p>
                    </div>
                  </>
                );

                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + index * 0.08 }}
                  >
                    {info.href ? (
                      <a href={info.href} className={rowClass}>
                        {content}
                      </a>
                    ) : (
                      <EmailContact className={rowClass} ariaLabel={info.label}>
                        {content}
                      </EmailContact>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-4">{t.contact.follow}</h3>
              <div className="flex gap-4">
                {SOCIALS.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55 + index * 0.08 }}
                    aria-label={social.label}
                    className="p-4 rounded-xl bg-[var(--panel)] border border-[var(--line)] hover:border-[#3D5AFE]/40 hover:bg-[var(--panel-hover)] transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-[var(--ink-muted)] group-hover:text-[var(--ink)] transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="h-48 rounded-2xl bg-[var(--panel)] border border-[var(--line)] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127636.06644988067!2d9.3578!3d0.3924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3b8a5f3b5b5f%3A0x5f5f5f5f5f5f5f5f!2sLibreville%2C%20Gabon!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: isDark ? 'invert(90%) hue-rotate(180deg)' : 'none' }}
                allowFullScreen
                loading="lazy"
                title={t.contact.mapTitle}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}