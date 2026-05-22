import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import "../styles/components/Navbar.css";

import logoIcon from "../assets/logo/logo-icon.png";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isMegaOpen = Boolean(activeMenu);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveMenu(null);
  }, [location.pathname]);

  const toggleMenu = (menuName) => {
    setActiveMenu((currentMenu) => {
      if (currentMenu === menuName) {
        return null;
      }

      return menuName;
    });
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  const shouldBeSolid = !isHomePage || isScrolled || isMegaOpen;

  const navbarClassName = [
    "navbar",
    shouldBeSolid ? "navbar-solid" : "navbar-transparent",
    isMegaOpen ? "navbar-open" : "",
    isScrolled ? "navbar-scrolled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={navbarClassName}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <img
              src={logoIcon}
              alt="Mert Atam Mühendislik"
              className="navbar-logo"
            />

            <span className="navbar-brand-text">
              <strong>Mert Atam</strong>
              <small>Mühendislik</small>
            </span>
          </Link>

          <nav className="navbar-menu" aria-label="Ana menü">
            <Link to="/" className="navbar-link" onClick={closeMenu}>
              Ana Sayfa
            </Link>

            <button
              type="button"
              className="navbar-link navbar-button"
              onClick={() => toggleMenu("about")}
              aria-expanded={activeMenu === "about"}
            >
              Hakkında
              <span className="navbar-arrow">▾</span>
            </button>

            <button
              type="button"
              className="navbar-link navbar-button"
              onClick={() => toggleMenu("services")}
              aria-expanded={activeMenu === "services"}
            >
              Hizmetlerimiz
              <span className="navbar-arrow">▾</span>
            </button>

            <button
              type="button"
              className="navbar-link navbar-button"
              onClick={() => toggleMenu("partners")}
              aria-expanded={activeMenu === "partners"}
            >
              Çözüm Ortaklarımız
              <span className="navbar-arrow">▾</span>
            </button>

            <Link to="/iletisim" className="navbar-link" onClick={closeMenu}>
              İletişim
            </Link>
          </nav>

          <div className="navbar-actions">
            <button
              className="navbar-search"
              type="button"
              aria-label="Arama"
            />

            <a
              href="https://wa.me/905558889598"
              target="_blank"
              rel="noreferrer"
              className="navbar-whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {isMegaOpen && <MegaMenu type={activeMenu} closeMenu={closeMenu} />}
      </header>

      {isMegaOpen && (
        <button
          type="button"
          className="navbar-overlay"
          onClick={closeMenu}
          aria-label="Mega menüyü kapat"
        />
      )}
    </>
  );
}

export default Navbar;