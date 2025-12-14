const demos = [
  {
    title: 'Service patterns sandbox',
    description: 'Exploratory prompts and guardrails for common resident questions.',
    status: 'Draft'
  },
  {
    title: 'Case triage concept',
    description: 'A guided flow to sort requests and note follow-ups.',
    status: 'Draft'
  },
  {
    title: 'Resident updates sketch',
    description: 'Lightweight status view and notification idea for in-flight requests.',
    status: 'Coming soon'
  }
];

export default function DemosPage() {
  return (
    <div className="space-y-10">
      <section className="card p-8 md:p-10">
        <p className="section-title">Demos</p>
        <h2 className="section-heading mt-2">Sandbox concepts</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-300">
          Quick looks at in-progress tools intended for local government teams. 
          These will continue to evolve with more examples and implementation details.
        </p>
      </section>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {demos.map((demo, index) => (
          <article 
            key={demo.title} 
            className="card scroll-fade-in p-6"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className={`tag ${demo.status === 'Draft' ? 'tag-draft' : 'tag-coming'}`}>
              {demo.status}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-white">{demo.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-400">{demo.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
