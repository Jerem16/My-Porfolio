import React from "react";
import useTypedEffect from "../../utils/useTypedEffect";

const TypedText = ({ data }) => {
    const { typedStrings } = data.home;

    useTypedEffect(".typing", typedStrings, {
        typeSpeed: 80,
        backSpeed: 15,
        loop: true,
    });

    return null;
};

export default React.memo(TypedText);
