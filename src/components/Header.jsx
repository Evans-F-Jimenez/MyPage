
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { navList } from "../data/navbar.js";
import "../css/Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="site-header">
            <div className="navbar-container">

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
                            Software Engineer & Data Analyst
                        </span>
                    </div>
                </Link>

                <nav className="desktop-nav">
                    {navList.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.link}
                            end={item.link === "/MyPage"}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            {item.data}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile menu button */}
                <button
                    type="button"
                    className={
                        menuOpen
                            ? "menu-toggle is-open"
                            : "menu-toggle"
                    }
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={
                        menuOpen ? "Cerrar menú" : "Abrir menú"
                    }
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile navigation */}
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
                        end={item.link === "/MyPage"}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive
                                ? "mobile-nav-link active"
                                : "mobile-nav-link"
                        }
                    >
                        {item.data}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
};

export default Header;