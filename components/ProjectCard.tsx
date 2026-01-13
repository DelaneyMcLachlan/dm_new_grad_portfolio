import Link from 'next/link'
import Image from 'next/image'
import styles from './ProjectCard.module.css'
import { getImagePath } from '@/utils/imagePath'

interface ProjectCardProps {
  id: string
  title: string
  techStack: string[]
  image: string
  imageAlt?: string
  basePath?: string
}

export default function ProjectCard({ id, title, techStack, image, imageAlt, basePath = '/projects' }: ProjectCardProps) {
  const isTextImage = image.startsWith('text:')
  const textContent = isTextImage ? image.replace('text:', '') : null

  return (
    <Link href={`${basePath}/${id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        {isTextImage ? (
          <div className={styles.textImage}>
            {textContent}
          </div>
        ) : (
          <Image
            src={getImagePath(image)}
            alt={imageAlt || title}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
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

