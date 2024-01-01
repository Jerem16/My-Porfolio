import React, { useEffect, useRef, lazy, Suspense } from "react";
import useLangData from "../../../utils/useLangData";
import HomeInfo from "../../../components/01-Home/HomeInfo";
import HomeImage from "../../../components/01-Home/HomeImage";
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

const SuspenseLoader = ({ children }) => (
    <Suspense fallback={<></>}>
        {children}
    </Suspense>
);
const TypedText = ({ data, typedRef }) => {
    useEffect(() => {
        const loadTyped = async () => {
            try {
                const { default: Typed } = await import("typed.js");

                if (typedRef.current) {
                    typedRef.current.destroy();
                }

                const { typedStrings } = data.home;
                const options = {
                    strings: typedStrings,
                    typeSpeed: 120,
                    backSpeed: 60,
                    loop: true,
                };

                typedRef.current = new Typed(".typing", options);
            } catch (error) {
                console.error("Error loading Typed.js:", error);
            }
        };

        if (data) {
            loadTyped();
        }

        return () => {
            if (typedRef.current) {
                typedRef.current.destroy();
            }
        };
    }, [data, typedRef]);

    return null;
};
const SectionHome = () => {
    const data = useLangData("home.json");
    const typedRef = useRef(null);
    return (
        <HomeDataLoader>
            {(homeData) => (
                <section className="home section" id="home">
                    <div className="cont">
                        <SuspenseLoader>
                            <LazyHomeBackground />
                        </SuspenseLoader>
                    </div>
                    <div id="top"></div>
                    <div className="container">
                        <div className="row_top"></div>
                        <div className="bgDraw">
                            <SuspenseLoader>
                                <LazyCanvasBackground />
                            </SuspenseLoader>
                        </div>

                        <div className="row_center">
                            <div className="row">
                                <div className="border-design"></div>
                                <div className="border-design2"></div>
                                <TypedText
                                    data={homeData}
                                    typedRef={typedRef}
                                />
                                <HomeInfo {...homeData.home} />

                                <HomeImage imageSrc={homeData.home.imageSrc} />
                            </div>
                        </div>
                        <div className="bgDraw2">
                            <SuspenseLoader>
                                <LazyCanvasBackground2 />
                            </SuspenseLoader>
                        </div>
                        <div className="col_end"></div>
                    </div>
                </section>
            )}
        </HomeDataLoader>
    );
};

export default React.memo(SectionHome);
