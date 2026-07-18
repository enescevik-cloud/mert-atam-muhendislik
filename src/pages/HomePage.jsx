import {
  useEffect,
  useMemo,
  useRef,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

import Hero from "../components/Hero";

import CinematicServiceScene from "../components/CinematicServiceScene";

import {
  services,
} from "../data/services";

import {
  partners,
} from "../data/partners";

import "../styles/pages/HomePage.css";

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 44,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
      ease: [
        0.16,
        1,
        0.3,
        1,
      ],
    },
  },
};

const titleContainerVariants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.075,
    },
  },
};

const titleLineVariants = {
  hidden: {
    opacity: 0,
    y: "118%",
  },

  visible: {
    opacity: 1,
    y: "0%",

    transition: {
      duration: 1.08,
      ease: [
        0.16,
        1,
        0.3,
        1,
      ],
    },
  },
};

const processSteps = [
  {
    number: "01",

    title: "Analiz",

    text:
      "Yapının kullanımını, mevcut altyapısını, enerji ihtiyacını ve saha koşullarını birlikte değerlendiriyoruz.",
  },

  {
    number: "02",

    title: "Teknik Kurgu",

    text:
      "Sistem kararlarını güvenlik, uygulanabilirlik ve uzun vadeli işletme hedefleriyle oluşturuyoruz.",
  },

  {
    number: "03",

    title: "Uygulama",

    text:
      "Projeyi saha organizasyonu, kalite kontrol ve disiplinler arası koordinasyonla hayata geçiriyoruz.",
  },

  {
    number: "04",

    title: "Teslim",

    text:
      "Ölçüm, test, devreye alma ve teknik dokümantasyonla sistemi işletmeye hazır biçimde teslim ediyoruz.",
  },
];

