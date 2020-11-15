import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'
import ImageSlider from '../components/imageSlider'
import Map from '../components/Map'

export default function Home() {
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }
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
        <img src="images/nature.jpg" alt="nature" />
        <img src="images/autumn.jpg" alt="autumn" />
        <img src="http://via.placeholder.com/300x298" alt=""/>
        <img src="http://via.placeholder.com/150x200" alt=""/>
      </ImageSlider>

      <Map 
        location={{
          address: '20, Sukrabad, Dhaka.',
          lat: 23.752683,
          lng: 90.379913,
        }}
        zoomLevel={15}
      />
    </Layout>
  )
}
