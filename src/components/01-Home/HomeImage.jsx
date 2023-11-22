import React from "react";
import profileWebp1k from "../../assets/img/profile-1k.webp";
import profileWebp2k from "../../assets/img/profile-2k.webp";
import profileWebp4k from "../../assets/img/profile-4k.webp";

import profile620 from "../../assets/img/profile-620.webp";
import profile1440 from "../../assets/img/profile-1440.webp";

function HomeImage() {
    return (
        <div className="blockImg">
            <div className="home-img">
                <div className="leftNB"></div>
                <div className="centerNB">
                    <img
                        className="desktop"
                        alt="profile_image"
                        srcSet={`                        
                        ${profileWebp1k}     1920w,
                        ${profileWebp2k}      2560w,
                        ${profileWebp4k}      3840w,`}
                        sizes="(max-width: 1920px) 100vw, (max-width: 2560px) 100vw, 3840px"
                        width={446}
                        height={465}
                    />
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
                </div>
                <div className="rightNB"></div>
            </div>
        </div>
    );
}

export default React.memo(HomeImage);
