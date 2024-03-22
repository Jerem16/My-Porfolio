import React from "react";
import useLangData from "../../utils/useLangData";

const FooterDataLoader = ({ children }) => {
    const footerData = useLangData("dataFooter.json");

    if (!footerData) {
        return <></>;
    }

    return children(footerData);
};

export default React.memo(FooterDataLoader);
