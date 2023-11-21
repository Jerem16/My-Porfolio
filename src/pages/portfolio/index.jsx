import React, { useState, lazy, Suspense } from "react";

import SectionHome from "./section_home/SectionHome";
import Header from "../../components/00-Header/00-Header";
import { useDispatch, useSelector } from "react-redux";
import { setModalContact } from "../../redux/reducers/classesSlice";
import PortfolioModalContent from "../../components/04-portfolio/PortfolioModalContent";
import ModalService from "../../components/Modal/ModalService/ModalService";
import ModalForm from "../../components/Modal/ModalForm/ModalForm";
import Loader from "../../components/Loader/Loader";
import NavToggler from "../../components/00-Header/NavToggler";
import Modal from "../../components/Modal/Modal";

const LazySectionAbout = lazy(() => import("./section_about/SectionAbout"));

const LazySectionServices = lazy(() =>
    import("./section_services/SectionServices")
);
const LazySectionPortfolio = lazy(() =>
    import("./section_portfolio/SectionPortfolio")
);
const LazySectionContact = lazy(() =>
    import("./section_contact/SectionContact")
);
const LazyPortfolioModalContent = lazy(() =>
    import("../../components/04-portfolio/PortfolioModalContent")
);
const LazyModalService = lazy(() =>
    import("../../components/Modal/ModalService/ModalService")
);
const LazyModalForm = lazy(() =>
    import("../../components/Modal/ModalForm/ModalForm")
);
const LazyModal = lazy(() => import("../../components/Modal/Modal"));

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
            <main className="main-content">
                <SectionHome />
                <Suspense fallback={<Loader />}>
                    <LazySectionAbout />

                    <LazySectionServices openModalService={openModalService} />

                    <LazySectionPortfolio
                        openModalPortfolio={openModalPortfolio}
                    />
                    <LazySectionContact />
                </Suspense>
            </main>
        </>
    );
}

export default MainPortfolio;
