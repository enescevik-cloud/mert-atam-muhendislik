import { Link } from "react-router-dom";
import "../styles/pages/AboutPages.css";

import aboutHero from "../assets/about/biz-kimiz/hero.jpg";

function AboutPage() {
  return (
    <main className="about-page">
      <section
        className="sub-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="sub-hero-overlay"></div>

        <div className="sub-hero-content">
          <span>Hakkında</span>
          <h1>Hakkında</h1>
        </div>
      </section>

      <section className="about-intro-section">
        <div className="about-container about-centered">
          <span className="about-red-label">Kurumsal Yaklaşım</span>

          <h2>
            Mühendislikte güven,
            <br />
            enerjide süreklilik
          </h2>

          <p>
            Mert Atam Mühendislik; elektrik projelendirme, enerji altyapıları,
            teknik çizim, keşif-metraj ve danışmanlık alanlarında güvenilir,
            uygulanabilir ve sürdürülebilir çözümler sunar.
          </p>
        </div>
      </section>

      <section className="about-navigation-section">
        <div className="about-container">
          <div className="about-card-grid">
            <Link to="/hakkinda/biz-kimiz" className="about-feature-card">
              <span>01</span>
              <h3>Biz Kimiz?</h3>
              <p>
                Kurumsal yaklaşımımızı, mühendislik disiplinimizi ve çalışma
                anlayışımızı keşfedin.
              </p>
              <strong>İncele →</strong>
            </Link>

            <Link to="/hakkinda/vizyon" className="about-feature-card">
              <span>02</span>
              <h3>Vizyon</h3>
              <p>
                Gelecek odaklı enerji altyapıları için geliştirdiğimiz
                sürdürülebilir yaklaşımı inceleyin.
              </p>
              <strong>İncele →</strong>
            </Link>

            <Link to="/hakkinda/misyon" className="about-feature-card">
              <span>03</span>
              <h3>Misyon</h3>
              <p>
                Proje ve uygulama süreçlerinde benimsediğimiz teknik
                sorumluluğu görün.
              </p>
              <strong>İncele →</strong>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;