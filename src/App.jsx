import Preloader from './components/Preloader/Preloader'
import AllComponents from "./AllComponents";
import "./style/App.scss";
import 'normalize.css';
import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    },[])
    return (
        <>
            {
                loading ?
                <Preloader/>:
                <AllComponents/> 
            }
        </>
    );
}

export default App;
