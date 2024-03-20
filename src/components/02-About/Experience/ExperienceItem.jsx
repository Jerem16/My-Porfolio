import React from "react";
import ExperienceEntry from "./ExperienceEntry";
import Calendar from "../../99-Svg_Icon/Calendar";
import { Fade } from "react-awesome-reveal";

function ExperienceItem({
    experience,
    toggleArticle,
    openArticleStates,
    index,
}) {
    return (
        <div key={experience.sectionId} className="timeline-item">
            <Fade
                cascade="true"
                direction="up"
                delay={index * 50}
                key={index * 19}
                className="circle-dot"
            >
                <span></span>
            </Fade>

            <h3 className="timeline-date">
                <Calendar className="fa fa-calendar" />
                {experience.year}
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
