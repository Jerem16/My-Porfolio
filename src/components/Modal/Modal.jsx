import React, { useState, Suspense } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
const Modal = ({ opened, Content, closeIcon, addClass }) => {
    // eslint-disable-next-line
    const [isOpened, setIsOpened] = useState(opened);
    const navToggler = useSelector((state) => state.classes.addClass);

    return (
        <>
            {opened && (
                <div className={`modal  ${navToggler}`}>
                    <div className="content sideAnime">
                        <Suspense fallback={<Loader />}>{Content}</Suspense>
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
