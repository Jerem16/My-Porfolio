import React from "react";
import ReactDOM from "react-dom/client";
import ImgComponent from "./Img";
import CssLowComponent from "./CssLow";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ImgComponent />
        <Provider store={store}>
            <App />
            <CssLowComponent />
        </Provider>
    </React.StrictMode>
);
