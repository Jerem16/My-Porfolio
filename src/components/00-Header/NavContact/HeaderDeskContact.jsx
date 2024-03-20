import React, { Suspense } from "react";
import NavMenuContact from "./NavMenuContact";
import Logo from "../Logo";
import AsideBackground from "../AsideBackground";
import { Fade } from "react-awesome-reveal";
const LazyThemeSelector = React.lazy(() =>
    import("../ThemeSelector/ThemeSelector")
);

const HeaderDeskContact = ({ data, headerData }) => (
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
                <NavMenuContact
                    id="desktop"
                    scrollLinks={headerData.scrollLinks}
                    language={headerData.language}
                    startLinks={headerData.startLinks}
                    routerLinks={headerData.routerLinks}
                />
                <Suspense fallback={<></>}>
                    <LazyThemeSelector />
                </Suspense>
            </div>
        </Fade>
    </header>
);

export default React.memo(HeaderDeskContact);
