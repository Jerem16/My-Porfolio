import React from "react";
import Experience from "./Experience/03-Experience";
import { Fade } from "react-awesome-reveal";
function Timeline({ experiences, technologySymbols, technologyImages }) {
    const myTitle = experiences.length > 0 ? experiences[0].sectionTitle : "";
    const classTitle = experiences.length > 0 ? experiences[0].classTitle : "";
    return (
        <div className="experience">
            <Fade
                cascade="true"
                direction="up"
                triggerOnce="true"
                delay={500}
            >
                <h3 className={`title ${classTitle}`}>{myTitle}</h3>
            </Fade>
            <div className="row ">
                <div className="timeline-box">
                    <div className="timeline box-bd-color ">
                        <Experience
                            experiences={experiences}
                            technologySymbols={technologySymbols}
                            technologyImages={technologyImages}
                        />
                    </div>
                </div>
            </div>{" "}
        </div>
    );
}

export default React.memo(Timeline);
