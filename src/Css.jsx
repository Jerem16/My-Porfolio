// VotreComposant.js



// import f4k from "./1440p-1080p.css"
import f4knc from "./4k-1440p-no-critical.css"
// import f1440k from "./1440p-1080p.css"
import f1440knc from "./1440p-1080p-no-Critical.css"
// import f1080k from "./1080p-675p.css"
import f1080knc from "./1080p-675p-no-Critical.css"
// import f320k from "./675p-320p.css"
import f320knc from "./675p-320p-no-Critical.css"
import React, { useEffect } from "react";

const CssComponent = () => {
    const publicUrl = process.env.PUBLIC_URL;
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
            linkLow.href = `${f320knc}`;
            linkLow.setAttribute("fetchpriority", "low");
            document.head.appendChild(linkLow);
        }
    }, []);

    return <></>;
};

export default CssComponent;
