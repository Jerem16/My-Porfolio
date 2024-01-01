import React from "react";
import P from "../99-Svg_Icon/p";
const Logo = ({ data }) => {
    return (
        <div className="logo">
            <a rel="nofollow" href="#home">
                <div>
                    <P />
                    {data.logoSpanTitle}
                </div>
            </a>
        </div>
    );
};

export default Logo;
