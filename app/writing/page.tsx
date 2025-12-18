const articles = [
  {
    title: 'Designing for trust in public services',
    summary: 'Practical design moves that reduce anxiety and keep teams accountable.',
    date: 'April 2025'
  },
  {
    title: 'What pilots teach us about procurement',
    summary: 'How to scope small, keep privacy intact, and still learn fast.',
    date: 'January 2025'
  },
  {
    title: 'Measuring the invisible work of service teams',
    summary: 'Operational metrics that matter more than vanity dashboards.',
    date: 'October 2024'
  }
];

export default function WritingPage() {
  return (
    <div className="space-y-8">
      <section className="card p-8 md:p-10">
        <p className="section-title">Writing</p>
        <h2 className="section-heading mt-2">Notes from the field</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-300">
          Short essays and dispatches on building better public services. 
          These pair with demos and playbooks to share what is working in real teams.
        </p>
      </section>

      <div className="space-y-4">
        {articles.map((article, index) => (
          <article 
            key={article.title} 
            className="card scroll-fade-in group cursor-pointer p-6 transition-all hover:border-accent-400/30"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-accent-400">
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-400">{article.summary}</p>
              </div>
              <span className="flex-shrink-0 text-xs font-medium text-muted-500">
                {article.date}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
