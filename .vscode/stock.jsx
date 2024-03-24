import { useEffect, useRef } from "react";
import { useWindowWidth } from "./utils/hooks";

const CssLowComponent = () => {
    const windowWidth = useWindowWidth();
    const cssLink = useRef(null);
    const mediaLink = useRef(null);

    useEffect(() => {
        const screenWidth = window.innerWidth;
        let newCssLink = "";
        let newMediaLink = "";

        switch (true) {
            case screenWidth >= 300 && screenWidth <= 620:
                import("./assets/css/675p-320p-no-Critical.css").then(
                    (module) => {
                        applyStyles(module.default);
                    }
                );
                newMediaLink = "(min-width:300px) and (max-width:620px)";
                newCssLink = "./assets/css/675p-320p-no-Critical.css";
                break;
            case screenWidth >= 621 && screenWidth <= 1080:
                import("./assets/css/1080p-675p-no-Critical.css").then(
                    (module) => {
                        applyStyles(module.default);
                    }
                );
                newMediaLink = "(min-width:621px) and (max-width:1080px)";

                newCssLink = "./assets/css/1080p-675p-no-Critical.css";
                break;
            case screenWidth >= 1081 && screenWidth <= 1440:
                import("./assets/css/1440p-1080p-no-Critical.css").then(
                    (module) => {
                        applyStyles(module.default);
                    }
                );
                newMediaLink = "(min-width:1081px) and (max-width:1440px)";
                newCssLink = "./assets/css/1440p-1080p-no-Critical.css";
                break;
            default:
                import("./assets/css/4k-1440p-no-critical.css").then(
                    (module) => {
                        applyStyles(module.default);
                    }
                );
                newMediaLink = "(min-width:1440px)";
                newCssLink = "./assets/css/4k-1440p-no-Critical.css";
        }
        mediaLink.current = newMediaLink;
        cssLink.current = newCssLink;
    }, [windowWidth]);

    const applyStyles = (cssLink) => {
        const existingLink = document.getElementById(`cssLink${cssLink}`);

        if (!existingLink) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.media = mediaLink;
            link.type = "text/css";
            link.href = module;
            link.id = `cssLink${cssLink}`;
            link.setAttribute("fetchpriority", "low");
            document.head.appendChild(link);
        }
    };

    return <></>;
};

export default CssLowComponent;
