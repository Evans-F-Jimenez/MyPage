
import { motion } from "framer-motion";
import {educationData, certificationsData} from "../data/education.js";
import "../css/Education.css";
import { useTranslation } from "react-i18next";


export default function Education() {
        const { t } = useTranslation();

    return (
        <main className="education-page">
            <section className="education-section">
                <header className="education-section-header">
                    <span className="education-eyebrow">
                        {t("education.eyebrow_1")}
                    </span>

                    <h1 className="education-title">
                        {t("education.title")}
                    </h1>

                    <p className="education-subtitle">
                        {t("education.subtitle")}</p>
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
                                    {t(edu.degree)}
                                </p>

                                {edu.result && (
                                    <p className="education-result">
                                        {t(edu.result)}
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
                        {t("education.eyebrow_2")}
                    </span>

                    <h2 className="certifications-heading">
                        {t("education.heading")}
                    </h2>

                    <p className="certifications-description">
                       {t("education.description")}
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
                                    {t(cert.period)}
                                </p>
                            </div>

                            <span
                                className={`certification-status ${
                                    t(cert.status) === "Completada"
                                        ? "is-completed"
                                        : "is-progress"
                                }`}
                            >
                                {t(cert.status)}
                            </span>
                        </motion.article>
                    ))}
                </div>
            </section>
        </main>
    );
}