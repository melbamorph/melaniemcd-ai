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
      particleCount: 60,
      spread: 50,
      origin: { y: 0.7 },
      startVelocity: 35,
      scalar: 0.6
    });
  };

  return (
    <section id="subscribe" className="card-muted relative overflow-hidden p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-sand-50 via-white to-sand-100" aria-hidden />
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="section-title">Subscribe</p>
          <h2 className="section-heading">Practical local government updates</h2>
          <p className="max-w-2xl text-sm text-slate-700">
            Actionable notes on service delivery, civic tech pilots, and human-centered practices. Delivered occasionally
            with zero spam.
          </p>
          <p className="text-xs font-medium text-slate-600">
            Personal newsletter. Not an official City communication.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="button-primary" onClick={() => setOpen(true)}>
            Subscribe for updates
          </button>
          <button className="button-secondary" onClick={() => setOpen(true)}>
            Preview the invite
          </button>
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
            className="modal-card"
            ref={modalRef}
            onClick={(event) => event.stopPropagation()}
            role="document"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-title" id="subscribe-title">
                  Subscribe
                </p>
                <h3 className="section-heading">Practical local government updates</h3>
              </div>
              <button
                aria-label="Close modal"
                className="button-secondary px-3 py-2 text-xs"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
            <p className="mt-3 text-sm text-slate-700">
              A short briefing on experiments, demos, and playbooks that make services more humane and reliable.
            </p>
            <p className="mt-1 text-xs font-medium text-slate-600">
              Personal newsletter. Not an official City communication.
            </p>

            <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
              <label className="block text-sm font-semibold text-slate-800" htmlFor="email">
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
              <button type="submit" className="button-primary w-full justify-center">
                Get the updates
              </button>
              {status === 'success' && (
                <p className="text-sm font-medium text-emerald-700">All set! A confirmation will arrive shortly.</p>
              )}
            </form>
          </div>
          <button className="sr-only" onClick={() => setOpen(false)}>
            Close overlay
          </button>
        </div>
      )}
    </section>
  );
}
