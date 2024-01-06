import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

import BlockHeader from "../ui/BlockHeader/BlockHeader";

import styles from "./about.module.scss";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const counters = [
    { start: 1, end: 100, delay: 0.5, suffix: '%', text: "индивидуальный подход" },
    { start: 1, end: 15, delay: 0.5, text: "курсов повышения квалификации пройдено" },
    { start: 1, end: 4, delay: 0.5, text: "года в профессии" },
    { start: 1, end: 2000, delay: 0.5, separator: "", prefix: '>', text: "бровей сделано красивыми" },
  ];

  return (
    <div className={styles.about} id={"about"}>
      <BlockHeader text={"почему я?"} />
      <div className={styles.block} ref={ref}>
        {counters.map((counter, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.item_counter}>
              {inView ? (
                <CountUp start={counter.start} end={counter.end} delay={counter.delay} separator={counter.separator} suffix={counter.suffix} prefix={counter.prefix} />
              ) : (
                counter.start
              )}
            </div>
            <div className={styles.item_text}>{counter.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
