import Head from 'next/head'
import styles from '../styles/Home.module.css'

const data = {
  item: [
    'code','coffee','repeat'    
  ]
}
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My First App NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className={styles.main}>
        <h1>Hello World</h1>
        {data.item.map((item) => (
        <h2 className={styles.subtitle}>{item}</h2>
        ))}
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
