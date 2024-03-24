import React from "react";
import useTypedEffect from "../../utils/useTypedEffect";

const FooterTypedText = ({ strings }) => {
    useTypedEffect(".typed-text", strings, {
        typeSpeed: 50,
        backSpeed: 15,
        loop: true,
    });

    return <span className="typed-text"></span>;
};

export default React.memo(FooterTypedText);
