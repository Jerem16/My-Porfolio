import React from "react";
import profileWebp1k from "../../assets/img/profile-1k.webp";
import profileWebp4k from "../../assets/img/profile-4k.webp";

const DesktopImage = () => (
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
);

export default React.memo(DesktopImage);
