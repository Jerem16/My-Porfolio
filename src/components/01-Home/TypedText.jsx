import { useEffect, useState } from "react";

const TypedText = ({ data, typedRef }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const loadTyped = async () => {
            try {
                const { default: Typed } = await import("../../utils/typed");

                if (typedRef.current) {
                    typedRef.current.destroy();
                }

                const { typedStrings } = data.home;
                const options = {
                    strings: typedStrings,
                    typeSpeed: 120,
                    backSpeed: 60,
                    loop: true,
                };

                typedRef.current = new Typed(".typing", options);
            } catch (error) {
                console.error("Error loading Typed.js:", error);
            }
        };

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
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
    }, [data, typedRef, windowWidth]);

    return null;
};

export default TypedText;
