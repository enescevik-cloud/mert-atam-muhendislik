import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

import { partners } from "../data/partners";
import partnersHero from "../assets/partners/hero.jpg";

import "../styles/pages/PartnersPage.css";

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

function setOpenGraph({
  title,
  description,
  pathname,
  image,
}) {
  const values = [
    ["og:type", "website"],
    ["og:locale", "tr_TR"],
    ["og:site_name", "MERT ATAM MÜHENDİSLİK"],
    ["og:title", title],
    ["og:description", description],
    [
      "og:url",
      `${window.location.origin}${pathname}`,
    ],
    [
      "og:image",
      image.startsWith("http")
        ? image
        : `${window.location.origin}${image}`,
    ],
  ];

  values.forEach(([property, content]) => {
    let meta = document.querySelector(
      `meta[property="${property}"]`,
    );

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("property", property);
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", content);
  });
}

function setPartnersSchema() {
  const schemaId =
    "mert-atam-partners-schema";

  document
    .getElementById(schemaId)
    ?.remove();

  const schema =
    document.createElement("script");

  schema.id = schemaId;
  schema.type =
    "application/ld+json";

  schema.textContent =
    JSON.stringify({
      "@context":
        "https://schema.org",
      "@type":
        "ItemList",
      name:
        "MERT ATAM MÜHENDİSLİK Referansları",
      description:
        "Elektrik proje, elektrik taahhüt, KNX akıllı ev otomasyonu ve elektrik mühendislik hizmetlerinde çalışılan kurumsal referanslar.",
      numberOfItems:
        partners.length,
      itemListElement:
        partners.map(
          (partner, index) => ({
            "@type":
              "ListItem",
            position:
              index + 1,
            item: {
              "@type":
                "Organization",
              name:
                partner.name,
              url:
                partner.website,
            },
          }),
        ),
    });

  document.head.appendChild(schema);
}

function PartnersPage() {
  useEffect(() => {
    const title =
      "Referanslarımız | İzmir Elektrik Proje | MERT ATAM MÜHENDİSLİK";

    const description =
      "MERT ATAM MÜHENDİSLİK referansları: Burger Oltre, Alperen Makina ve farklı sektörlerde elektrik proje, taahhüt, KNX ve mühendislik çalışmaları.";

    document.title =
      title;

    setMetaDescription(
      description,
    );

    setCanonical(
      "/referanslar",
    );

    setOpenGraph({
      title,
      description,
      pathname:
        "/referanslar",
      image:
        partnersHero,
    });

    setPartnersSchema();

    return () => {
      document
        .getElementById(
          "mert-atam-partners-schema",
        )
        ?.remove();
    };
  }, []);

  return (
    <main className="references-page">
      {/* ==========================================
          KISA VE RAFİNE AÇILIŞ
          İlk ekranda logoların başlangıcı görünür.
      ========================================== */}

      <section className="references-hero">
        <div className="references-hero-media">
          <img
            src={partnersHero}
            alt=""
            aria-hidden="true"
          />

          <div
            className="references-hero-overlay"
            aria-hidden="true"
          />
        </div>

        <div className="references-container references-hero-layout">
          <div className="references-hero-content">
            <span className="references-hero-eyebrow">
              MERT ATAM MÜHENDİSLİK
            </span>

            <h1>Referanslarımız</h1>

            <p>
              Birlikte çalıştığımız kurum ve
              markalar.
            </p>
          </div>

          <a
            href="#referans-listesi"
            className="references-hero-link"
          >
            <span>
              Referansları görüntüleyin
            </span>

            <ArrowRight
              size={18}
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </a>
        </div>
      </section>

      {/* ==========================================
          REFERANS LOGOLARI
      ========================================== */}

      <section
        className="references-showcase"
        id="referans-listesi"
        aria-labelledby="references-heading"
      >
        <div className="references-container">
          <header className="references-showcase-header">
            <div>
              <span>REFERANSLARIMIZ</span>

              <h2 id="references-heading">
                Kurumsal referanslarımız
              </h2>
            </div>

            <p>
              Logolara tıklayarak kurumların
              resmî web sayfalarını
              ziyaret edebilirsiniz.
            </p>
          </header>

          <div className="references-logo-grid">
            {partners.map(
              (partner, index) => (
                <motion.a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="references-logo-item"
                  aria-label={`${partner.name} resmî web sitesini yeni sekmede aç`}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.18,
                  }}
                  transition={{
                    duration: 0.55,
                    delay:
                      (index % 3) *
                      0.045,
                    ease: [
                      0.16,
                      1,
                      0.3,
                      1,
                    ],
                  }}
                  key={
                    partner.id ||
                    partner.name
                  }
                >
                  <span className="references-logo-number">
                    {String(
                      index + 1,
                    ).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <div className="references-logo-frame">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logosu`}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onError={(event) => {
                        if (
                          partner.fallbackLogo &&
                          event.currentTarget.src !==
                            partner.fallbackLogo
                        ) {
                          event.currentTarget.onerror =
                            null;
                          event.currentTarget.src =
                            partner.fallbackLogo;
                        }
                      }}
                    />
                  </div>

                  <div className="references-logo-footer">
                    <strong>
                      {partner.name}
                    </strong>

                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>
                </motion.a>
              ),
            )}
          </div>

          <div className="references-bottom">
            <div>
              <span>
                YENİ BİR PROJE
              </span>

              <h2>
                Projenizi birlikte
                değerlendirelim.
              </h2>
            </div>

            <Link
              to="/iletisim#teklif-talebi"
              className="references-bottom-button"
            >
              <span>
                Teklif ve Proje Talebi
              </span>

              <ArrowRight
                size={18}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PartnersPage;