import { Link } from "react-router-dom";
import "../styles/pages/AboutPages.css";

import missionHero from "../assets/about/misyon/hero.jpg";

function MissionPage() {
  return (
    <main className="about-page">
      <section
        className="sub-hero"
        style={{ backgroundImage: `url(${missionHero})` }}
      >
        <div className="sub-hero-overlay"></div>

        <div className="sub-hero-content">
          <span>Hakkında</span>
          <h1>Misyon</h1>
        </div>
      </section>

      <section className="about-intro-section">
        <div className="about-container about-centered">
          <span className="about-red-label">Misyonumuz</span>

          <h2>
            Güvenli, verimli ve uygulanabilir
            <br />
            elektrik mühendisliği çözümleri
          </h2>

          <p>
            Misyonumuz; her ölçekte projeye teknik doğruluk, güvenilir planlama
            ve sürdürülebilir enerji yaklaşımıyla değer katmaktır.
          </p>
        </div>
      </section>

      <section className="about-content-section">
        <div className="about-container about-two-column">
          <div className="about-section-heading">
            <span>Misyon</span>
            <h2>
              Standartlara uygun, sahada karşılığı olan mühendislik üretmek.
            </h2>
          </div>

          <div className="about-text-block">
            <p>
              Mert Atam Mühendislik’in misyonu; elektrik projelendirme ve
              uygulama süreçlerinde teknik gereklilikleri doğru analiz ederek
              güvenilir, uygulanabilir ve uzun ömürlü çözümler sunmaktır.
            </p>

            <p>
              Her projede iş güvenliği, sistem güvenilirliği, enerji verimliliği,
              sürdürülebilirlik ve müşteri memnuniyeti temel önceliklerimiz
              arasında yer alır.
            </p>

            <p>
              Proje sürecinin her aşamasında açık iletişim, disiplinli takip ve
              mühendislik sorumluluğu ile hareket ederiz.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="about-container">
          <div className="about-card-grid">
            <article className="about-feature-card">
              <span>01</span>
              <h3>Doğru Analiz</h3>
              <p>
                Yapının ihtiyacını, kullanım senaryosunu ve teknik koşullarını
                birlikte değerlendiririz.
              </p>
            </article>

            <article className="about-feature-card">
              <span>02</span>
              <h3>Uygulanabilir Proje</h3>
              <p>
                Sadece çizim değil; sahada karşılığı olan, uygulanabilir ve
                sürdürülebilir proje çözümleri üretiriz.
              </p>
            </article>

            <article className="about-feature-card">
              <span>03</span>
              <h3>Profesyonel Takip</h3>
              <p>
                Süreçleri planlı, kontrollü ve sonuç odaklı şekilde yönetiriz.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-dark-cta">
        <div className="about-container about-cta-grid">
          <div>
            <span>Hizmetlerimiz</span>
            <h2>Mühendislik çözümlerimizi detaylı inceleyin.</h2>
          </div>

          <Link to="/hizmetler" className="about-cta-button">
            Hizmetleri İncele
            <strong>→</strong>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default MissionPage;