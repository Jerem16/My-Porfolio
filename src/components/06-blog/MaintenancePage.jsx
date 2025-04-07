import React, { useEffect, useRef } from "react";
import "../../assets/styles/css/blog.css";
import content from "../../assets/data/fr/maintenance.json";
import MyLogo from "../99-Svg_Icon/MyLogo";
import SoonMp3 from "../../assets/music/music.mp3";

const MaintenancePage = () => {
    const audioRef = useRef(null);
    const numRef = useRef(null);

    useEffect(() => {
        document.getElementById("iframe_container").innerHTML =
            '<iframe frameborder="0" height="100%" width="100%" src="https://www.youtube.com/embed/B0TjyJIIWLA?autoplay=1&controls=0&disablekb=1&loop=1&modestbranding=1&playsinline=0&color=white&mute=1&playlist=8Z1eMy2FoX4"></iframe>';

        const clickHandler = () => {
            numRef.current = 0;
            audioRef.current.volume = 0.3;
            audioRef.current.src = SoonMp3;
            switch (true) {
                case audioRef.current.muted === true:
                    audioRef.current.play();
                    audioRef.current.muted = false;
                    break;
                case numRef.current === 0:
                    audioRef.current.pause();
                    numRef.current = 2;
                    audioRef.current.muted = true;
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("touchstart", clickHandler);
        document.body.addEventListener("click", clickHandler);

        return () => {
            document.body.removeEventListener("click", clickHandler);
            window.removeEventListener("touchstart", clickHandler);
        };
    }, []);

    return (
        <>
            <div className="row_center maintenance">
                <div className="row">
                    <div className="col">
                        <MyLogo />
                        <div className="card-content">
                            <h1 className="card_head-title">
                                {content.fr.title}
                            </h1>
                            <span>{content.fr.message}</span>
                        </div>
                        <div style={{ marginTop: "15px" }}>
                            <a
                                href="https://www.facebook.com/people/J%C3%A9r%C3%A9my-Lemaignent/pfbid022R8FyMFPKNyXAN7kGd1rhrSvJFQUSazxHELZk89KTmP5UorsVvZeoAVbEzxBEeNsl/"
                                title="Suivez-nous sur Facebook"
                                className="btn"
                            >
                                {content.fr.follow_us}
                            </a>
                        </div>
                        <div className="content-span">
                            <span>{content.fr.team_message}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="iframe_container"></div>
            <audio ref={audioRef} id="audio" muted={false}></audio>
        </>
    );
};

export default MaintenancePage;
