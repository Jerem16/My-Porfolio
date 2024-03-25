import React, { useEffect } from "react";
import Swal from "sweetalert2";
import "../../assets/styles/css/blog.css";

const MaintenancePage = () => {
    useEffect(() => {
        const width = window.screen.width;
        const height = window.screen.height;
        const defaultRatio = 1.77;
        const ratio = width / height;

        if (true) {
            document.getElementById("iframe_container").innerHTML =
                '<iframe frameborder="0" height="100%" width="100%" src="https://www.youtube.com/embed/B0TjyJIIWLA?autoplay=1&controls=0&disablekb=1&loop=1&modestbranding=1&playsinline=0&color=white&mute=1&playlist=8Z1eMy2FoX4"></iframe>';
        }

        Swal.fire({
            title: "Maintenance",
            confirmButtonText: "J'ai compris",
            text: "Le site est actuellement en maintenance, dès que le site sera de nouveau disponible, cette page s'actualisera automatiquement.",
            width: 600,
            padding: "3em",
            backdrop: "rgb(14 14 14 / 50%)",
        });

        const clickHandler = () => {
            document.body.removeEventListener("click", clickHandler);
            const audio = new Audio("https://www6.yggtorrent.lol/soon.mp3");
            audio.volume = 0.3;
            audio.play();
        };

        document.body.addEventListener("click", clickHandler);

        // Clean up function
        return () => {
            document.body.removeEventListener("click", clickHandler);
        };
    }, []);

    return (
        <>
            <div className="row_center">
                <div className="row">
                    <div className="col">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="Calque_1"
                            x="0px"
                            y="0px"
                            width="310.797px"
                            height="100.931px"
                            viewBox="0 0 2430 2430"
                            xmlnsV="https://vecta.io/nano"
                            xmlSpace="preserve"
                        >
                            <path
                                d="M1220.227-157.492l1374.602 1374.602-1374.602 1374.602-1374.602-1374.602z"
                                fill="#514f72"
                            />
                            <path
                                d="M2594.8 1217.1h0c-379.6-379.6-995-379.6-1374.6 0h0c-379.6 379.6-379.6 995 0 1374.6h0l1374.6-1374.6z"
                                fill="#312e4b"
                            />
                            <path
                                d="M-164.5 1227.8h0c379.6 379.6 995 379.6 1374.6 0h0c379.6-379.6 379.6-995 0-1374.6h0L-164.5 1227.8z"
                                fill="#706e94"
                            />
                            <path
                                d="M1334 1576.4h484.7v484.7h242.4V1334H1334h-242.4v242.4zm484.7-848.3c0 66.9-54.3 121.2-121.2 121.2h-121.2H1334h-242.4-363.5c-66.9 0-121.2 54.3-121.2 121.2v605.9h0 121.2c66.9 0 121.2-54.3 121.2-121.2v-242.4c0-66.9 54.3-121.2 121.2-121.2h121.2H1334h0 242.4H1940c66.9 0 121.2-54.3 121.2-121.2V485.7c0-66.9-54.3-121.2-121.2-121.2h0c-66.9 0-121.2 54.3-121.2 121.2v242.4z"
                                fill="#ea5c1f"
                            />
                            <path
                                d="M849.1 1334v363.6c0 66.9-54.3 121.2-121.2 121.2H485.5c-66.9 0-121.2 54.3-121.2 121.2h0c0 66.9 54.3 121.2 121.2 121.2h484.7c66.9 0 121.2-54.3 121.2-121.2v-606-121.2c0-66.9-54.3-121.2-121.2-121.2h0c-66.9 0-121.2 54.3-121.2 121.2V1334zm848.4 489.1c-66.9 0-121.2-54.3-121.2-121.2v-121.2-242.4V1096 732.5c0-66.9-54.3-121.2-121.2-121.2H849.2h0v121.2c0 66.9 54.3 121.2 121.2 121.2h242.4c66.9 0 121.2 54.3 121.2 121.2V1096v242.4h0v242.4 363.6c0 66.9 54.3 121.2 121.2 121.2h484.7c66.9 0 121.2-54.3 121.2-121.2h0c0-66.9-54.3-121.2-121.2-121.2h-242.4z"
                                fill="#f2ecf4"
                            />
                            <path
                                d="M2187 0h0H243C108.8 0 0 108.8 0 243v1944c0 134.2 108.8 243 243 243h0 1944c134.2 0 243-108.8 243-243V243c0-134.2-108.8-243-243-243zm0 2071.1c0 64-51.9 115.9-115.9 115.9H437.4h-78.5c-64 0-115.9-51.9-115.9-115.9V358.9c0-64 51.9-115.9 115.9-115.9h1633.7 78.5c64 0 115.9 51.9 115.9 115.9v1712.2z"
                                fill="#ea5c1f"
                            />
                        </svg>
                        <div className="card-content">
                            <h1 className="card_head-title">
                                Le site est en maintenance
                            </h1>
                            <span>
                                Veuillez réessayer dans quelques instants.
                            </span>
                        </div>
                        <div style={{ marginTop: "15px" }}>
                            <a
                                href="https://www.facebook.com/people/J%C3%A9r%C3%A9my-Lemaignent/pfbid022R8FyMFPKNyXAN7kGd1rhrSvJFQUSazxHELZk89KTmP5UorsVvZeoAVbEzxBEeNsl/"
                                title="Telegram"
                                className="a-mamot"
                            >
                                Suivez-nous sur facebook
                            </a>
                        </div>
                        <hr />
                        <div className="content-span">
                            <span>
                                Une équipe de Valkyries hautement qualifiées a
                                été dépêchée pour faire face à cette situation
                                dans les meilleurs délais.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="iframe_container"></div>
        </>
    );
};

export default MaintenancePage;
