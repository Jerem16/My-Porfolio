import React from "react";
import HomeTitle from "./HomeTitle";
import BtnContact from "../Button/BtnContact";

const HomeInfoMob = ({
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
            <HomeTitle welcome={welcome} />
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
                        <span className="quote-description">{description}</span>
                    </p>
                    <div className="content-inner">
                        <p className="content-inner_description">
                            {additionalDescription}
                        </p>
                        <blockquote className="content-inner_quote">
                            <q>{quote}</q>
                        </blockquote>
                    </div>
                </div>
            </article>
            <BtnContact hireButtonText={hireButtonText} />
        </div>
    );
};

export default React.memo(HomeInfoMob);
