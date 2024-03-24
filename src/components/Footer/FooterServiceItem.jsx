import React from "react";

const FooterServiceItem = ({ title, items }) => {
    return (
        <div className="service-item">
            <h3 className="h3-item">{title}</h3>
            <ul>
                {items &&
                    items.map((item, index) => (
                        <li key={index}>
                            <a href="#">{item}</a>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default FooterServiceItem;
