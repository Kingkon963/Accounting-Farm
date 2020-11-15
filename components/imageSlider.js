import { useEffect, useState } from 'react';
import styles from '../styles/ImageSlider.module.scss';

function Navigator({imageIndex, setImageIndex, totalIndex}){
    const navItems = []
    for(let i=0; i<totalIndex; i++){
        navItems.push(
            <div className={`${styles.navItem} ${imageIndex===i ? styles.active: ''}`} key={i}
             onClick={() => setImageIndex(i)}></div>
        )
    }
    return(
        <div className={styles.Navigator}>
            {navItems}
        </div>
    )
}

export default function ImageSlider({ children }){
    const [imageIndex, setImageIndex] = useState(0);
    
    function next(){
        if((imageIndex+1) === children.length) setImageIndex(0);
        else{
            setImageIndex(imageIndex+1);
        }
    }
    function prev(){
        if((imageIndex-1) < 0) setImageIndex(children.length - 1);
        else{
            setImageIndex(imageIndex-1);
        }
    }
    return(
        <div className={styles.wrapper}>
            <div className={styles.slider}>
                <div className={styles.imageWrapper} key={imageIndex}>
                    
                    
                    <button className={styles.next} onClick={next}>
                        <span className='fa fa-chevron-right'></span>
                    </button>
                    <button className={styles.prev} onClick={prev}>
                        <span className='fa fa-chevron-left'></span>
                    </button>
                    <Navigator imageIndex={imageIndex} totalIndex={children.length} setImageIndex={setImageIndex}/>

                    {children[imageIndex]}
                </div>
            </div>
        </div>
    );
};