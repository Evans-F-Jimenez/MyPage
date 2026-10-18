
import { useEffect, useState } from "react";
import "../css/LanguageTransition.css";

export default function LanguageTransition({ children }) {
    const [isChanging, setIsChanging] = useState(false);
    const [animationPhase, setAnimationPhase] = useState("cover");
    const [pendingLanguage, setPendingLanguage] = useState(null);

    useEffect(() => {
        if (!pendingLanguage) return;

        if (animationPhase === "cover") {
            const timeout = setTimeout(async () => {
                await pendingLanguage.changeLanguage(pendingLanguage.language);
                setAnimationPhase("reveal");
            }, 450);

            return () => clearTimeout(timeout);
        }
    }, [animationPhase, pendingLanguage]);

    useEffect(() => {
        const handleRequest = (event) => {
            const { i18n, language } = event.detail;

            setIsChanging(true);
            setAnimationPhase("cover");
            setPendingLanguage({ changeLanguage: i18n.changeLanguage.bind(i18n), language });
        };

        window.addEventListener("language-transition", handleRequest);

        return () => {
            window.removeEventListener("language-transition", handleRequest);
        };
    }, []);

    const handleAnimationEnd = () => {
        if (animationPhase === "reveal") {
            setIsChanging(false);
            setPendingLanguage(null);
        }
    };

    return (
        <>
            {children}

            {isChanging && (
                <div
                    className={`language-curtain ${animationPhase}`}
                    onAnimationEnd={handleAnimationEnd}
                    aria-hidden="true"
                />
            )}
        </>
    );
}
