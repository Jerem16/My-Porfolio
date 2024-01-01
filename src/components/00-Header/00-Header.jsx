// Header.jsx
import React, { useState, useEffect, useCallback } from "react";
import HeaderDataLoader from "./HeaderDataLoader";
import { useDispatch } from "react-redux";
import { toggleClasses } from "../../redux/reducers/classesSlice";
import dataBase from "../../assets/data/header.json";
import HeaderDesk from "./HeaderDesk";
import HeaderMob from "./HeaderMob";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 1024px)").matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1024px)");

        const updateIsMobile = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", updateIsMobile);

        return () => {
            mediaQuery.removeEventListener("change", updateIsMobile);
        };
    }, []);

    return isMobile;
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
    const data = dataBase;
    const isMobile = useIsMobile();
    const delayedDispatch = useDelayedDispatch();

    return (
        <HeaderDataLoader>
            {(headerData) =>
                isMobile ? (
                    <HeaderMob
                        data={data}
                        headerData={headerData}
                        handleClick={delayedDispatch}
                    />
                ) : (
                    <HeaderDesk data={data} headerData={headerData} />
                )
            }
        </HeaderDataLoader>
    );
};

export default React.memo(Header);
