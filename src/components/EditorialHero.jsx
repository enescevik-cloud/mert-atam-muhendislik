import { Link } from 'react-router-dom';
import { Arrow, Photo, TextLink } from './UI';
import '../pages/editorial-pages.css';

export default function EditorialHero({ image, alt, label, title, text, action, imageTo, children, crumb }) {
  const destination=imageTo || action?.to;
  const visual=<><Photo name={image} alt={alt} eager sizes="(max-width: 800px) 100vw, 57vw"/>{destination&&<span className="editorial-photo-arrow"><Arrow diagonal/></span>}</>;
  return <section className="editorial-hero"><div className="wrap">
    {crumb&&<nav className="in-crumb editorial-crumb" aria-label="Sayfa konumu"><Link to="/">Ana sayfa</Link><span>/</span>{crumb.parent&&<><Link to={crumb.parent.to}>{crumb.parent.label}</Link><span>/</span></>}<span aria-current="page">{crumb.label}</span></nav>}
    <div className="editorial-hero-grid">
      {destination?<Link to={destination} className="editorial-hero-photo" aria-label={alt+' — görseli inceleyin'}>{visual}</Link>:<div className="editorial-hero-photo">{visual}</div>}
      <div className="editorial-hero-copy"><span className="in-number">{label}</span><h1>{title}</h1><p>{text}</p>{children}{action&&<TextLink to={action.to}>{action.label}</TextLink>}</div>
    </div>
  </div></section>;
}
