import { Link } from "react-router-dom";
import { services, servicesHero } from "../data/services";
import "../styles/pages/ServicesPages.css";

function ServicesPage() {
  return (
    <main className="services-page">
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${servicesHero})` }}
      >
        <div className="services-hero-overlay"></div>

        <div className="services-hero-content">
          <span>Hizmetlerimiz</span>
          <h1>Hizmetlerimiz</h1>
        </div>
      </section>

      <section className="services-intro">
        <div className="services-container services-centered">
          <span className="services-red-label">Diğer Hizmetler</span>

          <h2>
            Diğer mühendislik hizmetlerimizi
            <br />
            inceleyin.
          </h2>
        </div>
      </section>

      <section className="services-list-section">
        <div className="services-container">
          <div className="services-grid">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/hizmetler/${service.slug}`}
                className="service-card"
              >
                <div className="service-card-image">
                  <img src={service.hero} alt={service.title} />
                </div>

                <div className="service-card-content">
                  <span>{service.eyebrow}</span>
                  <h3>{service.title}</h3>
                  <p>{service.shortText}</p>

                  <strong>
                    Detaylı İncele
                    <i>→</i>
                  </strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;