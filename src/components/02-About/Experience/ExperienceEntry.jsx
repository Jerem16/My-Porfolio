import React, { lazy, Suspense } from "react";
import Loader from "../../Loader/Loader";
const LazyExperienceArticle = lazy(() => import("./ExperienceArticle"));

function ExperienceEntry({ entry, toggleArticle, openArticleStates }) {
    const isOpen = openArticleStates[entry.id];

    return (
        <article
            className={`timeline-text ${entry.addClass}`}
            key={entry.id}
            onClick={() => toggleArticle(entry.id)}
            style={{ marginBottom: `${entry.size}px` }}
        >
            <div>
                <ul>
                    <li>{entry.description.describe}</li>
                    <li>{entry.description.place}</li>
                </ul>
            </div>
            <h4 className="jobTitle">
                {entry.jobTitle}
                <div className="bd_Bottom">
                    <div className="fa-Circle">
                        <svg
                            viewBox="0 0 512 512"
                            height="1em"
                            className="icon"
                            style={{
                                display: `${entry.display}`,
                                transformOrigin: "center",
                                transform: `rotate(${
                                    isOpen ? "180deg" : "270deg"
                                }`,
                                transition: "transform 0.3s ease-in-out",
                            }}
                            id="darkArrow"
                        >
                            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                        </svg>
                    </div>
                </div>
            </h4>
            {isOpen && (
                <Suspense fallback={<Loader />}>
                    <LazyExperienceArticle entry={entry} />
                </Suspense>
            )}
        </article>
    );
}

export default React.memo(ExperienceEntry);
