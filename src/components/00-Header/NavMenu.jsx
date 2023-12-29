import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import LanguageSelector from "./01-LanguageSelector";
import data from "../../assets/data/header.json";
import NavItem from "./NavItem";
import { useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";

function NavMenu({ navLinks, handleClick, language, id, startLinks }) {
    const langAddClass = useSelector((state) => state.classes.menuSwitcher);
    const [renderDelayed, setRenderDelayed] = useState(false);

    useEffect(() => {
        const delayRender = async () => {
            await new Promise((resolve) => setTimeout(resolve, 250));
            setRenderDelayed(true);
        };

        delayRender();
    }, []);

    if (!renderDelayed) {
        return null;
    }

    return (
        <div>
            <ul className={`nav ${langAddClass}`} id={id}>
                <NavItem startLinks={startLinks} handleClick={handleClick} />
                {navLinks.map((link, index) => (
                    <Fade
                        cascade="false"
                        triggerOnce="true"
                        direction="left"
                        delay={index * 200}
                        key={data.navLinks[index].id}
                    >
                        <li className="head-btn">
                            <Link
                                rel="nofollow"
                                href={`#${data.navLinks[index].to}`}
                                activeClass="active-link"
                                spy={true}
                                smooth={true}
                                offset={data.navLinks[index].offset}
                                duration={500}
                                to={data.navLinks[index].to}
                                onClick={handleClick}
                            >
                                <span className="icon">
                                    <svg
                                        viewBox={data.navLinks[index].viewBox}
                                        height="1em"
                                        xmlSpace="preserve"
                                        className="icon-fsa"
                                    >
                                        <path d={data.navLinks[index].icon} />
                                    </svg>
                                </span>
                                {link.text}
                            </Link>{" "}
                        </li>
                    </Fade>
                ))}

                    <LanguageSelector text={language} />
                
            </ul>
        </div>
    );
}

export default React.memo(NavMenu);
