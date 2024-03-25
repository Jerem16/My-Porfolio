import React from "react";
import { Link } from "react-router-dom";

const BtnContact = ({ hireButtonText, onClick }) => {
    return (
        <Link to="/contact" className="btn_a hire-me" onClick={onClick}>
            {hireButtonText}
        </Link>
    );
};

export default React.memo(BtnContact);
