import React, { useState } from 'react';
import EmailDialog from '@/components/portfolio/EmailDialog';

export default function EmailContact({ className = '', ariaLabel = 'Email', children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} aria-label={ariaLabel} className={className}>
        {children}
      </button>
      <EmailDialog open={open} onOpenChange={setOpen} />
    </>
  );
}