import React, { Suspense } from "react";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import AsideBackground from "./AsideBackground";
import { Fade } from "react-awesome-reveal";
const LazyThemeSelector = React.lazy(() =>
    import("./ThemeSelector/ThemeSelector")
);

const HeaderDesk = ({ data, headerData }) => (
    <header>
        <Fade
            direction="left"
            triggerOnce={true}
            className="aside"
            style={{ background: "transparent", border: "none" }}
        >
            <div className={`aside`}>
                <AsideBackground />
                <Logo data={data} />
                <NavMenu
                    id="desktop"
                    navLinks={headerData.navLinks}
                    language={headerData.language}
                    startLinks={headerData.startLinks}
                />
                <Suspense fallback={<></>}>
                    <LazyThemeSelector />
                </Suspense>
            </div>
        </Fade>
    </header>
);

export default React.memo(HeaderDesk);
