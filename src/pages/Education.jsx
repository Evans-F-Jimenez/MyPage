
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import educationData from "../data/education.js";
import "../css/Education.css";

export default function Education() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <section className="education-section">
            <motion.button
                type="button"
                className={`education-header ${isOpen ? "is-open" : ""}`}
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-controls="education-content"
                whileTap={{ scale: 0.995 }}
            >
                <span className="education-header-content">
                    <span className="education-eyebrow">
                        FORMACIÓN ACADÉMICA
                    </span>

                    <span className="education-title">
                        Educación
                    </span>

                    <span className="education-subtitle">
                        Mi trayectoria académica y formación profesional.
                    </span>
                </span>

                <span className="education-toggle" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                </span>
            </motion.button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id="education-content"
                        key="education-content"
                        className="education-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            height: { duration: 0.4, ease: "easeInOut" },
                            opacity: { duration: 0.25 }
                        }}
                    >
                        <div className="education-list">
                            {educationData.map((edu, index) => (
                                <motion.article
                                    key={`${edu.name}-${edu.period}-${index}`}
                                    className="education-card"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{
                                        duration: 0.35,
                                        delay: index * 0.08
                                    }}
                                >
                                    <div className="education-image-wrapper">
                                        {edu.img && (
                                            <img
                                                src={edu.img}
                                                alt={`Imagen de ${edu.name}`}
                                                className="education-image"
                                                loading="lazy"
                                            />
                                        )}
                                    </div>

                                    {edu.icon && (
                                        <div className="education-icon-wrapper">
                                            <img
                                                src={edu.icon}
                                                alt=""
                                                className="education-icon"
                                                loading="lazy"
                                            />
                                        </div>
                                    )}

                                    <div className="education-details">
                                        <span className="education-period">
                                            {edu.period}
                                        </span>

                                        <h3 className="education-institution">
                                            {edu.name}
                                            {edu.siglas && (
                                                <span> ({edu.siglas})</span>
                                            )}
                                        </h3>

                                        <p className="education-degree">
                                            {edu.degree}
                                        </p>
                                        <p className="education-result">
                                            {edu.result}
                                        </p>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}