import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import styles from "./button.module.scss";

const Button = ({ text, link, onClick, arrow, children }) => {
    const iconsColor = '#ff00ae'
    const icons = () => {
        if (arrow === 'down') {
            return <ExpandMoreIcon sx={{ color: iconsColor, fontSize: '2rem' }}/>
        } else if (arrow === 'up') {
            return <ExpandLessIcon sx={{ color: iconsColor, fontSize: '2rem' }}/>
        } else {
            return <TrendingFlatIcon sx={{ color: iconsColor, fontSize: '2rem' }}/>
        }
    }
    return (
        <div className={styles.button} onClick={onClick}>
            <a href={link} target="_blank">
                <span className={styles.text}>{text}</span>
                {icons()}
            </a>
            {children}
        </div>
    );
};

export default Button;
