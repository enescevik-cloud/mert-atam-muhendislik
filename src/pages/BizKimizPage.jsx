import { Link } from "react-router-dom";
import "../styles/pages/AboutPages.css";

import bizKimizHero from "../assets/about/biz-kimiz/hero.jpg";

function BizKimizPage() {
  return (
    <main className="about-page">
      <section
        className="sub-hero"
        style={{ backgroundImage: `url(${bizKimizHero})` }}
      >
        <div className="sub-hero-overlay"></div>

        <div className="sub-hero-content">
          <span>Hakkında</span>
          <h1>Biz Kimiz?</h1>
        </div>
      </section>

      <section className="about-intro-section">
        <div className="about-container about-centered">
          <span className="about-red-label">Kurumsal Profil</span>

          <h2>
            Güvenilir mühendislik,
            <br />
            güçlü enerji altyapısı
          </h2>

          <p>
            Mert Atam Mühendislik; elektrik projelendirme, enerji sistemleri,
            teknik danışmanlık ve uygulama süreçlerinde güvenilir, sürdürülebilir
            ve ölçülebilir çözümler üretir.
          </p>
        </div>
      </section>

      <section className="about-content-section">
        <div className="about-container about-two-column">
          <div className="about-section-heading">
            <span>Biz Kimiz?</span>
            <h2>
              Projeden uygulamaya uzanan profesyonel mühendislik yaklaşımı.
            </h2>
          </div>

          <div className="about-text-block">
            <p>
              Mert Atam Mühendislik, elektrik mühendisliği alanında teknik
              doğruluk, saha gerçekliği ve sürdürülebilir enerji yaklaşımını bir
              araya getiren profesyonel bir mühendislik yapısıdır.
            </p>

            <p>
              Yapıların ihtiyaç duyduğu elektrik altyapısının doğru analiz
              edilmesi, projelendirilmesi, uygulanabilir hale getirilmesi ve
              teknik standartlara uygun biçimde yönetilmesi temel çalışma
              disiplinimizi oluşturur.
            </p>

            <p>
              Her projede güvenlik, verimlilik, süreklilik ve uzun ömürlü
              sistem performansı esas alınır. Müşteri beklentileri teknik
              gerekliliklerle birlikte değerlendirilir ve sonuç odaklı çözümler
              geliştirilir.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="about-container">
          <div className="about-card-grid">
            <article className="about-feature-card">
              <span>01</span>
              <h3>Teknik Doğruluk</h3>
              <p>
                Her proje; standartlara, saha koşullarına ve mühendislik
                hesaplarına uygun şekilde ele alınır.
              </p>
            </article>

            <article className="about-feature-card">
              <span>02</span>
              <h3>Güvenilir Planlama</h3>
              <p>
                Proje süreçleri; zaman, maliyet, uygulanabilirlik ve kalite
                dengesi gözetilerek yönetilir.
              </p>
            </article>

            <article className="about-feature-card">
              <span>03</span>
              <h3>Sürdürülebilir Enerji</h3>
              <p>
                Enerji verimliliği ve uzun ömürlü sistem performansı her
                çözümün merkezinde yer alır.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-dark-cta">
        <div className="about-container about-cta-grid">
          <div>
            <span>İletişim</span>
            <h2>
              Projeniz için doğru mühendislik yaklaşımını birlikte planlayalım.
            </h2>
          </div>

          <Link to="/iletisim" className="about-cta-button">
            İletişime Geç
            <strong>→</strong>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default BizKimizPage;