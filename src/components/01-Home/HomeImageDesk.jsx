import React from "react";
import DesktopImage from "./DesktopImage";
import profile1440 from "../../assets/img/profile-1440.webp";
import { useWindowWidth } from "../../utils/hooks"; // Assurez-vous de spécifier le bon chemin

function HomeImageDesk() {
    const windowWidth = useWindowWidth();
    const isDesktop = windowWidth > 1440;

    return (
        <div className="home-img">
            <div className="leftNB"></div>
            <div className="centerNB">
                {isDesktop && <DesktopImage />}
                {!isDesktop && (
                    <img
                        className="mobile"
                        alt="profile_image"
                        src={profile1440}
                        width={248}
                        height={353}
                    />
                )}
            </div>
            <div className="rightNB"></div>
        </div>
    );
}

export default React.memo(HomeImageDesk);
