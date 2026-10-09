
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/Knowleadge.css";

const services = [
    {
        name: "Front-End Web",
        description: "Desarrollo de interfaces web modernas y responsivas.",
        icon: "/MyPage/assets/web.png",
        technologies: ["React", "JavaScript", "HTML", "CSS"]
    },
    {
        name: "Desarrollo Móvil",
        description: "Desarrollo de aplicaciones móviles multiplataforma.",
        icon: "/MyPage/assets/mobile.png",
        technologies: ["Flutter", "Dart"]
    },
    {
        name: "Back-End",
        description: "Lógica de aplicaciones y desarrollo de software.",
        icon: "/MyPage/assets/Logo_C.png",
        technologies: ["C#", "Entity Framework"]
    },
    {
        name: "Bases de Datos",
        description: "Consultas y gestión de bases de datos relacionales.",
        icon: "/MyPage/assets/database.png",
        technologies: ["SQL Server", "MySQL", "SQL"]
    },
    {
        name: "Business Intelligence",
        description: "Preparación, análisis y visualización de datos.",
        icon: "/MyPage/assets/powerbi.png",
        technologies: ["Python", "Power BI", "ETL"]
    },
    {
        name: "Diseño UI/UX",
        description: "Diseño de interfaces y experiencia de usuario.",
        icon: "/MyPage/assets/uiux.png",
        technologies: ["Figma", "Prototipado"]
    }
];

const skills = [
    {
        name: "C#",
        description: "Programación orientada a objetos y desarrollo de software.",
        icon: "/MyPage/assets/Logo_C.png"
    },
    {
        name: "JavaScript",
        description: "Desarrollo de funcionalidades e interfaces web.",
        icon: "/MyPage/assets/JS.png"
    },
    {
        name: "Python",
        description: "Procesamiento, transformación y análisis de datos.",
        icon: "/MyPage/assets/python.jpg"
    },
    {
        name: "SQL",
        description: "Consultas y manipulación de datos relacionales.",
        icon: "/MyPage/assets/database.png"
    },
    {
        name: "React",
        description: "Construcción de interfaces con componentes reutilizables.",
        icon: "/MyPage/assets/React-logo.png"
    },
    {
        name: "Flutter",
        description: "Desarrollo de aplicaciones multiplataforma.",
        icon: "/MyPage/assets/flutter.png"
    },
    {
        name: "Dart",
        description: "Lenguaje de programación utilizado con Flutter.",
        icon: "/MyPage/assets/flutter.png"
    },
    {
        name: "SQL Server",
        description: "Gestión y consulta de bases de datos.",
        icon: "/MyPage/assets/database.png"
    },
    {
        name: "MySQL",
        description: "Administración y consultas de bases de datos relacionales.",
        icon: "/MyPage/assets/MySQL.png"
    },
    {
        name: "Power BI",
        description: "Creación de dashboards e informes para analizar datos.",
        icon: "/MyPage/assets/powerbi.png"
    },
    {
        name: "Figma",
        description: "Diseño y prototipado de interfaces.",
        icon: "/MyPage/assets/figma.png"
    },
    {
        name: "Entity Framework",
        description: "Acceso y gestión de datos en aplicaciones .NET.",
        icon: "/MyPage/assets/Logo_C.png"
    }
];

const experience = [
    {
        company: "GRUPO READ — FARMACARD",
        position: "Auxiliar de Business Intelligence",
        period: "Mayo 2025 – Octubre 2026",
        location: "Santo Domingo, República Dominicana",
        category: "Business Intelligence · Data Analytics",
        responsibilities: [
            "Analicé datos empresariales para identificar tendencias y generar información útil para la toma de decisiones.",
            "Utilicé Python para extraer, procesar y transformar datos de Excel destinados a soluciones de Business Intelligence.",
            "Preparé conjuntos de datos y desarrollé y mantuve dashboards en Power BI para facilitar el análisis y la visualización de información.",
            "Participé en el desarrollo y la mejora de páginas web orientadas a la visualización de datos.",
            "Optimicé procesos de preparación y presentación de información para el análisis empresarial."
        ],
        technologies: ["Python", "Power BI", "Excel", "Data Analytics", "Web Development"]
    },
    {
        company: "INTEC — LABORATORIO DE REALIDAD EXTENDIDA",
        position: "Asistente Técnico",
        period: "Mayo 2024 – Mayo 2025",
        location: "Santo Domingo, República Dominicana",
        category: "Software · Tecnología · Realidad Extendida",
        responsibilities: [
            "Apoyé las actividades técnicas y operativas del Laboratorio de Realidad Extendida.",
            "Revisé productos de software para verificar el cumplimiento de los estándares de calidad requeridos.",
            "Colaboré en la creación de experiencias tecnológicas y verifiqué el estado y la disponibilidad de los equipos."
        ],
        technologies: ["Software Testing", "Technical Support", "Extended Reality"]
    },
    {
        company: "INTEC — LABORATORIO DE REALIDAD EXTENDIDA",
        position: "Pasante",
        period: "Febrero 2024 – Abril 2024",
        location: "Santo Domingo, República Dominicana",
        category: "Experiencia inicial · Tecnología",
        responsibilities: [
            "Brindé apoyo en las actividades técnicas y operativas del laboratorio.",
            "Participé en proyectos relacionados con tecnología y desarrollo de software."
        ],
        technologies: ["Software Development", "Technical Support", "Technology"]
    }
];

