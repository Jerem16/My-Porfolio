// LanguageSelector.js
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/reducers/languageSlice";
import { setClass } from "../../redux/reducers/classesSlice";

import LanguageIcon from "../99-Svg_Icon/LanguageIcon";
import LanguageOptions from "./02-LanguageOptions";
import { Fade } from "react-awesome-reveal";
const LanguageSelector = ({ text }) => {
    const dispatch = useDispatch();
    const selectedLanguage = useSelector((state) => state.language.language);
    const activeLinkClass = useSelector((state) => state.classes.menuSwitcher);

    const [activeLanguage, setActiveLanguage] = useState(selectedLanguage);
    const [isSelectorOpen, setIsSelectorOpen] = useState(false);

    const flagRef = useRef(null);

    const toggleSelector = () => {
        setIsSelectorOpen(!isSelectorOpen);
        const newClass =
            activeLinkClass === "langClose" ? "langOpen" : "langClose";

        dispatch(setClass(newClass));
    };

    const changeLanguage = (language) => {
        dispatch(setLanguage(language));
        setActiveLanguage(language);
        setIsSelectorOpen(false);
    };

    return (
        <Fade cascade="false" triggerOnce="true" direction="left" delay={900}>
            <li 
                className={`flag nav-language ${
                    isSelectorOpen ? "open" : "close"
                }`}
                onClick={toggleSelector}
                ref={flagRef}
            >
                <LanguageIcon addClass="lang-icon" />

                <p className="lang" id="lang">
                    {text}
                </p>

                <span className="language-menu">

                        <LanguageOptions
                            isSelectorOpen={isSelectorOpen}
                            changeLanguage={changeLanguage}
                            activeLanguage={activeLanguage}
                        />
                    
                </span>
            </li>
        </Fade>
    );
};

export default React.memo(LanguageSelector);
