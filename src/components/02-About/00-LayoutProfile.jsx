import React from "react";
import Button, { BUTTON_TYPES } from "../Button/Button";
import Timeline from "./02-TimeLine";
import Skills from "./PersonalSkills";
import PersonalInfo from "./PersonalInfo";
import CV from "../../assets/cv/CV-Lemaignent_Jérémy-2024.pdf";
import ProfileDataLoader from "./ProfileDataLoader";
import AboutIntro from "./AboutIntro";
import BtnContact from "../Button/BtnContact";

import { Fade } from "react-awesome-reveal";

function Profile() {
    const button1 = {
        class: "btn_left",
    };
    return (
        <ProfileDataLoader>
            {(profileData) => (
                <>
                    <Fade direction="left" triggerOnce="true">
                        <div className="row_top">
                            <div className="section-title">
                                <h2>
                                    {
                                        <Fade
                                            cascade
                                            triggerOnce="true"
                                            damping={0.05}
                                        >
                                            {profileData.profile.section}
                                        </Fade>
                                    }
                                </h2>
                            </div>
                        </div>
                    </Fade>
                    <div className="row_center">
                        <div className="about-content ">
                            <AboutIntro profileData={profileData} />
                            <div className="row row-skills">
                                <div className="personal-info">
                                    <PersonalInfo
                                        info={profileData.profile.personalInfo}
                                    />
                                </div>

                                <Skills skills={profileData.profile.skills} />

                                <div className="buttons">
                                    <Button
                                        href={CV}
                                        target="_blank"
                                        type={BUTTON_TYPES.DOWNLOAD}
                                        className={button1.class}
                                    >
                                        {profileData.profile.buttons.btnName1}
                                    </Button>
                                    <BtnContact
                                        hireButtonText={
                                            profileData.profile.buttons.btnName2
                                        }
                                    />
                                </div>
                            </div>
                            <div className="height_val"></div>

                            <div className="row_timeLine">
                                <Timeline experiences={profileData.education} />
                                <Timeline
                                    experiences={profileData.experience}
                                    technologySymbols={
                                        profileData.technologySymbols
                                    }
                                    technologyImages={
                                        profileData.technologyImages
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col_end"></div>
                </>
            )}
        </ProfileDataLoader>
    );
}

export default React.memo(Profile);
