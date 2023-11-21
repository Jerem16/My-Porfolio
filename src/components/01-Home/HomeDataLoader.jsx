import React from "react";
import useLangData from "../../utils/useLangData";
import Loader from "../Loader/Loader";

const HomeDataLoader = ({ children }) => {
    const homeData = useLangData("home.json");

    if (!homeData?.home || !homeData) {
        return <></>;
    }

    const typing = homeData.home;

    return children(homeData, typing);
};

export default HomeDataLoader;

