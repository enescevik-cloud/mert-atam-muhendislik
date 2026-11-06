import { Link } from 'react-router-dom';
import photoMetadata from '../data/photo-meta.json';

export function Arrow({ diagonal = false, ...props }) {
  return <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" aria-hidden="true" {...props}>{diagonal ? <path d="M6 18 18 6M6 6h12v12"/> : <path d="M4 12h15m-6-6 6 6-6 6"/>}</svg>;
}
const mediaPhotos = {opening:'/media/opening-poster.jpg','hero-2':'/media/hero-2.jpg','hero-3':'/media/hero-3.jpg'};
export function Photo({name,alt,className='',eager=false,sizes='(max-width: 700px) 100vw, 60vw',style,...rest}) {
  const media=mediaPhotos[name], details=photoMetadata[name];
  const variants=details?.variantWidths || {400:400,800:800,1600:1600};
  const unique=new Map();
  for(const size of [400,800,1600]){const width=variants[size];if(width&&!unique.has(width))unique.set(width,`/images/${name}-${size}.webp ${width}w`);}
  return <img className={'photo '+(details?.isSource?'photo-source ':'')+className} src={media || '/images/'+name+'-800.webp'} srcSet={media?undefined:[...unique.values()].join(', ')} sizes={media?undefined:sizes} alt={alt} width={details?.width || 1600} height={details?.height || 900} style={{...(details?.fit?{objectFit:details.fit}:{}),...style}} loading={eager?'eager':'lazy'} fetchPriority={eager?'high':undefined} decoding="async" {...rest}/>;
}
export function Eyebrow({ children, light = false }) { return <p className={`eyebrow${light ? ' light' : ''}`}><span/>{children}</p>; }
export function TextLink({ to, children, className = '' }) { return <Link to={to} className={`text-link ${className}`}>{children}<Arrow diagonal/></Link>; }
export function CTA() {
  return <section className="cta-section"><div className="wrap cta-inner"><div><Eyebrow light>PROJENİZ İÇİN BİRLİKTE DÜŞÜNELİM</Eyebrow><h2>İyi bir yapı,<br/><em>doğru bir başlangıç.</em></h2></div><Link to="/iletisim#teklif-talebi" className="round-link" aria-label="Projenizi konuşalım"><Arrow diagonal width="34" height="34"/></Link><div className="cta-contact"><p>Yeni projeler ve iş birlikleri için</p><a href="tel:+905558889598">0 555 888 9598</a><a href="mailto:info@mertatammuhendislik.com">info@mertatammuhendislik.com</a></div></div></section>;
}
