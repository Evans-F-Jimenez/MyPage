
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { projects_frontend } from "../data/projects.js"
import "../css/ExperienceSlider.css";
import { useTranslation } from "react-i18next";


export default function ExperienceSlider() {
    const { t  } = useTranslation();
    const [selectedProject, setSelectedProject] = useState(projects_frontend[0] ?? null);

    const openProject = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <main className="projects-page">
            <section className="projects-section">
                <header className="projects-header">
                    <div className="back-button-container">
                    <Link to="/portafolio" className="back-button">
                        {t("projects.btnBack")}
                    </Link>
                    </div>

                    <span className="projects-eyebrow">
                        {t("projects.eyebrow")}
                    </span>

                    <h1 className="projects-title">
                        {t("projects.frontend.title")}
                    </h1>

                    <p className="projects-description">
                        {t("projects.frontend.description")}
                    </p>
                </header>

                <div className="projects-panel">
                    <div className="projects-panel-header">
                        <h2 className="projects-panel-title">
                            {t("projects.frontend.panel_header")}
                        </h2>

                        <p className="projects-hint">
                        {t("projects.frontend.hint")}</p>
                    </div>

                    <motion.div
                        className="projects-track"
                        drag="x"
                        dragConstraints={{
                            left: -Math.max(projects_frontend.length * 310 - 900, 0),
                            right: 0,
                        }}
                        dragElastic={0.08}
                    >
                        {projects_frontend.map((project) => (
                            <motion.article
                                key={project.name}
                                className={`project-card ${selectedProject?.name === project.name
                                    ? "is-selected"
                                    : ""
                                    }`}
                                onMouseEnter={() =>
                                    setSelectedProject(project)
                                }
                                onFocus={() => setSelectedProject(project)}
                                onClick={() => openProject(project.url)}
                                whileHover={{ y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                tabIndex={0}
                                role="link"
                                aria-label={`Abrir demo de ${project.name}`}
                                onKeyDown={(event) => {
                                    if (
                                        event.key === "Enter" ||
                                        event.key === " "
                                    ) {
                                        event.preventDefault();
                                        openProject(project.url);
                                    }
                                }}
                            >
                                <div className="project-card-logo">
                                    <img
                                        src={project.src}
                                        alt={`${project.name} logo`}
                                        loading="lazy"
                                    />
                                </div>

                                <div className="project-card-content">
                                    <span className="project-type">
                                        {t(project.type)}
                                    </span>

                                    <h3 className="project-name">
                                        {project.name}
                                    </h3>

                                    <p className="project-role">
                                        {t(project.role)}
                                    </p>

                                    <span className="project-open">
                                        {t(project.preview)} 
                                        <span aria-hidden="true"> ↗</span>
                                    </span>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    <div className="projects-panel-footer">
                        <span className="projects-footer-line" />
                        <span>
                            {projects_frontend.length}{" "}
                            {projects_frontend.length === 1 ? "proyecto" : "proyectos"}
                        </span>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {selectedProject && (
                        <motion.section
                            key={selectedProject.name}
                            className="project-gallery"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 12 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="galley-header">
                                <div>
                                    <span className="projects-eyebrow">
                                        {t("projects.frontend.preview")}
                                    </span>

                                    <h2 className="galley-title">
                                        {selectedProject.name}
                                    </h2>
                                </div>

                                <button
                                    type="button"
                                    className="galley-demo-button"
                                    onClick={() =>
                                        openProject(selectedProject.url)
                                    }
                                >
                                    {t("projects.frontend.view_project")} ↗
                                </button>
                            </div>

                            <div className="galley-track">
                                {selectedProject.images.map((img, index) => (
                                    <motion.figure
                                        key={img}
                                        className="galley-image"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.07,
                                        }}
                                    >
                                        <img
                                            src={img}
                                            alt={`${selectedProject.name}, captura ${index + 1}`}
                                            loading="lazy"
                                        />

                                        <figcaption>
                                            {t("projects.capture")} {index + 1}
                                        </figcaption>
                                    </motion.figure>
                                ))}
                            </div>
                        </motion.section>
                    )}
                </AnimatePresence>
            </section>
        </main>
    );
}