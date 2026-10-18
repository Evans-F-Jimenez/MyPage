
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";
import "../css/Portfolio.css";
import { useTranslation } from "react-i18next";



const Portfolio = () => {
            const { t } = useTranslation();

    return (
        <main className="portfolio-page">
            <section className="portfolio-section">
                <header className="portfolio-header">
                    <span className="portfolio-eyebrow">
                        {t("portfolio.eyebrow")}
                    </span>

                    <h1 className="portfolio-title">
                        {t("portfolio.title")}
                    </h1>

                    <p className="portfolio-subtitle">
                        {t("portfolio.subtitle")}
                    </p>
                </header>

                <div className="portfolio-grid">
                    {portfolio.map((portfolio, index) => (
                        <motion.article
                            key={portfolio.title}
                            className="portfolio-card"
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.45,
                                delay: index * 0.12,
                            }}
                        >
                            <div className="portfolio-card-image">
                                <img
                                    src={portfolio.image}
                                    alt={portfolio.title}
                                    loading="lazy"
                                />
                            </div>

                            <div className="portfolio-card-content">
                                <h2 className="portfolio-card-title">
                                    {t(portfolio.title)}
                                </h2>

                                <p className="portfolio-card-description">
                                    {t(portfolio.description)}
                                </p>

                                <Link
                                    to={portfolio.link}
                                    className="portfolio-card-link"
                                >
                                    {t("portfolio.btnView")}
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

export default Portfolio;