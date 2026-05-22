import "../styles/pages/ContactPage.css";

function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-compact-section">
        <div className="contact-container contact-compact-grid">
          <div className="contact-left-panel">
            <span className="contact-kicker">İletişim</span>

            <h1>
              Bizimle
              <br />
              iletişime geçin.
            </h1>

            <p>
              Proje, teklif ve teknik talepleriniz için formu doldurabilir ya da
              doğrudan iletişim kanallarımızı kullanabilirsiniz.
            </p>

            <div className="contact-info-card">
              <a href="tel:+905558889598">
                <small>Telefon</small>
                <strong>0 555 888 9598</strong>
              </a>

              <a
                href="https://wa.me/905558889598"
                target="_blank"
                rel="noreferrer"
              >
                <small>WhatsApp</small>
                <strong>Mesaj gönder</strong>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Bayraklı%20İzmir"
                target="_blank"
                rel="noreferrer"
              >
                <small>Konum</small>
                <strong>Bayraklı / İzmir</strong>
              </a>
            </div>
          </div>

          <div className="contact-form-panel">
            <div className="contact-form-title">
              <span>Talep Formu</span>
              <h2>Teklif ve proje talebi</h2>
              <p>Kısa bilgileri iletin, proje kapsamına göre size dönüş yapalım.</p>
            </div>

            <form className="contact-form">
              <div className="contact-form-row">
                <label>
                  Ad Soyad
                  <input type="text" placeholder="Adınız ve soyadınız" />
                </label>

                <label>
                  Telefon
                  <input type="tel" placeholder="Telefon numaranız" />
                </label>
              </div>

              <div className="contact-form-row">
                <label>
                  E-posta
                  <input type="email" placeholder="E-posta adresiniz" />
                </label>

                <label>
                  Hizmet Konusu
                  <select defaultValue="">
                    <option value="" disabled>
                      Hizmet seçin
                    </option>
                    <option>Elektrik Projelendirme</option>
                    <option>AG Sistemleri</option>
                    <option>OG Sistemleri</option>
                    <option>Trafo Projeleri</option>
                    <option>Enerji Nakil Hatları</option>
                    <option>Keşif & Metraj</option>
                    <option>Akıllı Ev Otomasyon</option>
                  </select>
                </label>
              </div>

              <label>
                Mesajınız
                <textarea
                  rows="4"
                  placeholder="Talebinizi kısaca yazın"
                ></textarea>
              </label>

              <div className="contact-form-bottom">
                <button type="button">
                  Gönder
                  <span>→</span>
                </button>

                <p>
                  Dilerseniz form yerine WhatsApp üzerinden de doğrudan mesaj
                  gönderebilirsiniz.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;