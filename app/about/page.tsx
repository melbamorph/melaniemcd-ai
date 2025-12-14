export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="card p-8 md:p-10">
        <p className="section-title">About</p>
        <h2 className="section-heading mt-2">Melanie McDonough</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-muted-300">
          <p>
            This site is a working portfolio for experiments, drafts, and notes related to AI adoption in local government. 
            It is meant to stay lightweight so ideas can be shared early and iterated quickly.
          </p>
          <p>
            My focus is on practical applications: pairing teams with tools that make service delivery clearer, 
            more consistent, and easier for residents to navigate.
          </p>
        </div>
      </section>

      <section className="card scroll-fade-in p-8 md:p-10">
        <h3 className="text-lg font-semibold text-white">Background</h3>
        <div className="mt-4 max-w-3xl space-y-4 text-sm leading-relaxed text-muted-300">
          <p>
            I work at the intersection of technology and public service, helping government teams 
            understand where AI can genuinely help—and where it shouldn&apos;t be used.
          </p>
          <p>
            This portfolio showcases practical experiments: service intake improvements, channel alignment strategies, 
            and pilot frameworks that can be adapted to different civic contexts.
          </p>
        </div>
      </section>

      <section className="card scroll-fade-in p-8 md:p-10">
        <h3 className="text-lg font-semibold text-white">Connect</h3>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-300">
          For collaboration questions or quick context, the best way to reach me is on LinkedIn.
        </p>
        <a
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-400 transition-colors hover:text-accent-300"
          href="https://www.linkedin.com"
          rel="noreferrer"
          target="_blank"
        >
          Connect on LinkedIn
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </section>
    </div>
  );
}
