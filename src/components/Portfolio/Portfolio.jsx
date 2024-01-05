import BlockHeader from "../ui/BlockHeader/BlockHeader";
import styles from "./portfolio.module.scss";
import Carousel from "../ui/Carousel/Carousel";
import CarouselItem from "../ui/Carousel/CarouselItem";
import clsx from "clsx";
import { useState } from "react";
import brows1 from '../../assets/images/brows/brows1.webp'
import brows2 from '../../assets/images/brows/brows2.webp'
import brows3 from '../../assets/images/brows/brows3.webp'
import brows4 from '../../assets/images/brows/brows4.webp'
import brows5 from '../../assets/images/brows/brows5.webp'
import brows8 from '../../assets/images/brows/brows8.webp'
import brows9 from '../../assets/images/brows/brows9.webp'
import brows10 from '../../assets/images/brows/brows10.webp'
import brows11 from '../../assets/images/brows/brows11.webp'
import lashes1 from '../../assets/images/lashes/lashes1.webp'
import lashes2 from '../../assets/images/lashes/lashes2.webp'
import lashes3 from "../../assets/images/lashes/lashes3.webp";
import lashes4 from "../../assets/images/lashes/lashes4.webp";
import lashes5 from "../../assets/images/lashes/lashes5.webp";

const Portfolio = () => {
    const [showManic, setShowManic] = useState(true);
    const [showPedic, setShowPedic] = useState(false);

    const showHideTabs = () => {
        setShowManic((prev) => !prev);
        setShowPedic((prev) => !prev);
    };
    return (
		<div className={styles.portfolio} id='portfolio'>
			<BlockHeader text={'мои работы'} />
			<div className={styles.tabsBlock}>
				<div className={styles.tabs}>
					<h3
						onClick={() => showHideTabs()}
						className={clsx(styles.tabsHeader, {
							[styles.active]: showManic,
						})}
					>
						брови
					</h3>
					<h3
						onClick={() => showHideTabs()}
						className={clsx(styles.tabsHeader, {
							[styles.active]: showPedic,
						})}
					>
						ресницы
					</h3>
				</div>
				<div
					className={clsx(styles.carousel, {
						[styles.show]: showManic,
					})}
				>
					<Carousel>
						<CarouselItem
							src={brows1}
							alt={'brows'}
							caption={'коррекция + окрашивание'}
						/>
						<CarouselItem
							src={brows2}
							alt={'brows'}
							caption={'коррекция + окрашивание'}
						/>
						<CarouselItem
							src={brows3}
							alt={'brows'}
							caption={'коррекция + окрашивание'}
						/>
						<CarouselItem
							src={brows4}
							alt={'brows'}
							caption={'мужская коррекция'}
						/>
						<CarouselItem
							src={brows5}
							alt={'brows'}
							caption={'коррекция + окрашивание'}
						/>
						<CarouselItem
							src={brows8}
							alt={'brows'}
							caption={'коррекция + окрашивание'}
						/>
						<CarouselItem
							src={brows9}
							alt={'brows'}
							caption={'коррекция + окрашивание'}
						/>
						<CarouselItem
							src={brows10}
							alt={'brows'}
							caption={'коррекция + окрашивание'}
						/>
						<CarouselItem
							src={brows11}
							alt={'brows'}
							caption={'осветление + коррекция'}
						/>
					</Carousel>
				</div>
				<div
					className={clsx(styles.carousel, {
						[styles.show]: showPedic,
					})}
				>
					<Carousel>
						<CarouselItem
							src={lashes3}
							alt={'lashes'}
							caption={'ламинирование ресниц'}
						/>
						<CarouselItem
							src={lashes1}
							alt={'lashes'}
							caption={'ламинирование ресниц'}
						/>
						<CarouselItem
							src={lashes2}
							alt={'lashes'}
							caption={'ламинирование ресниц'}
						/>
						<CarouselItem
							src={lashes4}
							alt={'lashes'}
							caption={'ламинирование ресниц'}
						/>
						<CarouselItem
							src={lashes5}
							alt={'lashes'}
							caption={'ламинирование ресниц'}
						/>


					</Carousel>
				</div>
			</div>
		</div>
	)
};

export default Portfolio;
