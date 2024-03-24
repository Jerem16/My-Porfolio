import React from "react";
import Profile from "../../../components/02-About/00-LayoutProfile";

function SectionAbout() {
    return (
            <div className="container">
                <Profile />
            </div>
    );
}

export default React.memo(SectionAbout);
