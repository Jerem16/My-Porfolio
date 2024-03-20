import React from "react";
import LanguageSelector from "../01-LanguageSelector";
import NavRouter from "../NavRouter";
import { useSelector } from "react-redux";

function NavMenuContact({ handleClick, language, id, routerLinks }) {
    const langAddClass = useSelector((state) => state.classes.menuSwitcher);
    return (
        <div>
            <ul className={`nav ${langAddClass}`} id={id}>
                <NavRouter
                    routerLinks={routerLinks}
                    handleClick={handleClick}
                    initValue={200}
                    value={0}
                />
                <NavRouter
                    routerLinks={routerLinks}
                    handleClick={handleClick}
                    initValue={200}
                    value={1}
                />
                <NavRouter
                    routerLinks={routerLinks}
                    handleClick={handleClick}
                    initValue={200}
                    value={2}
                />
                <LanguageSelector text={language} />
            </ul>
        </div>
    );
}

export default React.memo(NavMenuContact);
