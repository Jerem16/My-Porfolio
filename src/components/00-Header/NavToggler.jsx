// NavToggler.jsx
import React from "react";

function NavToggler({ onClick }) {
    return (
        <div className="nav-toggler" id="nav-toggler" onClick={onClick}>
            <span></span>
        </div>
    );
}

export default React.memo(NavToggler);
