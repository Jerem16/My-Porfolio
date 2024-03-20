import React, { useCallback } from "react";
import HeaderDataLoader from "../HeaderDataLoader";
import { useDispatch } from "react-redux";
import { toggleClasses } from "../../../redux/reducers/classesSlice";
import dataBase from "../../../assets/data/header.json";
import HeaderDeskHome from "./HeaderDeskHome";
import HeaderMobHome from "./HeaderMobHome";
import { useWindowWidth } from "../../../utils/hooks";


const useIsMobile = (windowWidth) => {
    return windowWidth <= 1024;
};

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
    );
};

export default React.memo(Header);
