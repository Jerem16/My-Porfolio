import React, { useState, lazy } from "react";

import SectionHome from "./section_home/SectionHome";
import Header from "../../components/00-Header/NavHome/00-Header";

import { usePageTitle } from "../../utils/usePageTitle";
import SEO from "../../components/SEO";

import SectionAbout from "./section_about/SectionAbout";
import SectionServices from "./section_services/SectionServices";
import SectionPortfolio from "./section_portfolio/SectionPortfolio";
import LazyFooter from "./LazyFooter";
import LazyGhostComponent from "./LazyGhostComponent";
import Modal from "../../components/Modal/Modal";

const LazyPortfolioModalContent = lazy(() =>
    import("../../components/04-portfolio/PortfolioModalContent")
);
const LazyModalService = lazy(() =>
    import("../../components/Modal/ModalService/ModalService")
);
// const LazyFooter = lazy(() => import("../../components/Footer/Footer"));

function MainPortfolio() {
    usePageTitle();
    const [selectedPortfolio, setSelectedPortfolio] = useState(null);
    const [selectedService, setSelectedService] = useState(null);

    const openModalPortfolio = (data) => {
        setSelectedPortfolio(data);
    };
    const openModalService = (data) => {
        setSelectedService(data);
    };
    const closeModal = () => {
        setSelectedPortfolio(null);
        setSelectedService(null);
    };

    return (
        <>
            <SEO
                title="Accueil - Jérémy Lemaignent"
                description="Jérémy Lemaignent, Développeur front-end certifié, créateur de sites interactifs et réactifs. Transformez vos idées en expériences web exceptionnelles."
                canonical="https://jeremy.lemaignent.com/"
                url="https://jeremy.lemaignent.com/"
            />
            <Header />
            <main className="main-content">
                <SectionHome />
                <LazyGhostComponent className={"about section"} id={"about"}>
                    <SectionAbout />
                </LazyGhostComponent>
                <LazyGhostComponent
                    className={"service section"}
                    id={"services"}
                >
                    <SectionServices openModalService={openModalService} />
                </LazyGhostComponent>
                <LazyGhostComponent
                    className={"portfolio section"}
                    id={"portfolio"}
                >
                    <SectionPortfolio openModalPortfolio={openModalPortfolio} />
                </LazyGhostComponent>
            </main>
            <LazyFooter />
            <LazyGhostComponent>
                {selectedService && (
                    <Modal
                        opened={true}
                        Content={
                            <LazyModalService
                                selectedService={selectedService}
                                closeModal={closeModal}
                            />
                        }
                    />
                )}
            </LazyGhostComponent>
            <LazyGhostComponent>
                {selectedPortfolio && (
                    <Modal
                        opened={true}
                        Content={
                            <LazyPortfolioModalContent
                                selectedPortfolio={selectedPortfolio}
                                closeModal={closeModal}
                            />
                        }
                    />
                )}
            </LazyGhostComponent>
        </>
    );
}

export default MainPortfolio;
