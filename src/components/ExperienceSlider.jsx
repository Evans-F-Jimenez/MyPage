
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "../css/ExperienceSlider.css";

const projects = [
    {
        src: "/MyPage/assets/CC-Purple.svg",
        url: "https://estintecedu-my.sharepoint.com/:v:/g/personal/1106103_est_intec_edu_do/ETw08WaYMd1Ak2X3pJAyTQABE1p0jJmfvxr3W2E5HPglOg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=T0HVFw",
        name: "Chord Connect",
        role: "Desarrollador Front-End",
        images: [
            "/MyPage/assets/Inicio-CC.png",
            "/MyPage/assets/1-CC.png",
            "/MyPage/assets/2-CC.png",
            "/MyPage/assets/3-CC.png",
        ],
        type: "Aplicación móvil",
    },
    {
        src: "/MyPage/assets/ADD.svg",
        url: "https://evans-f-jimenez.github.io/data-analyst-dashboard/",
        name: "Sales Analytics Dashboard",
        role: "Desarrollador Front-End",
        images: [
            "/MyPage/assets/ADD1.png",
            "/MyPage/assets/ADD2.png",
            "/MyPage/assets/ADD3.png",
        ],
        type: "Dashboard de Datos",
    },
];

export default function ExperienceSlider() {
    const [selectedProject, setSelectedProject] = useState(projects[0] ?? null);

    const openProject = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <main className="mobile-projects-page">
            <section className="mobile-projects-section">
                <header className="mobile-projects-header">
                    <span className="mobile-projects-eyebrow">
                        MIS PROYECTOS
                    </span>

                    <h1 className="mobile-projects-title">
                        FRONT END
                    </h1>

                    <p className="mobile-projects-description">
                        Aplicaciones y/o proyectos en los que he participado,
                        con énfasis en un front-end reactivo.
                    </p>
                </header>

                <div className="mobile-projects-panel">
                    <div className="mobile-projects-panel-header">
                        <h2 className="mobile-projects-panel-title">
                            Proyectos
                        </h2>

                        <p className="mobile-projects-hint">
                            Arrastra las tarjetas para explorar los proyectos.
                        </p>
                    </div>

                    <motion.div
                        className="mobile-projects-track"
                        drag="x"
                        dragConstraints={{
                            left: -Math.max(projects.length * 310 - 900, 0),
                            right: 0,
                        }}
                        dragElastic={0.08}
                    >
                        {projects.map((project) => (
                            <motion.article
                                key={project.name}
                                className={`mobile-project-card ${
                                    selectedProject?.name === project.name
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
                                <div className="mobile-project-card-logo">
                                    <img
                                        src={project.src}
                                        alt={`${project.name} logo`}
                                        loading="lazy"
                                    />
                                </div>

                                <div className="mobile-project-card-content">
                                    <span className="mobile-project-type">
                                        {project.type}
                                    </span>

                                    <h3 className="mobile-project-name">
                                        {project.name}
                                    </h3>

                                    <p className="mobile-project-role">
                                        {project.role}
                                    </p>

                                    <span className="mobile-project-open">
                                        Ver demo
                                        <span aria-hidden="true"> ↗</span>
                                    </span>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    <div className="mobile-projects-panel-footer">
                        <span className="mobile-projects-footer-line" />
                        <span>
                            {projects.length}{" "}
                            {projects.length === 1 ? "proyecto" : "proyectos"}
                        </span>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {selectedProject && (
                        <motion.section
                            key={selectedProject.name}
                            className="mobile-project-gallery"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 12 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="mobile-gallery-header">
                                <div>
                                    <span className="mobile-projects-eyebrow">
                                        VISTA PREVIA
                                    </span>

                                    <h2 className="mobile-gallery-title">
                                        {selectedProject.name}
                                    </h2>
                                </div>

                                <button
                                    type="button"
                                    className="mobile-gallery-demo-button"
                                    onClick={() =>
                                        openProject(selectedProject.url)
                                    }
                                >
                                    Ver demo ↗
                                </button>
                            </div>

                            <div className="mobile-gallery-track">
                                {selectedProject.images.map((img, index) => (
                                    <motion.figure
                                        key={img}
                                        className="mobile-gallery-image"
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
                                            Captura {index + 1}
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