import React, { useEffect, useState } from "react";
import LanguageSelector from "../01-LanguageSelector";
import data from "../../../assets/data/header.json";
import NavItem from "../NavItem";
import NavRouter from "../NavRouter";
import { useSelector } from "react-redux";


function NavMenuHome({
    scrollLinks,
    handleClick,
    language,
    id,
    startLinks,
    routerLinks,
}) {
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
                {scrollLinks.map((link, index) => (
                    <NavItem
                        index={index}
                        key={data.scrollLinks[index].id}
                        startLinks={link}
                        handleClick={handleClick}
                        icon={data.scrollLinks[index].icon}
                        viewBox={data.scrollLinks[index].viewBox}
                        to={data.scrollLinks[index].to}
                        offset={data.scrollLinks[index].offset}
                        href={data.scrollLinks[index].to}
                    />
                ))}
                <NavRouter
                    routerLinks={routerLinks}
                    handleClick={handleClick}
                    initValue={600}
                    value={1}
                />
                <NavRouter
                    routerLinks={routerLinks}
                    handleClick={handleClick}
                    initValue={600}
                    value={2}
                />
                <LanguageSelector text={language} />
            </ul>
        </div>
    );
}

export default React.memo(NavMenuHome);
