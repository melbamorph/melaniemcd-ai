'use client';

import { useEffect, useRef, useState } from 'react';

const focusableSelectors = 'a, button, input, textarea, select, [tabindex]';

export function SubscribeCTA() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const previouslyFocused = useRef<Element | null>(null);

  useEffect(() => {
    if (open) {
      previouslyFocused.current = document.activeElement;
      inputRef.current?.focus();
    } else if (previouslyFocused.current instanceof HTMLElement) {
      previouslyFocused.current.focus();
    }
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (!open) return;
      if (event.key === 'Escape') {
        setOpen(false);
      }
      if (event.key === 'Tab' && modalRef.current) {
        const focusable = Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(focusableSelectors)
        ).filter((el) => !el.hasAttribute('disabled'));
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          last.focus();
          event.preventDefault();
        } else if (!event.shiftKey && document.activeElement === last) {
          first.focus();
          event.preventDefault();
        }
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('idle');

    await new Promise((resolve) => setTimeout(resolve, 250));
    setStatus('success');
    setEmail('');
    triggerConfetti();
  };

  const triggerConfetti = async () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const { default: confetti } = await import('canvas-confetti');
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      startVelocity: 40,
      scalar: 0.7,
      colors: ['#fbbf24', '#fcd34d', '#fde68a', '#ffffff']
    });
  };

  return (
    <section id="subscribe" className="card relative overflow-hidden p-8 md:p-10">
      {/* Gradient accent */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-accent-400/10 via-transparent to-accent-400/5 pointer-events-none" 
        aria-hidden="true" 
      />
      
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4 lg:max-w-xl">
          <p className="section-title">Subscribe</p>
          <h2 className="section-heading">Stay updated on AI in government</h2>
          <p className="text-sm leading-relaxed text-muted-300">
            Occasional notes on service delivery experiments, civic tech pilots, and human-centered AI practices. 
            No spam, just practical insights.
          </p>
          <p className="text-xs font-medium text-muted-400">
            Personal newsletter. Not an official City communication.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <button className="button-primary" onClick={() => setOpen(true)}>
            Subscribe for updates
          </button>
          <button className="button-secondary" onClick={() => setOpen(true)}>
            Preview
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="subscribe-title"
          onClick={() => setOpen(false)}
        >
          <div
            className="modal-card w-full max-w-md animate-scale-in"
            ref={modalRef}
            onClick={(event) => event.stopPropagation()}
            role="document"
          >
            {/* Modal gradient accent */}
            <div 
              className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent-400/20 blur-3xl" 
              aria-hidden="true" 
            />
            
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="section-title" id="subscribe-title">
                    Subscribe
                  </p>
                  <h3 className="text-xl font-semibold text-white">Get practical AI updates</h3>
                </div>
                <button
                  aria-label="Close modal"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-muted-400 transition-colors hover:bg-surface-300 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="mt-4 text-sm leading-relaxed text-muted-300">
                A short briefing on experiments, demos, and playbooks that make public services more effective and humane.
              </p>
              <p className="mt-2 text-xs font-medium text-muted-500">
                Personal newsletter. Not an official City communication.
              </p>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-muted-200" htmlFor="email">
                    Email address
                  </label>
                  <input
                    ref={inputRef}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
                
                <button type="submit" className="button-primary w-full justify-center">
                  Get the updates
                </button>
                
                {status === 'success' && (
                  <div className="flex items-center gap-2 rounded-lg bg-green-500/10 p-3 text-sm text-green-400">
                    <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>All set! A confirmation will arrive shortly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
          <button className="sr-only" onClick={() => setOpen(false)}>
            Close overlay
          </button>
        </div>
      )}
    </section>
  );
}
