'use client';

import { useEffect, useRef, useState } from 'react';

const focusableSelectors = 'a, button, input, textarea, select, [tabindex]';

export default function ContactPage() {
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

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to subscribe');
      }

      setStatus('success');
      setEmail('');
      triggerConfetti();
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
    }
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
    <section className="card relative overflow-hidden p-8 md:p-10">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-400/10 via-transparent to-accent-400/5 pointer-events-none" aria-hidden="true" />
      
      <div className="relative">
        <p className="section-title">Get in touch</p>
        <h2 className="section-heading mt-2">Let&apos;s connect</h2>
        
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-0">
          <div className="space-y-4 lg:pr-10 lg:border-r lg:border-white/10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-400">Contact</h3>
            <p className="text-sm leading-relaxed text-muted-300 max-w-md">
              For collaboration questions, project inquiries, or quick context, connect with me on LinkedIn.
            </p>
            <a
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-5 py-3 text-sm font-semibold text-accent-400 transition-all hover:bg-accent-400/20 hover:border-accent-400/50"
              href="https://www.linkedin.com/in/melaniemcdonough/"
              rel="noreferrer"
              target="_blank"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="space-y-4 lg:pl-10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-400">Subscribe</h3>
            <p className="text-sm leading-relaxed text-muted-300 max-w-md">
              Occasional notes on service delivery experiments, civic tech pilots, and human-centered AI practices.
            </p>
            <p className="text-xs font-medium text-muted-500">
              Personal newsletter. Not an official City communication.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button className="button-primary" onClick={() => setOpen(true)}>
                Subscribe for updates
              </button>
              <button className="button-secondary" onClick={() => setOpen(true)}>
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>

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
                    <span>You&apos;re subscribed! Thanks for joining.</span>
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
                    <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Something went wrong. Please try again.</span>
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
