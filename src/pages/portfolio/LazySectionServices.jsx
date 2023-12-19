import React, { lazy, Suspense } from "react";
import Loader from "../../components/Loader/Loader";

const SectionServicesContent = lazy(() =>
    import("./section_services/SectionServices")
);

const LazySectionServices = ({ openModalService }) => {
    return (
        <Suspense fallback={<Loader />}>
            <SectionServicesContent openModalService={openModalService} />
        </Suspense>
    );
};

export default LazySectionServices;
