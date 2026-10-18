import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { navList } from "../data/navbar.js";
import LanguageSwitcher from "./LanguageSwitcher";
import "../css/Header.css";

const Header = () => {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="site-header">
            <div className="navbar-container">

                {/* Logo e información */}
                <Link
                    to="/"
                    className="navbar-brand"
                    onClick={closeMenu}
                >
                    <div className="brand-logo">
                        E<span>J</span>
                    </div>

                    <div className="brand-info">
                        <span className="brand-name">
                            Evans Jiménez
                        </span>

                        <span className="brand-role">
                            {t("title_sub.subtitle")}
                        </span>
                    </div>
                </Link>

                {/* Navegación de escritorio */}
                <nav className="desktop-nav">
                    {navList.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.link}
                            end={item.link === "/"}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            {t(item.data)}
                        </NavLink>
                    ))}
                </nav>

                {/* Selector de idioma */}
                <LanguageSwitcher />

                {/* Botón del menú móvil */}
                <button
                    type="button"
                    className={
                        menuOpen
                            ? "menu-toggle is-open"
                            : "menu-toggle"
                    }
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={
                        menuOpen
                            ? t("nav.closeMenu")
                            : t("nav.openMenu")
                    }
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Navegación móvil */}
            <nav
                id="mobile-navigation"
                className={
                    menuOpen
                        ? "mobile-nav is-open"
                        : "mobile-nav"
                }
                aria-hidden={!menuOpen}
                inert={!menuOpen}
            >
                {navList.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.link}
                        end={item.link === "/"}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive
                                ? "mobile-nav-link active"
                                : "mobile-nav-link"
                        }
                    >
                        {t(item.data)}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
};

export default Header;