import { useEffect } from "react";
import Typed from "./typed";
import { useWindowWidth } from "./hooks";

const useTypedEffect = (selector, strings, options) => {
    const windowWidth = useWindowWidth(); 
    useEffect(() => {
        const typed = new Typed(selector, {
            strings,
            ...options,
        });

        return () => {
            typed.destroy();
        };
    }, [selector, strings, options, windowWidth]); 
};

export default useTypedEffect;
