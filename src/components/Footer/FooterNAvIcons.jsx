import React from "react";
// eslint-disable-next-line
import { Link, animateScroll as scroll } from "react-scroll";
import data from "../../assets/data/footer.json";
import { Fade } from "react-awesome-reveal";

function FooterNAvIcons({ handleClick, startLinks }) {
    return (
        <>
            {data.socialLinks.map((link, index) => (
                <Fade
                    cascade={false}
                    triggerOnce={true}
                    direction="left"
                    delay={index * 200}
                    key={data.socialLinks[index].id}
                    style={{ display: "inline-block" }}
                >
                    <a
                        rel="nofollow noreferrer"
                        href={`${data.socialLinks[index].to}`}
                        to={data.socialLinks[index].to}
                        onClick={handleClick}
                        target="_blank"
                    >
                        <div className="footer-icon-container box-bd-color">
                            <svg
                                viewBox={data.socialLinks[index].viewBox}
                                height="1em"
                                xmlSpace="preserve"
                                className="icon-footer "
                            >
                                <path d={data.socialLinks[index].icon} />
                                <circle
                                    cx={data.socialLinks[index].cx}
                                    cy={data.socialLinks[index].cy}
                                    r={data.socialLinks[index].r}
                                />
                                <path d={data.socialLinks[index].icon2} />
                            </svg>
                        </div>
                        <span className="visually-hidden">
                            {data.socialLinks[index].text}
                        </span>
                    </a>
                </Fade>
            ))}
        </>
    );
}

export default React.memo(FooterNAvIcons);
