
import { motion } from "framer-motion";
import educationData from "../data/education.js";
import "../css/Education.css";

const certificationsData = [
    {
        name: "Google Data Analytics Professional Certificate",
        provider: "Coursera (Google)",
        status: "En progreso",
        period: "Actualmente en curso",
    },
];

export default function Education() {
    return (
        <main className="education-page">
            <section className="education-section">
                <header className="education-section-header">
                    <span className="education-eyebrow">
                        Formacion Institucional
                    </span>

                    <h1 className="education-title">
                        Educación
                    </h1>

                    <p className="education-subtitle">
                        Mi formación académica y los conocimientos que he
                        adquirido a lo largo de mi trayectoria Institucional.
                    </p>
                </header>

                <div className="education-list">
                    {educationData.map((edu, index) => (
                        <motion.article
                            key={`${edu.name}-${edu.period}-${index}`}
                            className="education-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.08,
                            }}
                        >
                            {edu.img && (
                                <div className="education-image-wrapper">
                                    <img
                                        src={edu.img}
                                        alt={`Imagen de ${edu.name}`}
                                        className="education-image"
                                        loading="lazy"
                                    />
                                </div>
                            )}

                            <div className="education-details">
                                <span className="education-period">
                                    {edu.period}
                                </span>

                                <h2 className="education-institution">
                                    {edu.name}
                                    {edu.siglas && ` (${edu.siglas})`}
                                </h2>

                                <p className="education-degree">
                                    {edu.degree}
                                </p>

                                {edu.result && (
                                    <p className="education-result">
                                        {edu.result}
                                    </p>
                                )}
                            </div>

                            {edu.icon && (
                                <img
                                    src={edu.icon}
                                    alt=""
                                    className="education-icon"
                                    loading="lazy"
                                />
                            )}
                        </motion.article>
                    ))}
                </div>
            </section>

            <section className="certifications-section">
                <header className="certifications-header">
                    <span className="education-eyebrow">
                        FORMACIÓN COMPLEMENTARIA
                    </span>

                    <h2 className="certifications-heading">
                        Certificaciones
                    </h2>

                    <p className="certifications-description">
                        Cursos y certificaciones que complementan mi formación profesional y fortalecen mis habilidades técnicas.
                    </p>
                </header>

                <div className="certifications-list">
                    {certificationsData.map((cert, index) => (
                        <motion.article
                            key={`${cert.name}-${index}`}
                            className="certification-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.08,
                            }}
                        >
                            <div className="certification-details">
                                <h3 className="certification-name">
                                    {cert.name}
                                </h3>

                                <p className="certification-provider">
                                    {cert.provider}
                                </p>

                                <p className="certification-period">
                                    {cert.period}
                                </p>
                            </div>

                            <span
                                className={`certification-status ${
                                    cert.status === "Completada"
                                        ? "is-completed"
                                        : "is-progress"
                                }`}
                            >
                                {cert.status}
                            </span>
                        </motion.article>
                    ))}
                </div>
            </section>
        </main>
    );
}