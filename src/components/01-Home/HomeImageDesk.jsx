import React, { useState, useEffect } from "react";
import profileWebp1k from "../../assets/img/profile-1k.webp";
import profileWebp4k from "../../assets/img/profile-4k.webp";
import profile1440 from "../../assets/img/profile-1440.webp";

function HomeImageDesk() {
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

    return (
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
