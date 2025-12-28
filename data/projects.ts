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
    title: '7ft LED Wizard Staff',
    techStack: ['CircuitPython', 'Adafruit Feather M4 Express Microcontroller', 'NeoPixel RGB LEDs', 'Electronics Assembly', 'Soldering'],
    image: '/wizard-staff.png',
    imageAlt: 'LED Wizard Staff - Cosplay Staff with Lights'
  },
  {
    id: 'project-2',
    title: 'New Grad SWE Job Board Scraper',
    techStack: ['Python', 'SQLite Database', 'Web Scraping', 'SMTP Email', 'REST APIs', 'Modular Architecture', 'Automation'],
    image: '/job-board-scraper.png',
    imageAlt: 'Job Board Scraper - Multi-board web scraper with email notifications'
  },
  {
    id: 'project-3',
    title: 'Personal Portfolio Website',
    techStack: ['Next.js 14', 'React', 'TypeScript', 'CSS Modules', 'Next.js App Router', 'Responsive Design'],
    image: 'https://via.placeholder.com/600x400/0066cc/ffffff?text=Portfolio+Website',
    imageAlt: 'Portfolio Website - Software Engineering Portfolio'
  },
]

