import React from "react";
import { Fade } from "react-awesome-reveal";

const SubContact = ({ data }) => {
    return (
        <div className="contact-content">
            <p className="contact-sub-title">
                {data.contact["send-email-sub-title"]}
            </p>
            <h3 className="contact-title">
                {
                    <Fade
                        cascade
                        delay={1040}
                        triggerOnce="true"
                        damping={0.015}
                    >
                        {data.contact["send-email-title"]}
                    </Fade>
                }
            </h3>
            <div className="contact-sub-title">
                {
                    <Fade
                        cascade
                        delay={1540}
                        triggerOnce="true"
                        damping={0.05}
                    >
                        (-----)
                    </Fade>
                }
            </div>
        </div>
    );
};

export default React.memo(SubContact);
