import { Link, useParams } from "react-router-dom";
import { getServiceBySlug, services } from "../../data/services";
import "../../styles/pages/ServicesPages.css";

function ServiceDetailPage() {
  const { slug } = useParams();

  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <main className="services-page">
        <section className="service-not-found">
          <h1>Hizmet bulunamadı</h1>
          <p>Aradığınız hizmet sayfası mevcut değil.</p>
          <Link to="/hizmetler">Hizmetlere Dön</Link>
        </section>
      </main>
    );
  }

  const otherServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <main className="services-page">
      <section
        className="services-hero service-detail-hero"
        style={{ backgroundImage: `url(${service.hero})` }}
      >
        <div className="services-hero-overlay"></div>

        <div className="services-hero-content">
          <span>{service.eyebrow}</span>
          <h1>{service.title}</h1>
        </div>
      </section>

      <section className="service-detail-intro">
        <div className="services-container service-detail-grid">
          <div className="service-detail-heading">
            <span>{service.eyebrow}</span>
            <h2>{service.title}</h2>
          </div>

          <div className="service-detail-text">
            <p>{service.description}</p>

            <div className="service-detail-list">
              {service.details.map((detail, index) => (
                <div className="service-detail-item" key={detail}>
                  <strong>{String(index + 1).padStart(2, "0")}</strong>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="service-process-section">
        <div className="services-container">
          <div className="service-process-header">
            <span>Çalışma Yaklaşımı</span>
            <h2>{service.processTitle}</h2>
            <p>{service.processText}</p>
          </div>

          <div className="service-process-grid">
            <article>
              <span>01</span>
              <h3>Analiz</h3>
              <p>
                Projenin ihtiyaçları, saha koşulları, enerji gereksinimleri ve
                teknik gereklilikleri detaylı şekilde değerlendirilir.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Planlama</h3>
              <p>
                Güvenlik, maliyet, uygulanabilirlik, yönetmelik şartları ve uzun
                vadeli sistem performansı birlikte planlanır.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Uygulama Hazırlığı</h3>
              <p>
                Proje çıktıları sahada kullanılabilir, açık, düzenli ve teknik
                olarak güçlü bir yapıya dönüştürülür.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="other-services-section">
        <div className="services-container">
          <div className="other-services-header">
            <span>Diğer Hizmetler</span>
            <h2>Diğer mühendislik hizmetlerimizi inceleyin.</h2>
          </div>

          <div className="other-services-grid">
            {otherServices.map((item) => (
              <Link
                to={`/hizmetler/${item.slug}`}
                className="other-service-card"
                key={item.id}
              >
                <img src={item.hero} alt={item.title} />

                <div>
                  <span>{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="services-dark-cta">
        <div className="services-container services-cta-grid">
          <div>
            <span>İletişim</span>
            <h2>Projeniz için doğru hizmet kapsamını birlikte belirleyelim.</h2>
          </div>

          <Link to="/iletisim" className="services-cta-button">
            İletişime Geç
            <strong>→</strong>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ServiceDetailPage;