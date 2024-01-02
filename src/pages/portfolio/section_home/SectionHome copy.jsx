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
    <Suspense fallback={<></>}>{children}</Suspense>
);
const TypedText = ({ data, typedRef }) => {
    useEffect(() => {
        const loadTyped = async () => {
            try {
                const { default: Typed } = await import("typed.js");

                const { typedStrings } = data.home;
                const options = {
                    strings: typedStrings,
                    typeSpeed: 120,
                    backSpeed: 60,
                    loop: true,
                };

                // Détruire l'instance existante de Typed.js
                if (typedRef.current) {
                    typedRef.current.destroy();
                }

                // Créer une nouvelle instance de Typed.js
                typedRef.current = new Typed(".typing", options);
            } catch (error) {
                console.error("Error loading Typed.js:", error);
            }
        };

        const handleResize = () => {
            // Recharger Typed.js lors du redimensionnement de la fenêtre
            loadTyped();
        };

        // Ajouter un écouteur d'événements pour l'événement de redimensionnement
        window.addEventListener("resize", handleResize);

        // Appeler loadTyped au montage initial
        if (data) {
            loadTyped();
        }

        // Nettoyer l'écouteur d'événements lors du démontage du composant
        return () => {
            window.removeEventListener("resize", handleResize);

            // Détruire l'instance de Typed.js lors du démontage du composant
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
