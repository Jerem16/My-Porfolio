import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const usePageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const updatePageTitle = () => {
            let pageTitle = "Accueil - Jérémy Lemaignent"; // Titre par défaut
            let canonicalLink = document.querySelector('link[rel="canonical"]');

            if (location.pathname === "/contact") {
                pageTitle = "Contact - Jérémy Lemaignent";
                canonicalLink.href = "https://jeremy.lemaignent.com/contact";
            } else if (location.pathname === "/") {
                pageTitle = "Accueil - Jérémy Lemaignent";
                canonicalLink.href = "https://jeremy.lemaignent.com/";
            } else if (location.pathname === "/blog") {
                pageTitle = "Blog - Jérémy Lemaignent";
                canonicalLink.href = "https://jeremy.lemaignent.com/blog";
            }

            document.title = pageTitle;
        };
        updatePageTitle();
    }, [location.pathname]);
};
