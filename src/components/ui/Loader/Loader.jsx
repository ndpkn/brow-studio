import CircularProgress from '@mui/material/CircularProgress';
import styles from './loader.module.scss'

const Loader = () => {
    const accentColor = '#ff00ae'
    return (
        <div className={styles.block}>
            <CircularProgress sx={{color: accentColor}}/>
        </div>
    )
}

export default Loader