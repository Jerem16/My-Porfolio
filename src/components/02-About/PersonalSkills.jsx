import React from "react";
import { Fade } from "react-awesome-reveal";

function Skills({ skills }) {
    return (
        <div className="skills">
            {skills.map((skill, index) => (
                <Fade
                    cascade="false"
                    triggerOnce="true"
                    direction="right"
                    delay={index * 200}
                    key={skill.name}
                >
                    <div className="skill-item">
                        <h4>{skill.name}</h4>
                        <div className="progress">
                            <div
                                className="progress-in"
                                style={{
                                    width: `${skill.percent}%`,
                                }}
                            ></div>
                            <div className="skill-percent">
                                {skill.percent}%
                            </div>
                        </div>
                    </div>
                </Fade>
            ))}
        </div>
    );
}

export default React.memo(Skills);
