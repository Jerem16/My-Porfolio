import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    changeTheme,
    changeLightTheme,
    changeDarkTheme,
    changeDarkedTheme,
} from "../../../redux/reducers/themeSlice";
import ThemeToggleButton from "./ThemeToggleButton";
import ThemeDark from "./ThemeDark";

const themeColors = [
    {
        id: "z1",
        themeColor: "#ec1839",
        lightTheme: "#ea5b71",
        darkTheme: "#a1172c",
        darkedTheme: "#581620",
    },
    {
        id: "z2",
        themeColor: "#fa5b0f",
        lightTheme: "#ed8655",
        darkTheme: "#aa4311",
        darkedTheme: "#5c2b13",
    },
    {
        id: "z3",
        themeColor: "#37b182",
        lightTheme: "#6fbd9f",
        darkTheme: "#2b7a5c",
        darkedTheme: "#204537",
    },
    {
        id: "z4",
        themeColor: "#1854b4",
        lightTheme: "#5b81bf",
        darkTheme: "#173e7c",
        darkedTheme: "#162946",
    },
    {
        id: "z5",
        themeColor: "#f021b2",
        lightTheme: "#e760be",
        darkTheme: "#a31d7b",
        darkedTheme: "#591946",
    },
];

const ThemeSelector = () => {
    const dispatch = useDispatch();

    const [isSelectorOpen, setIsSelectorOpen] = useState(false);

    const toggleSelector = () => {
        setIsSelectorOpen(!isSelectorOpen);
    };

    const changeToTheme = (themeColor, lightTheme, darkTheme, darkedTheme) => {
        dispatch(changeTheme(themeColor));
        dispatch(changeLightTheme(lightTheme));
        dispatch(changeDarkTheme(darkTheme));
        dispatch(changeDarkedTheme(darkedTheme));
        setIsSelectorOpen(false);
    };

    return (
        <div className="switcher-container">
            <div className="switcher-block">
                <ThemeToggleButton onClick={toggleSelector} />
                <ThemeDark />
            </div>
            <div
                className={`style-switcher switcher-color ${
                    isSelectorOpen ? "open" : ""
                }`}
            >
                <h4>Theme Colors</h4>
                <div className="colors">
                    {themeColors.map((color, index) => (
                        <span
                            key={color.id}
                            className={`color-${index + 1}`}
                            onClick={() =>
                                changeToTheme(
                                    color.themeColor,
                                    color.lightTheme,
                                    color.darkTheme,
                                    color.darkedTheme
                                )
                            }
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default React.memo(ThemeSelector);
