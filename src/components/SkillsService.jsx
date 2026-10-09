
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SkillsServices.css";

const knowledge = [
    {
        name: "Front-End Web",
        category: "development",
        description: "Desarrollo de interfaces web modernas y responsivas.",
        technologies: ["React", "JavaScript", "HTML", "CSS"],
        icon: "/MyPage/assets/web.png"
    },
    {
        name: "Desarrollo Móvil",
        category: "development",
        description: "Creación de aplicaciones móviles multiplataforma.",
        technologies: ["Flutter", "Dart"],
        icon: "/MyPage/assets/mobile.png"
    },
    {
        name: "Back-End",
        category: "development",
        description: "Lógica de aplicaciones, acceso a datos y desarrollo de software.",
        technologies: ["C#", "Entity Framework"],
        icon: "/MyPage/assets/Logo_C.png"
    },
    {
        name: "Bases de Datos",
        category: "development",
        description: "Consultas, gestión y estructuración de datos relacionales.",
        technologies: ["SQL Server", "MySQL", "SQL"],
        icon: "/MyPage/assets/database.png"
    },
    {
        name: "Business Intelligence",
        category: "development",
        description: "Preparación de datos, análisis y visualización para apoyar decisiones.",
        technologies: ["Python", "Power BI", "ETL"],
        icon: "/MyPage/assets/powerbi.png"
    },
    {
        name: "Diseño UI/UX",
        category: "development",
        description: "Diseño de interfaces y experiencia de usuario.",
        technologies: ["Figma", "Prototipado"],
        icon: "/MyPage/assets/uiux.png"
    },
    {
        name: "C#",
        category: "technology",
        description: "Programación orientada a objetos y desarrollo con .NET.",
        icon: "/MyPage/assets/Logo_C.png"
    },
    {
        name: "JavaScript",
        category: "technology",
        description: "Programación para aplicaciones e interfaces web.",
        icon: "/MyPage/assets/JS.png"
    },
    {
        name: "Python",
        category: "technology",
        description: "Procesamiento, transformación y análisis de datos.",
        icon: "/MyPage/assets/python.png"
    },
    {
        name: "SQL",
        category: "technology",
        description: "Consultas, manipulación de datos y bases de datos relacionales.",
        icon: "/MyPage/assets/database.png"
    },
    {
        name: "React",
        category: "technology",
        description: "Desarrollo de interfaces mediante componentes reutilizables.",
        icon: "/MyPage/assets/React-logo.png"
    },
    {
        name: "Flutter",
        category: "technology",
        description: "Desarrollo de aplicaciones móviles multiplataforma.",
        icon: "/MyPage/assets/flutter.png"
    },
    {
        name: "Dart",
        category: "technology",
        description: "Lenguaje utilizado para desarrollar aplicaciones con Flutter.",
        icon: "/MyPage/assets/flutter.png"
    }
];

const filters = [
    { label: "Todos", value: "all" },
    { label: "Desarrollo y servicios", value: "development" },
    { label: "Lenguajes y tecnologías", value: "technology" }
];

const SkillsServices = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [selectedItem, setSelectedItem] = useState(null);

    const filteredKnowledge = knowledge.filter((item) => {
        return activeFilter === "all" || item.category === activeFilter;
    });

    return (
        <main className="knowledge-page">
            <section className="knowledge-section">

                <motion.div
                    className="knowledge-heading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="knowledge-eyebrow">
                        MIS COMPETENCIAS
                    </span>

                    <h1>
                        Conocimientos <span>y tecnologías</span>
                    </h1>

                    <p>
                        Las herramientas, tecnologías y áreas de desarrollo
                        que utilizo para construir soluciones de software
                        y trabajar con datos.
                    </p>
                </motion.div>

                <div
                    className="knowledge-filters"
                    role="group"
                    aria-label="Filtrar conocimientos"
                >
                    {filters.map((filter) => (
                        <button
                            key={filter.value}
                            type="button"
                            className={
                                activeFilter === filter.value
                                    ? "knowledge-filter active"
                                    : "knowledge-filter"
                            }
                            aria-pressed={activeFilter === filter.value}
                            onClick={() => {
                                setActiveFilter(filter.value);
                                setSelectedItem(null);
                            }}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <div className="knowledge-count">
                    Mostrando {filteredKnowledge.length} conocimientos
                </div>

                <motion.div layout className="knowledge-grid">
                    <AnimatePresence mode="popLayout">
                        {filteredKnowledge.map((item) => {
                            const isSelected = selectedItem === item.name;

                            return (
                                <motion.article
                                    layout
                                    key={item.name}
                                    className={
                                        isSelected
                                            ? "knowledge-card selected"
                                            : "knowledge-card"
                                    }
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <button
                                        type="button"
                                        className="knowledge-card-button"
                                        aria-expanded={isSelected}
                                        onClick={() => {
                                            setSelectedItem(
                                                isSelected ? null : item.name
                                            );
                                        }}
                                    >
                                        <div className="knowledge-card-top">
                                            <div className="knowledge-icon">
                                                <img
                                                    src={item.icon}
                                                    alt=""
                                                    loading="lazy"
                                                    onError={(event) => {
                                                        event.currentTarget.style.display = "none";
                                                    }}
                                                />
                                            </div>

                                            <span className="knowledge-arrow">
                                                {isSelected ? "−" : "+"}
                                            </span>
                                        </div>

                                        <span className="knowledge-type">
                                            {item.category === "development"
                                                ? "ÁREA DE CONOCIMIENTO"
                                                : "TECNOLOGÍA"}
                                        </span>

                                        <h2>{item.name}</h2>

                                        <p>{item.description}</p>

                                        {item.technologies && (
                                            <div className="technology-tags">
                                                {item.technologies.map(
                                                    (technology) => (
                                                        <span key={technology}>
                                                            {technology}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        )}

                                        <span className="knowledge-more">
                                            {isSelected
                                                ? "Ocultar detalles"
                                                : "Explorar conocimiento"}
                                        </span>
                                    </button>

                                    <AnimatePresence>
                                        {isSelected && (
                                            <motion.div
                                                className="knowledge-details"
                                                initial={{
                                                    opacity: 0,
                                                    height: 0
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    height: "auto"
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    height: 0
                                                }}
                                            >
                                                <p>
                                                    {item.category === "development"
                                                        ? "Área de desarrollo y aplicación práctica de conocimientos."
                                                        : "Tecnología utilizada como parte de mi formación y experiencia práctica."}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.article>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </section>
        </main>
    );
};

export default SkillsServices;