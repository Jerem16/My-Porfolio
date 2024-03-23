import React, { lazy } from "react";

import ContactHeader from "../../components/00-Header/NavContact/ContactHeader";
import { useDispatch, useSelector } from "react-redux";
import { setModalContact } from "../../redux/reducers/classesSlice";

import { usePageTitle } from "../../utils/usePageTitle";

import SectionContact from "./section_contact/SectionContact";

import LazyGhostComponent from "../portfolio/LazyGhostComponent";
import Modal from "../../components/Modal/Modal";

const LazyModalForm = lazy(() =>
    import("../../components/Modal/ModalForm/ModalForm")
);
const LazyFooter = lazy(() => import("../../components/Footer/Footer"));

function MainPortfolio() {
    usePageTitle();
    const dispatch = useDispatch();
    const modalContact = useSelector((state) => state.classes.modalContact);

    const closeModalContact = () => {
        dispatch(setModalContact(false));
    };

    return (
        <>
            <ContactHeader />
            <main className="main-content">
                <SectionContact />
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
