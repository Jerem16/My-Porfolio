import React, { Suspense } from "react";
import NavMenuHome from "./NavMenuHome";
import Logo from "../Logo"
import AsideBackground from "../AsideBackground";

const LazyThemeSelector = React.lazy(() =>
    import("../ThemeSelector/ThemeSelector")
);

const HeaderMobHome = ({ data, headerData, handleClick }) => (
    <header>
        <div className={`aside`}>
            <AsideBackground />
            <Logo data={data} handleClick={handleClick} />
            <NavMenuHome
                id="tablet"
                scrollLinks={headerData.scrollLinks}
                handleClick={handleClick}
                language={headerData.language}
                startLinks={headerData.startLinks}
                routerLinks={headerData.routerLinks}
            />
            <Suspense fallback={<></>}>
                <LazyThemeSelector />
            </Suspense>
        </div>
    </header>
);

export default React.memo(HeaderMobHome);
