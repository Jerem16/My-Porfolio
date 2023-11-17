import React from "react";
// eslint-disable-next-line
import { Link, animateScroll as scroll } from "react-scroll";
import shortid from "shortid";
import LanguageSelector from "./01-LanguageSelector";
import data from "../../assets/data/header.json";
import NavItem from "./NavItem";
import { useSelector } from "react-redux";
function NavMenu({ navLinks, handleClick, language, id, startLinks }) {
    const langAddClass = useSelector((state) => state.classes.menuSwitcher);
    return (
        <div>
            <ul className={`nav ${langAddClass}`} id={id}>
                <NavItem startLinks={startLinks} handleClick={handleClick} />
                {navLinks.map((link, index) => (
                    <li className="head-btn" key={shortid.generate()}>
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
                        </Link>
                    </li>
                ))}
                <LanguageSelector text={language} />
            </ul>
        </div>
    );
}

export default React.memo(NavMenu);
