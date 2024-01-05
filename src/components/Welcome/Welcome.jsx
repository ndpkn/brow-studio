import styles from "./welcome.module.scss";
import main from '../../assets/images/main.webp'
import Button from "../ui/Button/Button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Welcome = () => {
    const nameRef = useRef(null)
    const surnameRef = useRef(null)
    const titleRef = useRef(null)
    useEffect(() => {
        const name = nameRef.current
        const surname = surnameRef.current
        const title = titleRef.current
        gsap.fromTo(
            name,
            { x: '-120%' }, {x: 0, delay: 1}
        );
        gsap.fromTo(
            surname,
            { x: '120%' }, {x: 0, delay: 1}
        );
        gsap.fromTo(
            title,
            { opacity: 0}, {opacity:1, delay: 0.3}
        );

    })


    return (
        <div className={styles.block}>
            <div className={styles.photoBlock}>
                    <img
                        className={styles.photo}
                        src={main}
                        alt="main photo"
                    /> :
                <div className={styles.nameBlock}>
                    <h2 ref={nameRef} style={{fontFamily: 'Lacquer'}} className={styles.name}>Evelina </h2>
                    <h2 ref={surnameRef} style={{fontFamily: 'Lacquer'}}className={styles.surname}>maslova</h2>
                    <h1 ref={titleRef}className={styles.title}>brow master</h1>
                </div>
            </div>
            <div>
                <Button
                    text={"Записаться онлайн"}
                    link={"https://dikidi.ru/#widget=127872"}
                />
            </div>
        </div>
    );
};

export default Welcome;
