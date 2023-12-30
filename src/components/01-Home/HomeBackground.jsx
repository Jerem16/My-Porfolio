import React, { useState, useEffect, Suspense } from "react";

const HomeBackground = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [BackgroundComponent, setBackgroundComponent] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const loadComponent = async () => {
            const component =
                windowWidth < 416
                    ? (await import("../99-Svg_Icon/BackgroundY")).default
                    : (await import("../99-Svg_Icon/BackgroundX")).default;

            setBackgroundComponent(component);
        };

        loadComponent();
    }, [windowWidth]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {BackgroundComponent && <BackgroundComponent />}
        </Suspense>
    );
};

export default React.memo(HomeBackground);
