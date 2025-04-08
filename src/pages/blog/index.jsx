import React, { lazy, Suspense } from "react";
import Loader from "../../components/Loader/Loader";
import { usePageTitle } from "../../utils/usePageTitle";
import SEO from "../../components/SEO";
// ✅ Lazy imports
const ContactHeader = lazy(() =>
    import("../../components/00-Header/NavContact/ContactHeader")
);
const SectionBlog = lazy(() => import("./section_blog/SectionBlog"));
const LazyFooter = lazy(() => import("../portfolio/LazyFooter"));

function MainPortfolio() {
    usePageTitle();

    return (
        <>
            <SEO
                title="Blog - Jérémy Lemaignent"
                description="Conseils, tutoriels, et partages d'expérience sur le développement front-end avec React, HTML, CSS, performance web et plus encore."
                canonical="https://jeremy.lemaignent.com/blog"
                url="https://jeremy.lemaignent.com/blog"
            />
            <Suspense fallback={<Loader />}>
                <ContactHeader />
                <main className="main-content">
                    <SectionBlog />
                </main>
                <LazyFooter />
            </Suspense>
        </>
    );
}

export default React.memo(MainPortfolio);
