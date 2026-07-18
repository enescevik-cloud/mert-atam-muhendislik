import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

import missionImage from "../assets/about/misyon/hero.jpg";

import "../styles/pages/AboutPages.css";

function updateMetaDescription(content) {
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

function updateCanonical(pathname) {
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

const missionPrinciples = [
  {
    number: "01",
    title: "İhtiyacı doğru belirlemek",
    text:
      "Yapının kullanım amacı, mevcut altyapısı, güç ihtiyacı ve uygulama koşullarını birlikte değerlendiriyoruz.",
  },
  {
    number: "02",
    title: "Uygulanabilir proje üretmek",
    text:
      "Hazırladığımız elektrik projelerinin sahada açık, anlaşılır ve güvenli şekilde uygulanmasını hedefliyoruz.",
  },
  {
    number: "03",
    title: "Süreci takip etmek",
    text:
      "Projelendirmeden uygulamaya, testten devreye almaya kadar teknik sürekliliği koruyoruz.",
  },
];

const missionAreas = [
  "İzmir elektrik proje hizmetlerinde doğru teknik çözüm üretmek",
  "Elektrik ruhsat projelerini mevzuata uygun hazırlamak",
  "Elektrik uygulama projelerini sahaya uygun geliştirmek",
  "Trafo projesi ve trafo kurulumu süreçlerini güvenli yönetmek",
  "Orta gerilim ve yüksek gerilim projelerinde işletme güvenliğini korumak",
  "Enerji nakil hatları ve dağıtım şebekelerini doğru planlamak",
  "Akıllı ev ve İzmir KNX sistemi çözümlerini kullanıcıya uygun tasarlamak",
  "Elektrik güç yükseltme projelerinde kapasite ihtiyacını doğru belirlemek",
];

function MissionPage() {
  useEffect(() => {
    document.title =
      "Misyonumuz | İzmir Elektrik Proje | MERT ATAM MÜHENDİSLİK";

    updateMetaDescription(
      "MERT ATAM MÜHENDİSLİK misyonu; İzmir elektrik proje, elektrik taahhüt, trafo projesi, yüksek gerilim, akıllı ev ve elektrik mühendislik hizmetlerinde güvenli ve uygulanabilir çözümler sunmaktır.",
    );

    updateCanonical("/hakkinda/misyon");
  }, []);

  return (
    <main className="about-page">
      {/* KISA AÇILIŞ */}

      <section className="about-page-intro">
        <div className="about-page-container">
          <motion.div
            className="about-page-intro-content"
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
            <span className="about-page-eyebrow">
              KURUMSAL
            </span>

            <h1>Misyonumuz</h1>

            <p>
              Elektrik mühendisliği ihtiyaçlarını
              güvenli, anlaşılır ve uygulanabilir
              çözümlere dönüştürmek.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ANA İÇERİK */}

      <section className="about-page-main">
        <div className="about-page-container">
          <div className="about-page-main-grid">
            <motion.div
              className="about-page-image about-page-image--mission"
              initial={{
                opacity: 0,
                x: -24,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <img
                src={missionImage}
                alt="Elektrik proje ve mühendislik uygulama çalışmaları"
              />

              <div className="about-page-image-label">
                <span>
                  DOĞRU PROJE
                </span>

                <strong>
                  GÜVENLİ UYGULAMA
                </strong>
              </div>
            </motion.div>

            <motion.div
              className="about-page-copy"
              initial={{
                opacity: 0,
                x: 24,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="about-page-section-label">
                ÇALIŞMA AMACIMIZ
              </span>

              <h2>
                Her projede güvenli ve net bir
                uygulama süreci oluşturuyoruz.
              </h2>

              <p>
                Misyonumuz; müşterilerimizin
                elektrik mühendisliği ihtiyaçlarını
                doğru analiz ederek teknik açıdan
                güvenilir, mevzuata uygun ve sahada
                uygulanabilir çözümler sunmaktır.
              </p>

              <p>
                İzmir elektrik proje, elektrik
                taahhüt, trafo projesi, orta
                gerilim ve yüksek gerilim
                projelerinde ihtiyaçtan teslim
                aşamasına kadar sistemli bir
                mühendislik yaklaşımı uyguluyoruz.
              </p>

              <p>
                Elektrik ruhsat projeleri, son
                durum elektrik projeleri, akıllı
                ev otomasyonu, İzmir KNX sistemi
                ve yüksek gerilim işletme
                sorumluluğu hizmetlerinde teknik
                doğruluğu temel alıyoruz.
              </p>

              <Link
                to="/iletisim#teklif-talebi"
                className="about-page-primary-link"
              >
                <span>
                  Projenizi değerlendirelim
                </span>

                <ArrowRight
                  size={18}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MİSYON ALANLARI */}

      <section className="about-page-services">
        <div className="about-page-container">
          <header className="about-page-services-header">
            <div>
              <span>
                SORUMLULUKLARIMIZ
              </span>

              <h2>
                Projeyi yalnızca hazırlamıyor,
                doğru sonuca ulaşmasını
                hedefliyoruz.
              </h2>
            </div>

            <p>
              Teknik ihtiyaçları açık biçimde
              tanımlıyor, uygulanabilir çözümü
              doğru detaylarla hazırlıyoruz.
            </p>
          </header>

          <div className="about-page-services-grid">
            {missionAreas.map(
              (area, index) => (
                <motion.div
                  className="about-page-service-item"
                  key={area}
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.5,
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
                  <span className="about-page-service-icon">
                    <Check
                      size={16}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>

                  <strong>
                    {area}
                  </strong>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* PRENSİPLER */}

      <section className="about-page-principles">
        <div className="about-page-container">
          <header className="about-page-principles-header">
            <span>
              UYGULAMA PRENSİBİMİZ
            </span>

            <h2>
              Doğru analiz, açık proje ve
              kontrollü uygulama.
            </h2>
          </header>

          <div className="about-page-principles-grid">
            {missionPrinciples.map(
              (principle, index) => (
                <motion.article
                  className="about-page-principle"
                  key={principle.number}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                    ease: [
                      0.16,
                      1,
                      0.3,
                      1,
                    ],
                  }}
                >
                  <span>
                    {principle.number}
                  </span>

                  <h3>
                    {principle.title}
                  </h3>

                  <p>
                    {principle.text}
                  </p>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="about-page-cta">
        <div className="about-page-container">
          <div className="about-page-cta-panel">
            <div>
              <span>
                PROJENİZ İÇİN
              </span>

              <h2>
                Elektrik mühendisliği ihtiyacınızı
                birlikte netleştirelim.
              </h2>
            </div>

            <Link
              to="/iletisim#teklif-talebi"
              className="about-page-cta-button"
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

export default MissionPage;