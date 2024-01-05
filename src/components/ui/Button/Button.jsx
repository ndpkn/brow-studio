import styles from "./button.module.scss";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Button = ({ text, link, onClick, arrow }) => {
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
        </div>
    );
};

export default Button;
