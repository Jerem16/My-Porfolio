import React from "react";
// eslint-disable-next-line
import { Link } from "react-router-dom";

const BtnContact = ({ hireButtonText, onClick }) => {
    return (
        <Link
            // tabIndex="0"
            // rel="nofollow"
            // href="#contact"
            // spy={true}
            // smooth={true}
            // offset={0}
            // duration={500}
            to="/contact"
            className="btn_a hire-me"
            onClick={onClick}
        >
            {hireButtonText}
        </Link>
    );
};

export default React.memo(BtnContact);
