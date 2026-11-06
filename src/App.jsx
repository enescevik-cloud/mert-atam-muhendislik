import { lazy, Suspense, useEffect } from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Arrow } from './components/UI';
import Header from './components/Header';

const inner = name => lazy(() => import('./pages/InnerPages').then(module => ({ default: module[name] })));
const About = inner('AboutPage'), Services = inner('ServicesPage'), Service = inner('ServicePage'), Partners = inner('PartnersPage'), Projects = inner('ProjectsPage'), Contact = inner('ContactPage'), Missing = inner('NotFoundPage');
function Footer() {
  return <footer className="site-footer"><div className="wrap footer-main"><div className="footer-brand"><p>MERT ATAM<small>MÜHENDİSLİK</small></p><span>Enerjiye yön veriyoruz.<br/>Yaşama değer katıyoruz.</span></div><div><h3>KEŞFEDİN</h3><Link to="/hakkinda/biz-kimiz">Kurumsal</Link><Link to="/hakkinda/vizyon">Vizyonumuz</Link><Link to="/hakkinda/misyon">Misyonumuz</Link><Link to="/referanslar">Referanslarımız</Link></div><div><h3>UZMANLIK ALANLARIMIZ</h3><Link to="/hizmetler/elektrik-proje">Elektrik Projelendirme</Link><Link to="/hizmetler/elektrik-taahhut">Elektrik Taahhüt</Link><Link to="/hizmetler/enerji-baglanti-hatlari">Enerji Bağlantı Hatları</Link><Link to="/hizmetler/akilli-ev">KNX ve Akıllı Ev Otomasyon</Link><Link to="/hizmetler/elektrik-muhendislik">Elektrik Ölçümleri ve Kompanzasyon</Link></div><div className="footer-address"><h3>BİZE ULAŞIN</h3><a href="tel:+905558889598">0 555 888 9598</a><a href="mailto:info@mertatammuhendislik.com">info@mertatammuhendislik.com</a><p>Adalet Mah. 1594/9 Sok. No: 2<br/>Ziyam Sitesi 114B, Bayraklı / İzmir</p><a href="https://www.google.com/maps/search/?api=1&query=Adalet+Mahallesi+1594%2F9+Sokak+Ziyam+Sitesi+114B+Bayrakli+Izmir" target="_blank" rel="noreferrer">Yol tarifi <Arrow diagonal width="14" height="14"/></a></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Mert Atam Mühendislik</span><span>ELEKTRİK · OTOMASYON · ENERJİ</span><a href="#top" onClick={e=>{e.preventDefault();window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}}>Yukarı dön ↑</a></div></footer>;
}
function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const titles = {'/':'İzmir Elektrik Taahhüt, Proje ve KNX','/hizmetler':'Çözümlerimiz','/hizmetler/enerji-baglanti-hatlari':'Enerji Bağlantı Hatları','/projeler':'Uygulama Alanları','/referanslar':'Referanslarımız','/iletisim':'İletişim ve Proje Talebi','/hakkinda/biz-kimiz':'Biz Kimiz?','/hakkinda/vizyon':'Vizyonumuz','/hakkinda/misyon':'Misyonumuz'};
    document.title = `${titles[pathname] || (pathname.includes('akilli-ev')?'KNX ve Akıllı Ev Otomasyon':pathname.includes('elektrik-taahhut')?'Elektrik Taahhüt':pathname.includes('elektrik-muhendislik')?'Elektrik Ölçümleri ve Kompanzasyon':pathname.includes('elektrik-proje')?'Elektrik Projelendirme':'Mert Atam Mühendislik')} | MERT ATAM MÜHENDİSLİK`;
    const descriptions = {
      '/':'Mert Atam Mühendislik; elektrik proje çizimleri, saha uygulamaları, enerji bağlantıları, elektrik ölçümleri ve KNX/DALI otomasyonu.',
      '/hizmetler':'Tek hat şemaları, pano yerleşimi, güç kabloları, trafo bağlantıları, kompanzasyon ve KNX/DALI kontrol sistemleri.',
      '/projeler':'Elektrik proje çizimleri, dağıtım panoları, güç kabloları, trafo bağlantıları ve KNX/DALI sistemleri için uygulama alanları.',
      '/hizmetler/enerji-baglanti-hatlari':'Yeraltı güç kabloları, ek noktaları, kablo yataklama, uyarı bandı, direk, ayırıcı ve trafo bağlantıları.',
      '/referanslar':'Mert Atam Mühendislik hizmet sunduğu kuruluşlar ve farklı sektörlerdeki referansları.',
      '/iletisim':'İzmir elektrik, KNX ve akıllı ev projeleriniz için Mert Atam Mühendislik ile iletişime geçin. Telefon, e-posta ve WhatsApp proje talebi.',
      '/hakkinda/biz-kimiz':'Mert Atam Mühendislik: İzmir’de elektrik proje, taahhüt, otomasyon ve enerji sistemlerinde teknik doğruluk ve uygulanabilir çözümler.',
      '/hakkinda/vizyon':'Mert Atam Mühendislik: elektrik çizimleri, sahadaki donanım ve kullanıcı kontrolleri arasında teknik süreklilik.',
      '/hakkinda/misyon':'Mert Atam Mühendislik misyonu: elektrik projelerinin tasarımdan uygulamaya ve devreye almaya kadar teknik sürekliliği.'
    };
    const desc=descriptions[pathname] || (pathname.includes('akilli-ev') || pathname.includes('knx') ? 'KNX bus haberleşmesi, ETS cihaz ve grup adresleri, DALI aydınlatma, perde, mobil ve dokunmatik panel, interkom işlevleri.' : pathname.includes('elektrik-proje') ? 'AutoCAD tek hat şemaları, devre adları, koruma cihazları, kablo bilgileri ve pano yerleşimi.' : pathname.includes('elektrik-taahhut') ? 'Dağıtım panoları, güç kabloları, jeneratör taşıma ve yerleşimi, proje ile saha düzeninin birlikte değerlendirilmesi.' : pathname.includes('elektrik-muhendislik') ? 'Kompanzasyon panosu, reaktif güç kontrolörü, direnç ve çevrim empedansı ölçümleri ile devreye bağlı ölçüm kayıtları.' : descriptions['/']);
    document.querySelector('meta[name="description"]')?.setAttribute('content',desc);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content',desc);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content',desc);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content',document.title);
    const canonical = document.querySelector('link[rel="canonical"]'); if(canonical) canonical.href = `https://mertatammuhendislik.com${pathname}`;
    document.querySelector('meta[property="og:url"]')?.setAttribute('content',`https://mertatammuhendislik.com${pathname}`);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content',document.title);
    if(!hash) { window.scrollTo({top:0,behavior:'instant'}); return; }
    let targetId;
    try { targetId=decodeURIComponent(hash.slice(1)); } catch { return; }
    const scrollHash = () => {
      const target=document.getElementById(targetId);
      if(!target) return false;
      target.scrollIntoView();
      return true;
    };
    if(scrollHash()) return;
    const main=document.getElementById('main-content');
    if(!main) return;
    // A lazy route may not have mounted yet. Stop as soon as its anchor exists.
    const observer=new MutationObserver(()=>{if(scrollHash()) observer.disconnect();});
    observer.observe(main,{childList:true,subtree:true});
    const cancel=window.setTimeout(()=>observer.disconnect(),3000);
    return ()=>{observer.disconnect();clearTimeout(cancel);};
  },[pathname,hash]);
  useEffect(() => {
    if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const main=document.getElementById('main-content');
    if(!main) return;
    const observed = new WeakSet();
    const io = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');io.unobserve(entry.target);}}),{threshold:.08});
    const observe = el => {if(!observed.has(el)){observed.add(el);el.classList.add('reveal-ready');io.observe(el);}};
    const scan = root => {
      if(root.nodeType!==1) return;
      if(root.matches('[data-reveal]')) observe(root);
      root.querySelectorAll('[data-reveal]').forEach(observe);
    };
    scan(main);
    // Text changes and hero updates never need a scan of the whole document.
    const mutations=new MutationObserver(records=>records.forEach(record=>record.addedNodes.forEach(scan)));
    mutations.observe(main,{childList:true,subtree:true});
    return ()=>{io.disconnect();mutations.disconnect();};
  },[pathname]);
  return null;
}
export default function App() { return <><a className="skip-link" href="#main-content">İçeriğe geç</a><div id="top"/><Header/><div id="main-content" tabIndex="-1"><Suspense fallback={<div className="page-loading" role="status">Sayfa hazırlanıyor…</div>}><Routes><Route path="/" element={<HomePage/>}/><Route path="/hakkinda" element={<About/>}/><Route path="/hakkinda/:section" element={<About/>}/><Route path="/hizmetler" element={<Services/>}/><Route path="/hizmetler/:serviceSlug" element={<Service/>}/><Route path="/referanslar" element={<Partners/>}/><Route path="/galeri" element={<Navigate to="/hizmetler" replace/>}/><Route path="/projeler" element={<Projects/>}/><Route path="/iletisim" element={<Contact/>}/><Route path="/cozum-ortaklarimiz" element={<Navigate to="/referanslar" replace/>}/><Route path="/kurumsal" element={<Navigate to="/hakkinda/biz-kimiz" replace/>}/><Route path="/biz-kimiz" element={<Navigate to="/hakkinda/biz-kimiz" replace/>}/><Route path="/vizyon" element={<Navigate to="/hakkinda/vizyon" replace/>}/><Route path="/misyon" element={<Navigate to="/hakkinda/misyon" replace/>}/><Route path="*" element={<Missing/>}/></Routes></Suspense></div><Footer/><a className="whatsapp-float" href="https://wa.me/905558889598" target="_blank" rel="noreferrer" aria-label="WhatsApp ile iletişime geç"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M20 11.5a8.5 8.5 0 0 1-12.5 7.6L3 20l1-4.3A8.5 8.5 0 1 1 20 11.5Z"/><path d="M8 7c-1 2 2 6 5 7 2 .5 3-1 3-1l-2-2-1 1-3-3 1-1-2-2Z"/></svg><span>WhatsApp</span></a><RouteEffects/></>; }
