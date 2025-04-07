import React, { useCallback, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { toggleClasses } from "../../../redux/reducers/classesSlice";
import dataBase from "../../../assets/data/header.json";
import { useWindowWidth } from "../../../utils/hooks";

// ⬇️ Lazy imports
const HeaderDataLoader = lazy(() => import("../HeaderDataLoader"));
const HeaderDeskHome = lazy(() => import("./HeaderDeskHome"));
const HeaderMobHome = lazy(() => import("./HeaderMobHome"));

// Exemple de fallback (tu peux le remplacer par un spinner ou un skeleton)
const Loading = () => <div>Chargement du header...</div>;

const useIsMobile = (windowWidth) => windowWidth <= 1024;

const useDelayedDispatch = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        setTimeout(() => {
            dispatch(toggleClasses("open"));
        }, 500);
    }, [dispatch]);
};

const Header = () => {
    const windowWidth = useWindowWidth();
    const isMobile = useIsMobile(windowWidth);
    const delayedDispatch = useDelayedDispatch();
    const data = dataBase;

    return (
        <Suspense fallback={<Loading />}>
            <HeaderDataLoader>
                {(headerData) =>
                    isMobile ? (
                        <HeaderMobHome
                            data={data}
                            headerData={headerData}
                            handleClick={delayedDispatch}
                        />
                    ) : (
                        <HeaderDeskHome data={data} headerData={headerData} />
                    )
                }
            </HeaderDataLoader>
        </Suspense>
    );
};

export default React.memo(Header);
