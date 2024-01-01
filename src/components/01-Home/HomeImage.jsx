// HomeImage.jsx
import React from "react";
import MobileImage from "./MobileImage";
import HomeImageDesk from "./HomeImageDesk";
import { useWindowWidth } from "../../utils/hooks"; // Créer un fichier hooks.js avec le hook useWindowWidth

const HomeImage = () => {
    const windowWidth = useWindowWidth();

    return (
        <div className="blockImg">
            {windowWidth < 620 ? <MobileImage /> : <HomeImageDesk />}
        </div>
    );
};

export default React.memo(HomeImage);
