import React from "react";
import { Fade } from "react-awesome-reveal";
const AboutIntro = ({ profileData }) => {
    return (
        <div className="row">
            <div className="about-text">
                <Fade direction="right" triggerOnce="true">
                    <h3>
                        {profileData.profile.presentation}
                        <span>{profileData.profile.jobTitle}</span>
                    </h3>
                </Fade>
                <p>{profileData.profile.description}</p>
            </div>
        </div>
    );
};

export default React.memo(AboutIntro);
