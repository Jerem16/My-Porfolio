import React from "react";
import profile620 from "../../assets/img/profile-620.webp";

const MobileImage = () => (
    <div className="home-img">
        <div className="leftNB"></div>
        <div className="centerNB">
            <img
                className="mobile"
                alt="profile_image"
                src={profile620}
                width={140}
                height={200}
            />
        </div>
        <div className="rightNB"></div>
    </div>
);

export default React.memo(MobileImage);
