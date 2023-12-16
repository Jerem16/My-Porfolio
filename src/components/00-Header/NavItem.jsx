import React, { useEffect } from "react";
// eslint-disable-next-line
import { Link, animateScroll as scroll } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { setNavScroll } from "../../redux/reducers/classesSlice";
import data from "../../assets/data/header.json";

function NavItem({ handleClick, startLinks }) {
    // const dispatch = useDispatch();
    const initClass = useSelector((state) => state.classes.navScroll);

    // useEffect(() => {
    //     const activeStartElements = document.querySelectorAll(
    //         ".aside .nav li a.active-link"
    //     );

    //     if (activeStartElements.length === 0) {
    //         dispatch(setNavScroll("home"));
    //     } else {
    //         dispatch(setNavScroll(""));
    //     }
    // }, [dispatch]);

    return (
        <li className={`head-btn`}>
            <Link
                rel="nofollow"
                href={`#${initClass}`}
                activeClass="active-link"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                to={initClass}
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
