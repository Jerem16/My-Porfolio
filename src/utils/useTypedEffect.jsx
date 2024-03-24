import { useEffect } from "react";
import Typed from "./typed";

const useTypedEffect = (selector, strings, options) => {
    useEffect(() => {
        const typed = new Typed(selector, {
            strings,
            ...options,
        });

        return () => {
            typed.destroy();
        };
    }, [selector, strings, options]);
};

export default useTypedEffect;
