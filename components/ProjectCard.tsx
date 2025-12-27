import Link from 'next/link'
import Image from 'next/image'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  id: string
  title: string
  techStack: string[]
  image: string
  imageAlt?: string
}

export default function ProjectCard({ id, title, techStack, image, imageAlt }: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.techStack}>
          {techStack.map((tech, index) => (
            <span key={index} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

