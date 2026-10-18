import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import ContactForm from "../components/ContactForm";
import "../css/Contact.css";
import { useTranslation } from "react-i18next";


const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const leftVariants = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const rightVariants = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const titleVariants = {
    hidden: {
        opacity: 0,
        y: -25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const Contact = () => {
        const { t } = useTranslation();
    return (
        <section id="contacto" className="contact-section">
            <div className="contact-inner">
                <div className="contact-container">

                    {/* Información de contacto */}
                    <motion.div
                        className="contact-info"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                    >
                        <motion.h2
                            className="contact-title"
                            variants={titleVariants}
                        >
                            {t("contact.title")}
                        </motion.h2>

                        <motion.div
                            className="contact-item"
                            variants={leftVariants}
                        >
                            <h3 className="contact-subtitle">
                                {t("contact.phone")}
                            </h3>

                            <a
                                href="tel:+18098802894"
                                className="contact-phone"
                            >
                                +1 (809) 880-2894
                            </a>
                        </motion.div>

                        <motion.div
                            className="contact-item"
                            variants={leftVariants}
                        >
                            <h3 className="contact-subtitle">
                                LinkedIn
                            </h3>

                            <a
                                href="https://www.linkedin.com/in/evans-jimenez-a8a629314"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-linkedin"
                                aria-label="Visitar mi perfil de LinkedIn"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    size="2x"
                                />

                                <span>{t("contact.viewProfile")}</span>
                            </a>
                        </motion.div>
                         <motion.div
                            className="contact-item"
                            variants={leftVariants}
                        >
                            <h3 className="contact-subtitle">
                                Github
                            </h3>

                            <a
                                href="https://github.com/Evans-F-Jimenez"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-github"
                                aria-label="Visitar mi perfil de Github"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    size="2x"
                                />

                                <span>{t("contact.viewProfile")}</span>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Formulario de contacto */}
                    <motion.div
                        className="contact-form-wrapper"
                        variants={rightVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                    >
                        <motion.h3
                            className="contact-form-title"
                            variants={titleVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {t("contact.sendMessage")}
                        </motion.h3>

                        <ContactForm />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;