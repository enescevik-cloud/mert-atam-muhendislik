import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import MegaMenu from "./MegaMenu";

import "../styles/components/Navbar.css";

import logoIcon from "../assets/logo/logo-icon.png";

function Navbar() {
  const [
    activeMenu,
    setActiveMenu,
  ] = useState(null);

  const [
    isScrolled,
    setIsScrolled,
  ] = useState(false);

  const location = useLocation();

  const isMegaOpen =
    Boolean(activeMenu);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(
        window.scrollY > 24,
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  useEffect(() => {
    setActiveMenu(null);

    /*
      Yeni sayfaya geçildiğinde ScrollToTop
      henüz çalışmadan önce eski scroll değeri
      kısa süreliğine kalabilir. Navbar görünümünü
      bulunduğu gerçek konuma göre yeniden kontrol eder.
    */
    const frameId =
      window.requestAnimationFrame(
        () => {
          setIsScrolled(
            window.scrollY > 24,
          );
        },
      );

    return () => {
      window.cancelAnimationFrame(
        frameId,
      );
    };
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (
      event,
    ) => {
      if (
        event.key === "Escape"
      ) {
        setActiveMenu(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, []);

  const toggleMenu = (
    menuName,
  ) => {
    setActiveMenu(
      (currentMenu) =>
        currentMenu === menuName
          ? null
          : menuName,
    );
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  /*
    Artık sayfa adresine bakmıyoruz.

    Tüm sayfalarda:
    - Sayfanın tepesinde: şeffaf
    - Scroll sonrası: beyaz
    - MegaMenu açıkken: beyaz
  */
  const navbarClassName = [
    "navbar",

    isMegaOpen
      ? "navbar-open"
      : isScrolled
        ? "navbar-scrolled"
        : "navbar-transparent",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header
        className={
          navbarClassName
        }
      >
        <div className="navbar-inner">
          <Link
            to="/"
            className="navbar-brand"
            onClick={closeMenu}
            aria-label="MERT ATAM MÜHENDİSLİK ana sayfa"
          >
            <img
              src={logoIcon}
              alt="MERT ATAM MÜHENDİSLİK"
              className="navbar-logo"
            />

            <span className="navbar-brand-text">
              <strong>
                MERT ATAM
              </strong>

              <small>
                MÜHENDİSLİK
              </small>
            </span>
          </Link>

          <nav
            className="navbar-menu"
            aria-label="Ana menü"
          >
            <Link
              to="/"
              className="navbar-link"
              onClick={closeMenu}
            >
              Ana Sayfa
            </Link>

            <button
              type="button"
              className="navbar-link navbar-button"
              onClick={() =>
                toggleMenu(
                  "about",
                )
              }
              aria-expanded={
                activeMenu ===
                "about"
              }
              aria-controls="site-mega-menu"
            >
              Kurumsal

              <span
                className="navbar-arrow"
                aria-hidden="true"
              >
                ▾
              </span>
            </button>

            <button
              type="button"
              className="navbar-link navbar-button"
              onClick={() =>
                toggleMenu(
                  "services",
                )
              }
              aria-expanded={
                activeMenu ===
                "services"
              }
              aria-controls="site-mega-menu"
            >
              Hizmetlerimiz

              <span
                className="navbar-arrow"
                aria-hidden="true"
              >
                ▾
              </span>
            </button>

            <button
              type="button"
              className="navbar-link navbar-button"
              onClick={() =>
                toggleMenu(
                  "partners",
                )
              }
              aria-expanded={
                activeMenu ===
                "partners"
              }
              aria-controls="site-mega-menu"
            >
              Referanslarımız

              <span
                className="navbar-arrow"
                aria-hidden="true"
              >
                ▾
              </span>
            </button>

            <Link
              to="/iletisim"
              className="navbar-link"
              onClick={closeMenu}
            >
              İletişim
            </Link>
          </nav>

          <div className="navbar-actions">
            <button
              className="navbar-search"
              type="button"
              aria-label="Site içerisinde ara"
            />

            <a
              href="https://wa.me/905558889598"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-whatsapp"
              aria-label="WhatsApp üzerinden iletişime geç"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {isMegaOpen && (
          <MegaMenu
            type={activeMenu}
            closeMenu={
              closeMenu
            }
          />
        )}
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