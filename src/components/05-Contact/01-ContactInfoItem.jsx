import React from "react";

const ContactInfoItem = ({ viewBox, icon, title, content }) => {
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
            <p>{content}</p>
        </div>
    );
};

export default React.memo(ContactInfoItem);
