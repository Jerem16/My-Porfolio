import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import { Link, animateScroll as scroll } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { setNavScroll } from "../../redux/reducers/classesSlice";
import data from "../../assets/data/header.json";

function NavItem({ handleClick, startLinks }) {
    const dispatch = useDispatch();
    const initClass = useSelector((state) => state.classes.navScroll);
    const [renderDelayed, setRenderDelayed] = useState(false);

    useEffect(() => {
        const delayRender = async () => {
            // Ajouter un délai de 2 secondes (2000 millisecondes)
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setRenderDelayed(true);
        };

        delayRender();
    }, []);

    useEffect(() => {
        if (renderDelayed) {
            dispatch(setNavScroll("home"));
        }
    }, [dispatch, renderDelayed]);

    if (!renderDelayed) {
        return null; // Ne rien rendre pendant le délai
    }

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
