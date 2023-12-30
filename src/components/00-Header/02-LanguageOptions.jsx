import React from "react";
import en from "../../assets/img/flag/en.svg";
import fr from "../../assets/img/flag/fr.svg";
import de from "../../assets/img/flag/de.svg";
import it from "../../assets/img/flag/it.svg";
import es from "../../assets/img/flag/es.svg";


const LanguageOption = ({ active, onClick, src, alt }) => (
    <img
        className={`flagLogo ${active ? "active" : ""}`}
        onClick={onClick}
        src={src}
        alt={alt}
        width={30}
        height={30}
    />
);

const LanguageOptions = ({
    isSelectorOpen,
    changeLanguage,
    activeLanguage,
}) => (
    <>
        {isSelectorOpen && (
            <>
                <LanguageOption
                    active={activeLanguage === "en"}
                    onClick={() => changeLanguage("en")}
                    src={en}
                    alt="flag-en"
                />
                <LanguageOption
                    active={activeLanguage === "fr"}
                    onClick={() => changeLanguage("fr")}
                    src={fr}
                    alt="flag-fr"
                />
                <LanguageOption
                    active={activeLanguage === "de"}
                    onClick={() => changeLanguage("de")}
                    src={de}
                    alt="flag-de"
                />
                <LanguageOption
                    active={activeLanguage === "it"}
                    onClick={() => changeLanguage("it")}
                    src={it}
                    alt="flag-it"
                />
                <LanguageOption
                    active={activeLanguage === "es"}
                    onClick={() => changeLanguage("es")}
                    src={es}
                    alt="flag-es"
                />
            </>
        )}
    </>
);

export default React.memo(LanguageOptions);
