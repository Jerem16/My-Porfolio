import React from "react";
import DesktopImage from "./DesktopImage";
import { useWindowWidth } from "../../utils/hooks"; // Chemin à ajuster si besoin

function HomeImageDesk() {
    const windowWidth = useWindowWidth();
    const isDesktop = windowWidth > 1444;

    return (
        <div className="home-img">
            <div className="leftNB"></div>
            <div className="centerNB">
                {isDesktop ? (
                    <DesktopImage />
                ) : (
                    <img
                        className="mobile"
                        alt="profile_image"
                        src="/profile-1440.webp"
                        width={248}
                        height={353}
                        loading="lazy"
                        decoding="async"
                    />
                )}
            </div>
            <div className="rightNB"></div>
        </div>
    );
}

export default React.memo(HomeImageDesk);
