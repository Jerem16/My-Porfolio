import React, { useEffect } from "react";
import { useWindowWidth } from "./utils/hooks";

const ImgComponent = () => {
    const windowWidth = useWindowWidth();

    useEffect(() => {
        const loadWebpImage = async (imagePath) => {
            try {
                const module = await import(`.${imagePath}`);
                applyStyles(module.default);
            } catch (error) {
                console.error("Error loading image:", error);
            }
        };

        if (windowWidth >= 300 && windowWidth <= 620) {
            loadWebpImage("/assets/img/profile-620.webp");
        } else if (windowWidth > 620 && windowWidth <= 1440) {
            loadWebpImage("/assets/img/profile-1440.webp");
        } else if (windowWidth > 1440 && windowWidth <= 1920) {
            loadWebpImage("/assets/img/profile-1k.webp");
        } else if (windowWidth > 1920) {
            loadWebpImage("/assets/img/profile-4k.webp");
        }
    }, [windowWidth]);

    const applyStyles = (imageUrl) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.type = "image/webp";
        link.as = "image";
        link.href = imageUrl;
        link.setAttribute("fetchpriority", "high");
        document.head.appendChild(link);
    };

    return <></>;
};

export default ImgComponent;
