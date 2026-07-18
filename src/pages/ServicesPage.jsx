import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
} from "lucide-react";

import DynamicPageHero from "../components/DynamicPageHero";

import {
  services,
  servicesHero,
} from "../data/services";

import "../styles/pages/ServicesPages.css";

function setMetaDescription(content) {
  let metaDescription =
    document.querySelector(
      'meta[name="description"]',
    );

  if (!metaDescription) {
    metaDescription =
      document.createElement("meta");

    metaDescription.setAttribute(
      "name",
      "description",
    );

    document.head.appendChild(
      metaDescription,
    );
  }

  metaDescription.setAttribute(
    "content",
    content,
  );
}

function setCanonical(pathname) {
  let canonical =
    document.querySelector(
      'link[rel="canonical"]',
    );

  if (!canonical) {
    canonical =
      document.createElement("link");

    canonical.setAttribute(
      "rel",
      "canonical",
    );

    document.head.appendChild(
      canonical,
    );
  }

  canonical.setAttribute(
    "href",
    `${window.location.origin}${pathname}`,
  );
}

function ServicesPage() {
  useEffect(() => {
    document.title =
      "Hizmetlerimiz | MERT ATAM MÜHENDİSLİK";

    setMetaDescription(
      "MERT ATAM MÜHENDİSLİK elektrik proje, elektrik taahhüt, akıllı ev otomasyonu ve elektrik mühendislik hizmetleri.",
    );

    setCanonical("/hizmetler");
  }, []);

  return (
    <main className="services-page">
      <DynamicPageHero
        index="01"
        eyebrow="Hizmetlerimiz"
        titleLines={[
          "Elektrik mühendisliği",
          "hizmetlerimiz.",
        ]}
        description="Proje, uygulama, otomasyon ve teknik işletme hizmetleri."
        image={servicesHero}
        imageAlt="MERT ATAM MÜHENDİSLİK hizmetleri"
        objectPosition="center center"
        cta={{
          to:
            "/iletisim#teklif-talebi",

          label:
            "Teklif ve Proje Talebi",
        }}
      />

      <section
        className="services-selection"
        aria-labelledby="services-list-title"
      >
        <div className="services-container">
          <header className="services-section-heading services-section-heading-simple">
            <div>
              <span>
                HİZMETLERİMİZ
              </span>

              <h2 id="services-list-title">
                Hizmet alanlarımız
              </h2>
            </div>
          </header>

          <div className="services-customer-grid">
            {services.map(
              (service) => {
                const scopeItems =
                  Array.isArray(
                    service.highlights,
                  )
                    ? service.highlights.slice(
                        0,
                        4,
                      )
                    : [];

                return (
                  <article
                    className="services-customer-card"
                    key={service.slug}
                  >
                    <Link
                      to={`/hizmetler/${service.slug}`}
                      className="services-customer-image"
                      aria-label={`${service.title} hizmetini incele`}
                    >
                      <img
                        src={service.hero}
                        alt={service.title}
                        loading="lazy"
                        decoding="async"
                      />

                      <span>
                        {service.number}
                      </span>
                    </Link>

                    <div className="services-customer-content">
                      <span className="services-customer-category">
                        {service.eyebrow}
                      </span>

                      <h2>
                        {service.title}
                      </h2>

                      {scopeItems.length >
                        0 && (
                        <ul className="services-customer-list">
                          {scopeItems.map(
                            (item) => (
                              <li key={item}>
                                <Check
                                  size={17}
                                  strokeWidth={2}
                                  aria-hidden="true"
                                />

                                <span>
                                  {item}
                                </span>
                              </li>
                            ),
                          )}
                        </ul>
                      )}

                      <Link
                        to={`/hizmetler/${service.slug}`}
                        className="services-detail-button"
                      >
                        <span>
                          Hizmeti inceleyin
                        </span>

                        <ArrowRight
                          size={18}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </article>
                );
              },
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;