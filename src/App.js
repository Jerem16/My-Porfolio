import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ImgComponent from "./Img";
import { useSelector } from "react-redux";
import MainPortfolio from "./pages/portfolio";
import Contact from "./pages/contact";
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
        <BrowserRouter>
            <ImgComponent />
            <div className={`${navToggler}`} id="top" style={themeClasses}>
                <NavToggler />
                {/* <MainPortfolio /> */}
                <Routes>
                    <Route path="/" element={<MainPortfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Contact />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
