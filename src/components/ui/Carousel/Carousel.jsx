import styles from './carousel.module.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'; 
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carousel = ({ children }) => {
    const iconsColor = '#ff00ae'
    return (
        <div className={styles.slider}>
            <div className={styles.arrows}>
                <span><ArrowBackIosNewIcon sx={{ color: iconsColor, fontSize: '2rem' }}/></span>
                <span><ArrowForwardIosIcon sx={{ color: iconsColor, fontSize: '2rem', fontWeight: '100' }}/></span>
            </div>
            <div className={styles.slides}>
                {children}
            </div>
        </div>
    );
};

export default Carousel;
