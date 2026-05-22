import { Link } from "react-router-dom";
import "../styles/pages/AboutPages.css";

import visionHero from "../assets/about/vizyon/hero.jpg";

function VisionPage() {
  return (
    <main className="about-page">
      <section
        className="sub-hero"
        style={{ backgroundImage: `url(${visionHero})` }}
      >
        <div className="sub-hero-overlay"></div>

        <div className="sub-hero-content">
          <span>Hakkında</span>
          <h1>Vizyon</h1>
        </div>
      </section>

      <section className="about-intro-section">
        <div className="about-container about-centered">
          <span className="about-red-label">Vizyonumuz</span>

          <h2>
            Geleceğin enerji altyapılarını
            <br />
            bugünden tasarlamak
          </h2>

          <p>
            Vizyonumuz; güvenli, verimli ve sürdürülebilir elektrik sistemleri
            geliştirerek yapıların enerji altyapısına uzun vadeli değer
            katmaktır.
          </p>
        </div>
      </section>

      <section className="about-content-section">
        <div className="about-container about-two-column">
          <div className="about-section-heading">
            <span>Vizyon</span>
            <h2>
              Enerji sistemlerinde güvenilir ve çağdaş mühendislik çözümleri.
            </h2>
          </div>

          <div className="about-text-block">
            <p>
              Mert Atam Mühendislik olarak vizyonumuz; elektrik mühendisliği
              alanında teknik güvenilirliği, sürdürülebilir enerji yaklaşımını
              ve profesyonel proje yönetimini bir arada sunan güçlü bir marka
              haline gelmektir.
            </p>

            <p>
              Gelişen teknoloji, değişen enerji ihtiyaçları ve artan verimlilik
              beklentileri doğrultusunda; projelerimizi yalnızca bugünün
              ihtiyaçlarına değil, geleceğin kullanım senaryolarına da uygun
              şekilde ele alırız.
            </p>

            <p>
              Uzun ömürlü, güvenli ve sürdürülebilir enerji altyapıları
              oluşturmak; mühendislik yaklaşımımızın temel hedeflerinden biridir.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="about-container">
          <div className="about-card-grid">
            <article className="about-feature-card">
              <span>01</span>
              <h3>Gelecek Odaklılık</h3>
              <p>
                Enerji altyapılarını uzun vadeli kullanım, bakım kolaylığı ve
                sistem sürekliliği prensipleriyle tasarlamak.
              </p>
            </article>

            <article className="about-feature-card">
              <span>02</span>
              <h3>Verimlilik</h3>
              <p>
                Enerji kayıplarını azaltan, işletme maliyetlerini düşüren ve
                sürdürülebilirliği artıran çözümler üretmek.
              </p>
            </article>

            <article className="about-feature-card">
              <span>03</span>
              <h3>Güven</h3>
              <p>
                Tüm süreçlerde teknik şeffaflık, doğru analiz ve uygulanabilir
                mühendislik yaklaşımıyla ilerlemek.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-dark-cta">
        <div className="about-container about-cta-grid">
          <div>
            <span>Misyonumuz</span>
            <h2>
              Bu vizyonu sahada güçlü bir mühendislik disipliniyle destekliyoruz.
            </h2>
          </div>

          <Link to="/hakkinda/misyon" className="about-cta-button">
            Misyonu İncele
            <strong>→</strong>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default VisionPage;