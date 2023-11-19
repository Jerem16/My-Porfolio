import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
const Modal = ({ opened, Content, closeIcon, addClass }) => {
    // eslint-disable-next-line
    const [isOpened, setIsOpened] = useState(opened);
    const navToggler = useSelector((state) => state.classes.addClass);
    // useEffect(() => {
    //     if (opened) {
    //         const adjustModalPosition = () => {
    //             const modal = document.querySelector(".modal");
    //             if (modal) {
    //                 // Ne modifiez pas directement la position ici
    //             }
    //         };

    //         adjustModalPosition();
    //         window.addEventListener("resize", adjustModalPosition);
    //         // Supprimez l'écouteur d'événements de défilement

    //         return () => {
    //             window.removeEventListener("resize", adjustModalPosition);
    //             // Supprimez l'écouteur d'événements de défilement
    //         };
    //     }
    // }, [opened]);

    return (
        <>
            {opened && (
                <div className={`modal  ${navToggler}`}>
                    <div className="content sideAnime">
                        {Content}
                        <button
                            type="button"
                            onClick={() => setIsOpened(false)}
                        >
                            {closeIcon}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

Modal.defaultProps = {
    opened: false,
};

Modal.propTypes = {
    opened: PropTypes.bool,
    Content: PropTypes.node.isRequired,
};

export default React.memo(Modal);
