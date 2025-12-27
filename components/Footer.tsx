import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Work Experience</h2>
        <div className={styles.experience}>
          <p className={styles.placeholder}>Work experience will appear here</p>
        </div>
      </div>
    </footer>
  )
}

