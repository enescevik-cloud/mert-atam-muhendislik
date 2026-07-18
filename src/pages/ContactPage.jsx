import {
  useEffect,
  useState,
} from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

import "../styles/pages/ContactPage.css";

const PHONE_DISPLAY =
  "0 555 888 9598";

const PHONE_NUMBER =
  "+905558889598";

const WHATSAPP_NUMBER =
  "905558889598";

const EMAIL_ADDRESS =
  "info@mertatammuhendislik.com";

const OFFICE_ADDRESS =
  "Adalet Mahallesi 1594/9 Sokak No: 2, Ziyam Sitesi 114B, Bayraklı / İzmir";

const MAPS_URL =
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    OFFICE_ADDRESS,
  )}`;

const INITIAL_FORM = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  location: "",
  message: "",
};

const serviceOptions = [
  "Elektrik Proje",
  "Elektrik Ruhsat Projesi",
  "Elektrik Taahhüt",
  "Trafo Projesi ve Kurulumu",
  "Orta Gerilim Projesi",
  "Yüksek Gerilim Projesi",
  "Yüksek Gerilim İşletme Sorumluluğu",
  "Akıllı Ev ve KNX Sistemi",
  "Elektrik Güç Yükseltme Projesi",
  "Teknik Danışmanlık",
  "Diğer",
];

const serviceHighlights = [
  "İzmir elektrik proje ve ruhsat projeleri",
  "Elektrik taahhüt ve saha uygulamaları",
  "Trafo, orta gerilim ve yüksek gerilim sistemleri",
  "Akıllı ev, KNX ve elektrik mühendislik hizmetleri",
];

function updateMetaDescription(
  content,
) {
  let meta =
    document.querySelector(
      'meta[name="description"]',
    );

  if (!meta) {
    meta =
      document.createElement(
        "meta",
      );

    meta.setAttribute(
      "name",
      "description",
    );

    document.head.appendChild(
      meta,
    );
  }

  meta.setAttribute(
    "content",
    content,
  );
}

function updateCanonical(
  pathname,
) {
  let canonical =
    document.querySelector(
      'link[rel="canonical"]',
    );

  if (!canonical) {
    canonical =
      document.createElement(
        "link",
      );

    canonical.setAttribute(
      "rel",
      "canonical",
    );

    document.head.appendChild(
      canonical,
    );
  }

  canonical.setAttribute(
    "href",
    `${window.location.origin}${pathname}`,
  );
}

function ContactPage() {
  const [formData, setFormData] =
    useState(INITIAL_FORM);

  const [status, setStatus] =
    useState("");

  useEffect(() => {
    document.title =
      "Teklif ve Proje Talebi | İzmir Elektrik Proje | MERT ATAM MÜHENDİSLİK";

    updateMetaDescription(
      "İzmir elektrik proje, elektrik taahhüt, trafo projesi, orta gerilim, yüksek gerilim, akıllı ev ve KNX sistemleri için teklif ve proje talebi oluşturun.",
    );

    updateCanonical(
      "/iletisim",
    );
  }, []);

  function handleChange(event) {
    const {
      name,
      value,
    } = event.target;

    setFormData(
      (current) => ({
        ...current,
        [name]: value,
      }),
    );

    if (status) {
      setStatus("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = [
      "Merhaba, MERT ATAM MÜHENDİSLİK web sitesi üzerinden proje talebi oluşturuyorum.",
      "",
      `Ad Soyad: ${formData.fullName}`,
      `Telefon: ${formData.phone}`,
      `E-posta: ${formData.email || "Belirtilmedi"}`,
      `Talep Edilen Hizmet: ${formData.service}`,
      `Proje Konumu: ${formData.location || "Belirtilmedi"}`,
      "",
      "Proje Açıklaması:",
      formData.message,
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setStatus(
      "Talebiniz WhatsApp görüşmesine aktarılıyor.",
    );

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <main className="contact-page">
      <section
        className="contact-stage"
        id="teklif-talebi"
      >
        <div
          className="contact-stage-background"
          aria-hidden="true"
        >
          <span className="contact-stage-orbit contact-stage-orbit-one" />
          <span className="contact-stage-orbit contact-stage-orbit-two" />
          <span className="contact-stage-line contact-stage-line-left" />
          <span className="contact-stage-line contact-stage-line-right" />
        </div>

        <div className="contact-container">
          <div className="contact-layout">
            <motion.aside
              className="contact-overview"
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
            >
              <div className="contact-overview-main">
                <span className="contact-eyebrow">
                  İLETİŞİM VE TEKLİF
                </span>

                <h1>
                  Projenizi
                  <span>
                    konuşalım.
                  </span>
                </h1>

                <p>
                  Elektrik mühendisliği
                  ihtiyacınızı paylaşın.
                  Projenin kapsamını teknik
                  açıdan değerlendirerek
                  uygulanabilir çözümü birlikte
                  belirleyelim.
                </p>
              </div>

              <div className="contact-services">
                <span className="contact-services-label">
                  HİZMET ALANLARI
                </span>

                <ul>
                  {serviceHighlights.map(
                    (item) => (
                      <li key={item}>
                        <span>
                          <Check
                            size={13}
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </span>

                        <p>
                          {item}
                        </p>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="contact-direct">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="contact-direct-item"
                >
                  <span className="contact-direct-icon">
                    <Phone
                      size={17}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="contact-direct-copy">
                    <small>
                      TELEFON
                    </small>

                    <strong>
                      {PHONE_DISPLAY}
                    </strong>
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-direct-item"
                >
                  <span className="contact-direct-icon">
                    <MessageCircle
                      size={17}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="contact-direct-copy">
                    <small>
                      WHATSAPP
                    </small>

                    <strong>
                      Doğrudan yazın
                    </strong>
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="contact-direct-item"
                >
                  <span className="contact-direct-icon">
                    <Mail
                      size={17}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="contact-direct-copy">
                    <small>
                      E-POSTA
                    </small>

                    <strong>
                      {EMAIL_ADDRESS}
                    </strong>
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-direct-item"
                >
                  <span className="contact-direct-icon">
                    <MapPin
                      size={17}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="contact-direct-copy">
                    <small>
                      OFİS
                    </small>

                    <strong>
                      {OFFICE_ADDRESS}
                    </strong>
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </motion.aside>

            <motion.section
              className="contact-request"
              aria-labelledby="contact-request-title"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.74,
                delay: 0.08,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
            >
              <header className="contact-request-header">
                <div>
                  <span>
                    PROJE ÖN DEĞERLENDİRME
                  </span>

                  <h2 id="contact-request-title">
                    Teklif talebi
                  </h2>

                  <p>
                    Temel proje bilgilerini
                    paylaşın. Talebiniz doğrudan
                    mühendislik ekibine iletilsin.
                  </p>
                </div>

                <div className="contact-request-security">
                  <ShieldCheck
                    size={17}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <span>
                    Gizli ve güvenli
                  </span>
                </div>
              </header>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="contact-form-grid">
                  <label className="contact-field">
                    <span>
                      Ad Soyad
                      <b>*</b>
                    </span>

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Adınız ve soyadınız"
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label className="contact-field">
                    <span>
                      Telefon
                      <b>*</b>
                    </span>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="05XX XXX XX XX"
                      autoComplete="tel"
                      required
                    />
                  </label>

                  <label className="contact-field">
                    <span>
                      E-posta
                    </span>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ornek@eposta.com"
                      autoComplete="email"
                    />
                  </label>

                  <label className="contact-field">
                    <span>
                      Hizmet
                      <b>*</b>
                    </span>

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Hizmet seçin
                      </option>

                      {serviceOptions.map(
                        (option) => (
                          <option
                            value={option}
                            key={option}
                          >
                            {option}
                          </option>
                        ),
                      )}
                    </select>
                  </label>

                  <label className="contact-field contact-location-field">
                    <span>
                      Proje Konumu
                    </span>

                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="İlçe / İl"
                      autoComplete="address-level2"
                    />
                  </label>

                  <label className="contact-field contact-message-field">
                    <span>
                      Proje Açıklaması
                      <b>*</b>
                    </span>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Mevcut durumu, ihtiyaç duyduğunuz hizmeti ve proje kapsamını kısaca açıklayın."
                      required
                    />
                  </label>
                </div>

                <footer className="contact-form-footer">
                  <div className="contact-form-information">
                    <span>
                      <Check
                        size={13}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </span>

                    <p>
                      Proje çizimleri ve diğer
                      dosyalar WhatsApp görüşmesi
                      üzerinden iletilebilir.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="contact-submit"
                  >
                    <span>
                      Talebi Gönder
                    </span>

                    <ArrowRight
                      size={18}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </button>
                </footer>

                <p
                  className="contact-status"
                  aria-live="polite"
                >
                  {status}
                </p>
              </form>
            </motion.section>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;