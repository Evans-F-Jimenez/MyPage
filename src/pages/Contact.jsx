import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "../components/ContactForm";
import "../css/Contact.css";

const Contact = () => {
    return (
        <section id="contacto" className="contact-section">
            <div className="contact-inner">
                <div className="contact-container">

                    {/* Información de contacto */}
                    <div className="contact-info">
                        <h2 className="contact-title">
                            Contacto
                        </h2>

                        <div className="contact-item">
                            <h3 className="contact-subtitle">
                                Teléfono
                            </h3>

                            <a
                                href="tel:+18098802894"
                                className="contact-phone"
                            >
                                +1 (809) 880-2894
                            </a>
                        </div>

                        <div className="contact-item">
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
                                <span>Ver mi perfil</span>
                            </a>
                        </div>
                    </div>

                    {/* Formulario con envío mediante EmailJS */}
                    <div className="contact-form-wrapper">
                        <h3 className="contact-form-title">
                            Envíame un mensaje
                        </h3>

                        <ContactForm />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;