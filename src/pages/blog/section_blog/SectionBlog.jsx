import React from "react";
import LayoutBlog from "../../../components/06-blog/LayoutBlog";
import { Fade } from "react-awesome-reveal";

function SectionContact() {
    return (
        <section className="blog section" id="blog">
            <Fade direction="right" triggerOnce={true} className="blogSection">
                <LayoutBlog />
            </Fade>
        </section>
    );
}

export default React.memo(SectionContact);
