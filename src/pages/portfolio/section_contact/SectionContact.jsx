import React from "react";
import LayoutContact from "../../../components/05-Contact/00-LayoutContact";


function SectionContact({ setIsSuccessModalOpen, isSuccessModalOpen }) {
    return (
            <div className="container">
                <LayoutContact
                    setIsSuccessModalOpen={setIsSuccessModalOpen}
                    isSuccessModalOpen={isSuccessModalOpen}
                />
            </div>
    );
}

export default React.memo(SectionContact);
