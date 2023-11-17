import React, { useState, useEffect, useCallback } from "react";
import Sun from "../../99-Svg_Icon/sun";
import Moon from "../../99-Svg_Icon/moon";

const ThemeDark = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = useCallback(() => {
        setIsDarkMode(!isDarkMode);

        const bodyClassList = document.body.classList;
        bodyClassList.remove(isDarkMode ? "dark" : "light");
        bodyClassList.add(isDarkMode ? "light" : "dark");

        const dayNightIcon = document.querySelector(".day-night svg");
        if (dayNightIcon) {
            dayNightIcon.classList.remove("sun", "moon");
            dayNightIcon.classList.add(isDarkMode ? "sun" : "moon");
        }
    }, [isDarkMode]);

    useEffect(() => {
        if (!document.body.classList.contains("dark")) {
            toggleDarkMode();
        }
        // eslint-disable-next-line
    }, []);
    return (
        <div className="s-icon day-night" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun /> : <Moon />}
        </div>
    );
};

export default ThemeDark;
