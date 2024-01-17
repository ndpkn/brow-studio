import {useEffect, useRef, useState} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import PlaceIcon from '@mui/icons-material/Place';
import ApartmentIcon from '@mui/icons-material/Apartment';
import styles from './headerMobile.module.scss';

gsap.registerPlugin(ScrollTrigger);

export const HeaderMobile = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const headerRef = useRef(null);
    const iconsColor = '#ff00ae';

    const menuItems = [
        { text: 'Обо мне', href: '#about', icon: <PersonIcon sx={{ color: iconsColor }} /> },
        { text: 'Услуги', href: '#services', icon: <ListAltIcon sx={{ color: iconsColor }} /> },
        { text: 'Фото', href: '#portfolio', icon: <CollectionsIcon sx={{ color: iconsColor }} /> },
        { text: 'Контакты', href: '#contacts', icon: <PlaceIcon sx={{ color: iconsColor }} /> },
    ];

    useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos && isVisible) {
        gsap.to(headerRef.current, { bottom: -100, duration: 0.3 });
        setIsVisible(false);
      } else if (currentScrollPos < prevScrollPos && !isVisible) {
        gsap.to(headerRef.current, { bottom: 0, duration: 0.3 });
        setIsVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, prevScrollPos]);

    return (
		<header ref={headerRef} className={styles.header}>
			<nav>
				<ul className={styles.menuBlock}>
					{menuItems.map((menuItem, i) => (
						<li key={i} className={styles.menuBlock_item}>
							<a href={menuItem.href}>
								{menuItem.icon}
								{menuItem.text}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
    )
};
