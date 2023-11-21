import React from "react";
import LayoutContact from "../../../components/05-Contact/00-LayoutContact";


function SectionContact({ setIsSuccessModalOpen, isSuccessModalOpen }) {
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <LayoutContact
                    setIsSuccessModalOpen={setIsSuccessModalOpen}
                    isSuccessModalOpen={isSuccessModalOpen}
                />
            </div>
        </section>
    );
}

export default React.memo(SectionContact);
