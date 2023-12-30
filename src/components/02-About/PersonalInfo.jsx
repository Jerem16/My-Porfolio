import React from "react";
import { Fade } from "react-awesome-reveal";
function PersonalInfo({ info }) {
    return (
        <>
            {Object.entries(info).map(([key, value, index]) => {
                let content;
                if (key === "Email") {
                    content = <a href={`mailto:${value}`}>{value}</a>;
                } else if (key === "Phone") {
                    content = <a href={`tel:${value}`}>{value}</a>;
                } else if (key === "Website") {
                    content = (
                        <a
                            href={`http://${value}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {value}
                        </a>
                    );
                } else {
                    content = <span>{value}</span>;
                }

                return (
                    <div className="info-item" key={`Person.Inf_${key}`}>
                        <Fade
                            triggerOnce="true"
                            direction="left"
                            delay={index * 200}
                        >
                            <p>
                                {key} : {content}
                            </p>
                        </Fade>
                    </div>
                );
            })}
        </>
    );
}

export default React.memo(PersonalInfo);
