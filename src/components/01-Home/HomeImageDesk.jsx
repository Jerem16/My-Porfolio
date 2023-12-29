import React, { useState, useEffect } from "react";
import profileWebp1k from "../../assets/img/profile-1k.webp";
import profileWebp4k from "../../assets/img/profile-4k.webp";
import profile620 from "../../assets/img/profile-620.webp";
import profile1440 from "../../assets/img/profile-1440.webp";
import { Fade } from "react-awesome-reveal";

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
            <Fade cascade damping={0.1} triggerOnce="true">
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
            </Fade>
        </div>
    );
}

export default React.memo(HomeImageDesk);
