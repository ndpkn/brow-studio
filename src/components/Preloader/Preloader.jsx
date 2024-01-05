import BounceLoader from "react-spinners/BounceLoader";
import styles from './preloader.module.scss'


const Preloader = (loading) => {
    
    return (
        <div className={styles.loader}>
            <BounceLoader
                color={'#ff00ae'}
                loading={loading}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Preloader