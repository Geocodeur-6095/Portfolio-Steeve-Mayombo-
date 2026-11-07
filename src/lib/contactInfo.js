export const CONTACT_EMAIL = 'mbenguemayombo@proton.me';

export function buildMailto(subject = '', body = '', senderEmail = '') {
  const params = new URLSearchParams();
  if (subject.trim()) params.set('subject', subject.trim());
  const sender = senderEmail.trim();
  const fullBody = `${sender ? `De : ${sender}\n\n` : ''}${body.trim()}`;
  if (fullBody.trim()) params.set('body', fullBody);
  const query = params.toString().replace(/\+/g, '%20');
  return `mailto:${CONTACT_EMAIL}${query ? `?${query}` : ''}`;
}

export function isValidEmail(value = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}