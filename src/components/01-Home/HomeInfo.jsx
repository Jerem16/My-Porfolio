import React, { useState, useEffect } from "react";
import HomeInfoMob from "./HomeInfoMob";
import HomeInfoDesk from "./HomeInfoDesk";

const HomeInfo = (props) => {
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

    const commonProps = {
        welcome: props.welcome,
        presentation: props.presentation,
        titleDescription: props.titleDescription,
        description: props.description,
        additionalDescription: props.additionalDescription,
        quote: props.quote,
        hireButtonText: props.hireButtonText,
    };

    return (
        <div className="home-info">
            {windowWidth < 1261 ? (
                <HomeInfoMob {...commonProps} />
            ) : (
                <HomeInfoDesk {...commonProps} />
            )}
        </div>
    );
};

export default React.memo(HomeInfo);
