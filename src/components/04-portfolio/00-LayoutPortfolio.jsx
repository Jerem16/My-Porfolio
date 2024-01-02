import React from "react";
import PortfolioDataLoader from "./PortfolioDataLoader";
import PortfolioItems from "./PortfolioItems";
import { Fade } from "react-awesome-reveal";
function PortfolioComp({ openModalPortfolio }) {
    return (
        <PortfolioDataLoader>
            {(portfolioData) => (
                <>
                    <Fade direction="right" triggerOnce="true">
                        <div className="row_top">
                            <div className="section-title">
                                <h2>
                                    {
                                        <Fade
                                            cascade
                                            triggerOnce="true"
                                            damping={0.05}
                                        >
                                            {portfolioData.portfolioTitle}
                                        </Fade>
                                    }
                                </h2>
                            </div>
                            <div className="portfolio-heading">
                                <h3>
                                    {
                                        <Fade
                                            cascade
                                            triggerOnce="true"
                                            delay={540}
                                            damping={0.05}
                                        >
                                            {portfolioData.lastProjectsTitle}
                                        </Fade>
                                    }
                                </h3>
                            </div>
                        </div>
                    </Fade>
                    <div className="row-center">
                        <Fade cascade className="service-item" damping={0.2}>
                            <div className="service_container">
                                <PortfolioItems
                                    openModal={openModalPortfolio}
                                />
                            </div>
                        </Fade>
                    </div>
                    <div className="col_end"></div>
                </>
            )}
        </PortfolioDataLoader>
    );
}

export default React.memo(PortfolioComp);
