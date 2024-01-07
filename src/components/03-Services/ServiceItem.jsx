import React from "react";
import { Fade } from "react-awesome-reveal";
const ServiceItem = ({ iconClass, title, description, viewBox }) => {
    return (
        <Fade cascade damping={0.1} triggerOnce="true" >
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
        </Fade>
    );
};

export default React.memo(ServiceItem);
