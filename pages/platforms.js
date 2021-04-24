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
      <Image
        src="android.png"
        alt="Android Logo"
        width={500}
        height={500}
      />
        </div>
        
    )
}