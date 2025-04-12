import React from "react";

const DesktopImage = () => (
    <img
        className="desktop"
        alt="profile_image"
        srcSet={`                        
            /profile-1k.webp 1920w,
            /profile-4k.webp 3840w`}
        sizes="(max-width: 1920px) 100vw, 3840px"
        width={446}
        height={465}
        loading="lazy"
        decoding="async"
    />
);

export default React.memo(DesktopImage);
