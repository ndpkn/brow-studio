import clsx from 'clsx'
import styles from './header.module.scss'
import { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import ListAltIcon from '@mui/icons-material/ListAlt'
import CollectionsIcon from '@mui/icons-material/Collections'
import PlaceIcon from '@mui/icons-material/Place'
import ApartmentIcon from '@mui/icons-material/Apartment'
import Button from '../ui/Button/Button'

const Header = () => {
	const [show, setShow] = useState(false)
	const iconsColor = '#ff00ae'
	return (
		<header className={styles.header}>
			<div
				className={clsx(styles.menuButton, {
					[styles.active]: show,
				})}
				onClick={() => setShow(!show)}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<nav
				className={clsx(styles.menu, {
					[styles.show]: show,
				})}
			>
				<ul className={styles.menuBlock}>
					<li className={styles.menuItem}>
						<a onClick={() => setShow(!show)} href='#about'>
							Обо мне
						</a>
						<PersonIcon sx={{ color: iconsColor }} />
					</li>
					<li className={styles.menuItem}>
						<a onClick={() => setShow(!show)} href='#services'>
							Услуги
						</a>
						<ListAltIcon sx={{ color: iconsColor }} />
					</li>
					<li className={styles.menuItem}>
						<a onClick={() => setShow(!show)} href='#portfolio'>
							мои работы
						</a>
						<CollectionsIcon sx={{ color: iconsColor }} />
					</li>
					<li className={styles.menuItem}>
						<a onClick={() => setShow(!show)} href='#studio'>
							Студия
						</a>
						<ApartmentIcon sx={{ color: iconsColor }} />
					</li>
					<li className={styles.menuItem}>
						<a onClick={() => setShow(!show)} href='#contacts'>
							Контакты
						</a>
						<PlaceIcon sx={{ color: iconsColor }} />
					</li>
					<li>
						<Button
							text={'Записаться онлайн'}
							link={'https://dikidi.ru/#widget=127872'}
						/>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
