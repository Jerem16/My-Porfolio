import React, { lazy, Suspense } from "react";
import Loader from "../../components/Loader/Loader";

const SectionPortfolioContent = lazy(() =>
    import("./section_portfolio/SectionPortfolio")
);

const LazySectionPortfolio = ({ openModalPortfolio }) => {
    return (
        <Suspense fallback={<Loader />}>
            <SectionPortfolioContent openModalPortfolio={openModalPortfolio} />
        </Suspense>
    );
};

export default LazySectionPortfolio;
