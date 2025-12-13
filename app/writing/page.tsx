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
      <div className="card p-8">
        <p className="section-title">Writing</p>
        <h2 className="section-heading">Notes from the field</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-700">
          Short essays and dispatches on building better public services. These pair with demos and playbooks to share what is
          working in real teams.
        </p>
      </div>

      <div className="space-y-4">
        {articles.map((article) => (
          <article key={article.title} className="card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand-600">{article.date}</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{article.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{article.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
