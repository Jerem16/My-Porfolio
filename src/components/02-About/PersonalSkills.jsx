import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";

function Skills({ skills }) {
    const [currentPercent, setCurrentPercent] = useState(
        skills.map(() => 0) // Initialize an array of states for each skill
    );

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: "0px 0px -250px 0px",
    });

    const x = skills.id;
    useEffect(() => {
        if (inView) {
            const intervals = skills.map((skill, index, id) =>
                setInterval(() => {
                    setCurrentPercent((prevPercent) =>
                        prevPercent.map((percent, i) =>
                            i === index
                                ? Math.min(percent + 1, skill.percent)
                                : percent
                        )
                    );
                }, 10)
            );

            return () =>
                intervals.forEach((interval) => clearInterval(interval));
        }
    }, [inView, currentPercent, skills]);

    return (
        <div className="skills" ref={ref}>
            {skills.map((skill, index) => (
                <Fade
                    cascade={true}
                    direction="right"
                    triggerOnce="false"
                    delay={index * 50}
                    key={skill.name}
                >
                    <div className="skill-item">
                        <h4>{skill.name}</h4>
                        <div className="progress">
                            <Fade
                                cascade
                                triggerOnce="false"
                                direction="left"
                                className="progress-in"
                                style={{
                                    width: `${currentPercent[index]}%`,
                                }}
                            >
                                <div
                                    className="progress-in"
                                    style={{
                                        width: `${currentPercent[index]}%`,
                                    }}
                                ></div>
                            </Fade>
                            <div className="skill-percent">
                                {currentPercent[index]}%
                            </div>
                        </div>
                    </div>
                </Fade>
            ))}
        </div>
    );
}

export default React.memo(Skills);
