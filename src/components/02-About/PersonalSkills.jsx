import React, { useState, useEffect } from "react";
import { Slide, Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";

function Skills({ skills }) {
    const [currentPercent, setCurrentPercent] = useState(
        skills.map(() => 0) // Initialize an array of states for each skill
    );

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: "0px 0px -200px 0px", // Adjust this margin based on when you want the animation to start
    });

    useEffect(() => {
        if (inView) {
            const intervals = skills.map(
                (skill, index) =>
                    setInterval(() => {
                        setCurrentPercent((prevPercent) =>
                            prevPercent.map((percent, i) =>
                                i === index
                                    ? Math.min(percent + 1, skill.percent)
                                    : percent
                            )
                        );
                    }, 10) // Interval update setting (in milliseconds)
            );

            // Clear intervals when each skill reaches its final value
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
                    delay={index * 200}
                    key={skill.name}
                >
                    <div className="skill-item">
                        <h4>{skill.name}</h4>
                        <div className="progress">
                            <Slide
                                cascade={true}
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
                            </Slide>
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
