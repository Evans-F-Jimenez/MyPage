
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Card } from "../components/Card";
import "../css/Home.css";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
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
                    {t("home.welcome")}
                </p>

                <h1 className="home-title">
                    {t("home.greeting")}{" "}
                    <span className="home-highlight">
                        Evans Jiménez
                    </span>
                </h1>

                <h2 className="home-subtitle">
                    {t("home.softwareEngineer")}{" "}
                    <span className="home-highlight">
                        <TypeAnimation
                            sequence={[
                                t("home.frontendDeveloper"),
                                2000,
                                t("home.fullstackDeveloper"),
                                2000,
                                t("home.dataAnalytics"),
                                2000,
                                t("home.freelancer"),
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
                    {t("home.textDescription")}
                </p>

                <div className="home-actions">
                    <a
                        href="/MyPage/Knowleadge"
                        className="home-button home-button-primary"
                    >
                        {t("home.btnAbility")}
                    </a>

                    <a
                        href="/MyPage/contact"
                        className="home-button home-button-secondary"
                    >
                        {t("home.btnContact")}
                    </a>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Home;
