import React, { useState, lazy } from "react";

import SectionHome from "./section_home/SectionHome";
import Header from "../../components/00-Header/00-Header";
import { useDispatch, useSelector } from "react-redux";
import { setModalContact } from "../../redux/reducers/classesSlice";

import LazySectionAbout from "./LazySectionAbout";
import LazySectionServices from "./LazySectionServices";
import LazySectionPortfolio from "./LazySectionPortfolio";
import LazySectionContact from "./LazySectionContact";
import LazyGhostComponent from "./LazyGhostComponent";
import Modal from "../../components/Modal/Modal";

const LazyPortfolioModalContent = lazy(() =>
    import("../../components/04-portfolio/PortfolioModalContent")
);
const LazyModalService = lazy(() =>
    import("../../components/Modal/ModalService/ModalService")
);
const LazyModalForm = lazy(() =>
    import("../../components/Modal/ModalForm/ModalForm")
);

function MainPortfolio() {
    const dispatch = useDispatch();
    const modalContact = useSelector((state) => state.classes.modalContact);

    const [selectedPortfolio, setSelectedPortfolio] = useState(null);
    const [selectedService, setSelectedService] = useState(null);

    const openModalPortfolio = (data) => {
        setSelectedPortfolio(data);
    };
    const openModalService = (data) => {
        setSelectedService(data);
    };

    const closeModalContact = () => {
        dispatch(setModalContact(false));
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
                    <LazySectionServices openModalService={openModalService} />
                    <LazySectionPortfolio
                        openModalPortfolio={openModalPortfolio}
                    />
                    <LazySectionContact />
                </LazyGhostComponent>
            </main>
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
            <Modal
                addClass={"contactModal"}
                opened={modalContact}
                Content={<LazyModalForm closeModal={closeModalContact} />}
            />
        </>
    );
}

export default MainPortfolio;
