import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ImgComponent from "./Img";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <ImgComponent /> */}
            <App />
        </Provider>
    </React.StrictMode>
);
