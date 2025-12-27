// Centralized project data
// To add a new project:
// 1. Add a new object to the projects array below
// 2. Add corresponding details to projectDetails in app/projects/[id]/page.tsx

export interface Project {
  id: string
  title: string
  techStack: string[]
  image: string
  imageAlt?: string
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project Title 1',
    techStack: ['Tech1', 'Tech2', 'Tech3'],
    image: 'https://via.placeholder.com/600x400/0066cc/ffffff?text=Project+1',
    imageAlt: 'Project 1'
  },
  {
    id: 'project-2',
    title: 'Project Title 2',
    techStack: ['Tech1', 'Tech2', 'Tech3'],
    image: 'https://via.placeholder.com/600x400/0066cc/ffffff?text=Project+2',
    imageAlt: 'Project 2'
  },
  {
    id: 'project-3',
    title: 'Project Title 3',
    techStack: ['Tech1', 'Tech2', 'Tech3'],
    image: 'https://via.placeholder.com/600x400/0066cc/ffffff?text=Project+3',
    imageAlt: 'Project 3'
  },
]

