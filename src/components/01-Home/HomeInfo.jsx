import React, { useRef } from "react";
import HomeInfoMob from "./HomeInfoMob";
import HomeInfoDesk from "./HomeInfoDesk";
import TypedText from "./TypedText";
import { useWindowWidth } from "../../utils/hooks";
const HomeInfo = (props) => {
    const windowWidth = useWindowWidth();
    const typedRef = useRef(null);

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
                <>
                    <HomeInfoMob {...commonProps} />
                    <TypedText
                        data={props.homeData}
                        typedRef={typedRef}
                        {...commonProps}
                    />
                </>
            ) : (
                <>
                    <HomeInfoDesk {...commonProps} />
                    <TypedText
                        data={props.homeData}
                        typedRef={typedRef}
                        {...commonProps}
                    />
                </>
            )}
        </div>
    );
};

export default React.memo(HomeInfo);
