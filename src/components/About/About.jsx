import BlockHeader from "../ui/BlockHeader/BlockHeader";
import styles from "./about.module.scss";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    return (
        <div className={styles.about} id={"about"}>
            <BlockHeader text={"почему я?"} />
            <div className={styles.block} ref={ref}>
                <div className={styles.item}>
                    <div className={styles.item_counter}>
                        {
                            inView ? 
                            <CountUp
                                start={1}
                                end={100}
                                delay={0.5}
                            /> : 1
                        }
                        %
                    </div>
                    <div className={styles.item_text}>индивидульный подход</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_counter}>
                        {
                            inView ? 
                            <CountUp
                                start={1}
                                end={15}
                                delay={0.5}
                            /> : 1
                        }
                    </div>
                    <div className={styles.item_text}>
                        курсов повышения квалификации пройдено
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_counter}>
                        {
                            inView ? 
                            <CountUp
                                start={1}
                                end={4}
                                delay={0.5}
                            /> : 1
                        }
                    </div>
                    <div className={styles.item_text}>года в прфессии</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_counter}>
                        &#62;
                        {
                            inView ?
                            <CountUp
                                start={1}
                                end={2000}
                                delay={0.5}
                                separator=""
                            /> : 1
                        }
                    </div>
                    <div className={styles.item_text}>
                        бровей сделано красивыми
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
