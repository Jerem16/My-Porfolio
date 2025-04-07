import React, { useCallback, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { toggleClasses } from "../../../redux/reducers/classesSlice";
import dataBase from "../../../assets/data/header.json";
import { useWindowWidth } from "../../../utils/hooks";

// ✅ Lazy imports (sans doublons)
const HeaderDeskContact = lazy(() => import("./HeaderDeskContact"));
const HeaderMobContact = lazy(() => import("./HeaderMobContact"));
const HeaderDataLoader = lazy(() => import("../HeaderDataLoader"));

// ✅ Hook utilitaire
const useIsMobile = (windowWidth) => {
    return windowWidth <= 1024;
};

// ✅ Fallback de chargement
const Loading = () => <div>Chargement du header...</div>;

// ✅ Hook dispatch avec délai
const useDelayedDispatch = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        setTimeout(() => {
            dispatch(toggleClasses("open"));
        }, 500);
    }, [dispatch]);
};

// ✅ Composant principal
const ContactHeader = () => {
    const windowWidth = useWindowWidth();
    const isMobile = useIsMobile(windowWidth);
    const delayedDispatch = useDelayedDispatch();
    const data = dataBase;

    return (
        <Suspense fallback={<Loading />}>
            <HeaderDataLoader>
                {(headerData) =>
                    isMobile ? (
                        <HeaderMobContact
                            data={data}
                            headerData={headerData}
                            handleClick={delayedDispatch}
                        />
                    ) : (
                        <HeaderDeskContact
                            data={data}
                            headerData={headerData}
                        />
                    )
                }
            </HeaderDataLoader>
        </Suspense>
    );
};

export default React.memo(ContactHeader);
