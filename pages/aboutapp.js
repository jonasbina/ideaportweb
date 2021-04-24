import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Test() {
     return(
     <div className={styles.container}>
      <Head>
        <title>About Idea Port</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h3>About App</h3>
    <p>Idea Port is project maked by Jonas Bina</p>
    <p>Jonas wants to try some thinks on it</p>
    <p>Now it has functional messenger</p>
    <p>Messenger start works 20th of March 2021 at like 13 o'clock</p>
    <h3>In what is Idea Port Better  :</h3>
    <h2>It's totaly private</h2>
    <p>no one will follow your activities</p>
    <h2>It's fast</h2>
    <h2>Messenger is TOTALY ENCRYPTED</h2>
    <h2></h2>
    <h2></h2>
    <h2>App is for free</h2>
    <p>Idea port is fully for free</p>
    <p>App is without ads</p>
    </div>
     ) 
}