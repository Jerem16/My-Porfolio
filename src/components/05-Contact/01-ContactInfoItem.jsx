import React from "react";

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
                <svg
                    viewBox={viewBox}
                    height="1em"
                    xmlSpace="preserve"
                    className="icon-fsa"
                >
                    <path d={icon} />
                </svg>
            </span>
            <h4>{title}</h4>
            <p className="btn">{link || content}</p>
        </div>
    );
};

export default React.memo(ContactInfoItem);
