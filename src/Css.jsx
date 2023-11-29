import React, { useEffect } from "react";

const CssComponent = () => {
    useEffect(() => {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1441) {
            import("./4k-1440p-no-critical.css").then((module) => {
                const linkLow = document.createElement("link");
                linkLow.rel = "stylesheet";
                linkLow.href = module.default;
                linkLow.setAttribute("fetchpriority", "low");
                document.head.appendChild(linkLow);
            });
        } else if (screenWidth >= 1081 && screenWidth <= 1440) {
            import("./1440p-1080p-no-Critical.css").then((module) => {
                const linkLow = document.createElement("link");
                linkLow.rel = "stylesheet";
                linkLow.href = module.default;
                linkLow.setAttribute("fetchpriority", "low");
                document.head.appendChild(linkLow);
            });
        } else if (screenWidth >= 621 && screenWidth <= 1080) {
            import("./1080p-675p-no-Critical.css").then((module) => {
                const linkLow = document.createElement("link");
                linkLow.rel = "stylesheet";
                linkLow.href = module.default;
                linkLow.setAttribute("fetchpriority", "low");
                document.head.appendChild(linkLow);
            });
        } else if (screenWidth >= 300 && screenWidth <= 620) {
            import("./675p-320p-no-Critical.css").then((module) => {
                const linkLow = document.createElement("link");
                linkLow.rel = "stylesheet";
                linkLow.href = module.default;
                linkLow.setAttribute("fetchpriority", "low");
                document.head.appendChild(linkLow);
            });
        }
    }, []);

    return <></>;
};

export default CssComponent;
