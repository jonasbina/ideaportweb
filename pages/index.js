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

        
        <div className={styles.grid}>
          <a href="https://ideaport.vercel.app/aboutapp" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find informations about our app.</p>
          </a>

          <a href="https://ideaport.vercel.app/platforms" className={styles.card}>
            <h3>App &rarr;</h3>
            <p>Find on what platforms is our app</p>
          </a>

          <a
            href="https://ideaport.vercel.app/aboutcreator"
            className={styles.card}
          >
            <h3>About Creator &rarr;</h3>
            <p>Read somethink about creator of the app</p>
          </a>
 
          <a
            href="https://ideaport.vercel.app/aboutcreator"
            className={styles.card}
          >
            <h3>Download &rarr;</h3>
            <p>Download Idea</p>
          </a>
        </div>
      </main>
    
    </div>
  )
}
