// import Loader from "../Loader/Loader";
import {useCallback, useEffect, useRef, useState} from 'react';
import Loader from '../Loader/Loader'
import styles from './carousel.module.scss'

const useImageLoaded = () => {
	const [loaded, setLoaded] = useState(false)
	const ref = useRef()

	const onLoad = useCallback(() => {
		setLoaded(true)
	})

	useEffect(() => {
		if (ref.current && ref.current.complete) {
			onLoad()
		}
	}, [ref, loaded, onLoad])

	return [ref, loaded, onLoad]
}

const CarouselItem = ({src, alt, caption} ) => {
	const [showPic, setShowPic] = useState(false)
	const [ref, loaded, onLoad] = useImageLoaded()
	const loader = !loaded ? <Loader /> : null
	useEffect(() => {
		loaded && setShowPic(true)
	}, [loaded, onLoad])

	return (
		<div className={styles.slide}>
			<div className={styles.loaderBlock}>{loader}</div>
			<img
				className={showPic ? styles.show : styles.hide}
				ref={ref}
				onLoad={onLoad}
				src={src}
				alt={alt}
				loading='lazy'
			/>
			<span>{caption}</span>
		</div>
	)
}

export default CarouselItem
