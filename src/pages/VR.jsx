
import { motion } from "framer-motion";

import BosquecitoThumb from "../assets/Bosquecito-Thumb.jpg";
import BibliotecaThumb from "../assets/Biblioteca-Thumb.png";
import FEThumb from "../assets/Flora-Thumb.png";

import "../css/VR.css";

const projects = [
    {
        src: BosquecitoThumb,
        url: "https://refodige.intec.edu.do/recursos/bosquecito/index.html",
        name: "Bosquecito",
        tipo: "Recorrido Virtual",
        rol: "Creador",
        cliente: "INTEC (REFODIGE)",
    },
    {
        src: FEThumb,
        url: "https://refodige.intec.edu.do/recursos/jardinbotanico/index.html",
        name: "Flora Endémica",
        tipo: "Recorrido Virtual",
        rol: "Supervisor",
        cliente: "INTEC (REFODIGE)",
    },
    {
        src: BibliotecaThumb,
        url: "https://refodige.intec.edu.do/recursos/biblioteca/index.html",
        name: "Biblioteca",
        tipo: "Recorrido Virtual",
        rol: "Supervisor",
        cliente: "INTEC (REFODIGE)",
    },
];

const VR = () => {
    return (
        <main className="vr-page">
            <section className="vr-section">
                <header className="vr-header">
                    <span className="vr-eyebrow">
                        MIS PROYECTOS
                    </span>

                    <h1 className="vr-title">
                        Realidad Virtual
                    </h1>

                    <p className="vr-subtitle">
                        Recorridos virtuales interactivos en los que he
                        participado durante mi experiencia en INTEC.
                    </p>
                </header>

                <div className="vr-grid">
                    {projects.map((item, index) => (
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
                    {item.tipo}
                </span>

                <h2 className="vr-card-title">
                    {item.name}
                </h2>

                <div className="vr-card-divider" />

                <p className="vr-card-role">
                    <span>Rol:</span> {item.rol}
                </p>

                <p className="vr-card-client">
                    {item.cliente}
                </p>

                <span className="vr-card-link">
                    Explorar proyecto
                    <span aria-hidden="true"> ↗</span>
                </span>
            </div>
        </motion.article>
    );
};

export default VR;