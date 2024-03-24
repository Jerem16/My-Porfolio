import { useEffect, useRef } from "react";
import { useWindowWidth } from "./utils/hooks";
// import css320p from "./assets/css/320pNC.css";
// import css1080p from "./assets/css/1080pNC.css";
// import css1440p from "./assets/css/1440pNC.css";
// import css4Kp from "./assets/css/4kNC.css";

const CssLowComponent = () => {
    const windowWidth = useWindowWidth();
    const mediaLink = useRef(null);

    useEffect(() => {
        const screenWidth = window.innerWidth;
        let newMediaLink = "";

        switch (true) {
            case screenWidth >= 300 && screenWidth <= 620:
                import("./assets/css/320pNC.css").then((module) => {
                    applyStyles(module.default);
                });
                newMediaLink = "(min-width:300px) and (max-width:620px)";
                break;
            case screenWidth >= 621 && screenWidth <= 1080:
                import("./assets/css/1080pNC.css").then((module) => {
                    applyStyles(module.default);
                });
                newMediaLink = "(min-width:621px) and (max-width:1080px)";
                break;
            case screenWidth >= 1081 && screenWidth <= 1440:
                import("./assets/css/1440pNC.css").then((module) => {
                    applyStyles(module.default);
                });
                newMediaLink = "(min-width:1081px) and (max-width:1440px)";
                break;
            default:
                import("./assets/css/4kNC.css").then((module) => {
                    applyStyles(module.default);
                });
                newMediaLink = "(min-width:1440px)";
        }
        mediaLink.current = newMediaLink;
    }, [windowWidth]);

    const applyStyles = (module) => {
        const existingLink = document.getElementById(`cssLink${module}`);

        if (!existingLink) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.media = mediaLink.current; // Utiliser mediaLink.current au lieu de mediaLink
            link.type = "text/css";
            link.href = module;
            link.id = `cssLink${module}`;
            link.setAttribute("fetchpriority", "low");
            document.head.appendChild(link);
        }
    };

    return <></>;
};

export default CssLowComponent;
