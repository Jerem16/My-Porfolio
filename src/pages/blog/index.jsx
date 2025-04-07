import React, { lazy, Suspense } from "react";
import Loader from "../../components/Loader/Loader";
import { usePageTitle } from "../../utils/usePageTitle";

// ✅ Lazy imports
const ContactHeader = lazy(() =>
    import("../../components/00-Header/NavContact/ContactHeader")
);
const SectionBlog = lazy(() => import("./section_blog/SectionBlog"));
const LazyFooter = lazy(() => import("../portfolio/LazyFooter"));

function MainPortfolio() {
    usePageTitle();

    return (
        <Suspense fallback={<Loader />}>
            <ContactHeader />
            <main className="main-content">
                <SectionBlog />
            </main>
            <LazyFooter />
        </Suspense>
    );
}

export default React.memo(MainPortfolio);
