import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNavScroll } from "../../redux/reducers/classesSlice";
const AboutIntro = ({ profileData }) => {
    // const dispatch = useDispatch();
    // const initClass = useSelector((state) => state.classes.navScroll);

    // useEffect(() => {
    //     const activeStartElements = document.querySelectorAll(
    //         ".aside .nav li a.active-link"
    //     );

    //     if (activeStartElements.length === 0) {
    //         dispatch(setNavScroll("home"));
    //     } else {
    //         dispatch(setNavScroll(""));
    //     }
    // }, [dispatch]);
    return (
        <div className="row">
            <div className="about-text">
                <h3>
                    {profileData.profile.presentation}
                    <span>{profileData.profile.jobTitle}</span>
                </h3>
                <p>{profileData.profile.description}</p>
            </div>
        </div>
    );
};

export default React.memo(AboutIntro);
