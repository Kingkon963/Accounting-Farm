import { createRef, useEffect, useState } from 'react';
import styles from '../styles/Footer.module.scss';

export default function Footer() {
    const [Height, setHeight] = useState(0);
    const ref = createRef();

    function setBodyPaddingBottom(value){
        document.body.style.paddingBottom = value+'px';
    }
    useEffect(() => {
        setHeight((ref.current.getBoundingClientRect().bottom) - (ref.current.getBoundingClientRect().top))
        setBodyPaddingBottom(Height)
    }, [Height])
    return(
        <footer className={styles.FooterDiv} ref={ref}>
            <h2 className={styles.brandLogo}>Healthcare</h2>
            <div className={styles.footerGrid}>
                <div className={styles.gridSection}>
                    <h4>Services</h4>
                    <hr/>
                </div>

                <div className={styles.gridSection}>
                    <h4>Quick Links</h4>
                    <hr/>
                </div>

                <div className={styles.gridSection}>
                    <h4>Address</h4>
                    <hr/>
                </div>

                <div className={styles.gridSection}>
                    <h4>Social</h4>
                    <hr/>
                </div>
                
            </div>
        </footer>
    )
}