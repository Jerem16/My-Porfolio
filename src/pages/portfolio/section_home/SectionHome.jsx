import React, { useEffect, useRef, lazy, Suspense } from "react";

import HomeInfo from "../../../components/01-Home/HomeInfo";
import HomeImage from "../../../components/01-Home/HomeImage";
import useLangData from "../../../utils/useLangData";
import HomeDataLoader from "../../../components/01-Home/HomeDataLoader";

const LazyHomeBackground = lazy(() =>
    import("../../../components/01-Home/HomeBackground")
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

        const loadTyped = async () => {
            try {
                const TypedModule = await import("../../../utils/typed.js");

                if (typedRef.current) {
                    typedRef.current.destroy();
                }

                typedRef.current = new TypedModule.default(".typing", options);
            } catch (error) {
                console.error("Error loading Typed.js:", error);
            }
        };

        loadTyped();

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
                        <Suspense fallback={<></>}>
                            <LazyHomeBackground />
                        </Suspense>
                    </div>
                    <div id="top"></div>
                    <div className="container">
                        <div className="row_top"></div>
                        <div className="bgDraw">
                            <Suspense fallback={<></>}>
                                <LazyCanvasBackground />
                            </Suspense>
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
                            <Suspense fallback={<></>}>
                                <LazyCanvasBackground2 />
                            </Suspense>
                        </div>
                        <div className="col_end"></div>
                    </div>
                </section>
            )}
        </HomeDataLoader>
    );
}

export default React.memo(SectionHome);
