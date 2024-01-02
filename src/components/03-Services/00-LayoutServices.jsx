import React from "react";
import ServiceItem from "./ServiceItem";
import ServiceDataLoader from "./ServiceDataLoader";
import serviceIcon from "../../assets/data/serviceIcon.json";
import { Fade } from "react-awesome-reveal";

const ServicesComponent = ({ openModalService }) => {
    return (
        <ServiceDataLoader>
            {(serviceData) => (
                <>
                    <Fade direction="left" triggerOnce="true">
                        <div className="row_top">
                            <div className="section-title">
                                <h2>
                                    {
                                        <Fade
                                            cascade
                                            triggerOnce="true"
                                            delay={540}
                                            damping={0.05}
                                        >
                                            {serviceData.title}
                                        </Fade>
                                    }
                                </h2>
                            </div>
                        </div>
                    </Fade>
                    <div className="row-center">
                        <div className="service_container">
                            {serviceData.services.map((service, index) => (
                                <div
                                    key={service.id}
                                    className="service-item"
                                    onClick={() => openModalService(service)}
                                >
                                    <Fade
                                        cascade="false"
                                        triggerOnce="true"
                                        direction="up"
                                        delay={index * 200}
                                        key={service.id}
                                        className="service-item-inner"
                                    >
                                        <ServiceItem
                                            viewBox={serviceIcon[index].viewBox}
                                            iconClass={serviceIcon[index].icon}
                                            title={service.title}
                                            description={service.description}
                                        />
                                    </Fade>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col_end"></div>
                </>
            )}
        </ServiceDataLoader>
    );
};

export default React.memo(ServicesComponent);
