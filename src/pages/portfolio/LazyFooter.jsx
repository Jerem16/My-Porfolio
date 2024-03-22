import React, { lazy, Suspense } from "react";
import Loader from "../../components/Loader/Loader";

const SectionFooter = lazy(() => import("../../components/Footer/Footer"));

const LazyFooter = () => {
    return (
        <Suspense fallback={<Loader />}>
            <SectionFooter />
        </Suspense>
    );
};

export default LazyFooter;
