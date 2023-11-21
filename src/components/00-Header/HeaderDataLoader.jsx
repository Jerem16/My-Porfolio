import React from "react";
import useLangData from "../../utils/useLangData";

const HeaderDataLoader = ({ children }) => {
    const headerData = useLangData("headerNav.json");

    if (!headerData) {
        return <></>;
    }

    return children(headerData);
};

export default React.memo(HeaderDataLoader);
