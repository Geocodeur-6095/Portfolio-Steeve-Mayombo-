import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { base44 } from '@/api/base44Client';
import { CheckCircle2, Mail, Send } from 'lucide-react';
import { useSite } from '@/lib/siteSettings';
import { CONTACT_EMAIL, isValidEmail } from '@/lib/contactInfo';

const fieldClass =
  'bg-[var(--panel)] border-[var(--line)] text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:border-[#3D5AFE] rounded-xl';

export default function EmailDialog({ open, onOpenChange }) {
  const { t } = useSite();
  const labels = t.contact.emailDialog;
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const senderValid = isValidEmail(senderEmail);
  const canSend = senderValid && message.trim().length > 0 && status !== 'sending';

  const reset = () => {
    setSenderEmail('');
    setSubject('');
    setMessage('');
    setStatus('idle');
    setError('');
  };

  const handleOpenChange = (next) => {
    if (!next) reset();
    onOpenChange(next);
  };

  const handleSend = async () => {
    if (!canSend) return;
    setStatus('sending');
    setError('');
    const body = [subject.trim() ? `${labels.subject} : ${subject.trim()}` : '', message.trim()]
      .filter(Boolean)
      .join('\n\n');
    try {
      await base44.entities.ContactMessage.create({
        name: senderEmail.trim(),
        email: senderEmail.trim(),
        subject: 'Autre',
        message: body
      });
      setStatus('sent');
    } catch (e) {
      setStatus('idle');
      setError(labels.error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-lg bg-[var(--surface-2)] border border-[var(--line)] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-[var(--ink)] font-heading">{labels.title}</DialogTitle>
          <DialogDescription className="text-[var(--ink-muted)]">{labels.description}</DialogDescription>
        </DialogHeader>

        {status === 'sent' ? (
          <div className="py-6 text-center space-y-4">
            <div className="mx-auto w-14 h-14 rounded-full bg-gradient-to-r from-[#3D5AFE] to-[#8B5CF6] flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-white" />
            </div>
            <div className="space-y-2">
              <p className="font-heading font-semibold text-[var(--ink)]">{labels.successTitle}</p>
              <p className="text-sm text-[var(--ink-muted)]">{labels.successText}</p>
            </div>
            <Button
              onClick={() => handleOpenChange(false)}
              className="bg-gradient-to-r from-[#3D5AFE] to-[#8B5CF6] text-white rounded-xl"
            >
              {labels.close}
            </Button>
          </div>
        ) : (
          <div className="space-y-4 mt-2">
            <div>
              <p className="text-sm text-[var(--ink-muted)] mb-2">{labels.to}</p>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--panel)] border border-[var(--line)]">
                <Mail className="w-4 h-4 text-[#8B5CF6]" />
                <span className="text-sm font-medium text-[var(--ink)]">{CONTACT_EMAIL}</span>
              </div>
            </div>

            <div>
              <p className="text-sm text-[var(--ink-muted)] mb-2">{labels.sender}</p>
              <Input
                type="email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder={labels.senderPh}
                className={fieldClass}
              />
              <p className="text-xs text-[var(--ink-muted)] mt-2">{labels.senderHint}</p>
            </div>

            <div>
              <p className="text-sm text-[var(--ink-muted)] mb-2">{labels.subject}</p>
              <Input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder={labels.subjectPh}
                className={fieldClass}
              />
            </div>

            <div>
              <p className="text-sm text-[var(--ink-muted)] mb-2">{labels.message}</p>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={labels.messagePh}
                rows={5}
                className={fieldClass}
              />
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <div className="flex flex-col sm:flex-row gap-3 justify-end pt-2">
              <Button
                variant="outline"
                onClick={() => handleOpenChange(false)}
                className="border-[var(--line-strong)] bg-transparent text-[var(--ink)] hover:bg-[var(--panel-hover)] rounded-xl"
              >
                {labels.cancel}
              </Button>
              <Button
                onClick={handleSend}
                disabled={!canSend}
                className="bg-gradient-to-r from-[#3D5AFE] to-[#8B5CF6] text-white rounded-xl"
              >
                <Send className="w-4 h-4 mr-2" />
                {status === 'sending' ? labels.sending : labels.send}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}