function updateMetaDescription(
  content,
) {
  let metaDescription =
    document.querySelector(
      'meta[name="description"]',
    );

  if (!metaDescription) {
    metaDescription =
      document.createElement(
        "meta",
      );

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

function updateCanonical(
  pathname,
) {
  let canonical =
    document.querySelector(
      'link[rel="canonical"]',
    );

  if (!canonical) {
    canonical =
      document.createElement(
        "link",
      );

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

function AnimatedEditorialTitle({
  lines,
  className,
}) {
  return (
    <motion.h2
      className={className}
      variants={
        titleContainerVariants
      }
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.42,
      }}
    >
      {lines.map(
        (
          line,
          index,
        ) => (
          <span
            className="home-title-line-mask"
            key={`${line}-${index}`}
          >
            <motion.span
              className="home-title-line"
              variants={
                titleLineVariants
              }
            >
              {line}
            </motion.span>
          </span>
        ),
      )}
    </motion.h2>
  );
}

function HomePage() {
  const pageRef =
    useRef(null);

  const reduceMotion =
    useReducedMotion();

  const featuredPartners =
    useMemo(
      () =>
        partners.slice(
          0,
          12,
        ),
      [],
    );

  const marqueePartners =
    useMemo(
      () => [
        ...featuredPartners,
        ...featuredPartners,
      ],
      [
        featuredPartners,
      ],
    );

  const {
    scrollYProgress,
  } = useScroll({
    target: pageRef,

    offset: [
      "start start",
      "end end",
    ],
  });

  const smoothProgress =
    useSpring(
      scrollYProgress,
      {
        stiffness: 82,
        damping: 25,
        mass: 0.35,
      },
    );

  useEffect(() => {
    document.title =
      "İzmir Elektrik Proje ve Mühendislik | MERT ATAM MÜHENDİSLİK";

    updateMetaDescription(
      "İzmir elektrik proje, elektrik ruhsat projesi, elektrik taahhüt, KNX akıllı ev otomasyonu, trafo projesi ve yüksek gerilim işletme sorumluluğu hizmetleri.",
    );

    updateCanonical("/");
  }, []);

  return (
    <main
      ref={pageRef}
      className="home-page"
    >
      <motion.div
        className="home-page-progress"
        style={{
          scaleX:
            smoothProgress,
        }}
      />

      <div className="home-original-hero">
        <Hero />
      </div>

      <section className="home-manifesto">
        <div className="home-shell home-manifesto-layout">
          <aside className="home-manifesto-aside">
            <span>
              01
            </span>

            <p>
              İzmir merkezli
              <br />
              elektrik mühendisliği
            </p>
          </aside>

          <div className="home-manifesto-main">
            <span className="home-kicker">
              MERT ATAM MÜHENDİSLİK
            </span>

            <AnimatedEditorialTitle
              className="home-manifesto-title"
              lines={[
                "Doğru proje,",
                "güçlü uygulamanın",
                "zeminini oluşturur.",
              ]}
            />
          </div>

          <motion.div
            className="home-manifesto-copy"
            variants={
              revealVariants
            }
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.48,
            }}
          >
            <p>
              Elektrik proje,
              taahhüt, akıllı ev
              otomasyonu ve teknik
              mühendislik
              hizmetlerini birbirinden
              kopuk işlemler olarak
              değil, tek bir sistemin
              tamamlayıcı parçaları
              olarak yönetiyoruz.
            </p>

            <p>
              İzmir elektrik proje,
              elektrik ruhsat
              projeleri, trafo
              projesi, yüksek gerilim
              projeleri ve elektrik
              uygulama çalışmalarında
              teknik doğruluğu saha
              gerçekliğiyle
              birleştiriyoruz.
            </p>

            <Link
              to="/hakkinda/biz-kimiz"
              className="home-editorial-link"
            >
              <span>
                Mühendislik
                yaklaşımımız
              </span>

              <i aria-hidden="true">
                ↗
              </i>
            </Link>
          </motion.div>
        </div>

        <div
          className="home-manifesto-watermark"
          aria-hidden="true"
        >
          MÜHENDİSLİK
        </div>
      </section>

      <section
        className="home-services-intro"
        aria-labelledby="home-services-title"
      >
        <div className="home-shell home-services-intro-layout">
          <motion.div
            variants={
              revealVariants
            }
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.42,
            }}
          >
            <span className="home-kicker">
              Hizmetlerimiz
            </span>

            <AnimatedEditorialTitle
              className="home-services-intro-title"
              lines={[
                "Dört uzmanlık,",
                "tek mühendislik",
                "disiplini.",
              ]}
            />
          </motion.div>

          <motion.div
            className="home-services-intro-copy"
            variants={
              revealVariants
            }
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.48,
            }}
          >
            <p>
              Elektrik proje
              hizmetleri, elektrik
              taahhüt, akıllı ev
              otomasyonu ve teknik
              işletme çalışmalarını
              aynı kalite yaklaşımı
              içerisinde yönetiyoruz.
            </p>

            <Link
              to="/hizmetler"
              className="home-editorial-link"
            >
              <span>
                Tüm hizmetleri
                inceleyin
              </span>

              <i aria-hidden="true">
                ↗
              </i>
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="home-cinematic-services">
        {services.map(
          (
            service,
            index,
          ) => (
            <CinematicServiceScene
              service={service}
              index={index}
              key={service.slug}
            />
          ),
        )}
      </div>

      <section className="home-process">
        <div className="home-shell home-process-layout">
          <div className="home-process-heading">
            <motion.span
              className="home-kicker home-kicker-light"
              variants={
                revealVariants
              }
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.5,
              }}
            >
              Çalışma Modelimiz
            </motion.span>

            <AnimatedEditorialTitle
              className="home-process-title"
              lines={[
                "Karmaşıklığı",
                "kullanıcıya",
                "hissettirmiyoruz.",
              ]}
            />
          </div>

          <div className="home-process-rail">
            {processSteps.map(
              (
                step,
                index,
              ) => (
                <motion.article
                  className="home-process-step"
                  initial={{
                    opacity: 0,
                    y: 36,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.45,
                  }}
                  transition={{
                    duration: 0.9,

                    delay:
                      index *
                      0.08,

                    ease: [
                      0.16,
                      1,
                      0.3,
                      1,
                    ],
                  }}
                  key={
                    step.number
                  }
                >
                  <span>
                    {
                      step.number
                    }
                  </span>

                  <div>
                    <h3>
                      {
                        step.title
                      }
                    </h3>

                    <p>
                      {
                        step.text
                      }
                    </p>
                  </div>
                </motion.article>
              ),
            )}
          </div>
        </div>

        <div
          className="home-process-word"
          aria-hidden="true"
        >
          SÜREÇ
        </div>
      </section>

      <section className="home-reference-preview">
        <div className="home-shell home-reference-preview-heading">
          <motion.div
            variants={
              revealVariants
            }
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.48,
            }}
          >
            <span className="home-kicker">
              Referanslarımız
            </span>

            <AnimatedEditorialTitle
              className="home-reference-title"
              lines={[
                "Güven,",
                "her projede",
                "yeniden kazanılır.",
              ]}
            />
          </motion.div>

          <motion.div
            className="home-reference-preview-copy"
            variants={
              revealVariants
            }
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.5,
            }}
          >
            <p>
              Farklı sektörlerde
              yürütülen çalışmaların
              merkezinde teknik
              şeffaflık, açık iletişim
              ve sürdürülebilir
              mühendislik bulunur.
            </p>

            <Link
              to="/referanslar"
              className="home-editorial-link"
            >
              <span>
                Referanslarımızı
                inceleyin
              </span>

              <i aria-hidden="true">
                ↗
              </i>
            </Link>
          </motion.div>
        </div>

        <div className="home-partner-marquee">
          <div
            className={[
              "home-partner-track",

              reduceMotion
                ? "home-partner-track--static"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {marqueePartners.map(
              (
                partner,
                index,
              ) => {
                const isDuplicate =
                  index >=
                  featuredPartners.length;

                return (
                  <a
                    href={
                      partner.website
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-partner-marquee-item"
                    aria-label={
                      isDuplicate
                        ? undefined
                        : `${partner.name} web sitesini aç`
                    }
                    aria-hidden={
                      isDuplicate
                        ? "true"
                        : undefined
                    }
                    tabIndex={
                      isDuplicate
                        ? -1
                        : undefined
                    }
                    key={`${partner.id}-${index}`}
                  >
                    <img
                      src={
                        partner.logo
                      }
                      alt={
                        isDuplicate
                          ? ""
                          : partner.name
                      }
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                );
              },
            )}
          </div>
        </div>
      </section>

      <section className="home-final-stage">
        <div className="home-shell home-final-layout">
          <span className="home-final-index">
            08
          </span>

          <motion.div
            className="home-final-copy"
            variants={
              revealVariants
            }
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.48,
            }}
          >
            <span className="home-kicker home-kicker-light">
              Yeni Bir Proje
            </span>

            <AnimatedEditorialTitle
              className="home-final-title"
              lines={[
                "Doğru başlangıç,",
                "güçlü bir sonuç",
                "yaratır.",
              ]}
            />

            <p>
              Proje, uygulama,
              otomasyon veya teknik
              işletme ihtiyacınızı
              mühendislik disipliniyle
              birlikte planlayalım.
            </p>

            <div className="home-final-actions">
              <Link
                to="/iletisim#teklif-talebi"
                className="home-final-primary"
              >
                <span>
                  Teklif ve Proje
                  Talebi
                </span>

                <i aria-hidden="true">
                  ↗
                </i>
              </Link>

              <Link
                to="/iletisim"
                className="home-final-secondary"
              >
                İletişime Geç
              </Link>
            </div>
          </motion.div>
        </div>

        <div
          className="home-final-watermark"
          aria-hidden="true"
        >
          BAŞLAYALIM
        </div>
      </section>
    </main>
  );
}

export default HomePage;