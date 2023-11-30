import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssComponent from "./Css";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <CssComponent />
            <App />
        </Provider>
    </React.StrictMode>
);
