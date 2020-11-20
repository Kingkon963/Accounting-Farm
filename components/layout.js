import NavBar from './navbar'
import Footer from './footer'
import styles from '../styles/Layout.module.scss'
import Head from 'next/head'

function Layout({ children }) {
    return(
        <div className={styles.Layout}>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;