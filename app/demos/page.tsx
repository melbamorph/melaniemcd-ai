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
    <div className="space-y-8">
      <div className="card p-8">
        <p className="section-title">Demos</p>
        <h2 className="section-heading">Sandbox concepts</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-700">
          Quick looks at in-progress tools intended for local government teams. These will continue to evolve with more
          examples and implementation details.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {demos.map((demo) => (
          <div key={demo.title} className="card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand-600">{demo.status}</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{demo.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{demo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
