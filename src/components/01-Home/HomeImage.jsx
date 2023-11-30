import React from "react";
import profileWebp1k from "../../assets/img/profile-1k.webp";
// import profileWebp4k from "../../../public/profile-4k.webp";

// import profile620 from "../../../public/profile-620.webp";
import profile1440 from "../../assets/img/profile-1440.webp";

function HomeImage() {
    const profileWebp4k = process.env.PUBLIC_URL + "/profile-4k.webp";
    const profile620 = process.env.PUBLIC_URL + "/profile-620.webp";
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
                        ${profileWebp4k}      3840w,`}
                        sizes="(max-width: 1920px) 100vw, 3840px"
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
