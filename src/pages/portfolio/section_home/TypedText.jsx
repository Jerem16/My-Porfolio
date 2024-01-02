import React, { useEffect } from "react";

const TypedText = ({ data, typedRef }) => {
    useEffect(() => {
        const loadTyped = async () => {
            try {
                const { default: Typed } = await import("../../../utils/typed");

                const { typedStrings } = data.home;
                const options = {
                    strings: typedStrings,
                    typeSpeed: 120,
                    backSpeed: 60,
                    loop: true,
                };

                if (typedRef.current) {
                    typedRef.current.destroy();
                }

                typedRef.current = new Typed(".typing", options);
            } catch (error) {
                console.error("Error loading Typed.js:", error);
            }
        };

        const handleResize = () => {
            loadTyped();
        };

        window.addEventListener("resize", handleResize);

        if (data) {
            loadTyped();
        }
        return () => {
            window.removeEventListener("resize", handleResize);

            if (typedRef.current) {
                typedRef.current.destroy();
            }
        };
    }, [data, typedRef]);

    return null;
};
export default React.memo(TypedText);
