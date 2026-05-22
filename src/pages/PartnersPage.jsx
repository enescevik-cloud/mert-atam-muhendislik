import "../styles/pages/PartnersPage.css";
import { partners } from "../data/partners";

import partnersHero from "../assets/partners/hero.jpg";

function PartnersPage() {
  return (
    <main className="partners-page">
      <section
        className="partners-hero"
        style={{ backgroundImage: `url(${partnersHero})` }}
      >
        <div className="partners-hero-overlay"></div>

        <div className="partners-hero-content">
          <span>Kurumsal İş Birlikleri</span>
          <h1>Çözüm Ortaklarımız</h1>
        </div>
      </section>

      <section className="partners-intro">
        <div className="partners-container partners-centered">
          <span className="partners-red-label">Markalar ve İş Birlikleri</span>

          <h2>
            Güvenilir markalarla
            <br />
            güçlü mühendislik çözümleri
          </h2>

          <p>
            Mert Atam Mühendislik; farklı sektörlerde faaliyet gösteren kurum,
            marka ve işletmeler için elektrik projelendirme, enerji altyapısı ve
            teknik çözüm süreçlerinde profesyonel mühendislik yaklaşımı sunar.
          </p>
        </div>
      </section>

      <section className="partners-list-section">
        <div className="partners-container">
          <div className="partners-section-head">
            <span>Referans Markalar</span>
            <h2>Çözüm ortaklarımız</h2>
            <p>
              Farklı sektörlerden markalarla yürütülen iş birlikleri, teknik
              güvenilirlik ve sürdürülebilir mühendislik anlayışıyla desteklenir.
            </p>
          </div>

          <div className="partners-grid">
            {partners.map((partner) => {
              const cardContent = (
                <>
                  <div className="partner-logo-area">
                    <img src={partner.logo} alt={partner.name} />
                  </div>

                  <div className="partner-info">
                    <div>
                      <h3>{partner.name}</h3>
                      <p>{partner.company}</p>
                    </div>

                    <span>{partner.sector}</span>
                  </div>

                  <div className="partner-bottom">
                    <small>
                      {partner.website ? "Web sitesini ziyaret et" : "Kurumsal iş birliği"}
                    </small>
                    <strong>→</strong>
                  </div>
                </>
              );

              if (partner.website) {
                return (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noreferrer"
                    className="partner-card"
                    key={partner.id}
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <article className="partner-card" key={partner.id}>
                  {cardContent}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="partners-dark-cta">
        <div className="partners-container partners-cta-grid">
          <div>
            <span>İş Birliği</span>
            <h2>
              Projeniz için doğru teknik çözümü birlikte planlayalım.
            </h2>
          </div>

          <a href="/iletisim" className="partners-cta-button">
            İletişime Geç
            <strong>→</strong>
          </a>
        </div>
      </section>
    </main>
  );
}

export default PartnersPage;