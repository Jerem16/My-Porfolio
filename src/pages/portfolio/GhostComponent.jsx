import React, { useEffect, useState } from "react";

const GhostComponent = ({ children }) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setIsReady(true);
        }, 5); 
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
