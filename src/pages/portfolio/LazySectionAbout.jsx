import React, { lazy, Suspense } from "react";
import Loader from "../../components/Loader/Loader";

const SectionAboutContent = lazy(() => import("./section_about/SectionAbout"));

const LazySectionAbout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <SectionAboutContent />
    </Suspense>
  );
};

export default LazySectionAbout;
