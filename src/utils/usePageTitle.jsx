import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const usePageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const updatePageTitle = () => {
            let pageTitle = "Accueil - Jérémy Lemaignent"; // Titre par défaut
            if (location.pathname === "/contact") {
                pageTitle = "Contact - Jérémy Lemaignent";
            } else if (location.pathname === "/home") {
                pageTitle = "Accueil - Jérémy Lemaignent";
            } else if (location.pathname === "/blog") {
                pageTitle = "Blog - Jérémy Lemaignent";
            }

            document.title = pageTitle;
        };
        updatePageTitle();
    }, [location.pathname]);
};
