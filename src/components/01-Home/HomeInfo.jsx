import React from "react";
import HomeInfoMob from "./HomeInfoMob";
import HomeInfoDesk from "./HomeInfoDesk";
import { useWindowWidth } from "../../utils/hooks";

const HomeInfo = (props) => {
    const windowWidth = useWindowWidth();

    const commonProps = {
        welcome: props.welcome,
        presentation: props.presentation,
        titleDescription: props.titleDescription,
        description: props.description,
        additionalDescription: props.additionalDescription,
        quote: props.quote,
        hireButtonText: props.hireButtonText,
    };

    return (
        <div className="home-info">
            {windowWidth < 1261 ? (
                <HomeInfoMob {...commonProps} />
            ) : (
                <HomeInfoDesk {...commonProps} />
            )}
        </div>
    );
};

export default React.memo(HomeInfo);
