import React, { lazy, Suspense } from "react";
import Loader from "../../components/Loader/Loader";
const GhostComponent = lazy(() => import("./GhostComponent"));

const LazyGhostComponent = ({ children }) => {
    return (
        <Suspense fallback={<Loader />}>
            <GhostComponent>{children}</GhostComponent>
        </Suspense>
    );
};

export default LazyGhostComponent;
