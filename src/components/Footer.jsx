import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>Mert Atam Mühendislik</h3>
        <p>Elektrik mühendisliği, enerji sistemleri, projelendirme ve teknik danışmanlık çözümleri.</p>
      </div>
      <div>
        <h4>Hızlı Erişim</h4>
        <Link to="/hakkinda/biz-kimiz">Biz Kimiz?</Link>
        <Link to="/hizmetler">Hizmetlerimiz</Link>
        <Link to="/cozum-ortaklarimiz">Çözüm Ortaklarımız</Link>
        <Link to="/iletisim">İletişim</Link>
      </div>
      <div>
        <h4>İletişim</h4>
        <a href="tel:+905558889598">0 555 888 9598</a>
        <a href="https://wa.me/905558889598" target="_blank" rel="noreferrer">WhatsApp</a>
        <a href="https://www.google.com/maps/search/?api=1&query=Adalet+Mah.+1594%2F9+Sk.+2.+Ziyam+Sitesi+114B+Bayrakli+Izmir" target="_blank" rel="noreferrer">Bayraklı / İzmir</a>
      </div>
    </footer>
  );
}
