import { Link } from "react-router-dom";
import "../styles/components/MegaMenu.css";

import aboutHero from "../assets/about/biz-kimiz/hero.jpg";
import servicesHero from "../assets/services/hero.jpg";
import partnersHero from "../assets/partners/hero.jpg";

const megaMenus = {
  about: {
    title: "Hakkında",
    label: "Kurumsal",
    image: aboutHero,
    imageAlt: "Mert Atam Mühendislik kurumsal tanıtım görseli",
    ctaText: "Daha fazla bilgi",
    ctaPath: "/hakkinda/biz-kimiz",
    description:
      "Kurumsal yapımızı, mühendislik yaklaşımımızı ve çalışma prensiplerimizi inceleyin.",
    columns: [
      [
        { label: "Biz Kimiz?", path: "/hakkinda/biz-kimiz" },
        { label: "Vizyon", path: "/hakkinda/vizyon" },
        { label: "Misyon", path: "/hakkinda/misyon" },
      ],
      [
        { label: "Kurumsal Yaklaşım", path: "/hakkinda/biz-kimiz" },
        { label: "Mühendislik Anlayışı", path: "/hakkinda/vizyon" },
        { label: "Kalite Politikası", path: "/hakkinda/misyon" },
      ],
    ],
  },

  services: {
    title: "Hizmetlerimiz",
    label: "Mühendislik Hizmetleri",
    image: servicesHero,
    imageAlt: "Mert Atam Mühendislik hizmetler görseli",
    ctaText: "Hizmetleri incele",
    ctaPath: "/hizmetler",
    description:
      "Elektrik projelendirme ve enerji altyapısı süreçlerinde sunduğumuz hizmetleri inceleyin.",
    columns: [
      [
        {
          label: "Elektrik Projelendirme",
          path: "/hizmetler/elektrik-projelendirme",
        },
        {
          label: "AG Sistemleri",
          path: "/hizmetler/ag-sistemleri",
        },
        {
          label: "OG Sistemleri",
          path: "/hizmetler/og-sistemleri",
        },
        {
          label: "Trafo Projeleri",
          path: "/hizmetler/trafo-projeleri",
        },
      ],
      [
        {
          label: "Enerji Nakil Hatları",
          path: "/hizmetler/enerji-nakil-hatlari",
        },
        {
          label: "Keşif & Metraj",
          path: "/hizmetler/kesif-metraj",
        },
        {
          label: "Akıllı Ev Otomasyon",
          path: "/hizmetler/akilli-ev-otomasyon",
        },
      ],
    ],
  },

  partners: {
    title: "Çözüm Ortaklarımız",
    label: "Markalar",
    image: partnersHero,
    imageAlt: "Mert Atam Mühendislik çözüm ortakları görseli",
    ctaText: "Markaları incele",
    ctaPath: "/cozum-ortaklarimiz",
    description:
      "Marka portföyümüzü, referanslarımızı ve iş birliği ağımızı inceleyin.",
    columns: [
      [
        {
          label: "Çözüm Ortaklarımız",
          path: "/cozum-ortaklarimiz",
        },
        {
          label: "Referanslarımız",
          path: "/cozum-ortaklarimiz",
        },
      ],
    ],
  },
};

function MegaMenu({ type, closeMenu }) {
  const menu = megaMenus[type];

  if (!menu) {
    return null;
  }

  const handleLinkClick = () => {
    if (typeof closeMenu === "function") {
      setTimeout(() => {
        closeMenu();
      }, 50);
    }
  };

  return (
    <section className="mega-menu" aria-label={`${menu.title} mega menüsü`}>
      <div className="mega-menu-shell">
        <Link
          to={menu.ctaPath}
          className="mega-menu-card"
          onClick={handleLinkClick}
        >
          <img src={menu.image} alt={menu.imageAlt} />

          <span className="mega-menu-card-overlay" aria-hidden="true"></span>

          <div className="mega-menu-card-content">
            <span className="mega-menu-card-label">{menu.label}</span>

            <h2>{menu.title}</h2>

            <div className="mega-menu-card-link">
              <span>{menu.ctaText}</span>
              <strong aria-hidden="true">→</strong>
            </div>
          </div>
        </Link>

        <div className="mega-menu-content">
          <p className="mega-menu-description">{menu.description}</p>

          <div className="mega-menu-links">
            {menu.columns.map((column, columnIndex) => (
              <div className="mega-menu-column" key={columnIndex}>
                {column.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="mega-menu-row"
                    onClick={handleLinkClick}
                  >
                    <span>{item.label}</span>
                    <strong aria-hidden="true">›</strong>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MegaMenu;