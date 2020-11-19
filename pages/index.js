import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'
import ImageSlider from '../components/imageSlider'
import ContactForm from '../components/ContactForm'


export default function Home() {
  
  return (
    <Layout>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to TaxAssist Accountants</h1>
        <div className={styles.btnGroup}>
          <button>How it Works</button>
          <button>Contact Us</button>
        </div>
        <p className={styles.description}>
        The tax and accountancy service that reflects the way we all work today. Offering you expert business advice and support, 
        delivered by friendly local teams as part of a dynamic national network.
        </p>
      </header>
      
      <ImageSlider>
        <Image src="/images/nature.jpg" alt="nature" width={1920} height={1080} quality={100}/>
        <Image src="/images/autumn.jpg" alt="autumn" width={1920} height={1080}/>
      </ImageSlider>

      <div className='p-3'>
        <ContactForm />
      </div>

    </Layout>
  )
}
