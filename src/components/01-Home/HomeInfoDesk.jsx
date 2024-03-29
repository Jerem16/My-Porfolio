import React from "react";
import HomeTitle from "./HomeTitle";
import { Fade } from "react-awesome-reveal";
import BtnContact from "../Button/BtnContact";

const HomeInfoDesk = ({
    welcome,
    presentation,
    titleDescription,
    description,
    additionalDescription,
    quote,
    hireButtonText,
}) => {
    return (
        <div className="home-info">
            <Fade direction="down" triggerOnce="true">
                <HomeTitle welcome={welcome} />
            </Fade>
            <Fade cascade damping={0.2} direction="right" triggerOnce="true">
                <article className="home-card">
                    <span className="home-card_group">
                        <h3 className="presentation_title">
                            <span>{presentation}</span>
                        </h3>
                        <h3 className="presentation_typing">
                            <span className="typing"></span>
                        </h3>
                    </span>
                    <div className="home-card-content">
                        <p className="home-card-content_description">
                            <strong>
                                <span className="home-quote">
                                    <span className="reverse">,,</span>
                                    {titleDescription}
                                </span>
                            </strong>
                            <br />
                            <span className="quote-description">
                                {description}
                            </span>
                        </p>
                        <Fade direction="up" triggerOnce="true">
                            <div className="content-inner">
                                <p className="content-inner_description">
                                    {additionalDescription}
                                </p>
                                <blockquote className="content-inner_quote">
                                    <q>{quote}</q>
                                </blockquote>
                            </div>
                        </Fade>
                    </div>
                </article>
            </Fade>
            <Fade cascade damping={0.5} triggerOnce="false">
                <BtnContact hireButtonText={hireButtonText} />
            </Fade>
        </div>
    );
};

export default React.memo(HomeInfoDesk);
