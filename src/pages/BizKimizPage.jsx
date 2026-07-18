import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

import aboutImage from "../assets/about/biz-kimiz/hero.jpg";

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

const workingPrinciples = [
  {
    number: "01",
    title: "Teknik doğruluk",
    text:
      "Projelerimizi hesap, yönetmelik, uygulama koşulları ve işletme güvenliğini birlikte değerlendirerek hazırlıyoruz.",
  },
  {
    number: "02",
    title: "Uygulanabilir çözümler",
    text:
      "Kâğıt üzerinde kalan değil, sahada doğru şekilde uygulanabilen elektrik mühendisliği çözümleri geliştiriyoruz.",
  },
  {
    number: "03",
    title: "Açık iletişim",
    text:
      "Projenin kapsamını, teknik ihtiyaçlarını ve uygulama sürecini müşterilerimizle net biçimde paylaşıyoruz.",
  },
];

const serviceAreas = [
  "Elektrik proje ve ruhsat projeleri",
  "Elektrik taahhüt ve saha uygulamaları",
  "Orta gerilim ve yüksek gerilim projeleri",
  "Trafo projesi ve trafo kurulumu",
  "Enerji nakil hatları ve dağıtım şebekeleri",
  "Akıllı ev ve KNX otomasyon sistemleri",
  "Yüksek gerilim işletme sorumluluğu",
  "Elektrik güç yükseltme projeleri",
];

function BizKimizPage() {
  useEffect(() => {
    document.title =
      "Biz Kimiz? | İzmir Elektrik Mühendislik | MERT ATAM MÜHENDİSLİK";

    updateMetaDescription(
      "MERT ATAM MÜHENDİSLİK; İzmir elektrik proje, elektrik taahhüt, trafo projesi, orta ve yüksek gerilim projeleri, akıllı ev ve elektrik mühendislik hizmetleri sunar.",
    );

    updateCanonical("/hakkinda/biz-kimiz");
  }, []);

  return (
    <main className="about-page">
      {/* KISA AÇILIŞ — ANA İÇERİK İLK EKRANDA BAŞLAR */}

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

            <h1>Biz Kimiz?</h1>

            <p>
              Elektrik mühendisliğini teknik
              doğruluk, uygulanabilirlik ve
              güvenilir iş takibiyle bir araya
              getiriyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ANA İÇERİK */}

      <section className="about-page-main">
        <div className="about-page-container">
          <div className="about-page-main-grid">
            <motion.div
              className="about-page-image about-page-image--biz"
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
                src={aboutImage}
                alt="MERT ATAM MÜHENDİSLİK elektrik mühendisliği çalışmaları"
                loading="eager"
                decoding="async"
              />

              <div className="about-page-image-label">
                <span>
                  MERT ATAM
                </span>

                <strong>
                  MÜHENDİSLİK
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
                MÜHENDİSLİK YAKLAŞIMIMIZ
              </span>

              <h2>
                Mühendislikte Güven, Projede
                İncelik, Uygulamada Fark  
                Yaratıyoruz.
              </h2>

              <p>
                MERT ATAM MÜHENDİSLİK;
                İzmir elektrik proje,
                elektrik taahhüt ve elektrik
                mühendislik alanlarında hizmet
                veren profesyonel bir mühendislik
                kuruluşudur.
              </p>

              <p>
                Konut, ticari yapı, endüstriyel
                tesis ve enerji altyapısı
                projelerinde ihtiyaçları teknik
                açıdan değerlendiriyor; güvenli,
                mevzuata uygun ve uygulanabilir
                çözümler hazırlıyoruz.
              </p>

              <p>
                Elektrik ruhsat projelerinden
                trafo projelerine, orta gerilim
                ve yüksek gerilim sistemlerinden
                akıllı ev otomasyonuna kadar
                projenin bütününü dikkate alan
                bir çalışma anlayışı benimsiyoruz.
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

      {/* HİZMET ALANLARI */}

      <section className="about-page-services">
        <div className="about-page-container">
          <header className="about-page-services-header">
            <div>
              <span>
                ÇALIŞMA ALANLARIMIZ
              </span>

              <h2>
                Elektrik mühendisliğinin temel
                ihtiyaçlarını tek çatı altında
                topluyoruz.
              </h2>
            </div>

            <p>
              Projelendirme, uygulama ve teknik
              danışmanlık süreçlerini birbirinden
              koparmadan yönetiyoruz.
            </p>
          </header>

          <div className="about-page-services-grid">
            {serviceAreas.map(
              (service, index) => (
                <motion.div
                  className="about-page-service-item"
                  key={service}
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
                    {service}
                  </strong>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ÇALIŞMA PRENSİPLERİ */}

      <section className="about-page-principles">
        <div className="about-page-container">
          <header className="about-page-principles-header">
            <span>
              ÇALIŞMA PRENSİPLERİMİZ
            </span>

            <h2>
              Her projede aynı teknik disiplini
              koruyoruz.
            </h2>
          </header>

          <div className="about-page-principles-grid">
            {workingPrinciples.map(
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
                Teknik ihtiyacınızı birlikte
                netleştirelim.
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

export default BizKimizPage;