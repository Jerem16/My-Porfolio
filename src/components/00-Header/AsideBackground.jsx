import React from "react";

const AsideBackground = () => {
    return (
        <div className="aside_bg">
            <div className="aside_bg_top"></div>
            <div className="aside_bg_center"></div>
            <div className="aside_bg_bottom"></div>
        </div>
    );
};

export default React.memo(AsideBackground);
