import React, { useEffect } from "react";
import Typed from "../../utils/typed";

const FooterTypedText = ({ strings }) => {
    useEffect(() => {
        const options = {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 15,
            loop: true,
        };

        const typed = new Typed(".typed-text", options);

        return () => {
            typed.destroy();
        };
    }, [strings]);

    return <span className="typed-text"></span>;
};

export default FooterTypedText;
