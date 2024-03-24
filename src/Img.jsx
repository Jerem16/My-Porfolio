import { useEffect, useRef } from "react";
import { useWindowWidth } from "./utils/hooks";

const applyStyles = (imageUrl, mediaLink, module) => {
    const existingImg = document.getElementById(`cssLink${imageUrl}`);

    if (!existingImg) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.media = mediaLink;
        link.type = "image/webp";
        link.as = "image";
        link.href = module;
        link.id = `cssLink${imageUrl}`;
        link.setAttribute("fetchpriority", "high");
        document.head.appendChild(link);
    }
};

const ImgComponent = () => {
    const windowWidth = useWindowWidth();
    const imageUrl = useRef(null);
    const mediaLink = useRef(null);

    useEffect(() => {
        const screenWidth = window.innerWidth;
        let newImageUrl = "";
        let newMediaLink = "";
        switch (true) {
            case screenWidth >= 300 && screenWidth <= 620:
                import("./assets/img/profile-620.webp").then((module) => {
                    newImageUrl = module.default;
                    newMediaLink = "(min-width:300px) and (max-width:620px)";
                    applyStyles(newImageUrl, newMediaLink, module.default);
                });
                break;
            case screenWidth >= 621 && screenWidth <= 1444:
                import("./assets/img/profile-1440.webp").then((module) => {
                    newImageUrl = module.default;
                    newMediaLink = "(min-width:621px) and (max-width:1444px)";
                    applyStyles(newImageUrl, newMediaLink, module.default);
                });
                break;
            case screenWidth >= 1445 && screenWidth <= 1920:
                import("./assets/img/profile-1k.webp").then((module) => {
                    newImageUrl = module.default;
                    newMediaLink = "(min-width:1445px) and (max-width:1920px)";
                    applyStyles(newImageUrl, newMediaLink, module.default);
                });
                break;
            case screenWidth >= 1920:
                import("./assets/img/profile-4k.webp").then((module) => {
                    newImageUrl = module.default;
                    newMediaLink = "(min-width:1920px)";
                    applyStyles(newImageUrl, newMediaLink, module.default);
                });
            default:
                break;
        }
        mediaLink.current = newMediaLink;
        imageUrl.current = newImageUrl;
    }, [windowWidth]);

    useEffect(() => {
        // Cleanup function to remove dynamically added link elements
        return () => {
            const existingImg = document.getElementById(
                `cssLink${imageUrl.current}`
            );
            if (existingImg) {
                existingImg.remove();
            }
        };
    }, []);

    return <></>;
};

export default ImgComponent;
