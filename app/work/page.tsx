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
    <div className="px-2 py-8 md:py-10">
      <p className="section-title">Work</p>
      <h2 className="section-heading mt-2">Works in progress</h2>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-300">
        A snapshot of current explorations focused on practical AI use in city services. 
        These drafts will evolve with more detail and implementation notes.
      </p>

      <div className="mt-10 space-y-8">
        {projects.map((project, index) => (
          <article 
            key={project.title} 
            className="scroll-fade-in border-b border-muted-400/20 pb-8 last:border-b-0 last:pb-0"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{project.icon}</span>
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <span className={`tag ${project.status === 'Draft' ? 'tag-draft' : 'tag-coming'}`}>
                {project.status}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-300">{project.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
