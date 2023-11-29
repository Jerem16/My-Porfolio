// CssComponent.js

import React, { useEffect } from "react";

const CssComponent = () => {
    useEffect(() => {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1441) {
            const linkLow = document.createElement("link");
            linkLow.rel = "stylesheet";
            linkLow.href = "./4k-1440p-no-critical.css";

            linkLow.setAttribute("fetchpriority", "low");
            document.head.appendChild(linkLow);
        } else if (screenWidth >= 1081 && screenWidth <= 1440) {
            const linkLow = document.createElement("link");
            linkLow.rel = "stylesheet";
            linkLow.href = "./1440p-1080p-no-critical.css";
            linkLow.setAttribute("fetchpriority", "low");
            document.head.appendChild(linkLow);
        } else if (screenWidth >= 621 && screenWidth <= 1080) {
            const linkLow = document.createElement("link");
            linkLow.rel = "stylesheet";
            linkLow.href = "./1080p-675p-no-critical.css";
            linkLow.setAttribute("fetchpriority", "low");
            document.head.appendChild(linkLow);
        } else if (screenWidth >= 300 && screenWidth <= 620) {
            const linkLow = document.createElement("link");
            linkLow.rel = "stylesheet";
            linkLow.href = `${process.env.PUBLIC_URL}675p-320p-no-critical.css`;
            linkLow.setAttribute("fetchpriority", "low");
            document.head.appendChild(linkLow);
        }
    }, []);

    return <></>;
};

export default CssComponent;
