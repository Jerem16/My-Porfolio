import React, { lazy, Suspense } from "react";
import Loader from "../../components/Loader/Loader";

const SectionContactContent = lazy(() =>
    import("./section_contact/SectionContact")
);

const LazySectionContact = () => {
    return (
        <Suspense fallback={<Loader />}>
            <SectionContactContent />
        </Suspense>
    );
};

export default LazySectionContact;
