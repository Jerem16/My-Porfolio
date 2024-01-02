import React from "react";
import portfolio_img from "../../assets/data/portfolio_img.json";

import { Fade } from "react-awesome-reveal";

const PortfolioItems = React.memo(({ openModal }) => {
    return (
        <>
            {portfolio_img.map((item, index) => {
                const imagePath1 = require(`../../assets/img/webSite/${item.imagePath1}`);
                const imagePath2 = require(`../../assets/img/webSite/${item.imagePath2}`);
                const imagePath3 = require(`../../assets/img/webSite/${item.imagePath3}`);

                const srcSet = `${imagePath1} 1920w, ${imagePath2} 2560w, ${imagePath3} 3840w`;

                return (
                    <Fade
                        cascade="false"
                        triggerOnce="true"
                        direction="up"
                        delay={index * 150}
                        key={item.id}
                        className="service-item"
                    >
                        <div
                            className="portfolio-item-inner shadow-dark"
                            onClick={() => openModal(item)}
                            key={item.id}
                        >
                            <img
                                alt={item.title}
                                srcSet={srcSet}
                                sizes="(max-width: 1920px) 100vw, (max-width: 2560px) 100vw, 3840px"
                                width={405}
                                height={270}
                                loading="lazy"
                            />
                        </div>
                    </Fade>
                );
            })}
        </>
    );
});

export default PortfolioItems;
