import React from "react";
import profile620 from "../../assets/img/profile-620.webp";
import profile1440 from "../../assets/img/profile-1440.webp";

function HomeImageMob() {
    return (
        <div className="home-img">
            <div className="leftNB"></div>
            <div className="centerNB">
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
    );
}

export default React.memo(HomeImageMob);
