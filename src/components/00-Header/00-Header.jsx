import React, { useState, useEffect, lazy, Suspense } from "react";
import HeaderDataLoader from "./HeaderDataLoader";
import { useDispatch } from "react-redux";
import { toggleClasses } from "../../redux/reducers/classesSlice";
import NavMenu from "./NavMenu";
import dataBase from "../../assets/data/header.json";
import P from "../99-Svg_Icon/p";

const LazyThemeSelector = lazy(() => import("./ThemeSelector/ThemeSelector"));

const AsideBackground = () => (
    <div className="aside_bg">
        <div className="aside_bg_top"></div>
        <div className="aside_bg_center"></div>
        <div className="aside_bg_bottom"></div>
    </div>
);

const Logo = ({ data }) => (
    <div className="logo">
        <a rel="nofollow" href="#home">
            <div>
                <P />
                {data.logoSpanTitle}
            </div>
        </a>
    </div>
);

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

        mediaQuery.addListener(updateIsMobile);

        return () => {
            mediaQuery.removeListener(updateIsMobile);
        };
    }, []);

    return (
        <HeaderDataLoader>
            {(headerData) => (
                <header>
                    <div className={`aside`}>
                        <AsideBackground />
                        <Logo data={data} />

                        {isMobile ? (
                            <NavMenu
                                id="tablet"
                                navLinks={headerData.navLinks}
                                handleClick={handleClick}
                                language={headerData.language}
                                startLinks={headerData.startLinks}
                            />
                        ) : (
                            <NavMenu
                                id="desktop"
                                navLinks={headerData.navLinks}
                                language={headerData.language}
                                startLinks={headerData.startLinks}
                            />
                        )}
                        <Suspense fallback={<></>}>
                            <LazyThemeSelector />
                        </Suspense>
                    </div>
                </header>
            )}
        </HeaderDataLoader>
    );
}

export default Header;
