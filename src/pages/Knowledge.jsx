
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../css/Knowledge.css";
import { services, skills, experience } from "../data/knowledge.js";

// Combina los textos traducidos con los datos originales. Los iconos y las tecnologías se conservan del arreglo original.
const getTranslatedItems = (originalItems, translatedItems) => {
    if (!Array.isArray(translatedItems)) {
        return originalItems.map((item) => ({
            ...item,
            displayName: item.name,
            displayDescription: item.description
        }));
    }

    return originalItems.map((item, index) => ({
        ...item,
        displayName: translatedItems[index]?.name ?? item.name,
        displayDescription:
            translatedItems[index]?.description ?? item.description
    }));
};

const KnowledgeCard = ({ item, index }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.article
            layout
            className={
                expanded
                    ? "knowledge-card expanded"
                    : "knowledge-card"
            }
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
                duration: 0.3,
                delay: Math.min(index * 0.04, 0.2)
            }}
        >
            <button
                type="button"
                className="knowledge-card-button"
                onClick={() => setExpanded((previous) => !previous)}
                aria-expanded={expanded}
            >
                <span className="knowledge-card-icon">
                    <img
                        src={item.icon}
                        alt={item.displayName ?? item.name}
                        loading="lazy"
                        onError={(event) => {
                            event.currentTarget.style.visibility = "hidden";
                        }}
                    />
                </span>

                <span className="knowledge-card-content">
                    <strong>{item.displayName ?? item.name}</strong>

                    <span className="knowledge-card-description">
                        {item.displayDescription ?? item.description}
                    </span>
                </span>

                <span className="knowledge-card-toggle">
                    {expanded ? "−" : "+"}
                </span>
            </button>

            <AnimatePresence initial={false}>
                {expanded && (
                    <motion.div
                        className="knowledge-card-details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        {item.technologies?.length > 0 && (
                            <div className="knowledge-tags">
                                {item.technologies.map((technology) => (
                                    <span key={technology}>
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        )}

                        <p>
                            {item.displayDescription ?? item.description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.article>
    );
};

const ExperienceCard = ({ job, index, t }) => {
    const [expanded, setExpanded] = useState(index === 0);

    return (
        <motion.article
            layout
            className={`experience-card${expanded ? " expanded" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
                duration: 0.35,
                delay: index * 0.08
            }}
        >
            <button
                type="button"
                className="experience-card-button"
                onClick={() => setExpanded((previous) => !previous)}
                aria-expanded={expanded}
            >
                <span className="experience-card-indicator">
                    {expanded ? "−" : "+"}
                </span>

                <span className="experience-card-heading">
                    <span className="experience-card-category">
                        {job.category}
                    </span>

                    <strong>{job.position}</strong>

                    <span className="experience-card-company">
                        {job.company}
                    </span>

                    <span className="experience-card-location">
                        {job.location}
                    </span>
                </span>

                <span className="experience-card-period">
                    {job.period}
                </span>
            </button>

            <AnimatePresence initial={false}>
                {expanded && (
                    <motion.div
                        className="experience-card-details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <h3>{t("experience.responsibilitiesTitle")}</h3>

                        <ul>
                            {job.responsibilities.map(
                                (responsibility, i) => (
                                    <li key={i}>{responsibility}</li>
                                )
                            )}
                        </ul>

                        <div className="experience-tags">
                            {job.technologies.map((technology) => (
                                <span key={technology}>
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.article>
    );
};

const Knowledge = () => {
    const { t } = useTranslation();
    const [serviceFilter, setServiceFilter] = useState("Todos");
    const [skillFilter, setSkillFilter] = useState("Todos");

    const translatedServices = t("services.items", {
        returnObjects: true
    });

    const translatedSkills = t("skills.items", {
        returnObjects: true
    });

    const translatedExperience = t("experience.items", {
        returnObjects: true
    });

    const displayedServices = getTranslatedItems(
        services,
        translatedServices
    );

    const displayedSkills = getTranslatedItems(
        skills,
        translatedSkills
    );

    // La experiencia usa el contenido traducido completo si está disponible.
    const displayedExperience = Array.isArray(translatedExperience)
        ? translatedExperience.map((job, index) => ({
            ...experience[index],
            ...job,
            // Preserva los datos originales si alguna clave falta
            responsibilities:
                job.responsibilities ??
                experience[index]?.responsibilities ??
                [],
            technologies:
                job.technologies ??
                experience[index]?.technologies ??
                []
        }))
        : experience;

    const filteredServices = displayedServices.filter(
        (item) =>
            serviceFilter === "Todos" || item.name === serviceFilter
    );

    const filteredSkills = displayedSkills.filter(
        (item) =>
            skillFilter === "Todos" || item.name === skillFilter
    );

    return (
        <main className="knowledge-page">
            <section className="knowledge-header">
                <span className="knowledge-eyebrow">
                    {t("knowledge.eyebrow_1")}
                </span>

                <h1>
                    <span>
                        {t("knowledge.heading_1")}
                    </span>{" "}
                    {t("knowledge.heading_2")}
                </h1>

                <p>
                    {t(
                        "knowledge.description",
                        "Explora mis áreas de desarrollo, lenguajes, tecnologías y experiencia laboral."
                    )}
                </p>
            </section>

            <section className="knowledge-columns">
                <div className="knowledge-panel">
                    <div className="knowledge-panel-heading">
                        <div>
                            <span className="knowledge-panel-label">
                                01 / {t("knowledge.areas")}
                            </span>

                            <h2>
                                {t(
                                    "knowledge.servicesTitle"
                                )}
                            </h2>
                        </div>

                        <span className="knowledge-total">
                            {filteredServices.length}
                        </span>
                    </div>

                    <label
                        className="knowledge-filter-label"
                        htmlFor="service-filter"
                    >
                        {t("knowledge.filterAreas")}
                    </label>

                    <select
                        id="service-filter"
                        className="knowledge-select"
                        value={serviceFilter}
                        onChange={(event) =>
                            setServiceFilter(event.target.value)
                        }
                    >
                        <option value="Todos">
                            {t(
                                "knowledge.allServices"
                            )}
                        </option>

                        {displayedServices.map((item) => (
                            <option key={item.name} value={item.name}>
                                {item.displayName}
                            </option>
                        ))}
                    </select>

                    <div className="knowledge-list">
                        <AnimatePresence mode="popLayout">
                            {filteredServices.map((item, index) => (
                                <KnowledgeCard
                                    key={item.name}
                                    item={item}
                                    index={index}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="knowledge-panel">
                    <div className="knowledge-panel-heading">
                        <div>
                            <span className="knowledge-panel-label">
                                02 / {t("knowledge.stackLabel")}
                            </span>

                            <h2>
                                {t(
                                    "knowledge.skillsTitle"
                                )}
                            </h2>
                        </div>

                        <span className="knowledge-total">
                            {filteredSkills.length}
                        </span>
                    </div>

                    <label
                        className="knowledge-filter-label"
                        htmlFor="skill-filter"
                    >
                        {t(
                            "knowledge.filterSkills"
                        )}
                    </label>

                    <select
                        id="skill-filter"
                        className="knowledge-select"
                        value={skillFilter}
                        onChange={(event) =>
                            setSkillFilter(event.target.value)
                        }
                    >
                        <option value="Todos">
                            {t(
                                "knowledge.allSkills"
                            )}
                        </option>

                        {displayedSkills.map((item) => (
                            <option key={item.name} value={item.name}>
                                {item.displayName}
                            </option>
                        ))}
                    </select>

                    <div className="knowledge-list">
                        <AnimatePresence mode="popLayout">
                            {filteredSkills.map((item, index) => (
                                <KnowledgeCard
                                    key={item.name}
                                    item={item}
                                    index={index}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            <section
                id="experiencia"
                className="knowledge-experience"
            >
                <motion.header
                    className="knowledge-experience-header"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <span className="knowledge-eyebrow">
                        {t(
                            "knowledge.eyebrow_2"
                        )}
                    </span>

                    <h2>
                        {t("experience.title")}
                    </h2>

                    <p>
                        {t("experience.description")}
                    </p>
                </motion.header>

                <div className="experience-list">
                    {displayedExperience.map((job, index) => (
                        <ExperienceCard
                            key={index}
                            job={job}
                            index={index}
                            t={t}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Knowledge;
