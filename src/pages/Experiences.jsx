
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import VRImage from "/src/assets/VR.png";
import FrontEndImage from "/src/assets/Front-End-bg.png";

import "../css/Experience.css";

const experiencesData = [
    {
        title: "Realidad Virtual (VR)",
        link: "/portafolio/vr",
        image: VRImage,
        description:
            "Experiencias inmersivas e interactivas desarrolladas con realidad virtual.",
    },
    {
        title: "Front-End",
        link: "/portafolio/front-end",
        image: FrontEndImage,
        description:
            "Interfaces web modernas, desarrollo visual y experiencias de usuario.",
    },
];

const Experiences = () => {
    return (
        <main className="experiences-page">
            <section className="experiences-section">
                <header className="experiences-header">
                    <span className="experiences-eyebrow">
                        MIS PROYECTOS
                    </span>

                    <h1 className="experiences-title">
                        Portafolio
                    </h1>

                    <p className="experiences-subtitle">
                        Una selección de proyectos en los que aplico mis
                        conocimientos y habilidades de desarrollo.
                    </p>
                </header>

                <div className="experiences-grid">
                    {experiencesData.map((experience, index) => (
                        <motion.article
                            key={experience.title}
                            className="experience-card"
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.45,
                                delay: index * 0.12,
                            }}
                        >
                            <div className="experience-card-image">
                                <img
                                    src={experience.image}
                                    alt={experience.title}
                                    loading="lazy"
                                />
                            </div>

                            <div className="experience-card-content">
                                <h2 className="experience-card-title">
                                    {experience.title}
                                </h2>

                                <p className="experience-card-description">
                                    {experience.description}
                                </p>

                                <Link
                                    to={experience.link}
                                    className="experience-card-link"
                                >
                                    Ver proyectos
                                    <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Experiences;