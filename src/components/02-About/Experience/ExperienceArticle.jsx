import React from "react";
import ItemLi from "./ItemLi";
import TechnologyIcons from "./TechnologyIcons";
import { Fade } from "react-awesome-reveal";
const ExperienceArticle = ({ entry }) => {
    return (
        <div
            className={`div-anime open`}
            style={{
                display: `${entry.display}`,
            }}
        >
            <Fade direction="up" triggerOnce="true">
                <p className={`timeline-anime open`}>
                    {entry.description.paragraph}
                </p>
                {entry.description.itemLi &&
                entry.description.itemLi.length > 0 ? (
                    <ItemLi entry={entry} description={entry.description} />
                ) : null}

                <TechnologyIcons entry={entry} />
                <div className="bd_Last"></div>
            </Fade>
        </div>
    );
};

export default React.memo(ExperienceArticle);
