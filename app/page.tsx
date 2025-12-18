import Link from 'next/link';
import ReflectivePrompt from '@/components/ReflectivePrompt';

export default function HomePage() {
  return (
    <div className="pt-4">
      <section className="space-y-8">
        <div className="space-y-6 max-w-2xl">
          <p className="section-title">Melanie McDonough</p>
          <h2 className="hero-headline">
            AI Experiments for{' '}
            <span className="gradient-text">Local Government</span>
          </h2>
          <ReflectivePrompt />
          <p className="text-lg leading-relaxed text-muted-300 text-balance">
            A personal sandbox for sharing learnings, experiments, and practical approaches 
            to AI adoption in the public sector. 
          </p>
        </div>

        <div className="coming-soon-section">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-400 mb-4">
            Projects
          </p>
          <div className="grid gap-4 sm:grid-cols-2 max-w-xl">
            <Link href="/projects/zoner-mcp" className="coming-soon-card glow-accent group cursor-pointer">
              <span className="coming-soon-icon">◇</span>
              <div>
                <p className="font-medium text-white group-hover:text-accent-400 transition-colors">Zoner MCP</p>
                <p className="text-sm text-muted-400">Model Context Protocol experiments</p>
              </div>
              <svg className="w-4 h-4 ml-auto text-muted-400 group-hover:text-accent-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="coming-soon-section">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-400 mb-4">
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
              <span className="coming-soon-icon">◇</span>
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
              <span className="coming-soon-icon">△</span>
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
