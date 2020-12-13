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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerGrid}>
          <div className={styles.left}>
            <h1 className={styles.title}>Welcome to <br />TaxAssist <br />Accountants</h1>
            <p className={styles.description}>
              The tax and accountancy service that reflects the way we all work today. Offering you expert business advice and support,
              delivered by friendly local teams as part of a dynamic national network.
            </p>
            <div className={styles.btnGroup}>
              <button>How it Works</button>
              <button>Contact Us</button>
            </div>
          </div>

          <div className={styles.right}>
            {/*<Image className={styles.headerImage} src="/images/bg-header.jpg" alt="an accountant"
           width={2240} height={1260}
  priority={true} />*/}
            {/*<img src="/images/bg-header.jpg" alt="an accountant"/>*/}
            <div className={styles.headerImage}>

            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#203B5C" fill-opacity="1" d="M0,160L60,154.7C120,149,240,139,360,160C480,181,600,235,720,256C840,277,960,267,1080,234.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
        
      </header>


      <div className="container-fluid bg-primary">
        <div className="row">
          <div className="col-6">
            <ImageSlider>
              <Image src="/images/nature.jpg" alt="nature" width={1920} height={1080} quality={100} />
              <Image src="/images/autumn.jpg" alt="autumn" width={1920} height={1080} />
            </ImageSlider>
          </div>
        </div>
      </div>

      <div className='p-3'>
        <ContactForm />
      </div>

    </Layout>
  )
}
