// HomeImage.jsx
import React from "react";
import HomeImageMob from "./HomeImageMob";
import HomeImageDesk from "./HomeImageDesk";
import { useWindowWidth } from "../../utils/hooks"; // Créer un fichier hooks.js avec le hook useWindowWidth

const HomeImage = () => {
    const windowWidth = useWindowWidth();
    return (
        <div className="blockImg">
            {windowWidth < 1262 ? <HomeImageMob /> : <HomeImageDesk />}
        </div>
    );
};

export default React.memo(HomeImage);
