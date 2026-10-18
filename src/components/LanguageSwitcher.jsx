
import { useTranslation } from "react-i18next";
import "../css/LanguageSwitcher.css";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
    if (i18n.language.startsWith(language)) return;

    localStorage.setItem("language", language);

    window.dispatchEvent(
        new CustomEvent("language-transition", {
            detail: { i18n, language },
        })
    );
};

    return (
        <div className="language-switcher" aria-label="Seleccionar idioma">
            <button
                type="button"
                className={i18n.language.startsWith("es") ? "active" : ""}
                onClick={() => changeLanguage("es")}
                aria-pressed={i18n.language.startsWith("es")}
            >
                ES
            </button>

            <span className="language-divider">|</span>

            <button
                type="button"
                className={i18n.language.startsWith("en") ? "active" : ""}
                onClick={() => changeLanguage("en")}
                aria-pressed={i18n.language.startsWith("en")}
            >
                EN
            </button>
        </div>
    );
}
