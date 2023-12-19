import React, { useEffect, useState } from "react";

const GhostComponent = ({ children }) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setIsReady(true);
        }, 5); // Délai de 3000 ms (3 secondes) pour l'apparition

        return () => clearTimeout(timerId);
    }, []);

    return (
        <div
            style={{
                display: isReady ? "inherit" : "none",
                transition: "opacity 1s",
            }}
        >
            {children}
        </div>
    );
};

export default GhostComponent;
