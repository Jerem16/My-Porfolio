import React, { useState } from "react";
import ExperienceItem from "./ExperienceItem";

function Experience({ experiences }) {
    const [openArticleStates, setOpenArticleStates] = useState({});

    const toggleArticle = (id) => {
        setOpenArticleStates((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <>
            {experiences.map((experience, item) => (
                <ExperienceItem
                    key={experience.sectionId}
                    experience={experience}
                    toggleArticle={toggleArticle}
                    openArticleStates={openArticleStates}
                    item={item}
                />
            ))}
        </>
    );
}

export default React.memo(Experience);
