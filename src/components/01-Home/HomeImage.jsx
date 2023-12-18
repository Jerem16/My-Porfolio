import React, { useState, useEffect } from "react";
import profileWebp1k from "../../assets/img/profile-1k.webp";
import profileWebp4k from "../../assets/img/profile-4k.webp";
import profile620 from "../../assets/img/profile-620.webp";
import profile1440 from "../../assets/img/profile-1440.webp";

function HomeImage() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1440);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1440);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        // Fonction pour générer dynamiquement le chemin de l'image en fonction de la résolution de l'écran
        const getImagePath = () => (isDesktop ? profileWebp4k : profile620);

        // Créer une balise d'image avec fetchPriority="high"
        const image = new Image();
        image.src = getImagePath();
        image.fetchPriority = "high";

        // Ajouter la balise d'image à la tête du document
        document.head.appendChild(image);

        // Nettoyer la balise d'image lors du démontage du composant
        return () => {
            document.head.removeChild(image);
        };
    }, [isDesktop]);

    return (
        <div className="blockImg">
            <div className="home-img">
                <div className="leftNB"></div>
                <div className="centerNB">
                    {isDesktop && (
                        <img
                            className="desktop"
                            alt="profile_image"
                            srcSet={`                        
                                ${profileWebp1k}     1920w,
                                ${profileWebp4k}      3840w,`}
                            sizes="(max-width: 1920px) 100vw, 3840px"
                            width={446}
                            height={465}
                        />
                    )}
                    {!isDesktop && (
                        <img
                            className="mobile"
                            alt="profile_image"
                            srcSet={`                        
                                ${profile1440}     1440w,
                                ${profile620}      620w,`}
                            sizes="(max-width: 1440px) 100vw, 620px"
                            width={140}
                            height={200}
                        />
                    )}
                </div>
                <div className="rightNB"></div>
            </div>
        </div>
    );
}

export default React.memo(HomeImage);
