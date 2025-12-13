import { SubscribeCTA } from '@/components/SubscribeCTA';

const focusAreas = [
  { label: 'AI adoption enablement', detail: 'Helping teams understand when and how to apply emerging tools.' },
  { label: 'Process modernization', detail: 'Clarifying workflows so service changes stick.' },
  { label: 'Public transparency', detail: 'Sharing progress openly with residents and staff.' }
];

const workHighlights = [
  {
    title: 'Service intake sketch',
    description: 'Draft concept for simplifying intake questions and handoffs.',
    tag: 'Draft',
    link: '/work'
  },
  {
    title: 'Channel alignment outline',
    description: 'Notes on keeping guidance consistent across chat, phone, and walk-in support.',
    tag: 'Draft',
    link: '/work'
  },
  {
    title: 'Assisted navigation idea',
    description: 'Early thinking on a helper that points residents to the right resources.',
    tag: 'Coming soon',
    link: '/work'
  }
];

const demoHighlights = [
  {
    title: 'Service patterns sandbox',
    description: 'Exploratory prompts and guardrails for common resident questions.',
    tag: 'Draft',
    link: '/demos'
  },
  {
    title: 'Case triage concept',
    description: 'A guided flow to sort requests and note follow-ups.',
    tag: 'Coming soon',
    link: '/demos'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="card p-8">
        <div className="space-y-6 lg:flex lg:items-center lg:justify-between lg:space-y-0">
          <div className="max-w-2xl space-y-4">
            <p className="section-title">Portfolio</p>
            <h2 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
              Practical experiments for city services
            </h2>
            <p className="text-lg text-slate-700">
              This is a working space to share in-progress ideas, drafts, and demos focused on local government AI. Each page
              is intentionally lightweight so it can evolve quickly.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="button-primary" href="/work">
                View work samples
              </a>
              <a className="button-secondary" href="/contact">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-6 grid w-full max-w-sm grid-cols-1 gap-3 sm:grid-cols-3 lg:mt-0">
            {focusAreas.map((area) => (
              <div key={area.label} className="metric-tile">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sand-600">{area.label}</p>
                <p className="mt-2 text-sm text-slate-700">{area.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="section-title">Featured work</p>
            <h3 className="section-heading">Recent drafts</h3>
          </div>
          <a className="button-secondary" href="/work">
            See all work
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workHighlights.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="card block p-6 no-underline outline-none focus-visible:ring-2 focus-visible:ring-sand-400"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand-600">{item.tag}</p>
              <h4 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-700">{item.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="section-title">Demos</p>
            <h3 className="section-heading">Sandbox concepts</h3>
          </div>
          <a className="button-secondary" href="/demos">
            Explore demos
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {demoHighlights.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="card block p-6 no-underline outline-none focus-visible:ring-2 focus-visible:ring-sand-400"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand-600">{item.tag}</p>
              <h4 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-700">{item.description}</p>
            </a>
          ))}
        </div>
      </section>

      <SubscribeCTA />
    </div>
  );
}
