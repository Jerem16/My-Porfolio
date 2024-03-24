import { useEffect, useRef } from "react";
import { useWindowWidth } from "./utils/hooks";

const ImgComponent = () => {
    const windowWidth = useWindowWidth();
    const imageUrl = useRef(null);

    useEffect(() => {
        const screenWidth = window.innerWidth;
        let newImageUrl = "";
        switch (true) {
            case screenWidth >= 300 && screenWidth <= 620:
                newImageUrl = "./assets/img/profile-620.webp";
                break;
            case screenWidth > 620 && screenWidth <= 1440:
                newImageUrl = "./assets/img/profile-1440.webp";
                break;
            case screenWidth > 1440 && screenWidth <= 1920:
                newImageUrl = "./assets/img/profile-1k.webp";
                break;
            default:
                newImageUrl = "./assets/img/profile-4k.webp";
        }

        imageUrl.current = newImageUrl;
        applyStyles(imageUrl.current);
    }, [windowWidth]);

    const applyStyles = (imageUrl) => {
        const existingImg = document.getElementById(`cssLink${imageUrl}`);

        if (!existingImg) {
            const link = document.createElement("link");
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
