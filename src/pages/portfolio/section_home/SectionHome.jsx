import React, { lazy, Suspense } from "react";
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
    <Suspense fallback={<></>}>{children}</Suspense>
);

const SectionHome = () => {
    const data = useLangData("home.json");

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
                                <HomeInfo {...data.home} homeData={homeData} />
                                <HomeImage imageSrc={data.home.imageSrc} />
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
