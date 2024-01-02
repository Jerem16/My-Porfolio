import React from "react";
import MobileImage from "./MobileImage";
import HomeImageDesk from "./HomeImageDesk";
import { useWindowWidth } from "../../utils/hooks";

const HomeImage = () => {
    const windowWidth = useWindowWidth();

    return (
        <div className="blockImg">
            {windowWidth < 620 ? <MobileImage /> : <HomeImageDesk />}
        </div>
    );
};

export default React.memo(HomeImage);
