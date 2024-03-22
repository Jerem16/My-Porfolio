import React from "react";
import { Link } from "react-router-dom";

const FooterServiceLink = ({ title, links, handleClick }) => {
    return (
        <div className="service-item">
            <h3 className="h3-item">{title}</h3>
            <ul>
                {links &&
                    links.map((link, index) => (
                        <li key={index}>
                            <Link to={`/${link.to}`} onClick={handleClick}>
                                {link.text}
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default FooterServiceLink;
