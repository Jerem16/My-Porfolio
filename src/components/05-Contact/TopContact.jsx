import React from "react";
import { Fade } from "react-awesome-reveal";
const TopContact = ({ data }) => {
    return (
        <div className="row_top">
            <div className="section-title">
                <h1>
                    <Fade cascade triggerOnce={true} damping={0.05} delay={350}>
                        {data.contact["section-title"]}
                    </Fade>
                </h1>
                <div className="contact-prez">
                    <p className="prez1">{data.contact["contact-prez"]}</p>
                    <p>{data.contact["contact-sub-prez"]}</p>
                    <br />
                    <p className="prez1">{data.contact["contact-prez-1"]}</p>
                    <p>{data.contact["contact-prez-2"]}</p>
                </div>
            </div>

            <Fade direction="up" triggerOnce="true">
                <div className="contact-content ">
                    <h3 className="contact-title">
                        {data.contact["contact-title"]}
                    </h3>
                    <div className="contact-sub-title">
                        {
                            <Fade
                                cascade
                                triggerOnce="true"
                                delay={540}
                                damping={0.025}
                            >
                                {data.contact["contact-sub-title"]}
                            </Fade>
                        }
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default React.memo(TopContact);
