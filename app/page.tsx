import Link from 'next/link';
import { SubscribeCTA } from '@/components/SubscribeCTA';

const focusAreas = [
  { 
    label: 'AI Adoption', 
    detail: 'Helping teams understand when and how to apply emerging tools responsibly.',
    icon: '◆'
  },
  { 
    label: 'Process Design', 
    detail: 'Clarifying workflows so service improvements actually stick.',
    icon: '◇'
  },
  { 
    label: 'Transparency', 
    detail: 'Sharing progress openly with residents and stakeholders.',
    icon: '○'
  }
];

const workHighlights = [
  {
    title: 'Service intake sketch',
    description: 'Draft concept for simplifying intake questions and handoffs between departments.',
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
    <div className="space-y-16">
      <section className="card p-8 md:p-12">
        <div className="space-y-8 lg:flex lg:items-start lg:justify-between lg:gap-12 lg:space-y-0">
          <div className="max-w-2xl space-y-6">
            <div className="space-y-4">
              <p className="section-title">Portfolio</p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-white">Practical AI for </span>
                <span className="gradient-text">city services</span>
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-muted-300">
              A working space to share in-progress ideas, drafts, and demos focused on AI adoption in local government. 
              Each page is intentionally lightweight so it can evolve quickly.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link className="button-primary" href="/contact">
                Get in touch
              </Link>
              <Link className="button-secondary" href="/work">
                View work samples
              </Link>
            </div>
          </div>
          
          <div className="grid w-full max-w-sm gap-4 lg:mt-0">
            {focusAreas.map((area, index) => (
              <div 
                key={area.label} 
                className="feature-tile glow-accent"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-xl text-accent-400">{area.icon}</span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">
                      {area.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-300">{area.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-fade-in space-y-8">
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <p className="section-title">Featured Work</p>
            <h3 className="section-heading">Recent drafts</h3>
          </div>
          <Link className="button-secondary text-sm" href="/work">
            See all
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workHighlights.map((item, index) => (
            <Link
              key={item.title}
              href={item.link}
              className="card group block p-6 no-underline"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className={`tag ${item.tag === 'Draft' ? 'tag-draft' : 'tag-coming'}`}>
                {item.tag}
              </span>
              <h4 className="mt-4 text-lg font-semibold text-white transition-colors group-hover:text-accent-400">
                {item.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-400">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="scroll-fade-in space-y-8">
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <p className="section-title">Demos</p>
            <h3 className="section-heading">Sandbox concepts</h3>
          </div>
          <Link className="button-secondary text-sm" href="/demos">
            Explore
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {demoHighlights.map((item, index) => (
            <Link
              key={item.title}
              href={item.link}
              className="card group block p-6 no-underline"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className={`tag ${item.tag === 'Draft' ? 'tag-draft' : 'tag-coming'}`}>
                {item.tag}
              </span>
              <h4 className="mt-4 text-lg font-semibold text-white transition-colors group-hover:text-accent-400">
                {item.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-400">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="scroll-fade-in">
        <SubscribeCTA />
      </div>
    </div>
  );
}
