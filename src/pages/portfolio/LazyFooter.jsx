import React, { lazy } from "react";
import LazyGhostComponent from "./LazyGhostComponent";
import SectionFooter from "../../components/Footer/Footer";


const LazyFooter = () => {
    return (
        <LazyGhostComponent>
            <SectionFooter />
        </LazyGhostComponent>
    );
};

export default LazyFooter;
