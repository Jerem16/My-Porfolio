import React from "react";
import Cog from "../../99-Svg_Icon/cog";

const ThemeToggleButton = ({ onClick, children }) => (
    <div className="s-icon style-switcher-toggler" onClick={onClick}>
        <Cog />
    </div>
);

export default ThemeToggleButton;
