import React from "react";
import shortid from "shortid";
import ServiceDataLoader from "../../03-Services/ServiceDataLoader";
import CloseIcon from "../../99-Svg_Icon/CloseIcon";
import serviceIcon from "../../../assets/data/serviceIcon.json";
import Check from "../../99-Svg_Icon/check";
const ModalService = ({ selectedService, closeModal }) => {
    return (
        <ServiceDataLoader>
            {(serviceData) => {
                if (selectedService) {
                    const serviceItem = serviceData.services.find(
                        (item) => item.id === selectedService.id
                    );
                    if (serviceItem) {
                        const serviceIconData = serviceIcon.find(
                            (item) => item.id === serviceItem.id
                        );
                        return (
                            <div className="modal-background">
                                <div className="service-item" id="modalService">
                                    <div className="service-item-inner">
                                        <div className="icon">
                                            <svg
                                                viewBox={
                                                    serviceIconData.viewBox
                                                }
                                                height="1em"
                                                xmlSpace="preserve"
                                                className="icon-fsa"
                                            >
                                                <path
                                                    d={serviceIconData.icon}
                                                />
                                            </svg>
                                        </div>
                                        <h4>{serviceItem.title}</h4>
                                        <p>{serviceItem.modalDescription}</p>
                                        <ul>
                                            {serviceItem.details.map(
                                                (detail) => (
                                                    <li
                                                        key={shortid.generate()}
                                                    >
                                                        <Check />
                                                        {detail}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <a
                                            className="btn"
                                            href={serviceItem.link.url}
                                            onClick={closeModal}
                                        >
                                            {serviceItem.link.title}
                                        </a>
                                    </div>
                                </div>
                                <button type="button" onClick={closeModal}>
                                    <CloseIcon name="close" />
                                </button>
                            </div>
                        );
                    }
                }
            }}
        </ServiceDataLoader>
    );
};

export default React.memo(ModalService);
