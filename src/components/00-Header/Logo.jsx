import React from "react";
import P from "../99-Svg_Icon/p";
import { Link, animateScroll as scroll } from "react-scroll";
const Logo = ({ data, handleClick }) => {
    return (
        <div className="logo">
            <Link
                rel="nofollow"
                href={`#home`}
                activeClass="active-link"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                to="home"
                onClick={handleClick}
            >
                <div>
                    <P />
                    {data.logoSpanTitle}
                </div>
            </Link>
        </div>
    );
};

export default React.memo(Logo);
