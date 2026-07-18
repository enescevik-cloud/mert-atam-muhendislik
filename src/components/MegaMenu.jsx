import {
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import "../styles/components/MegaMenu.css";

import corporateImage from "../assets/about/biz-kimiz/hero.jpg";
import visionImage from "../assets/about/vizyon/hero.jpg";
import missionImage from "../assets/about/misyon/hero.jpg";

import electricProjectImage from "../assets/services/elektrik-projelendirme/hero.jpg";
import electricCommitmentImage from "../assets/services/taahhut-hizmetleri/hero.jpg";
import smartHomeImage from "../assets/services/akilli-ev-otomasyon/hero.jpg";
import engineeringImage from "../assets/services/teknik-danismanlik/hero.jpg";

import referencesImage from "../assets/partners/hero.jpg";

const megaMenuContent = {
  about: {
    eyebrow: "Kurumsal",
    heading: "MERT ATAM MÜHENDİSLİK",
    description:
      "Kurumsal yapımızı, mühendislik yaklaşımımızı ve çalışma hedeflerimizi inceleyin.",
    featureEyebrow: "KURUMSAL",
    items: [
      {
        label: "Biz Kimiz?",
        to: "/hakkinda/biz-kimiz",
        image: corporateImage,
        imageAlt:
          "MERT ATAM MÜHENDİSLİK kurumsal yapısı",
      },
      {
        label: "Vizyon",
        to: "/hakkinda/vizyon",
        image: visionImage,
        imageAlt:
          "MERT ATAM MÜHENDİSLİK vizyonu",
      },
      {
        label: "Misyon",
        to: "/hakkinda/misyon",
        image: missionImage,
        imageAlt:
          "MERT ATAM MÜHENDİSLİK misyonu",
      },
    ],
    ctaEyebrow: "KURUMSAL",
    ctaText: "Kurumsal yapımızı inceleyin",
    ctaLink: "/hakkinda/biz-kimiz",
  },

  services: {
    eyebrow: "Hizmetlerimiz",
    heading: "Elektrik Mühendisliği Hizmetleri",
    description:
      "Elektrik proje, taahhüt, akıllı ev otomasyonu ve mühendislik hizmetlerimizi inceleyin.",
    featureEyebrow: "HİZMETLERİMİZ",
    items: [
      {
        label: "Elektrik Proje Hizmetlerimiz",
        to: "/hizmetler/elektrik-proje",
        image: electricProjectImage,
        imageAlt:
          "Elektrik proje ve projelendirme hizmetleri",
      },
      {
        label: "Elektrik Taahhüt Hizmetleri",
        to: "/hizmetler/elektrik-taahhut",
        image: electricCommitmentImage,
        imageAlt:
          "Elektrik taahhüt ve saha uygulama hizmetleri",
      },
      {
        label: "Akıllı Ev Otomasyon Hizmetlerimiz",
        to: "/hizmetler/akilli-ev",
        image: smartHomeImage,
        imageAlt:
          "Akıllı ev ve KNX otomasyon hizmetleri",
      },
      {
        label: "Elektrik Mühendislik Hizmetlerimiz",
        to: "/hizmetler/elektrik-muhendislik",
        image: engineeringImage,
        imageAlt:
          "Elektrik mühendislik ve teknik danışmanlık hizmetleri",
      },
    ],
    ctaEyebrow: "PROJENİZ İÇİN",
    ctaText: "Teklif ve Proje Talebi",
    ctaLink: "/iletisim#teklif-talebi",
  },

  partners: {
    eyebrow: "Referanslarımız",
    heading: "Kurumsal Referanslarımız",
    description:
      "Farklı sektörlerde hizmet verdiğimiz kurum ve markaları inceleyin.",
    featureEyebrow: "REFERANSLARIMIZ",
    items: [
      {
        label: "Referanslarımız",
        to: "/referanslar",
        image: referencesImage,
        imageAlt:
          "MERT ATAM MÜHENDİSLİK kurumsal referansları",
      },
      {
        label: "İletişim",
        to: "/iletisim",
        image: referencesImage,
        imageAlt:
          "MERT ATAM MÜHENDİSLİK iletişim",
      },
    ],
    ctaEyebrow: "BİRLİKTE ÇALIŞALIM",
    ctaText: "Projeniz için bizimle iletişime geçin",
    ctaLink: "/iletisim",
  },
};

function MegaMenu({
  type,
  closeMenu,
}) {
  const menu = megaMenuContent[type];

  const [activeIndex, setActiveIndex] =
    useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [type]);

  if (!menu) {
    return null;
  }

  const activeItem =
    menu.items[activeIndex] ||
    menu.items[0];

  const handleLinkClick = () => {
    if (
      typeof closeMenu ===
      "function"
    ) {
      closeMenu();
    }
  };

  return (
    <section
      id="site-mega-menu"
      className={`mega-menu mega-menu--${type}`}
      aria-label={`${menu.eyebrow} menüsü`}
    >
      <div className="mega-menu-shell">
        <Link
          to={activeItem.to}
          className="mega-menu-feature"
          onClick={handleLinkClick}
        >
          <img
            key={activeItem.image}
            src={activeItem.image}
            alt={activeItem.imageAlt}
            className="mega-menu-feature-image"
          />

          <span
            className="mega-menu-feature-overlay"
            aria-hidden="true"
          />

          <div className="mega-menu-feature-content">
            <span className="mega-menu-feature-eyebrow">
              {menu.featureEyebrow}
            </span>

            <strong>
              {activeItem.label}
            </strong>

            <span className="mega-menu-feature-link">
              Detayları inceleyin

              <ArrowUpRight
                size={17}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </span>
          </div>
        </Link>

        <div className="mega-menu-content">
          <header className="mega-menu-header">
            <span className="mega-menu-eyebrow">
              {menu.eyebrow}
            </span>

            <div className="mega-menu-heading-row">
              <h2>
                {menu.heading}
              </h2>

              <p>
                {menu.description}
              </p>
            </div>
          </header>

          <nav
            className={`mega-menu-links mega-menu-links--${type}`}
            aria-label={`${menu.eyebrow} bağlantıları`}
          >
            {menu.items.map(
              (item, index) => (
                <Link
                  to={item.to}
                  className={`mega-menu-row${
                    activeIndex === index
                      ? " is-active"
                      : ""
                  }`}
                  onMouseEnter={() =>
                    setActiveIndex(index)
                  }
                  onFocus={() =>
                    setActiveIndex(index)
                  }
                  onClick={handleLinkClick}
                  key={`${type}-${item.to}`}
                >
                  <span className="mega-menu-row-number">
                    {String(index + 1).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <span className="mega-menu-row-label">
                    {item.label}
                  </span>

                  <span className="mega-menu-row-icon">
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              ),
            )}
          </nav>

          <Link
            to={menu.ctaLink}
            className="mega-menu-cta"
            onClick={handleLinkClick}
          >
            <span className="mega-menu-cta-copy">
              <small>
                {menu.ctaEyebrow}
              </small>

              <strong>
                {menu.ctaText}
              </strong>
            </span>

            <span className="mega-menu-cta-icon">
              <ArrowRight
                size={18}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MegaMenu;
