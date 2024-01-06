import { useState } from 'react';

import clsx from 'clsx';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import PlaceIcon from '@mui/icons-material/Place';
import ApartmentIcon from '@mui/icons-material/Apartment';

import Button from '../ui/Button/Button';

import styles from './header.module.scss';

const Header = () => {
  const [show, setShow] = useState(false);
  const iconsColor = '#ff00ae';

  const handleClick = () => {
    setShow(!show);
  };

  const menuItems = [
    { text: 'Обо мне', href: '#about', icon: <PersonIcon sx={{ color: iconsColor }} /> },
    { text: 'Услуги', href: '#services', icon: <ListAltIcon sx={{ color: iconsColor }} /> },
    { text: 'Мои работы', href: '#portfolio', icon: <CollectionsIcon sx={{ color: iconsColor }} /> },
    { text: 'Студия', href: '#studio', icon: <ApartmentIcon sx={{ color: iconsColor }} /> },
    { text: 'Контакты', href: '#contacts', icon: <PlaceIcon sx={{ color: iconsColor }} /> },
  ];

  return (
    <header className={styles.header}>
      <div
        className={clsx(styles.menuButton, {
          [styles.active]: show,
        })}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={clsx(styles.menu, { [styles.show]: show })}>
        <ul className={styles.menuBlock}>
          {menuItems.map((item, index) => (
            <li className={styles.menuItem} key={index}>
              <a onClick={handleClick} href={item.href}>
                {item.text}
              </a>
              {item.icon}
            </li>
          ))}
          <li>
            <Button text={'Записаться онлайн'} link={'https://dikidi.ru/#widget=127872'} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
