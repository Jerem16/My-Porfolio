import React, { useState, useEffect } from "react";
import BackgroundX from "../99-Svg_Icon/BackgroundX";
import BackgroundY from "../99-Svg_Icon/BackgroundY";

const HomeBackground = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <>{windowWidth < 416 ? <BackgroundY /> : <BackgroundX />}</>;
};

export default React.memo(HomeBackground);
