import React, { useState, useEffect } from "react";
import HomeImageMob from "./HomeImageMob";
import HomeImageDesk from "./HomeImageDesk";

const HomeImage = () => {
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

    return (
        <div className="blockImg">{windowWidth < 1262 ? <HomeImageMob /> : <HomeImageDesk />}</div>
    );
};

export default React.memo(HomeImage);
