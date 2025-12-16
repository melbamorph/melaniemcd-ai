import { SubscribeCTA } from '@/components/SubscribeCTA';

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="card p-8 md:p-10">
        <p className="section-title">Contact</p>
        <h2 className="section-heading mt-2">Let&apos;s connect</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-300">
          This portfolio runs on a publish-first cadence. For collaboration questions, 
          project inquiries, or quick context, please connect on LinkedIn.
        </p>
        <a
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-5 py-3 text-sm font-semibold text-accent-400 transition-all hover:bg-accent-400/20 hover:border-accent-400/50"
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
      </section>

      <div className="scroll-fade-in">
        <SubscribeCTA />
      </div>
    </div>
  );
}
