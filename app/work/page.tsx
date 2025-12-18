const projects = [
  {
    title: 'Service intake sketch',
    summary: 'A draft flow exploring lighter intake steps and clearer routing for staff.',
    status: 'Draft',
    icon: '✏️'
  },
  {
    title: 'Channel alignment outline',
    summary: 'Notes on keeping scripts and guidance consistent across support channels.',
    status: 'Draft',
    icon: '🔗'
  },
  {
    title: 'Assisted navigation idea',
    summary: 'Early notes on a helper that points residents to the right resources and next steps.',
    status: 'Coming soon',
    icon: '🗺️'
  }
];

export default function WorkPage() {
  return (
    <div className="space-y-8">
      <section className="card p-8 md:p-10">
        <p className="section-title">Work</p>
        <h2 className="section-heading mt-2">Works in progress</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-300">
          A snapshot of current explorations focused on practical AI use in city services. 
          These drafts will evolve with more detail and implementation notes.
        </p>
      </section>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article 
            key={project.title} 
            className="card scroll-fade-in p-6"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl">{project.icon}</span>
              <span className={`tag ${project.status === 'Draft' ? 'tag-draft' : 'tag-coming'}`}>
                {project.status}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-400">{project.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
