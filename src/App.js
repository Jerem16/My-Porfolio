import React from "react";
import ImgComponent from "./Img";
import { useSelector } from "react-redux";
import MainPortfolio from "./pages/portfolio";
import NavToggler from "./components/00-Header/NavToggler";
function App() {
    const currentTheme = useSelector((state) => state.theme.currentTheme);
    const lightTheme = useSelector((state) => state.theme.lightTheme);
    const darkTheme = useSelector((state) => state.theme.darkTheme);
    const darkedTheme = useSelector((state) => state.theme.darkedTheme);
    const navToggler = useSelector((state) => state.classes.addClass);

    const themeClasses = {
        "--skin-color": currentTheme,
        "--skin-color-light": lightTheme,
        "--skin-color-dark": darkTheme,
        "--skin-color-darked": darkedTheme,
    };

    return (
        <>
            <ImgComponent />
            <div className={`${navToggler}`} id="top" style={themeClasses}>
                <NavToggler />
                <MainPortfolio />
            </div>
        </>
    );
}

export default App;
