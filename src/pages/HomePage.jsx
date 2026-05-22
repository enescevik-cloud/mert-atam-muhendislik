import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { services } from "../data/services";
import { partners } from "../data/partners";
import "../styles/pages/HomePage.css";

function HomePage() {
  const featuredServices = services.slice(0, 6);
  const featuredPartners = partners.slice(0, 10);

  return (
    <main className="home-page">
      <Hero />

      <section className="home-intro-section">
        <div className="home-container home-intro-grid">
          <div className="home-intro-left">
            <span className="home-red-label">Kurumsal Yaklaşım</span>

            <h2>
              Mühendislikte güven,
              <br />
              enerjide süreklilik
            </h2>
          </div>

          <div className="home-intro-right">
            <p>
              Mert Atam Mühendislik; elektrik projelendirme, enerji sistemleri,
              teknik danışmanlık ve uygulama süreçlerinde güvenilir,
              uygulanabilir ve sürdürülebilir mühendislik çözümleri sunar.
            </p>

            <Link to="/hakkinda/biz-kimiz" className="home-text-link">
              Kurumsal yapımızı incele
              <strong>→</strong>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-feature-strip">
        <div className="home-container home-feature-grid">
          <div className="home-feature-item">
            <span>01</span>
            <h3>Projelendirme</h3>
            <p>
              Elektrik altyapılarında doğru analiz, doğru çizim ve sahada
              uygulanabilir proje yaklaşımı.
            </p>
          </div>

          <div className="home-feature-item">
            <span>02</span>
            <h3>Enerji Altyapısı</h3>
            <p>
              AG, OG, trafo ve enerji nakil sistemlerinde güvenli ve uzun ömürlü
              çözümler.
            </p>
          </div>

          <div className="home-feature-item">
            <span>03</span>
            <h3>Teknik Süreç</h3>
            <p>
              Keşif, metraj, uygulama hazırlığı ve teknik danışmanlık
              süreçlerinde profesyonel takip.
            </p>
          </div>
        </div>
      </section>

      <section className="home-services-section">
        <div className="home-container">
          <div className="home-section-head">
            <span>Hizmetlerimiz</span>

            <div>
              <h2>
                Elektrik mühendisliği
                <br />
                için kapsamlı çözümler
              </h2>

              <Link to="/hizmetler" className="home-head-link">
                Tüm hizmetler
                <strong>→</strong>
              </Link>
            </div>
          </div>

          <div className="home-services-grid">
            {featuredServices.map((service) => (
              <Link
                to={`/hizmetler/${service.slug}`}
                className="home-service-card"
                key={service.id}
              >
                <div className="home-service-image">
                  <img src={service.hero} alt={service.title} />
                </div>

                <div className="home-service-content">
                  <span>{String(service.id).padStart(2, "0")}</span>
                  <h3>{service.title}</h3>
                  <p>{service.shortText}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-dark-section">
        <div className="home-container home-dark-grid">
          <div className="home-dark-content">
            <span>Çalışma Modeli</span>

            <h2>
              Projeyi sadece çizmiyoruz,
              <br />
              sahada uygulanabilir hale getiriyoruz.
            </h2>

            <p>
              Teknik hesap, proje disiplini, saha gerçekliği ve müşteri
              beklentisini aynı süreçte değerlendirerek güçlü bir mühendislik
              akışı oluşturuyoruz.
            </p>

            <Link to="/hizmetler" className="home-dark-button">
              Hizmetleri İncele
              <strong>→</strong>
            </Link>
          </div>

          <div className="home-dark-stats">
            <div>
              <strong>01</strong>
              <span>Analiz</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Planlama</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Projelendirme</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Uygulama Hazırlığı</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-split-section">
        <div className="home-container home-split-grid">
          <div className="home-split-media">
            <img src={services[0].hero} alt="Elektrik proje mühendisliği" />
          </div>

          <div className="home-split-content">
            <span className="home-red-label">Teknik Güven</span>

            <h2>
              Doğru proje,
              <br />
              güçlü uygulama zemini oluşturur.
            </h2>

            <p>
              Elektrik projelerinde yalnızca çizim üretmek yeterli değildir.
              Kullanım amacı, yük ihtiyacı, sistem güvenliği, enerji sürekliliği
              ve uygulama kolaylığı birlikte değerlendirilmelidir.
            </p>

            <Link
              to="/hizmetler/elektrik-projelendirme"
              className="home-text-link"
            >
              Elektrik projelendirmeyi incele
              <strong>→</strong>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-partners-section">
        <div className="home-container">
          <div className="home-partners-head">
            <span>Çözüm Ortaklarımız</span>
            <h2>Farklı sektörlerden güvenilir markalarla çalışıyoruz.</h2>
            <Link to="/cozum-ortaklarimiz">
              Tümünü Gör
              <strong>→</strong>
            </Link>
          </div>

          <div className="home-partner-logo-grid">
            {featuredPartners.map((partner) => (
              <div className="home-partner-logo" key={partner.id}>
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-red-cta">
        <div className="home-container home-red-cta-grid">
          <div>
            <span>İletişim</span>
            <h2>
              Projeniz için doğru elektrik mühendisliği çözümünü birlikte
              planlayalım.
            </h2>
          </div>

          <Link to="/iletisim" className="home-red-cta-button">
            İletişime Geç
            <strong>→</strong>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default HomePage;