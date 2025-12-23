import Link from 'next/link';
import ReflectivePrompt from '@/components/ReflectivePrompt';

export default function HomePage() {
  return (
    <div className="pt-4">
      <section className="space-y-8">
        <div className="space-y-4 max-w-2xl">
          <p className="section-title">Melanie McDonough</p>
          <h2 className="hero-headline">
            AI Experiments for{' '}
            <span className="gradient-text">Local Government</span>
          </h2>
          <div className="pt-1">
            <ReflectivePrompt />
          </div>
          <p className="text-lg leading-relaxed text-muted-300 text-balance pt-2">
            A personal sandbox for sharing learnings, experiments, and practical approaches 
            to AI adoption in the public sector. 
          </p>
          <div className="pt-2">
            <a href="#projects" className="button-secondary inline-flex items-center gap-2 text-sm">
              <span>Explore Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        <div id="projects" className="coming-soon-section scroll-mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-400 mb-4">
            Projects
          </p>
          <div className="grid gap-4 sm:grid-cols-2 max-w-xl">
            <Link href="/projects/zoner-mcp" className="coming-soon-card glow-accent group cursor-pointer">
              <svg className="w-5 h-5 text-accent-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>
              <div>
                <p className="font-medium text-white group-hover:text-accent-400 transition-colors">Zoner MCP</p>
                <p className="text-sm text-muted-400">Model Context Protocol experiments</p>
              </div>
              <svg className="w-4 h-4 ml-auto text-muted-400 group-hover:text-accent-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="coming-soon-card opacity-60 cursor-default border-dashed">
              <svg className="w-5 h-5 text-muted-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <div>
                <p className="font-medium text-muted-400">Coming Soon</p>
                <p className="text-sm text-muted-500">More experiments in progress</p>
              </div>
            </div>
          </div>
        </div>

        <div className="coming-soon-section">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-400 mb-4">
            Guides
          </p>
          <p className="text-sm text-muted-300 max-w-xl mb-4">Reusable workflows and implementation notes.</p>
          <div className="grid gap-4 sm:grid-cols-2 max-w-xl">
            <Link
              href="https://melbamorph.me/2025/05/05/civic-roundup-gpt/"
              className="coming-soon-card glow-accent group cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 text-accent-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
              </svg>
              <div>
                <p className="font-medium text-white group-hover:text-accent-400 transition-colors">
                  Civic RoundUp: Turning RSS Feeds into Resident-Ready Newsletters with a Custom GPT
                </p>
                <p className="text-sm text-muted-400">
                  Step-by-step guide to turning municipal RSS feeds into a resident-ready newsletter using a Custom GPT.
                </p>
              </div>
              <svg className="w-4 h-4 ml-auto text-muted-400 group-hover:text-accent-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="https://melbamorph.me/2025/07/26/chatgpt-tasks/"
              className="coming-soon-card glow-accent group cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 text-accent-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>
              <div>
                <p className="font-medium text-white group-hover:text-accent-400 transition-colors">
                  Automate Your Municipal Workflow with ChatGPT Tasks
                </p>
                <p className="text-sm text-muted-400">
                  Guide to using ChatGPT Tasks for reminders and recurring municipal workflow automation (published via agent-assisted workflow).
                </p>
              </div>
              <svg className="w-4 h-4 ml-auto text-muted-400 group-hover:text-accent-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}
