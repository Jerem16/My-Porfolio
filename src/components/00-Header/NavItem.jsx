import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import data from "../../assets/data/header.json";

function NavItem({ handleClick, startLinks }) {
    return (
        <li className={`head-btn`}>
            <Link
                rel="nofollow"
                href="home"
                activeClass="active-link"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                to="home"
                onClick={handleClick}
            >
                <span className="icon">
                    <svg
                        viewBox={data.startLinks[0].viewBox}
                        height="1em"
                        xmlSpace="preserve"
                        className="icon-fsa"
                    >
                        <path d={data.startLinks[0].icon} />
                    </svg>
                </span>
                {startLinks[0].text}
            </Link>
        </li>
    );
}

export default React.memo(NavItem);
