import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="px-2 py-8 md:py-10">
      <p className="section-title">Projects</p>
      <h2 className="section-heading mt-2">Projects in progress</h2>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-300">
        A snapshot of current explorations focused on practical AI use in city services. 
        These drafts will evolve with more detail and implementation notes.
      </p>

      <div className="mt-10 space-y-8">
        {projects.map((project, index) => (
          <article 
            key={project.slug} 
            className="scroll-fade-in border-b border-muted-400/20 pb-8 last:border-b-0 last:pb-0"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Link href={`/projects/${project.slug}`} className="block group">
              <div className="flex items-center gap-3">
                <span className="text-xl">{project.icon}</span>
                <h3 className="text-lg font-semibold text-white group-hover:text-accent-400 transition-colors">
                  {project.title}
                </h3>
                <span className={`tag ${
                  project.status === 'Draft' ? 'tag-draft' : 
                  project.status === 'Coming soon' ? 'tag-coming' : 
                  'tag-draft'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-300">{project.summary}</p>
            </Link>
          </article>
        ))}
      </div>

      {projects.length === 0 && (
        <p className="mt-10 text-sm text-muted-400">No projects yet. Check back soon!</p>
      )}
    </div>
  );
}
