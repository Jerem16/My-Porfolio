// LazyNavToggler.jsx
import React, { lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleClasses } from "../../redux/reducers/classesSlice";

const NavToggler = lazy(() => import("./NavToggler"));

function LazyNavToggler() {
    const dispatch = useDispatch();
    const addClass = useSelector((state) => state.classes.addClass);

    const toggleClick = () => {
        const newClass = addClass === "open" ? "close" : "open";
        dispatch(toggleClasses(newClass));
    };

    return (
        <Suspense fallback={<NavToggler />}>
            <NavToggler onClick={toggleClick} />
        </Suspense>
    );
}

export default LazyNavToggler;
