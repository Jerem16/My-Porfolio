import React from "react";
import PortfolioComp from "../../../components/04-portfolio/00-LayoutPortfolio";

function SectionPortfolio({ openModalPortfolio }) {
    return (
        <section className="portfolio section" id="portfolio">
            <div className="container">
                <PortfolioComp openModalPortfolio={openModalPortfolio} />
            </div>
        </section>
    );
}

export default React.memo(SectionPortfolio);
