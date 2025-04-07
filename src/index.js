import React from "react";
import ReactDOM from "react-dom/client";
import ImgComponent from "./Img";
import App from "./App";
import LazyReduxProvider from "./LazyReduxProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <ImgComponent />

        <React.StrictMode>
            <LazyReduxProvider>
                <App />
            </LazyReduxProvider>
        </React.StrictMode>
    </>
);
