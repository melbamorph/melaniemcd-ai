'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('submitting');

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
    <div className="space-y-8">
      <section className="card relative overflow-hidden p-8 md:p-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-400/10 via-transparent to-accent-400/5 pointer-events-none" aria-hidden="true" />
        
        <div className="relative">
          <p className="section-title">Get in touch</p>
          <h2 className="section-heading mt-2">Let&apos;s connect</h2>
          
          <div className="mt-8 space-y-4">
            <p className="text-sm leading-relaxed text-muted-300 max-w-lg">
              For collaboration questions, project inquiries, or quick context, connect with me on LinkedIn.
            </p>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-5 py-3 text-sm font-semibold text-accent-400 transition-all hover:bg-accent-400/20 hover:border-accent-400/50"
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
        </div>
      </section>

      <section className="card relative overflow-hidden p-8 md:p-10">
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent-400/20 blur-3xl pointer-events-none" aria-hidden="true" />
        
        <div className="relative max-w-lg">
          <p className="section-title">Subscribe</p>
          <h2 className="section-heading mt-2">Get practical AI updates</h2>
          
          <p className="mt-4 text-sm leading-relaxed text-muted-300">
            A short briefing on experiments, demos, and playbooks that make public services more effective and humane.
          </p>
          <p className="mt-2 text-xs font-medium text-muted-500">
            Personal newsletter. Not an official City communication.
          </p>

          {status === 'success' ? (
            <div className="mt-6 flex items-center gap-3 rounded-xl bg-green-500/10 border border-green-500/20 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-green-400">You&apos;re subscribed!</p>
                <p className="text-sm text-green-400/70">Thanks for joining. You&apos;ll hear from me soon.</p>
              </div>
            </div>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-200" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  disabled={status === 'submitting'}
                  className="disabled:opacity-50"
                />
              </div>
              
              <button 
                type="submit" 
                className="button-primary w-full justify-center sm:w-auto"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Subscribing...
                  </>
                ) : (
                  'Subscribe for updates'
                )}
              </button>
              
              {status === 'error' && (
                <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
                  <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
