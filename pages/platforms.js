import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Home() {
    return(
        <div className={styles.container}>
           <Head>
        <title>Idea Port platforms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>
          App is curently in development. In future it will by on Android
      </p>
        </div>
        
    )
}