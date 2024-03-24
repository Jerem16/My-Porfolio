import React, { useEffect, useState } from "react";

const GhostComponent = ({className, id, children }) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setIsReady(true);
        }, 15); 
        return () => clearTimeout(timerId);
    }, []);

    return (
        <section className={className} id={id}
            style={{
                display: isReady ? "inherit" : "none",
                transition: "opacity 1s",
            }}
        >
            {children}
        </section>
    );
};

export default GhostComponent;
