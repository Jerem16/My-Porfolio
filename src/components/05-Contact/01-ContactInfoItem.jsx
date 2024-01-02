import React from "react";
import { Fade } from "react-awesome-reveal";
const ContactInfoItem = ({ viewBox, icon, title, content, refTitle }) => {
    let link;
    if (refTitle === "Phone") {
        link = <a href={`tel:${content}`}>{content}</a>;
    } else if (refTitle === "Website") {
        link = (
            <a
                href={`http://${content}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {content}
            </a>
        );
    } else if (refTitle === "Email") {
        link = <a href={`mailto:${content}`}>{content}</a>;
    } else if (refTitle === "City") {
        link = (
            <a
                href={`https://www.google.com/maps/place/${encodeURIComponent(
                    content
                )}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {content}
            </a>
        );
    }

    return (
        <div className="contact-info-item">
            <span className="icon">
                <Fade direction="down" triggerOnce="true" delay={200}>
                    <svg
                        viewBox={viewBox}
                        height="1em"
                        xmlSpace="preserve"
                        className="icon-fsa"
                    >
                        <path d={icon} />
                    </svg>
                </Fade>
            </span>
            <h4>
                {
                    <Fade
                        cascade
                        delay={400}
                        triggerOnce="true"
                        damping={0.05}
                    >
                        {title}
                    </Fade>
                }
            </h4>
            <Fade direction="up" triggerOnce="true" delay={600}>
                <p>{link || content}</p>
            </Fade>
        </div>
    );
};

export default React.memo(ContactInfoItem);
