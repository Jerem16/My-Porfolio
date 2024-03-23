import React, { useState, lazy } from "react";

import SectionHome from "./section_home/SectionHome";
import Header from "../../components/00-Header/NavHome/00-Header";

import { usePageTitle } from "../../utils/usePageTitle";

import LazySectionAbout from "./LazySectionAbout";
import LazySectionServices from "./LazySectionServices";
import LazySectionPortfolio from "./LazySectionPortfolio";
import LazyGhostComponent from "./LazyGhostComponent";
import Modal from "../../components/Modal/Modal";

const LazyPortfolioModalContent = lazy(() =>
    import("../../components/04-portfolio/PortfolioModalContent")
);
const LazyModalService = lazy(() =>
    import("../../components/Modal/ModalService/ModalService")
);
const LazyFooter = lazy(() => import("../../components/Footer/Footer"));

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
            <Header />
            <main className="main-content">
                <SectionHome />
                <LazyGhostComponent>
                    <LazySectionAbout />
                </LazyGhostComponent>
                <LazyGhostComponent>
                    <LazySectionServices openModalService={openModalService} />
                </LazyGhostComponent>
                <LazyGhostComponent>
                    <LazySectionPortfolio
                        openModalPortfolio={openModalPortfolio}
                    />
                </LazyGhostComponent>
            </main>
            <LazyGhostComponent>
                <LazyFooter />
            </LazyGhostComponent>
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
