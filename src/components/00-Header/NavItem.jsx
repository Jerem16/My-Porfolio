import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Fade } from "react-awesome-reveal";
function NavItem({ handleClick, startLinks, offset, href, to, viewBox, icon, index}) {
    return (
        <Fade
            cascade="false"
            triggerOnce="true"
            direction="left"
            delay={index * 200}
        >
            <li className="head-btn">
                <Link
                    rel="nofollow"
                    href={`#${href}`}
                    activeClass="active-link"
                    
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={500}
                    to={to}
                    onClick={handleClick}
                >
                    <span className="icon">
                        <svg
                            viewBox={viewBox}
                            height="1em"
                            xmlSpace="preserve"
                            className="icon-fsa"
                        >
                            <path d={icon} />
                        </svg>
                    </span>
                    {startLinks.text}
                </Link>
            </li>{" "}
        </Fade>
    );
}

export default React.memo(NavItem);
