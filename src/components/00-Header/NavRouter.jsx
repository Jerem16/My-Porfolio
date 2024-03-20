import React from "react";
import { Link } from "react-router-dom";
import data from "../../assets/data/header.json";
import { Fade } from "react-awesome-reveal";

function NavRouter({ handleClick, routerLinks, value, initValue }) {
    return (
        <Fade
            cascade="false"
            triggerOnce="true"
            direction="left"
            delay={initValue + value * 100}
        >
            <li className={`head-btn`}>
                <Link
                    to={`/${data.routerLinks[value].to}`}
                    onClick={handleClick}
                >
                    <span className="icon">
                        <svg
                            viewBox={data.routerLinks[value].viewBox}
                            height="1em"
                            xmlSpace="preserve"
                            className="icon-fsa"
                        >
                            <path d={data.routerLinks[value].icon} />
                        </svg>
                    </span>
                    {routerLinks[value].text}
                </Link>
            </li>
        </Fade>
    );
}

export default React.memo(NavRouter);
