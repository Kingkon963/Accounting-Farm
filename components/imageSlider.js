import styles from '../styles/ImageSlider.module.scss';

export default function ImageSlider({ children }){
    const images = [];
    for(let i=0; i<children.length; i++){
        images[i] = (
            <div className={styles.imageWrapper} key={i}>
                {children[i]}
            </div>
        );
    }
    return(
        <div className={styles.wrapper}>
            <h1>Slider</h1>
            <div className={styles.slider}>
                {images}
            </div>
        </div>
    );
};