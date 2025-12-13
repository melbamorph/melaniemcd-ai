const projects = [
  {
    title: 'Service intake sketch',
    summary: 'A draft flow exploring lighter intake steps and clearer routing for staff.',
    status: 'Draft'
  },
  {
    title: 'Channel alignment outline',
    summary: 'Notes on keeping scripts and guidance consistent across support channels.',
    status: 'Draft'
  },
  {
    title: 'Assisted navigation idea',
    summary: 'Early notes on a helper that points residents to the right resources and next steps.',
    status: 'Coming soon'
  }
];

export default function WorkPage() {
  return (
    <div className="space-y-8">
      <div className="card p-8">
        <p className="section-title">Work</p>
        <h2 className="section-heading">Works in progress</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-700">
          A snapshot of current explorations focused on practical AI use in city services. These drafts will evolve with more
          detail and implementation notes.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand-600">{project.status}</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{project.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
