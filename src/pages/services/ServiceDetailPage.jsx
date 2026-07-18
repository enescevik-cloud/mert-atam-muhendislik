import {
  useEffect,
  useMemo,
} from "react";
import {
  Link,
  Navigate,
  useParams,
} from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

import {
  getServiceBySlug,
} from "../../data/services";

import "../../styles/pages/ServiceDetailPage.css";

function setMetaDescription(content) {
  let meta = document.querySelector(
    'meta[name="description"]',
  );

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(
      "name",
      "description",
    );
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function setCanonical(pathname) {
  let canonical = document.querySelector(
    'link[rel="canonical"]',
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute(
      "rel",
      "canonical",
    );
    document.head.appendChild(canonical);
  }

  canonical.setAttribute(
    "href",
    `${window.location.origin}${pathname}`,
  );
}

function setOpenGraph({
  title,
  description,
  image,
  pathname,
}) {
  const values = [
    ["og:type", "website"],
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
        : new URL(
            image,
            window.location.origin,
          ).href,
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

function ServiceDetailPage() {
  const { serviceSlug } = useParams();

  const service = useMemo(
    () => getServiceBySlug(serviceSlug),
    [serviceSlug],
  );

  useEffect(() => {
    if (!service) {
      return undefined;
    }

    const pathname =
      `/hizmetler/${service.slug}`;

    document.title =
      service.seoTitle ||
      `${service.title} | MERT ATAM MÜHENDİSLİK`;

    setMetaDescription(
      service.seoDescription ||
        service.description,
    );

    setCanonical(pathname);

    setOpenGraph({
      title:
        service.seoTitle ||
        service.title,
      description:
        service.seoDescription ||
        service.description,
      image:
        service.detailHero ||
        service.hero,
      pathname,
    });

    const schemaId =
      "service-detail-schema";

    document
      .getElementById(schemaId)
      ?.remove();

    const schema =
      document.createElement("script");

    schema.id = schemaId;
    schema.type = "application/ld+json";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: {
        "@type": "Organization",
        name: "MERT ATAM MÜHENDİSLİK",
        url: window.location.origin,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "İzmir",
      },
      url:
        `${window.location.origin}${pathname}`,
    });

    document.head.appendChild(schema);

    return () => {
      document
        .getElementById(schemaId)
        ?.remove();
    };
  }, [service]);

  if (!service) {
    return (
      <Navigate
        to="/hizmetler"
        replace
      />
    );
  }

  const heroImage =
    service.detailHero || service.hero;

  return (
    <main className="service-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-hero-media">
          <img
            src={heroImage}
            alt={`${service.title} hizmeti`}
            loading="eager"
            decoding="async"
            style={{
              objectPosition:
                service.detailFocalPoint ||
                service.homeFocalPoint ||
                "center center",
            }}
          />

          <span
            className="service-detail-hero-overlay"
            aria-hidden="true"
          />
        </div>

        <div className="service-detail-container service-detail-hero-layout">
          <motion.div
            className="service-detail-hero-content"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="service-detail-eyebrow">
              {service.eyebrow}
            </span>

            <h1>{service.title}</h1>

            <p>{service.shortText}</p>
          </motion.div>

          <Link
            to="/iletisim#teklif-talebi"
            className="service-detail-hero-action"
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
      </section>

      <section className="service-detail-content">
        <div className="service-detail-container">
          <header className="service-detail-introduction">
            <div className="service-detail-introduction-heading">
              <span>HİZMET KAPSAMI</span>

              <h2>
                {service.statement}
              </h2>
            </div>

            <p>
              {service.description}
              {service.seoText
                ? ` ${service.seoText}`
                : ""}
            </p>
          </header>

          <div className="service-detail-grid">
            {service.details.map(
              (item, index) => (
                <motion.article
                  className="service-detail-card"
                  key={item}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.52,
                    delay:
                      (index % 2) * 0.05,
                    ease: [
                      0.16,
                      1,
                      0.3,
                      1,
                    ],
                  }}
                >
                  <div className="service-detail-card-top">
                    <span className="service-detail-card-number">
                      {String(index + 1).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <span className="service-detail-card-icon">
                      <Check
                        size={17}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </span>
                  </div>

                  <div className="service-detail-card-body">
                    <h3>{item}</h3>
                  </div>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="service-detail-contact">
        <div className="service-detail-container">
          <div className="service-detail-contact-panel">
            <div className="service-detail-contact-copy">
              <span>
                PROJENİZİ DEĞERLENDİRELİM
              </span>

              <h2>
                İhtiyacınıza uygun teknik
                çözümü birlikte belirleyelim.
              </h2>

              <p>
                Projenizin kapsamını, mevcut
                durumunu ve beklentilerinizi
                paylaşın. Size uygun mühendislik
                yaklaşımını netleştirelim.
              </p>
            </div>

            <div className="service-detail-contact-actions">
              <Link
                to="/iletisim#teklif-talebi"
                className="service-detail-primary-button"
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

              <Link
                to="/iletisim"
                className="service-detail-secondary-button"
              >
                <span>
                  İletişim bilgileri
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServiceDetailPage;
