
import { motion } from "framer-motion";
import { projects_vr } from "../data/projects";
import { Link } from "react-router-dom";
import "../css/VR.css";
import { useTranslation } from "react-i18next";


const VR = () => {
                const { t } = useTranslation();

    return (
        <main className="vr-page">
            <section className="vr-section">
                <header className="vr-header">
                    <div className="back-button-container">
                    <Link to="/portafolio" className="back-button">
                        {t("projects.btnBack")}
                    </Link>
                    </div>
                    <span className="vr-eyebrow">
                        {t("projects.eyebrow")}
                    </span>

                    <h1 className="vr-title">
                        {t("projects.vr.title")}
                    </h1>

                    <p className="vr-subtitle">
                        {t("projects.vr.subtitle")}
                    </p>
                </header>

                <div className="vr-grid">
                    {projects_vr.map((item, index) => (
                        <ProjectCard
                            key={item.name}
                            item={item}
                            index={index}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

const ProjectCard = ({ item, index }) => {
    const { t } = useTranslation();
    const openProject = () => {
        window.open(
            item.url,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <motion.article
            className="vr-card"
            role="link"
            tabIndex={0}
            aria-label={`Ver proyecto ${item.name}`}
            onClick={openProject}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openProject();
                }
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.4,
                delay: index * 0.1,
            }}
            whileHover={{ y: -6 }}
        >
            <div className="vr-card-image">
                <img
                    src={item.src}
                    alt={`Vista previa del proyecto ${item.name}`}
                    loading="lazy"
                />
            </div>

            <div className="vr-card-content">
                <span className="vr-card-type">
                    {t(item.tipo)}
                </span>

                <h2 className="vr-card-title">
                    {item.name}
                </h2>

                <div className="vr-card-divider" />

                <p className="vr-card-role">
                    <span>{t("projects.vr.position")}: </span> {t(item.rol)}
                </p>

                <p className="vr-card-client">
                    {t(item.cliente)}
                </p>

                <span className="vr-card-link">
                    {t("projects.vr.view")}
                    <span aria-hidden="true"> ↗</span>
                </span>
            </div>
        </motion.article>
    );
};

export default VR;