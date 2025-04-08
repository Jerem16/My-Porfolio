import React, { lazy } from "react";

import ContactHeader from "../../components/00-Header/NavContact/ContactHeader";
import { useDispatch, useSelector } from "react-redux";
import { setModalContact } from "../../redux/reducers/classesSlice";

import { usePageTitle } from "../../utils/usePageTitle";

import SectionContact from "./section_contact/SectionContact";

import LazyGhostComponent from "../portfolio/LazyGhostComponent";
import LazyFooter from "../portfolio/LazyFooter";
import Modal from "../../components/Modal/Modal";
import SEO from "../../components/SEO";

const LazyModalForm = lazy(() =>
    import("../../components/Modal/ModalForm/ModalForm")
);

function MainPortfolio() {
    usePageTitle();
    const dispatch = useDispatch();
    const modalContact = useSelector((state) => state.classes.modalContact);

    const closeModalContact = () => {
        dispatch(setModalContact(false));
    };

    return (
        <>
            <SEO
                title="Contact - Jérémy Lemaignent"
                description="Une question, un projet web ? Contactez-moi dès aujourd’hui pour échanger sur vos besoins en développement front-end."
                canonical="https://jeremy.lemaignent.com/contact"
                url="https://jeremy.lemaignent.com/contact"
            />

            <ContactHeader />
            <main className="main-content" id="home">
                <SectionContact />
            </main>
            <LazyFooter />
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
