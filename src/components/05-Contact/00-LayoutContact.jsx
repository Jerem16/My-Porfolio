import React, { lazy, Suspense } from "react";
import ContactForm from "./02-ContactForm";
import ContactInfoItem from "./01-ContactInfoItem";
import ContactDataLoader from "./ContactDataLoader";
import contactIcon from "../../assets/data/contactIcon.json";
import TopContact from "./TopContact";
import SubContact from "./SubContact";
import ModalForm from "../Modal/ModalForm/ModalForm";
import { useDispatch, useSelector } from "react-redux";
import { setModalContact } from "../../redux/reducers/classesSlice";
const LazyModal = lazy(() => import("../Modal/Modal"));

const LayoutContact = ({ setIsSuccessModalOpen, isSuccessModalOpen }) => {
    // const dispatch = useDispatch();
    // const modalContact = useSelector((state) => state.classes.modalContact);
    // const closeModalContact = () => {
    //     dispatch(setModalContact(false));
    // };
    return (
        <ContactDataLoader>
            {(data) => (
                <>
                    <TopContact data={data} />
                    <div className="row_center">
                        <div className="row-col">
                            {contactIcon.contactInfoItem.map((item, index) => (
                                <ContactInfoItem
                                    iconClass={item.icon}
                                    title={
                                        data.contact.contactInfo[index].title
                                    }
                                    content={item.content}
                                    key={item.id}
                                />
                            ))}
                        </div>
                    </div>

                    <SubContact data={data} />
                    <div className="row_center">
                        <div className="contact-content">
                            <ContactForm
                                lastName={data.contact.formFields.lastName}
                                email={data.contact.formFields.email}
                                subject={data.contact.formFields.subject}
                                message={data.contact.formFields.message}
                                send={data.contact.buttonText.send}
                                isSending={data.contact.buttonText.isSending}
                                title={data.contact.successMessage.title}
                                description={
                                    data.contact.successMessage.description
                                }
                                description2={
                                    data.contact.successMessage.description2
                                }
                                formErrors={data.contact.formErrors}
                                setIsSuccessModalOpen={setIsSuccessModalOpen}
                                isSuccessModalOpen={isSuccessModalOpen}
                            />
                        </div>
                    </div>
                    {/* <Suspense fallback={<div>Loading...</div>}>
                        <LazyModal
                            addClass={"contactModal"}
                            opened={modalContact}
                            Content={
                                <ModalForm closeModal={closeModalContact} />
                            }
                        />
                    </Suspense>
                    <div className="col_End"></div> */}
                </>
            )}
        </ContactDataLoader>
    );
};

export default React.memo(LayoutContact);
