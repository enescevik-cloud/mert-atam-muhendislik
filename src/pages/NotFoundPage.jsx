import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return <section className="content-page"><h1>Sayfa bulunamadı</h1><Link to="/">Ana sayfaya dön</Link></section>;
}
