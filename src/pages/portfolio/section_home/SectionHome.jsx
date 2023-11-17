import React, { useEffect, useRef, lazy } from "react";
import Typed from "typed.js";
// import CanvasBackground from "../../../components/CanvasBackground/CanvasBackground";
// import CanvasBackground2 from "../../../components/CanvasBackground/CanvasBackground2";
import HomeInfo from "../../../components/01-Home/HomeInfo";
import HomeImage from "../../../components/01-Home/HomeImage";
import useLangData from "../../../utils/useLangData";
import HomeDataLoader from "../../../components/01-Home/HomeDataLoader";
// import BackgroundX from "../../../components/99-Svg_Icon/BackgroundX";
// import BackgroundY from "../../../components/99-Svg_Icon/BackgroundY";

const LazyBackgroundX = lazy(() =>
    import("../../../components/99-Svg_Icon/BackgroundX")
);
const LazyBackgroundY = lazy(() =>
    import("../../../components/99-Svg_Icon/BackgroundY")
);
const LazyCanvasBackground = lazy(() =>
    import("../../../components/CanvasBackground/CanvasBackground")
);
const LazyCanvasBackground2 = lazy(() =>
    import("../../../components/CanvasBackground/CanvasBackground2")
);

function SectionHome() {
    const data = useLangData("home.json");

    const typedRef = useRef(null);

    useEffect(() => {
        if (!data?.home) {
            return;
        }

        const { typedStrings } = data.home;

        const options = {
            strings: typedStrings,
            typeSpeed: 120,
            backSpeed: 60,
            loop: true,
        };

        typedRef.current = new Typed(".typing", options);

        return () => {
            if (typedRef.current) {
                typedRef.current.destroy();
            }
        };
    }, [data]);

    return (
        <HomeDataLoader>
            {(homeData) => (
                <section className="home section" id="home">
                    <div className="cont">
                        <LazyBackgroundX />
                        <LazyBackgroundY />
                    </div>
                    <div id="top"></div>
                    <div className="container">
                        <div className="row_top"></div>
                        <div className="bgDraw">
                            <LazyCanvasBackground />
                        </div>

                        <div className="row_center">
                            <div className="row">
                                <div className="border-design"></div>
                                <div className="border-design2"></div>

                                <HomeInfo
                                    welcome={homeData.home.welcome}
                                    name={homeData.home.name}
                                    presentation={homeData.home.presentation}
                                    titleDescription={
                                        homeData.home.titleDescription
                                    }
                                    description={homeData.home.description}
                                    additionalDescription={
                                        homeData.home.additionalDescription
                                    }
                                    quote={homeData.home.quote}
                                    hireButtonText={
                                        homeData.home.hireButtonText
                                    }
                                />
                                <HomeImage imageSrc={homeData.home.imageSrc} />
                            </div>
                        </div>
                        <div className="bgDraw2">
                            <LazyCanvasBackground2 />
                        </div>
                        <div className="col_end"></div>
                    </div>
                </section>
            )}
        </HomeDataLoader>
    );
}

export default SectionHome;
