import React from "react";
import LayoutContact from "../../../components/05-Contact/00-LayoutContact";
import { Fade } from "react-awesome-reveal";

function SectionContact({ setIsSuccessModalOpen, isSuccessModalOpen }) {
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <Fade
                    direction="right"
                    triggerOnce={true}

                >
                    <LayoutContact
                        setIsSuccessModalOpen={setIsSuccessModalOpen}
                        isSuccessModalOpen={isSuccessModalOpen}
                    />
                </Fade>
            </div>
        </section>
    );
}

export default React.memo(SectionContact);
