import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'
import ImageSlider from '../components/imageSlider'

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>Home</h1>
      <p>This is a paragraph</p>
      <ImageSlider>
        <img src="http://via.placeholder.com/300x300" alt="" />
        <img src="http://via.placeholder.com/300x300" alt=""/>
        <img src="http://via.placeholder.com/300x300" alt=""/>
      </ImageSlider>
    </Layout>
  )
}
