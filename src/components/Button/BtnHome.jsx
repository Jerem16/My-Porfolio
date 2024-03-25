import React from "react";
import { Link } from "react-router-dom";

const BtnHome = ({ hireButtonText, onClick }) => {
    return (
        <Link
            to="/"
            className="btn_a hire-me"
            onClick={onClick}
        >
            {hireButtonText}
        </Link>
    );
};

export default React.memo(BtnHome);
