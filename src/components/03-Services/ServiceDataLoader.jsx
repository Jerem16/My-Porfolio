import React from "react";
import useLangData from "../../utils/useLangData";


const ServiceDataLoader = ({ children }) => {
    const serviceData = useLangData("dataServices.json");

    if (!serviceData?.services) {
        return <></>;
    }

    return children(serviceData);
};

export default ServiceDataLoader;
