import React from "react";
import FooterNAvIcons from "./FooterNAvIcons";

const FooterFollowUs = ({ followUs }) => {
    return (
        <div className="service-item center-footer">
            <p className="h3-item">{followUs}</p>
            <FooterNAvIcons />
        </div>
    );
};

export default FooterFollowUs;
