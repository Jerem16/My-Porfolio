// Header.jsx
import React, { useState, useEffect } from "react";
import HeaderDataLoader from "./HeaderDataLoader";
import { useDispatch } from "react-redux";
import { toggleClasses } from "../../redux/reducers/classesSlice";
import dataBase from "../../assets/data/header.json";
import HeaderDesk from "./HeaderDesk";
import HeaderMob from "./HeaderMob";

function Header() {
    const data = dataBase;
    const dispatch = useDispatch();

    const handleClick = () => {
        setTimeout(() => {
            dispatch(toggleClasses("open"));
        }, 500);
    };

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

    return (
        <HeaderDataLoader>
            {(headerData) =>
                isMobile ? (
                    <HeaderMob
                        data={data}
                        headerData={headerData}
                        handleClick={handleClick}
                    />
                ) : (
                    <HeaderDesk data={data} headerData={headerData} />
                )
            }
        </HeaderDataLoader>
    );
}

export default React.memo(Header);
