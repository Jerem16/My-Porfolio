import { useEffect, useRef } from "react";
import { useWindowWidth } from "./utils/hooks";

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
                newImageUrl = "./assets/img/profile-620.webp";
                newMediaLink = "(min-width:300px) and (max-width:620px)";
                break;
            case screenWidth >= 621 && screenWidth <= 1444:
                newImageUrl = "./assets/img/profile-1440.webp";
                newMediaLink = "(min-width:621px) and (max-width:1444px)";
                break;
            case screenWidth >= 1445 && screenWidth <= 1920:
                newImageUrl = "./assets/img/profile-1k.webp";
                newMediaLink = "(min-width:1445px) and (max-width:1920px)";
                break;
            default:
                newImageUrl = "./assets/img/profile-4k.webp";
                newMediaLink = "(min-width:1920px)";
        }
        mediaLink.current = newMediaLink;
        imageUrl.current = newImageUrl;
        applyStyles(imageUrl.current, mediaLink.current);
    }, [windowWidth]);

    const applyStyles = (imageUrl, mediaLink) => {
        const existingImg = document.getElementById(`cssLink${imageUrl}`);

        if (!existingImg) {
            const link = document.createElement("link");
            link.rel = "preload";
            link.media = mediaLink;
            link.type = "image/webp";
            link.as = "image";
            link.href = imageUrl;
            link.id = `cssLink${imageUrl}`;
            link.setAttribute("fetchpriority", "high");
            document.head.appendChild(link);
        }
    };

    return <></>;
};

export default ImgComponent;
