import React from "react";
import MaintenancePage from "./MaintenancePage";
import { Fade } from "react-awesome-reveal";

const MainBlog = () => {
    return (
        <div className="container">
            <div className="row_top">
                <div className="section-title">
                    <h2>
                        {
                            <Fade cascade triggerOnce="true" damping={0.05}>
                                {/* {portfolioData.portfolioTitle} */}
                                Blog
                            </Fade>
                        }
                    </h2>
                </div>
            </div>

            <MaintenancePage />

            <div className="col_end"></div>
        </div>
    );
};

export default MainBlog;
