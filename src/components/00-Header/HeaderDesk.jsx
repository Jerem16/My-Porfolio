import React, { Suspense } from "react";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import AsideBackground from "./AsideBackground";
import { Fade } from "react-awesome-reveal";
const LazyThemeSelector = React.lazy(() =>
    import("./ThemeSelector/ThemeSelector")
);

const HeaderDesk = ({ data, headerData }) => (
    <header style={{ position: "fixed" }}>
        <Fade direction="left" triggerOnce={true} className="aside">
            <div
                className={`aside`}
                // style={{ position: "fixed", zIndex: 10000 }}
            >
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
