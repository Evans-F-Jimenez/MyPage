
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Card } from "../components/Card";
import "../css/Home.css";

const Home = () => {
    const [firstVisit] = useState(() => {
        return localStorage.getItem("home-intro-animation-seen") !== "true";
    });

    useEffect(() => {
        if (firstVisit) {
            localStorage.setItem("home-intro-animation-seen", "true");
        }
    }, [firstVisit]);

    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const visualVariants = {
        hidden: {
            opacity: 0,
            x: -35,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.9,
                delay: 0.2,
                ease: "easeOut",
            },
        },
    };

    const contentVariants = {
        hidden: {
            opacity: 0,
            x: 35,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.9,
                delay: 0.4,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.section
            id="inicio"
            className="home-section"
            variants={sectionVariants}
            initial={firstVisit ? "hidden" : false}
            animate="visible"
        >
            <motion.div
                className="home-visual"
                variants={visualVariants}
                initial={firstVisit ? "hidden" : false}
                animate="visible"
            >
                <Card />
            </motion.div>

            <motion.div
                className="home-content"
                variants={contentVariants}
                initial={firstVisit ? "hidden" : false}
                animate="visible"
            >
                <p className="home-eyebrow">
                    Bienvenido a mi portafolio
                </p>

                <h1 className="home-title">
                    Hola, soy{" "}
                    <span className="home-highlight">
                        Evans Jiménez
                    </span>
                </h1>

                <h2 className="home-subtitle">
                    Ingeniero de Software y{" "}
                    <span className="home-highlight">
                        <TypeAnimation
                            sequence={[
                                "Desarrollador Front-End",
                                2000,
                                "Desarrollador Full Stack",
                                2000,
                                "Analista de Datos",
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            cursor={true}
                        />
                    </span>
                </h2>

                <p className="home-description">
                    Soy Ingeniero de Software con interés en el desarrollo de
                    aplicaciones web, el análisis de datos y la inteligencia de
                    negocios. Me enfoco en crear interfaces intuitivas, funcionales
                    y visualmente atractivas, procurando que cada usuario pueda
                    navegar de manera clara y comprender fácilmente la información.
                    También cuento con experiencia trabajando con datos y herramientas
                    de Business Intelligence para apoyar el análisis y la toma de
                    decisiones.
                </p>

                <div className="home-actions">
                    <a
                        href="/MyPage/Knowleadge"
                        className="home-button home-button-primary"
                    >
                        Conoce mis habilidades
                    </a>

                    <a
                        href="/MyPage/contact"
                        className="home-button home-button-secondary"
                    >
                        Contáctame
                    </a>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Home;
