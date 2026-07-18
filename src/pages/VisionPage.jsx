import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

import visionImage from "../assets/about/vizyon/hero.jpg";

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

const visionPrinciples = [
  {
    number: "01",
    title: "Teknik güvenilirlik",
    text:
      "Elektrik proje ve uygulama çalışmalarında doğruluğu, güvenliği ve yönetmelik uyumunu temel ölçüt kabul etmek.",
  },
  {
    number: "02",
    title: "Bütüncül mühendislik",
    text:
      "Projelendirme, elektrik taahhüt, saha uygulaması ve işletme süreçlerini birbirinden koparmadan değerlendirmek.",
  },
  {
    number: "03",
    title: "Sürdürülebilir gelişim",
    text:
      "Enerji verimliliğini, teknolojik gelişmeleri ve uzun vadeli işletme ihtiyaçlarını projelerin merkezinde tutmak.",
  },
];

const visionTargets = [
  "İzmir elektrik proje hizmetlerinde güvenilir çözüm ortağı olmak",
  "Elektrik ruhsat projelerinde teknik kaliteyi yükseltmek",
  "Orta gerilim ve yüksek gerilim projelerinde güvenli çözümler üretmek",
  "Trafo projesi ve trafo kurulumu süreçlerini bütüncül yönetmek",
  "Akıllı ev ve KNX sistemlerinde uygulanabilir teknolojiler sunmak",
  "Elektrik taahhüt uygulamalarında kalite standardını korumak",
  "Yüksek gerilim işletme sorumluluğunda sürdürülebilir güvenlik sağlamak",
  "Elektrik güç yükseltme projelerinde doğru kapasite planlaması yapmak",
];

function VisionPage() {
  useEffect(() => {
    document.title =
      "Vizyonumuz | İzmir Elektrik Mühendislik | MERT ATAM MÜHENDİSLİK";

    updateMetaDescription(
      "MERT ATAM MÜHENDİSLİK vizyonu; İzmir elektrik proje, elektrik taahhüt, trafo projesi, yüksek gerilim, KNX ve elektrik mühendislik hizmetlerinde güvenilir çözümler üretmektir.",
    );

    updateCanonical("/hakkinda/vizyon");
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

            <h1>Vizyonumuz</h1>

            <p>
              Elektrik mühendisliğinde güvenilir,
              uygulanabilir ve uzun ömürlü
              çözümlerle kalıcı değer üretmek.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ANA İÇERİK */}

      <section className="about-page-main">
        <div className="about-page-container">
          <div className="about-page-main-grid">
            <motion.div
              className="about-page-image about-page-image--vision"
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
                src={visionImage}
                alt="Elektrik mühendisliği ve enerji altyapısı vizyonu"
                loading="eager"
                decoding="async"
              />

              <div className="about-page-image-label">
                <span>
                  GELECEĞE
                </span>

                <strong>
                  GÜVENLE
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
                GELECEĞE BAKIŞIMIZ
              </span>

              <h2>
                Teknik kaliteyi yalnızca bugünün
                değil, geleceğin ihtiyaçlarına
                göre şekillendiriyoruz.
              </h2>

              <p>
                Vizyonumuz; İzmir elektrik
                mühendislik sektöründe teknik
                güvenilirliği, açık iletişimi ve
                uygulama kalitesini temsil eden
                güçlü bir mühendislik markası
                olmaktır.
              </p>

              <p>
                Elektrik proje, elektrik taahhüt,
                trafo projesi, orta gerilim ve
                yüksek gerilim projelerinde
                yalnızca mevcut ihtiyacı değil,
                sistemin gelecekteki kapasitesini
                ve işletme güvenliğini de
                değerlendiriyoruz.
              </p>

              <p>
                Akıllı ev otomasyonu, İzmir KNX
                sistemi, enerji yönetimi ve
                elektrik güç yükseltme projeleri
                gibi gelişen alanlarda sade,
                verimli ve genişletilebilir
                çözümler üretmeyi hedefliyoruz.
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

      {/* HEDEFLER */}

      <section className="about-page-services">
        <div className="about-page-container">
          <header className="about-page-services-header">
            <div>
              <span>
                HEDEFLERİMİZ
              </span>

              <h2>
                Güvenilir mühendisliği ölçülebilir
                sonuçlara dönüştürmek.
              </h2>
            </div>

            <p>
              Projenin ilk değerlendirmesinden
              uygulama ve işletme aşamasına kadar
              teknik standardı koruyoruz.
            </p>
          </header>

          <div className="about-page-services-grid">
            {visionTargets.map(
              (target, index) => (
                <motion.div
                  className="about-page-service-item"
                  key={target}
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
                    {target}
                  </strong>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* VİZYON PRENSİPLERİ */}

      <section className="about-page-principles">
        <div className="about-page-container">
          <header className="about-page-principles-header">
            <span>
              TEMEL YAKLAŞIM
            </span>

            <h2>
              Büyürken mühendislik disiplininden
              ödün vermemek.
            </h2>
          </header>

          <div className="about-page-principles-grid">
            {visionPrinciples.map(
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
                Geleceğe uygun elektrik
                altyapısını birlikte planlayalım.
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

export default VisionPage;