const KnowledgeCard = ({ item, index }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.article
            layout
            className={expanded ? "knowledge-card expanded" : "knowledge-card"}
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
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
            >
                <span className="knowledge-card-icon">
                    <img
                        src={item.icon}
                        alt=""
                        loading="lazy"
                        onError={(event) => {
                            event.currentTarget.style.visibility = "hidden";
                        }}
                    />
                </span>

                <span className="knowledge-card-content">
                    <strong>{item.name}</strong>
                    <span className="knowledge-card-description">
                        {item.description}
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
                        {item.technologies && (
                            <div className="knowledge-tags">
                                {item.technologies.map((technology) => (
                                    <span key={technology}>
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        )}

                        <p>{item.description}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.article>
    );
};

const ExperienceCard = ({ job, index }) => {
    const [expanded, setExpanded] = useState(index === 0);

    return (
        <motion.article
            layout
            className={`experience-card${expanded ? " expanded" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
        >
            <button
                type="button"
                className="experience-card-button"
                onClick={() => setExpanded(!expanded)}
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
                        <h3>Responsabilidades</h3>

                        <ul>
                            {job.responsibilities.map((responsibility, i) => (
                                <li key={i}>{responsibility}</li>
                            ))}
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

const Knowleadge = () => {
    const [serviceFilter, setServiceFilter] = useState("Todos");
    const [skillFilter, setSkillFilter] = useState("Todos");

    const filteredServices = services.filter((item) => {
        return serviceFilter === "Todos" || item.name === serviceFilter;
    });

    const filteredSkills = skills.filter((item) => {
        return skillFilter === "Todos" || item.name === skillFilter;
    });

    return (
        <main className="knowledge-page">
            <section className="knowledge-header">
                <span className="knowledge-eyebrow">
                    MIS COMPETENCIAS
                </span>

                <h1>
                    <span>Conocimientos</span> y experiencias
                </h1>

                <p>
                    Explora mis áreas de desarrollo, lenguajes, tecnologías
                    y experiencia laboral.
                </p>
            </section>

            <section className="knowledge-columns">
                {/* Servicios */}
                <div className="knowledge-panel">
                    <div className="knowledge-panel-heading">
                        <div>
                            <span className="knowledge-panel-label">
                                01 / ÁREAS
                            </span>
                            <h2>Desarrollo y servicios</h2>
                        </div>

                        <span className="knowledge-total">
                            {filteredServices.length}
                        </span>
                    </div>

                    <label
                        className="knowledge-filter-label"
                        htmlFor="service-filter"
                    >
                        Filtrar áreas
                    </label>

                    <select
                        id="service-filter"
                        className="knowledge-select"
                        value={serviceFilter}
                        onChange={(event) => setServiceFilter(event.target.value)}
                    >
                        <option value="Todos">Todos los servicios</option>

                        {services.map((item) => (
                            <option key={item.name} value={item.name}>
                                {item.name}
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

                {/* Conocimientos */}
                <div className="knowledge-panel">
                    <div className="knowledge-panel-heading">
                        <div>
                            <span className="knowledge-panel-label">
                                02 / STACK
                            </span>
                            <h2>Lenguajes y tecnologías</h2>
                        </div>

                        <span className="knowledge-total">
                            {filteredSkills.length}
                        </span>
                    </div>

                    <label
                        className="knowledge-filter-label"
                        htmlFor="skill-filter"
                    >
                        Filtrar tecnologías
                    </label>

                    <select
                        id="skill-filter"
                        className="knowledge-select"
                        value={skillFilter}
                        onChange={(event) => setSkillFilter(event.target.value)}
                    >
                        <option value="Todos">Todas las tecnologías</option>

                        {skills.map((item) => (
                            <option key={item.name} value={item.name}>
                                {item.name}
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

            {/* Experiencia laboral */}
            <section id="experiencia" className="knowledge-experience">
                <motion.header
                    className="knowledge-experience-header"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <span className="knowledge-eyebrow">
                        TRAYECTORIA PROFESIONAL
                    </span>

                    <h2>Experiencia laboral</h2>

                    <p>
                        Mi trayectoria en Business Intelligence, análisis de datos,
                        desarrollo de software y soporte tecnológico.
                    </p>
                </motion.header>

                <div className="experience-list">
                    {experience.map((job, index) => (
                        <ExperienceCard
                            key={`${job.company}-${job.position}`}
                            job={job}
                            index={index}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Knowleadge;