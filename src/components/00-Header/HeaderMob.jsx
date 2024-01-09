import React, { Suspense } from "react";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import AsideBackground from "./AsideBackground";

const LazyThemeSelector = React.lazy(() =>
    import("./ThemeSelector/ThemeSelector")
);

const HeaderMob = ({ data, headerData, handleClick }) => (
    <header>
        <div className={`aside`}>
            <AsideBackground />
            <Logo data={data} handleClick={handleClick} />
            <NavMenu
                id="tablet"
                navLinks={headerData.navLinks}
                handleClick={handleClick}
                language={headerData.language}
                startLinks={headerData.startLinks}
            />
            <Suspense fallback={<></>}>
                <LazyThemeSelector />
            </Suspense>
        </div>
    </header>
);

export default React.memo(HeaderMob);
