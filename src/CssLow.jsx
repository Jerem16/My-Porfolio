import React, { useEffect, useRef } from "react";
import { useWindowWidth } from "./utils/hooks";

const CssLowComponent = () => {
    const windowWidth = useWindowWidth();
    const cssLink = useRef(null);
    const mediaLink = useRef(null);

    useEffect(() => {
        const screenWidth = window.innerWidth;
        switch (true) {
            case screenWidth >= 300 && screenWidth <= 620:
                mediaLink.current = "(min-width:300px) and (max-width:620px)";
                cssLink.current = "./675p-320p-no-critical.css";
                break;
            case screenWidth >= 621 && screenWidth <= 1080:
                mediaLink.current = "(min-width:621px) and (max-width:1080px)";
                cssLink.current = "./1080p-675p-no-critical.css";
                break;
            case screenWidth >= 1081 && screenWidth <= 1440:
                mediaLink.current = "(min-width:1081px) and (max-width:1440px)";
                cssLink.current = "./1440p-1080p-no-critical.css";
                break;
            default:
                mediaLink.current = "(min-width:1440px)";
                cssLink.current = "./4k-1440p-no-critical.css";
        }

        addCssLink(cssLink.current, mediaLink.current);
    }, [windowWidth]);

    const addCssLink = (cssLink, mediaLink) => {
        const existingLink = document.getElementById(`cssLink${cssLink}`);

        if (!existingLink) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.media = mediaLink;
            link.href = cssLink;
            link.id = `cssLink${cssLink}`;
            link.setAttribute("fetchpriority", "low");
            document.head.appendChild(link);
        }
    };

    return <></>;
};

export default CssLowComponent;
