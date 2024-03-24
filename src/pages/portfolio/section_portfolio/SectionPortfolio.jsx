import React from "react";
import PortfolioComp from "../../../components/04-portfolio/00-LayoutPortfolio";

function SectionPortfolio({ openModalPortfolio }) {
    return (
            <div className="container">
                <PortfolioComp openModalPortfolio={openModalPortfolio} />
            </div>
    );
}

export default React.memo(SectionPortfolio);
