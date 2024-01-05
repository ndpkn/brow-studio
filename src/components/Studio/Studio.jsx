import "./studio.module.scss";
import BlockHeader from "../ui/BlockHeader/BlockHeader";
import CarouselItem from "../ui/Carousel/CarouselItem";
import styles from "./studio.module.scss";
import Carousel from "../ui/Carousel/Carousel";
import { useState } from "react";
import clsx from "clsx";
import Button from "../ui/Button/Button";
import studio1 from "../../assets/images/studio/IMG_5100.webp";
import studio3 from "../../assets/images/studio/IMG_5119.webp";
import studio5 from "../../assets/images/studio/IMG_5353.webp";
import studio6 from "../../assets/images/studio/IMG_5358.webp";
import studio7 from "../../assets/images/studio/IMG_5365.webp";
import studio8 from "../../assets/images/studio/IMG_5369.webp";

const Studio = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    const [show, setShow] = useState(false);
    return (
		<div className={styles.block} id='studio'>
			<div className={styles.blockHeader}>
				<BlockHeader text={'Студия'} />
			</div>

			<Carousel settings={settings}>
				<CarouselItem src={studio1} alt={'studio'} />
				<CarouselItem src={studio3} alt={'studio'} />
				<CarouselItem src={studio5} alt={'studio'} />
				<CarouselItem src={studio6} alt={'studio'} />
				<CarouselItem src={studio7} alt={'studio'} />
				<CarouselItem src={studio8} alt={'studio'} />
			</Carousel>
			<ul className={styles.list}>
				<li>Вкусный кофе, который можно взять с собой</li>
				<li>Эстетичная студия в центре Северного</li>
				<li>Любые фильмы и сериалы</li>
				<li>удобная онлайн-запись</li>
				<li>100% безопасность процедур</li>
			</ul>
			<div className={styles.mapBlock}>
				<Button
					arrow={`${show ? 'up' : 'down'}`}
					text={`${show ? 'Скрыть карту' : 'Показать на карте'}`}
					onClick={() => setShow(!show)}
				/>
				<div
					className={clsx(styles.map, {
						[styles.show]: show,
					})}
				>
					<div
						style={{
							position: 'relative',
							overflow: 'hidden',
							marginTop: '1rem',
                            backgroundColor:'#fff'
						}}
					>
						<iframe
							src='https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=96090370879'
							width='100%'
							height='400'
							frameBorder='0'
						></iframe>
						<iframe
							src='https://yandex.ru/sprav/widget/rating-badge/96090370879?type=rating'
							width='150'
							height='50'
							frameBorder='0'
						></iframe>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Studio;
