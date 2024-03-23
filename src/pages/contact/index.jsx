import React, { lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactHeader from "../../components/00-Header/NavContact/ContactHeader";
import { useDispatch, useSelector } from "react-redux";
import { setModalContact } from "../../redux/reducers/classesSlice";

import LazySectionContact from "./LazySectionContact";
import LazyGhostComponent from "../portfolio/LazyGhostComponent";
import Modal from "../../components/Modal/Modal";

const LazyModalForm = lazy(() =>
    import("../../components/Modal/ModalForm/ModalForm")
);
const LazyFooter = lazy(() => import("../../components/Footer/Footer"));

function MainPortfolio() {
    const location = useLocation();

    useEffect(() => {
        const updatePageTitle = () => {
            let pageTitle = "Accueil - Jérémy Lemaignent"; // Titre par défaut
            if (location.pathname === "/contact") {
                pageTitle = "Contact - Jérémy Lemaignent";
            }

            document.title = pageTitle;
        };
        updatePageTitle();
    }, [location.pathname]);

    const dispatch = useDispatch();
    const modalContact = useSelector((state) => state.classes.modalContact);

    const closeModalContact = () => {
        dispatch(setModalContact(false));
    };

    return (
        <>
            <ContactHeader />
            <main className="main-content">
                <LazyGhostComponent>
                    <LazySectionContact />
                </LazyGhostComponent>
            </main>
            <LazyGhostComponent>
                <LazyFooter />
            </LazyGhostComponent>
            <LazyGhostComponent>
                <Modal
                    addClass={"contactModal"}
                    opened={modalContact}
                    Content={<LazyModalForm closeModal={closeModalContact} />}
                />
            </LazyGhostComponent>
        </>
    );
}

export default MainPortfolio;
