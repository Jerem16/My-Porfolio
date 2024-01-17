import React, { useEffect } from "react";

const ImgComponent = () => {
    useEffect(() => {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 300 && screenWidth <= 620) {
            import("./assets/img/profile-620.webp").then((module) => {
                applyStyles(module.default);
            });
        } else if (screenWidth > 620 && screenWidth <= 1440) {
            import("./assets/img/profile-1440.webp").then((module) => {
                applyStyles(module.default);
            });
        } else if (screenWidth > 1440 && screenWidth <= 1920) {
            import("./assets/img/profile-1k.webp").then((module) => {
                applyStyles(module.default);
            });
        } else if (screenWidth > 1920) {
            import("./assets/img/profile-4k.webp").then((module) => {
                applyStyles(module.default);
            });
        }
    }, []);

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
