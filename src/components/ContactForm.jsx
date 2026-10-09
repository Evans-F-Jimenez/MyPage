
import { useState } from "react";
import emailjs from "emailjs-com";
import "../css/Contact.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [emailError, setEmailError] = useState("");
    const [status, setStatus] = useState("");
    const [isSending, setIsSending] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email.trim());
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

        if (name === "email") {
            setEmailError(
                value.trim() && !validateEmail(value)
                    ? "Por favor, ingresa un correo válido."
                    : ""
            );
        }

        if (status) {
            setStatus("");
        }
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        if (isSending) return;

        const name = formData.name.trim();
        const email = formData.email.trim();
        const message = formData.message.trim();

        if (!name || !email || !message) {
            setStatus("Completa todos los campos antes de enviar.");
            return;
        }

        if (!validateEmail(email)) {
            setEmailError("Por favor, ingresa un correo válido.");
            return;
        }

        setIsSending(true);
        setStatus("");

        try {
            await emailjs.send(
                "service_25gv313",
                "template_nilrbvl",
                {
                    name,
                    email,
                    message,
                },
                "JhM45ROy4ASO8gT9l"
            );

            setStatus("success");
            setFormData({
                name: "",
                email: "",
                message: "",
            });
            setEmailError("");
        } catch (error) {
            console.error("Error al enviar el correo:", error);
            setStatus("error");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <form
            onSubmit={sendEmail}
            className="contact-form"
            noValidate
        >
            <div className="contact-field">
                <label htmlFor="contact-name">Nombre</label>
                <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    maxLength={100}
                    required
                />
            </div>

            <div className="contact-field">
                <label htmlFor="contact-email">Correo electrónico</label>
                <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="tu@correo.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    maxLength={254}
                    aria-invalid={Boolean(emailError)}
                    aria-describedby={emailError ? "email-error" : undefined}
                    required
                />

                {emailError && (
                    <p id="email-error" className="contact-error">
                        {emailError}
                    </p>
                )}
            </div>

            <div className="contact-field">
                <label htmlFor="contact-message">Mensaje</label>
                <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Escribe tu mensaje..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    maxLength={5000}
                    required
                />
            </div>

            {status === "success" && (
                <p className="contact-success" role="status">
                    ¡Mensaje enviado correctamente! Gracias por contactarme.
                </p>
            )}

            {status === "error" && (
                <p className="contact-error" role="alert">
                    No se pudo enviar el mensaje. Inténtalo nuevamente.
                </p>
            )}

            {status && status !== "success" && status !== "error" && (
                <p className="contact-error" role="alert">
                    {status}
                </p>
            )}

            <button
                type="submit"
                className="contact-submit"
                disabled={isSending}
            >
                {isSending ? "Enviando..." : "Enviar mensaje"}
            </button>
        </form>
    );
};

export default ContactForm;