import React, { useCallback } from "react";
import HeaderDataLoader from "../HeaderDataLoader";
import { useDispatch } from "react-redux";
import { toggleClasses } from "../../../redux/reducers/classesSlice";
import dataBase from "../../../assets/data/header.json";
import HeaderDeskContact from "./HeaderDeskContact";
import HeaderMobContact from "./HeaderMobContact";
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

const ContactHeader = () => {
    const windowWidth = useWindowWidth();
    const isMobile = useIsMobile(windowWidth);
    const delayedDispatch = useDelayedDispatch();
    const data = dataBase;

    return (
        <HeaderDataLoader>
            {(headerData) =>
                isMobile ? (
                    <HeaderMobContact
                        data={data}
                        headerData={headerData}
                        handleClick={delayedDispatch}
                    />
                ) : (
                    <HeaderDeskContact data={data} headerData={headerData} />
                )
            }
        </HeaderDataLoader>
    );
};

export default React.memo(ContactHeader);
