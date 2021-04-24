import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Idea Port The best and private</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to IdeaPort's Web
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://ideaport.vercel.app" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find informations about our app.</p>
          </a>

          <a href="https://ideaport.vercel.app" className={styles.card}>
            <h3>App &rarr;</h3>
            <p>Find on what platforms is our app</p>
          </a>

          <a
            href="https://ideaport.vercel.app"
            className={styles.card}
          >
            <h3>About Creator &rarr;</h3>
            <p>Read somethink about creator of the app</p>
          </a>
 
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
