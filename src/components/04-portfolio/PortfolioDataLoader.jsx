import React from "react";
import useLangData from "../../utils/useLangData";
import Loader from "../Loader/Loader";

const PortfolioDataLoader = ({ children }) => {
    const portfolioData = useLangData("portfolioContent.json");

    if (!portfolioData) {
        return <></>;
    }

    return children(portfolioData);
};

export default PortfolioDataLoader;
