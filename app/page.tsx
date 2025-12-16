export default function HomePage() {
  return (
    <div className="pt-4">
      <section className="space-y-12">
        <div className="space-y-6 max-w-2xl">
          <p className="section-title">Innovation Space</p>
          <h2 className="hero-headline">
            AI Experiments for{' '}
            <span className="gradient-text">Local Government</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-300 text-balance">
            A personal space for sharing learnings, experiments, and practical approaches 
            to AI adoption in the public sector. More projects coming soon.
          </p>
        </div>

        <div className="coming-soon-section">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-400 mb-4">
            Coming Soon
          </p>
          <div className="grid gap-4 sm:grid-cols-2 max-w-xl">
            <div className="coming-soon-card glow-accent">
              <span className="coming-soon-icon">◇</span>
              <div>
                <p className="font-medium text-white">Zoner MCP</p>
                <p className="text-sm text-muted-400">Model Context Protocol experiments</p>
              </div>
            </div>
            <div className="coming-soon-card glow-accent">
              <span className="coming-soon-icon">○</span>
              <div>
                <p className="font-medium text-white">Chatbot</p>
                <p className="text-sm text-muted-400">Conversational AI for civic services</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
