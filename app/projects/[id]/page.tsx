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
    title: '7ft LED Wizard Staff',
    techStack: ['CircuitPython', 'Adafruit Feather M4 Express Microcontroller', 'NeoPixel RGB LEDs', 'Soldering', 'Electronics Assembly'],
    image: '/wizard-staff.png',
    description: 'Cosplay Staff with Lights Effects',
    longDescription: 'A glowing staff for a Wizard costume. This prop features lighting effects using NeoPixel strips and rings, controlled by an Adafruit Feather M4 Express microcontroller running CircuitPython. The Adafruit Feather M4 Express is a powerful microcontroller board featuring an ATSAMD51 chip, perfect for running complex lighting animations. NeoPixels are individually addressable RGB LEDs that allow for precise color control and dynamic lighting patterns. Built following the Adafruit guide (https://learn.adafruit.com/burning-fire-wizard-staff ), this project demonstrates skills in embedded systems programming and creative electronics.'
  },
  'project-2': {
    title: 'New Grad SWE Job Board Scraper',
    techStack: ['Python', 'SQLite Database', 'Web Scraping', 'SMTP Email', 'REST APIs', 'Modular Architecture', 'Automation'],
    image: '/job-board-scraper.png',
    description: 'Multi-board web scraper with automatedemail notifications',
    longDescription: 'A comprehensive web scraper for multiple software engineering job boards that automates the job search process. Built with Python, this project scrapes job listings from various boards (including Workday-based sites, eightfold.ai, and custom company sites), stores them in a SQLite database to prevent duplicates, and sends daily email notifications of new postings. The scraper features a modular architecture with a base scraper class and factory pattern, making it easy to add support for new job boards. It includes intelligent duplicate detection, configurable job title filtering to exclude senior positions, and rate limiting to respect server resources. The system uses GitHub Actions for automated daily processing, ensuring continuous monitoring without requiring a local machine to be running. This project demonstrates skills in web scraping, database design, email automation, API integration, CI/CD workflows, and software architecture. View the project at https://github.com/DelaneyMcLachlan/new-grad-swe-job-board-scraper.'
  },
  'project-3': {
    title: 'Presonal Portfolio Website',
    techStack: ['Next.js 14', 'React', 'TypeScript', 'CSS Modules', 'Next.js App Router', 'Responsive Design'],
    image: 'https://via.placeholder.com/1200x600/0066cc/ffffff?text=Portfolio+Website',
    description: 'Modern portfolio website showcasing projects and experience',
    longDescription: 'A modern, responsive portfolio website built with Next.js 14 and React, showcasing software engineering projects and professional experience. The site features a clean, minimalist design with a sticky header containing social links, a dynamic project showcase with interactive cards, and a footer section for work experience. Built using Next.js App Router for optimal performance and SEO, the portfolio includes dynamic routing for individual project detail pages, client-side link obfuscation for privacy, and fully responsive CSS Modules for styling. The project demonstrates skills in modern web development, component architecture, TypeScript for type safety, and responsive design principles. The modular structure makes it easy to add new projects and customize content. View the project at https://github.com/DelaneyMcLachlan/dm_new_grad_portfolio.'
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
              <p dangerouslySetInnerHTML={{ __html: project.longDescription.replace(
                /(https?:\/\/[^\s]+)/g,
                '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline;">$1</a>'
              ) }} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

