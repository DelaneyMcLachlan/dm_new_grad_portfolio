import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// This would typically come from a database or CMS
// For now, using placeholder data
// Project details - update this when you add new projects
// Make sure the id matches the id in app/page.tsx
const projectDetails: Record<string, {
  title: string
  techStack: string[]
  image: string
  description: string
  longDescription: string
}> = {
  'project-1': {
    title: 'Project Title 1',
    techStack: ['Tech1', 'Tech2', 'Tech3'],
    image: 'https://via.placeholder.com/1200x600/0066cc/ffffff?text=Project+1',
    description: 'Short description',
    longDescription: 'This is a detailed description of Project 1.'
  },
  'project-2': {
    title: 'Project Title 2',
    techStack: ['Tech1', 'Tech2', 'Tech3'],
    image: 'https://via.placeholder.com/1200x600/0066cc/ffffff?text=Project+2',
    description: 'Short description',
    longDescription: 'This is a detailed description of Project 2.'
  },
  'project-3': {
    title: 'Project Title 3',
    techStack: ['Tech1', 'Tech2', 'Tech3'],
    image: 'https://via.placeholder.com/1200x600/0066cc/ffffff?text=Project+3',
    description: 'Short description',
    longDescription: 'This is a detailed description of Project 3.'
  },
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projectDetails[id]

  if (!project) {
    return (
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div className={styles.notFound}>
            <h1>Project Not Found</h1>
            <Link href="/" className={styles.backLink}>← Back to Home</Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.projectDetail}>
          <Link href="/" className={styles.backLink}>← Back to Projects</Link>
          
          <div className={styles.imageContainer}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={styles.image}
              sizes="100vw"
            />
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>{project.title}</h1>
            
            <div className={styles.techStack}>
              {project.techStack.map((tech, index) => (
                <span key={index} className={styles.tech}>
                  {tech}
                </span>
              ))}
            </div>

            <div className={styles.description}>
              <p>{project.longDescription}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

