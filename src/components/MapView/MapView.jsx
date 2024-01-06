import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button/Button.jsx";
import styles from "./mapView.module.scss";

gsap.registerPlugin(ScrollTrigger);
const MapView = () => {
    const [showMap, setShowMap] = useState(false);
    const mapRef = useRef(null)

    useEffect(() => {
        gsap.to(mapRef.current, {
            height: showMap ? "100%" : 0,
            maxHeight: showMap ? '600px' : 0,
            opacity: showMap ? 1 : 0,
            duration: 0.5,
        });
    }, [showMap]);
    const toggleMap = () => {
        setShowMap((prevShowMap) => !prevShowMap);
    };

    return (
        <>
            <Button
                arrow={`${showMap ? "up" : "down"}`}
                text={`${showMap ? "Скрыть карту" : "Показать на карте"}`}
                onClick={toggleMap}
            >
                <div ref={mapRef} className={styles.mapContainer}>
                    {showMap && (
                        <div className={styles.frame}>
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=96090370879"
                                width="100%"
                                height="500"
                                frameBorder="0"
                            ></iframe>
                            <iframe
                                src="https://yandex.ru/sprav/widget/rating-badge/96090370879?type=rating"
                                width="150"
                                height="50"
                                frameBorder="0"
                            ></iframe>
                        </div>
                    )}
                </div>
            </Button>
        </>
    )
}
export default MapView;
