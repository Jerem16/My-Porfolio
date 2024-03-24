import React, { lazy, Suspense } from "react";
import Loader from "../../components/Loader/Loader";
const GhostComponent = lazy(() => import("./GhostComponent"));

const LazyGhostComponent = ({ className, id, children }) => {
    return (
        <Suspense fallback={<Loader />}>
            <GhostComponent className={className} id={id}>
                {children}
            </GhostComponent>
        </Suspense>
    );
};

export default LazyGhostComponent;
