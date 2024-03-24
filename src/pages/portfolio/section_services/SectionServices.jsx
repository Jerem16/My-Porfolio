import React from "react";
import ServicesComponent from "../../../components/03-Services/00-LayoutServices";

function SectionServices({ openModalService }) {
    return (
            <div className="container">
                <ServicesComponent openModalService={openModalService} />
            </div>
    );
}

export default React.memo(SectionServices);
