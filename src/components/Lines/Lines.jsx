import styles from './lines.module.scss'
import clsx from 'clsx'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Lines = () => {
	const browsRef = useRef(null)
	const lashesRef = useRef(null)
	useEffect(() => {
		const brows = browsRef.current
		const lashes = lashesRef.current
		gsap.fromTo(
			brows,
			{ x: 0 },
			{
				x: '-100%',
				duration: 3,
				scrollTrigger: {
					trigger: brows,
					start: '-200% bottom',
					scrub: true,
				},
			}
		)
		gsap.fromTo(
			lashes,
			{ x: 0 },
			{
				x: '100%',
				duration: 3,
				scrollTrigger: {
					trigger: lashes,
					start: '-200% bottom',
					scrub: true,
				},
			}
		)
	}, [])
	return (
		<div className={styles.lines}>
			<div className={clsx(styles.block, styles.lashes)}>
				<p ref={lashesRef} className={styles.text}>
					lashes lashes lashes lashes lashes lashes lashes lashes
					lashes lashes lashes lashes lashes lashes lashes lashes
				</p>
			</div>
			<div className={clsx(styles.block, styles.brows)}>
				<p ref={browsRef} className={styles.text}>
					brows brows brows brows brows brows brows brows brows brows
					brows brows brows brows brows brows brows brows brows brows
				</p>
			</div>
		</div>
	)
}

export default Lines
