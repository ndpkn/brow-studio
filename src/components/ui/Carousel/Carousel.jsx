import PropTypes from "prop-types";
import { useState } from 'react';
import styles from './carousel.module.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const iconsColor = '#ff00ae';

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % children.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? children.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className={styles.slider}>
      <div className={styles.arrows}>
        <span onClick={goToPrevSlide}>
          <ArrowBackIosNewIcon
            sx={{ color: iconsColor, fontSize: '2rem' }}
          />
        </span>
        <span onClick={goToNextSlide}>
          <ArrowForwardIosIcon
            sx={{ color: iconsColor, fontSize: '2rem', fontWeight: '100' }}
          />
        </span>
      </div>
      <div className={styles.slides}>{children[currentSlide]}</div>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node,
};
export default Carousel;
