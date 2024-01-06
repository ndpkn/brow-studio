import BlockHeader from "../ui/BlockHeader/BlockHeader";
import CarouselItem from "../ui/Carousel/CarouselItem";
import styles from "./studio.module.scss";
import Carousel from "../ui/Carousel/Carousel";
import MapView from "../MapView/MapView.jsx";
import studio1 from "../../assets/images/studio/IMG_5100.webp";
import studio2 from "../../assets/images/studio/IMG_5119.webp";
import studio3 from "../../assets/images/studio/IMG_5353.webp";
import studio4 from "../../assets/images/studio/IMG_5358.webp";
import studio5 from "../../assets/images/studio/IMG_5365.webp";
import studio6 from "../../assets/images/studio/IMG_5369.webp";
import "./studio.module.scss";

const Studio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const photos = [studio1, studio2, studio3, studio4, studio5, studio6];

  return (
    <div className={styles.block} id="studio">
      <div className={styles.blockHeader}>
        <BlockHeader text={"Студия"} />
      </div>
      <Carousel settings={settings}>
        {photos.map((photo, i) => (
          <CarouselItem key={i} src={photo} alt={`${photo}`} />
        ))}
      </Carousel>
      <ul className={styles.list}>
        <li>Вкусный кофе, который можно взять с собой</li>
        <li>Эстетичная студия в центре Северного</li>
        <li>Любые фильмы и сериалы</li>
        <li>удобная онлайн-запись</li>
        <li>100% безопасность процедур</li>
      </ul>
      <MapView/>
    </div>
  );
};

export default Studio;
