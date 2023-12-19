import React from "react";
// eslint-disable-next-line
import { Link, animateScroll as scroll } from "react-scroll";

const BtnContact = ({ hireButtonText }) => {
    return (
        <Link
            rel="nofollow"
            href="#contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            to="contact"
            className="btn_a hire-me"
        >
            {hireButtonText}
        </Link>
    );
};

export default React.memo(BtnContact);
