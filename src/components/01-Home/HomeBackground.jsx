import React, { useState, useEffect, Suspense } from "react";
import { useWindowWidth } from "../../utils/hooks";
const HomeBackground = () => {
    const windowWidth = useWindowWidth();
    const [BackgroundComponent, setBackgroundComponent] = useState(null);

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
