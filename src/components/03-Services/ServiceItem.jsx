import React from "react";

const ServiceItem = ({ iconClass, title, description, viewBox }) => {
    return (
        <div className="service-item-inner">
            <div className="icon">
                <svg
                    viewBox={viewBox}
                    height="1em"
                    xmlSpace="preserve"
                    className="icon-fsa"
                >
                    <path d={iconClass} />
                </svg>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default React.memo(ServiceItem);
