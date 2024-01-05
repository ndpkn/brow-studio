import styles from "./blockHeader.module.scss";

const BlockHeader = ({ text }) => {
    return (
        <div className={styles.block}>
            <h3 className={styles.text} >{text}</h3>
        </div>
    );
};

export default BlockHeader;
