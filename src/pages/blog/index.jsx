import React, { lazy } from "react";

import ContactHeader from "../../components/00-Header/NavContact/ContactHeader";
import { useDispatch, useSelector } from "react-redux";
import { setModalContact } from "../../redux/reducers/classesSlice";

import { usePageTitle } from "../../utils/usePageTitle";

// import SectionBlog from "./section_blog/SectionBlog";

import LazyGhostComponent from "../portfolio/LazyGhostComponent";
import LazyFooter from "../portfolio/LazyFooter";
import Modal from "../../components/Modal/Modal";
import SectionBlog from "./section_blog/SectionBlog";

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
            <ContactHeader />
            <main className="main-content">
                <SectionBlog />
            </main>
            <LazyFooter />
        </>
    );
}

export default MainPortfolio;
