import React from "react";
import ServicesComponent from "../../../components/03-Services/00-LayoutServices";

function SectionServices({ openModalService }) {
    return (
        <section className="service section" id="services">
            <div className="container">
                <ServicesComponent openModalService={openModalService} />
            </div>
        </section>
    );
}

export default React.memo(SectionServices);
