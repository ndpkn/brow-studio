import  { useState } from 'react';
import clsx from "clsx";

import BlockHeader from "../ui/BlockHeader/BlockHeader";
import Carousel from "../ui/Carousel/Carousel";
import CarouselItem from "../ui/Carousel/CarouselItem";

import brows1 from '../../assets/images/brows/brows1.webp';
import brows2 from '../../assets/images/brows/brows2.webp';
import brows3 from '../../assets/images/brows/brows3.webp';
import brows4 from '../../assets/images/brows/brows4.webp';
import brows5 from '../../assets/images/brows/brows5.webp';
import brows8 from '../../assets/images/brows/brows8.webp';
import brows9 from '../../assets/images/brows/brows9.webp';
import brows10 from '../../assets/images/brows/brows10.webp';
import brows11 from '../../assets/images/brows/brows11.webp';

import lashes1 from '../../assets/images/lashes/lashes1.webp';
import lashes2 from '../../assets/images/lashes/lashes2.webp';
import lashes3 from "../../assets/images/lashes/lashes3.webp";
import lashes4 from "../../assets/images/lashes/lashes4.webp";
import lashes5 from "../../assets/images/lashes/lashes5.webp";

import styles from "./portfolio.module.scss";

const Portfolio = () => {
  const [showManicure, setShowManicure] = useState(true);
  const [showPedicure, setShowPedicure] = useState(false);

  const showHideTabs = () => {
    setShowManicure((prev) => !prev);
    setShowPedicure((prev) => !prev);
  };

const manicureSlides = [
  { src: brows1, alt: 'brows', caption: 'коррекция + окрашивание' },
  { src: brows2, alt: 'brows', caption: 'коррекция + окрашивание' },
  { src: brows3, alt: 'brows', caption: 'коррекция + окрашивание' },
  { src: brows4, alt: 'brows', caption: 'мужская коррекция' },
  { src: brows5, alt: 'brows', caption: 'коррекция + окрашивание' },
  { src: brows8, alt: 'brows', caption: 'коррекция + окрашивание' },
  { src: brows9, alt: 'brows', caption: 'коррекция + окрашивание' },
  { src: brows10, alt: 'brows', caption: 'коррекция + окрашивание' },
  { src: brows11, alt: 'brows', caption: 'осветление + коррекция' },
];

const pedicureSlides = [
  { src: lashes3, alt: 'lashes', caption: 'ламинирование ресниц' },
  { src: lashes1, alt: 'lashes', caption: 'ламинирование ресниц' },
  { src: lashes2, alt: 'lashes', caption: 'ламинирование ресниц' },
  { src: lashes4, alt: 'lashes', caption: 'ламинирование ресниц' },
  { src: lashes5, alt: 'lashes', caption: 'ламинирование ресниц' },
];
  return (
    <div className={styles.portfolio} id='portfolio'>
      <BlockHeader text={'мои работы'} />
      <div className={styles.tabsBlock}>
        <div className={styles.tabs}>
          <h3
            onClick={() => showHideTabs()}
            className={clsx(styles.tabsHeader, {
              [styles.active]: showManicure,
            })}
          >
            брови
          </h3>
          <h3
            onClick={() => showHideTabs()}
            className={clsx(styles.tabsHeader, {
              [styles.active]: showPedicure,
            })}
          >
            ресницы
          </h3>
        </div>
        <div
          className={clsx(styles.carousel, {
            [styles.show]: showManicure,
          })}
        >
          <Carousel>
            {showManicure &&
              manicureSlides.map((slide, index) => (
                <CarouselItem key={index} src={slide.src} alt={slide.alt} caption={slide.caption} />
              ))}
          </Carousel>
        </div>
        <div
          className={clsx(styles.carousel, {
            [styles.show]: showPedicure,
          })}
        >
          <Carousel>
            {showPedicure &&
              pedicureSlides.map((slide, index) => (
                <CarouselItem key={index} src={slide.src} alt={slide.alt} caption={slide.caption} />
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
