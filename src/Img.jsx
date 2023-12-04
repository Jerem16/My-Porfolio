import React, { useEffect } from "react";
const ImgComponent = () => {
    useEffect(() => {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 300 && screenWidth <= 620) {
            import("./assets/img/profile-620.webp").then((module) => {
                applyStyles(module);
            });
        }
    }, []);

    const applyStyles = (module) => {
        const linkLow = document.createElement("link");
        linkLow.rel = "preload";
        linkLow.type = "image/webp";
        linkLow.itemprop = "url";
        linkLow.as = "image";
        linkLow.href = module.default;
        linkLow.setAttribute("fetchpriority", "hight");
        document.head.appendChild(linkLow);
    };

    return <></>;
};

export default ImgComponent;
