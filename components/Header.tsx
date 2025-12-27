import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.name}>Delaney M</h1>
        <nav className={styles.nav}>
          <Link href="https://github.com/DelaneyMcLachlan" target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/delaneymclachlan/" target="_blank" rel="noopener noreferrer" className={styles.link}>
            LinkedIn
          </Link>
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Resume
          </Link>
        </nav>
      </div>
    </header>
  )
}

