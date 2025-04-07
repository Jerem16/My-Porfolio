// LazyReduxProvider.jsx
import React, { lazy, Suspense } from "react";

// Lazy import du Provider avec le store encapsulé
const ReduxProvider = lazy(() => import("./ReduxProvider"));

// Fallback pendant le chargement du store/provider
const Loading = () => <div>Chargement du store...</div>;

const LazyReduxProvider = ({ children }) => (
    <Suspense fallback={<Loading />}>
        <ReduxProvider>{children}</ReduxProvider>
    </Suspense>
);

export default LazyReduxProvider;
