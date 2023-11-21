import React from "react";
import useLangData from "../../utils/useLangData";
import Loader from "../Loader/Loader";

const ContactDataLoader = ({ children }) => {
    const contactData = useLangData("contact.json");

    if (!contactData?.contact) {
        return <></>;
    }

    return children(contactData);
};

export default ContactDataLoader;
