import fs from 'fs';
import path from 'path';

export interface ProjectMeta {
  title: string;
  summary: string;
  status: string;
  icon: string;
  slug: string;
}

export async function getAllProjects(): Promise<ProjectMeta[]> {
  const projectsDir = path.join(process.cwd(), 'app/projects');
  
  const entries = fs.readdirSync(projectsDir, { withFileTypes: true });
  const folders = entries.filter(
    (entry) => entry.isDirectory() && !entry.name.startsWith('_')
  );

  const projects: ProjectMeta[] = [];

  for (const folder of folders) {
    const metaPath = path.join(projectsDir, folder.name, 'meta.ts');
    
    if (fs.existsSync(metaPath)) {
      try {
        const metaModule = await import(`@/app/projects/${folder.name}/meta`);
        if (metaModule.meta) {
          projects.push({
            ...metaModule.meta,
            slug: folder.name
          });
        }
      } catch (error) {
        console.error(`Error loading meta for ${folder.name}:`, error);
      }
    }
  }

  return projects;
}
