import React from "react";
import ExperienceEntry from "./ExperienceEntry";
import { Fade } from "react-awesome-reveal";
function ExperienceItem({ experience, toggleArticle, openArticleStates }) {
    return (
        <div key={experience.sectionId} className="timeline-item">
            <div className="circle-dot"></div>
            <h3 className="timeline-date">
                <i className="fa fa-calendar"></i> {experience.year}
            </h3>
            <h4 className="timeline-title">{experience.title}</h4>
            {experience.entries.map((entry, index) => (
                <Fade
                    cascade="true"
                    direction="up"
                    triggerOnce="true"
                    delay={index * 5}
                    key={`${entry.index}_exp_${index * 3}`}
                >
                    <ExperienceEntry
                        entry={entry}
                        toggleArticle={toggleArticle}
                        openArticleStates={openArticleStates}
                        key={`${entry.index}_exp_${index * 3}`}
                    />
                </Fade>
            ))}
        </div>
    );
}

export default React.memo(ExperienceItem);
