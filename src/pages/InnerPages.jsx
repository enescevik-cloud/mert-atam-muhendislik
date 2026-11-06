import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Arrow, CTA, Eyebrow, Photo, TextLink } from '../components/UI.jsx';
import { services } from '../data/services.js';
import { partners } from '../data/partners.js';
import { serviceStories } from '../data/serviceStories.js';
import EditorialHero from '../components/EditorialHero.jsx';
import './inner.css';
import './smart-home.css';

const imageFor = {
  'elektrik-proje':'v10-project-drafting', 'elektrik-taahhut':'v10-panel-installation',
  'enerji-baglanti-hatlari':'v10-cable-bedding', 'akilli-ev':'knx-control', 'elektrik-muhendislik':'v10-reactive-controller',
};
const imageAltFor = {
  'elektrik-proje':'Elektrik tek hat şemaları ve pano çizimleri için mühendislik çalışma masası',
  'elektrik-taahhut':'Dağıtım ve kompanzasyon bölümlerini içeren elektrik panosu',
  'enerji-baglanti-hatlari':'Yeraltı güç kabloları, yataklama malzemesi ve uyarı bandı',
  'akilli-ev':'Aydınlatma ve perde fonksiyonları için duvar kontrol paneli',
  'elektrik-muhendislik':'Kompanzasyon panosu üzerindeki reaktif güç kontrol rölesi',
};
const shortTitles = {
  'elektrik-proje':'Elektrik Projelendirme', 'elektrik-taahhut':'Elektrik Taahhüt',
  'enerji-baglanti-hatlari':'Enerji Bağlantı Hatları', 'akilli-ev':'KNX ve Akıllı Ev Otomasyon',
  'elektrik-muhendislik':'Elektrik Ölçümleri ve Kompanzasyon',
};
const serviceAliases = {
  'elektrik-proje-hizmetleri': 'elektrik-proje',
  'elektrik-projelendirme': 'elektrik-proje',
  'elektrik-taahhut-hizmetleri': 'elektrik-taahhut',
  'taahhut-hizmetleri': 'elektrik-taahhut',
  'akilli-ev-otomasyon-hizmetleri': 'akilli-ev',
  'akilli-ev-otomasyon': 'akilli-ev',
  'knx-ve-akilli-ev-otomasyon': 'akilli-ev',
  'knx': 'akilli-ev',
  'dali': 'akilli-ev',
  'enerji-nakil-hatlari': 'enerji-baglanti-hatlari',
  'elektrik-baglanti-hatlari': 'enerji-baglanti-hatlari',
  'ag-og-baglanti': 'enerji-baglanti-hatlari',
  'elektrik-muhendislik-hizmetleri': 'elektrik-muhendislik',
  'teknik-danismanlik': 'elektrik-muhendislik',
};
const phone = '+905558889598';
const email = 'info@mertatammuhendislik.com';
const address = 'Adalet Mahallesi 1594/9 Sokak No: 2, Ziyam Sitesi 114B, Bayraklı / İzmir';
const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

function Crumb({ children, parent }) {
  return <nav className="in-crumb" aria-label="Sayfa konumu"><Link to="/">Ana sayfa</Link><span>/</span>{parent && <><Link to={parent.to}>{parent.label}</Link><span>/</span></>}<span aria-current="page">{children}</span></nav>;
}
function Intro({ label, title, italic, text, crumb, children }) {
  return <section className="in-intro"><div className="wrap"><Crumb>{crumb || label}</Crumb><div className="in-intro-grid"><div><Eyebrow>{label}</Eyebrow><h1>{title}{italic && <><br/><em>{italic}</em></>}</h1></div><div className="in-intro-aside">{text && <p>{text}</p>}{children}</div></div></div></section>;
}
function ServiceTags({ items }) {
  return <ul className="in-tags">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

const corporate = {
  about: {
    label:'01 / MERT ATAM MÜHENDİSLİK', crumb:'Biz kimiz?', title:'Elektrik mühendisliği.', italic:'Projeden sahaya.',
    text:'Elektrik çizimleri, saha uygulamaları ve KNX otomasyonu. Ofis ile sahadaki bağlantıları birlikte ele alan bir mühendislik yaklaşımı.',
    heading:'Çizim, donanım ve uygulama birlikte.',
    paragraphs:[
      'Mert Atam Mühendislik; elektrik projelendirme, elektrik uygulamaları ve akıllı ev otomasyonu alanlarında çalışır.',
      'Tek hat şemaları ve pano yerleşimleri; kablo güzergâhları, dağıtım ekipmanları ve saha kayıtlarıyla birlikte değerlendirilir. Devre adlarının ve bağlantı bilgilerinin tutarlı olması, uygulamanın izlenmesini kolaylaştırır.',
      'Otomasyon çalışmalarında pano donanımı, KNX bus haberleşmesi ve kullanıcı kontrolleri birlikte ele alınır. Aydınlatma grupları, perde komutları ve interkom fonksiyonları sahadaki karşılıklarıyla kontrol edilir.',
    ],
    principles:[['Çizim ve saha uyumu','Devre adlarını, pano işaretlerini ve bağlantı kayıtlarını birlikte değerlendirmek.'],['Donanım ve fonksiyon','Cihaz bağlantıları ile yazılımda tanımlanan görevlerin eşleşmesini gözetmek.'],['Düzenli kayıt','Çizim, bağlantı ve ölçüm bilgilerini ilgili devreyle birlikte takip etmek.']],
  },
  vision: {
    label:'02 / VİZYONUMUZ', crumb:'Vizyonumuz', title:'Birlikte düşünülen', italic:'elektrik sistemleri.',
    text:'Proje çizimleri, elektrik donanımı ve kullanıcı kontrolleri arasında açık, izlenebilir bir bütünlük.',
    heading:'Her bağlantının anlaşılır bir karşılığı.',
    paragraphs:[
      'Elektrik sistemlerini yalnızca tekil cihazlar olarak değil; çizimler, bağlantılar ve kullanım işlevleriyle birlikte ele alıyoruz.',
      'Güç kablolarından dağıtım panolarına, trafo bağlantılarından KNX ve DALI fonksiyonlarına uzanan çalışmalarda teknik bilgilerin birbiriyle tutarlı olmasını önemsiyoruz.',
      'Bu yaklaşım; devrelerin bulunmasını, kontrol sonuçlarının değerlendirilmesini ve yazılım ile saha donanımının birlikte izlenmesini destekler.',
    ],
    principles:[['Bütünlük','Projelendirme, saha uygulaması ve fonksiyon kontrollerini birlikte düşünmek.'],['İzlenebilirlik','Devre ve cihaz bilgilerini çizim ve saha kayıtlarıyla eşleştirmek.'],['Anlaşılır kontrol','Kullanıcı komutlarının doğru aydınlatma, perde veya interkom işlevine ulaşmasını gözetmek.']],
  },
  mission: {
    label:'03 / MİSYONUMUZ', crumb:'Misyonumuz', title:'Çizimde tanımlı.', italic:'Sahada karşılığı olan.',
    text:'Elektrik bağlantılarını açık çizimler, düzenli uygulama kayıtları ve işlev kontrolleriyle birlikte yönetmek.',
    heading:'Projeden fonksiyon kontrolüne.',
    paragraphs:[
      'Tek hat şemalarında besleme, dağıtım ve çıkış devrelerini açık biçimde tanımlamak; bu bilgileri pano yerleşimiyle birlikte değerlendirmek çalışma yaklaşımımızın temelidir.',
      'Kablo ve ekipman çalışmalarında güzergâhı, malzeme bilgilerini, taşıma ve bağlantı düzenini birlikte ele alıyoruz. Ölçüm kayıtlarının test modu ve ilgili devre bilgisiyle tutulmasını önemsiyoruz.',
      'KNX ve DALI tarafında cihaz, grup ve fonksiyon eşleştirmelerini kullanıcı arayüzleriyle ilişkilendiriyor; her komutun sahada doğru çıkışı çalıştırmasını kontrol ediyoruz.',
    ],
    principles:[['Tanımlamak','Devre, kablo ve cihaz bilgilerini çizim üzerinde anlaşılır biçimde göstermek.'],['Eşleştirmek','Pano bağlantılarını, yazılım işlevlerini ve saha kayıtlarını aynı sistem üzerinden takip etmek.'],['Kontrol etmek','Ölçüm sonuçları ve kullanıcı komutlarını ilgili devre ve fiziksel çıkışla birlikte değerlendirmek.']],
  },
};

export function AboutPage() {
  const { pathname } = useLocation();
  const type = pathname.includes('vizyon') ? 'vision' : pathname.includes('misyon') ? 'mission' : 'about';
  const info = corporate[type];
  return <main className="inner-page editorial-page"><EditorialHero image={type==='vision'?'smart-shading':type==='mission'?'project-coordination':'v10-project-drafting'} alt={type==='vision'?'Aydınlatma ve perde sistemlerinin birlikte düşünüldüğü yaşam alanı':type==='mission'?'Elektrik çizimleri ile saha donanımının birlikte değerlendirildiği teknik çalışma alanı':'Elektrik mühendisliği çalışma ve uygulama alanı'} label={info.label} title={<>{info.title}<br/><em>{info.italic}</em></>} text={info.text} crumb={{label:info.crumb}} action={{to:'/hizmetler',label:'Çalışma alanlarımız'}}/>
    <section className="in-about-main section-pad"><div className="wrap in-about-grid"><figure className="in-about-visual" data-reveal><Photo name={type === 'vision' ? 'knx-control' : type === 'mission' ? 'v10-panel-labels' : 'project-coordination'} alt={type === 'vision' ? 'Aydınlatma ve perde işlevlerini bir araya getiren kontrol paneli' : type === 'mission' ? 'Pano devreleri ile proje etiketlerinin eşleştirilmesi' : 'Elektrik teknik proje paftaları ve tek hat şemaları konsepti'} eager/><figcaption><span>MERT ATAM MÜHENDİSLİK</span><span>İZMİR, TÜRKİYE</span></figcaption></figure><div className="in-about-copy" data-reveal><Eyebrow>YAKLAŞIMIMIZ</Eyebrow><h2>{info.heading}</h2>{info.paragraphs.map(p => <p key={p}>{p}</p>)}<TextLink to="/iletisim#teklif-talebi">Projenizi değerlendirelim</TextLink></div></div></section>
    <section className="in-principles section-pad"><div className="wrap"><div className="in-section-heading"><div><Eyebrow>ÇALIŞMA İLKELERİMİZ</Eyebrow><h2>Detayda özen.<br/><em>Bütünde güven.</em></h2></div><p>Projenin her aşamasında aynı dikkat, aynı teknik sorumluluk.</p></div><div className="in-principles-grid">{info.principles.map(([title, text], i) => <article key={title} data-reveal><span className="in-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section-pad"><div className="wrap in-corporate-links"><Eyebrow>KURUMSAL</Eyebrow>{[['Biz kimiz?', '/hakkinda/biz-kimiz'], ['Vizyonumuz', '/hakkinda/vizyon'], ['Misyonumuz', '/hakkinda/misyon']].map(([label, to]) => <Link to={to} key={to}>{label}<Arrow diagonal/></Link>)}</div></section><CTA/>
  </main>;
}

export function ServicesPage() {
  return <main className="inner-page editorial-page"><EditorialHero image="v10-panel-installation" alt="Dağıtım ve kompanzasyon panosu" label="MÜHENDİSLİK / ÇALIŞMA ALANLARIMIZ" title="Elektrik mühendisliği çözümleri" text="Tek hat şemaları, saha uygulamaları, enerji bağlantıları, elektrik ölçümleri ve KNX otomasyonu. Çizimden bağlantıya uzanan çalışma alanlarımız." crumb={{label:'Hizmetler'}} action={{to:'#cozumler',label:'Hizmetleri inceleyin'}}/>
    <section className="in-service-list" id="cozumler"><div className="wrap">{services.map((service, i) => <article className="in-service-row" key={service.slug} data-reveal><Link to={`/hizmetler/${service.slug}`} className="in-service-photo" aria-label={service.title}><Photo name={service.photo || imageFor[service.slug]} alt={imageAltFor[service.slug]} eager={false}/><span className="in-image-arrow"><Arrow diagonal/></span></Link><div className="in-service-copy"><span className="in-number">{service.number} / MÜHENDİSLİK ÇÖZÜMLERİ</span><h2>{shortTitles[service.slug]}</h2><p>{service.shortText}</p><ServiceTags items={service.highlights}/><TextLink to={`/hizmetler/${service.slug}`}>Hizmeti keşfedin</TextLink></div></article>)}</div></section><CTA/></main>;
}

const smartHomeAreas = [
  {id:'aydinlatma',number:'01',title:'DALI aydınlatma grupları',image:'smart-shading',alt:'Aydınlatma ve perde kontrollerinin bir arada kullanıldığı yaşam alanı',text:'Aydınlatma cihazları ve grupları, projedeki oda ve fonksiyonlarla eşleştirilir. Mobil arayüzde açma, kapama ve parlaklık bilgileri ilgili aydınlatma grubuyla birlikte kontrol edilir.',items:['Cihaz adresleri ve grup tanımları','Oda ve aydınlatma eşleştirmeleri','Açma, kapama ve parlaklık kontrolü']},
  {id:'knx-programlama',number:'02',title:'Pano, KNX bus ve ETS',image:'report-knx-panel',alt:'Kaynak çalışmadaki KNX otomasyon panosu ve röle aktüatörleri',text:'Pano çıkışları, kablo etiketleri ve yazılımda tanımlanan işlevler birlikte değerlendirilir. KNX bus arayüzü üzerinden haberleşme kurulur; ETS cihaz ve grup adresleri ile uygulama parametreleri ilgili donanımla eşleştirilir.',items:['Pano kanalları ve yük devreleri','Cihaz ve grup adresleme','Parametre yükleme ve çıkış kontrolü']},
  {id:'perde-iklim',number:'03',title:'Dokunmatik panel ve perde',image:'smart-entry',alt:'Duvar kontrol paneli ve interkom arayüzü bulunan giriş alanı',text:'Mobil arayüz ve duvar paneli aynı sistemin farklı kontrol noktaları olarak ele alınır. Perdenin açma, kapama ve durdurma komutları; arayüzdeki tepki ve fiziksel hareket birlikte izlenerek kontrol edilir.',items:['Mobil ve duvar paneli erişimi','Perde açma, kapama ve durdurma','Komut ile durum geri bildirimi']},
  {id:'kontrol-paneli',number:'04',title:'İnterkom ve olay mantığı',image:'report-intercom-logic',alt:'İnterkom, kapı açma, ses ve dijital giriş bağlantılarının gerçek yazılım ekranı',text:'İnterkom çağrısı, kapı açma ve ses bildirimleri yazılımdaki fonksiyon bloklarıyla ilişkilendirilir. Dijital giriş, tetikleyici ve sayaç bağlantıları üzerinden olayların kullanıcı bildirimine ulaşması takip edilir.',items:['İnterkom ve kapı açma komutu','Dijital giriş ve tetikleyici bağlantıları','Olay tabanlı ses bildirimleri']},
];
function SmartHomeScope() {
  return <section className="smart-home-scope section-pad" aria-labelledby="smart-home-scope-title">
    <div className="wrap">
      <div className="in-section-heading">
        <div><Eyebrow>YAŞAM VE KONTROL</Eyebrow><h2 id="smart-home-scope-title">Donanımdan arayüze,<br/><em>aynı sistemin parçaları.</em></h2></div>
        <p>Pano donanımı, KNX haberleşmesi ve kullanıcı kontrolleri aynı fonksiyon planı üzerinden ele alınır. Cihaz ve grup tanımları sahadaki karşılıklarıyla eşleştirilir.</p>
      </div>
      <div className="smart-home-stories">{smartHomeAreas.map(area => <article className="smart-home-story" id={area.id} key={area.id} data-reveal="up">
        <figure className="smart-home-story-photo"><Photo name={area.image} alt={area.alt} sizes="(max-width: 800px) 100vw, 45vw"/><figcaption><span>{area.number} / SİSTEM KAPSAMI</span><span>KNX / DALI</span></figcaption></figure>
        <div className="smart-home-story-copy"><h3>{area.title}</h3><p>{area.text}</p><ul>{area.items.map(item => <li key={item}>{item}</li>)}</ul></div>
      </article>)}</div>
      <p className="smart-home-concept-note">Saha fotoğrafları ve temsili görseller, otomasyon donanımını ve kontrol işlevlerini birlikte anlatır.</p>
    </div>
  </section>;
}

function ServicePhotoScope({slug}) {
  const story=serviceStories[slug];
  if(!story)return null;
  return <section className="editorial-service-stories section-pad"><div className="wrap"><div className="in-section-heading"><div><Eyebrow>TEKNİK KAPSAM</Eyebrow><h2>{story.heading}<br/><em>{story.italic}</em></h2></div><p>{story.intro}</p></div><div className="smart-home-stories">{story.areas.map(area=><article className="smart-home-story" id={area.id} key={area.id} data-reveal="up"><figure className="smart-home-story-photo"><Photo name={area.image} alt={area.alt} sizes="(max-width: 800px) 100vw, 45vw"/><figcaption><span>{area.number} / SİSTEM KAPSAMI</span><span>MERT ATAM MÜHENDİSLİK</span></figcaption></figure><div className="smart-home-story-copy"><h3>{area.title}</h3><p>{area.text}</p><ul>{area.items.map(item=><li key={item}>{item}</li>)}</ul></div></article>)}</div><p className="smart-home-concept-note">Teknik görseller ve saha fotoğrafları, hizmet kapsamını anlatmak için kullanılmıştır.</p></div></section>;
}

export function ServicePage() {
  const { serviceSlug } = useParams();
  const slug = serviceAliases[serviceSlug] || serviceSlug;
  const service = services.find(item => item.slug === slug);
  if (!service) return <NotFoundPage/>;
  const next = services[(services.indexOf(service) + 1) % services.length];
  return <main className={`inner-page editorial-page${slug==='akilli-ev'?' in-detail-knx':''}`}><EditorialHero image={service.photo || imageFor[slug]} alt={imageAltFor[slug]} label={`${service.number} / ${service.eyebrow.toLocaleUpperCase('tr-TR')}`} title={shortTitles[slug]} text={service.shortText} crumb={{parent:{to:'/hizmetler',label:'Hizmetler'},label:service.eyebrow}} imageTo="#hizmet-kapsami" action={{to:`/iletisim?service=${encodeURIComponent(service.title)}#teklif-talebi`,label:'Projenizi konuşalım'}}/>
    <section id="hizmet-kapsami" className="section-pad"><div className="wrap in-detail-overview"><div><Eyebrow>HİZMET KAPSAMI</Eyebrow><h2>Proje, donanım<br/><em>ve uygulama.</em></h2></div><div><p className="in-lead">{service.description}</p><ServiceTags items={service.highlights}/></div></div></section>
    {slug === 'akilli-ev' ? <SmartHomeScope/> : <ServicePhotoScope slug={slug}/>}
    <section className="in-scope section-pad"><div className="wrap in-scope-grid"><div><Eyebrow>NELER YAPIYORUZ?</Eyebrow><h2>Her ayrıntı,<br/>projenin bir parçası.</h2><p>{service.shortText}</p></div><ul className="in-scope-list">{service.details.map((detail, i) => <li key={detail}><span>{String(i + 1).padStart(2, '0')}</span>{detail}<Arrow diagonal width="17" height="17"/></li>)}</ul></div></section>
    <section className="section-pad"><div className="wrap"><div className="in-section-heading"><div><Eyebrow>ÇALIŞMA SÜRECİ</Eyebrow><h2>{service.processTitle}</h2></div><p>{service.processText}</p></div><div className="in-process-grid">{service.processSteps.map((step, i) => <article key={step.title} data-reveal><span className="in-number">0{i + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>
    <section className="in-next-service"><div className="wrap"><span className="in-number">DİĞER ÇÖZÜMLERİMİZİ KEŞFEDİN</span><Link to={`/hizmetler/${next.slug}`}>{shortTitles[next.slug]}<Arrow diagonal width="36" height="36"/></Link></div></section><CTA/>
  </main>;
}

export function PartnersPage() {
  return <main className="inner-page"><Intro label="REFERANSLARIMIZ" title="Birlikte çalışmanın" italic="verdiği güven." text="Farklı sektörler, farklı ihtiyaçlar. Her iş birliğinde aynı mühendislik sorumluluğu."/>
    <section className="in-partners section-pad"><div className="wrap"><div className="in-partner-caption"><p>HİZMET SUNDUĞUMUZ KURULUŞLAR</p><span>{String(partners.length).padStart(2, '0')} KURULUŞ</span></div><div className="in-partner-grid">{partners.map(partner => <a className="in-partner" key={partner.id} href={partner.website} target="_blank" rel="noopener noreferrer" aria-label={`${partner.name} web sitesi, yeni sekmede açılır`}><img src={partner.logo} alt={partner.name} loading="lazy" decoding="async" width="240" height="100" onError={event => { if(partner.fallbackLogo && event.currentTarget.src !== partner.fallbackLogo) event.currentTarget.src = partner.fallbackLogo; }}/><span>{partner.name}<Arrow diagonal width="15" height="15"/></span></a>)}</div></div></section><CTA/></main>;
}

const applications = [
  {number:'01',id:'enerji-hatlari',legacy:'sanayi',name:'Enerji bağlantı hatları',image:'v10-cable-bedding',text:'Yeraltı güç kabloları, ek noktaları, yataklama ve uyarı bandı. Direk, ayırıcı ve trafo bağlantılarının saha düzeni.',to:'/hizmetler/enerji-baglanti-hatlari',tags:'KABLO / GÜZERGÂH / BAĞLANTI'},
  {number:'02',id:'pano-taahhut',name:'Elektrik taahhüt ve pano',image:'v10-panel-installation',text:'Dağıtım ve kompanzasyon panoları, güç kabloları, jeneratörün taşınması ve yerleşimi. Ekipman, erişim ve saha koordinasyonunun birlikte planlanması.',to:'/hizmetler/elektrik-taahhut',tags:'PANO / JENERATÖR / SAHA'},
  {number:'03',id:'elektrik-projeleri',legacy:'ticari',name:'Elektrik projelendirme',image:'v10-project-drafting',text:'AutoCAD tek hat şemaları, pano yerleşimi, koruma cihazları ve kablo açıklamaları. Çizim bilgileri ile saha devrelerinin eşleştirilmesi.',to:'/hizmetler/elektrik-proje',tags:'AUTOCAD / TEK HAT / PANO'},
  {number:'04',id:'knx-dali',legacy:'konut',name:'KNX ve Akıllı Ev Otomasyon',image:'knx-control',text:'Otomasyon panosu, bus haberleşmesi, ETS programlama ve DALI aydınlatma grupları. Kontrol arayüzleri, perde komutları ve interkom fonksiyonları.',to:'/hizmetler/akilli-ev',tags:'KNX / DALI / PROGRAMLAMA'},
  {number:'05',id:'olcum-kompanzasyon',name:'Elektrik Ölçümleri ve Kompanzasyon',image:'v10-reactive-controller',text:'Kompanzasyon panosu ve reaktif güç kontrolörü. Tesisat test cihazında direnç, çevrim empedansı ve hesaplanan kısa devre akımı kayıtlarının incelenmesi.',to:'/hizmetler/elektrik-muhendislik',tags:'ÖLÇÜM / KOMPANZASYON / KAYIT'},
];
export function ProjectsPage() {
  return <main className="inner-page editorial-page"><EditorialHero image="v10-generator" alt="Jeneratör yerleşimi ve erişim alanı" label="SAHA / UYGULAMA ALANLARI" title="Projeden sahaya." text="Çizimlerin, elektrik donanımının ve kullanıcı kontrollerinin sahadaki karşılıkları. Kablo, pano, trafo, ölçüm ve otomasyon çalışmaları." crumb={{label:'Uygulamalar'}} action={{to:'#enerji-hatlari',label:'Uygulama alanlarını inceleyin'}}/>
    <section className="in-applications"><div className="wrap">{applications.map(item=><article className="in-application" id={item.id} key={item.number} data-reveal><Link to={item.to} className="in-application-image"><Photo name={item.image} alt={item.name+' uygulama kapsamı'} sizes="(max-width: 800px) 100vw, 57vw"/><span className="in-image-arrow"><Arrow diagonal/></span></Link><div className="in-application-copy"><span id={item.legacy || undefined} className="in-number">{item.number} / {item.tags}</span><h2>{item.name}</h2><p>{item.text}</p><TextLink to={item.to}>İlgili çözümleri inceleyin</TextLink></div></article>)}<p className="in-photo-note">Teknik görseller ve saha fotoğrafları, hizmet kapsamını anlatmak için kullanılmıştır.</p></div></section><CTA/>
  </main>;
}

export function ContactPage() {
  const location = useLocation();
  const requestedService = new URLSearchParams(location.search).get('service') || '';
  const previousKnxNames = ['KNX ve DALI Otomasyon Sistemleri','KNX & DALI Otomasyon','KNX & DALI otomasyon','KNX ve Akıllı Ev Otomasyonu'];
  const initialService = previousKnxNames.includes(requestedService) ? 'KNX ve Akıllı Ev Otomasyon' : requestedService;
  const [form, setForm] = useState({fullName:'', phone:'', email:'', service:initialService, location:'', message:''});
  const [whatsappUrl, setWhatsappUrl] = useState('');
  function change(event) { setForm(current => ({...current, [event.target.name]:event.target.value})); setWhatsappUrl(''); }
  function submit(event) {
    event.preventDefault();
    const message = ['Merhaba, MERT ATAM MÜHENDİSLİK web sitesi üzerinden proje talebi oluşturuyorum.', '', `Ad Soyad: ${form.fullName.trim()}`, `Telefon: ${form.phone.trim()}`, `E-posta: ${form.email.trim() || 'Belirtilmedi'}`, `Talep Edilen Hizmet: ${form.service}`, `Proje Konumu: ${form.location.trim() || 'Belirtilmedi'}`, '', 'Proje Açıklaması:', form.message.trim()].join('\n');
    const url = `https://wa.me/905558889598?text=${encodeURIComponent(message)}`;
    setWhatsappUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  const options = [...services.map(service => service.title), 'Diğer'];
  return <main className="inner-page"><Intro label="İLETİŞİM" title="Bir fikirle başlar." italic="Birlikte hayata geçer." text="Projenizin ihtiyaçlarını birlikte değerlendirelim. Elektrik ve otomasyon çözümleri için bize ulaşın."/>
    <section className="in-contact-section" id="teklif-talebi"><div className="wrap in-contact-grid"><aside className="in-contact-info"><Eyebrow>BİZE ULAŞIN</Eyebrow><h2>Projenizi<br/>dinliyoruz.</h2><div className="in-contact-line"><span>TELEFON</span><a href={`tel:${phone}`}>0 555 888 9598<Arrow diagonal/></a></div><div className="in-contact-line"><span>E-POSTA</span><a href={`mailto:${email}`}>{email}<Arrow diagonal/></a></div><div className="in-contact-line"><span>OFİS</span><p>{address}</p><a href={maps} target="_blank" rel="noopener noreferrer" className="in-map-link">Haritada görüntüleyin<Arrow diagonal width="17" height="17"/></a></div><p className="in-contact-small">Elektrik çizimleri, pano ve kablo çalışmaları, ölçüm ve KNX otomasyonu.</p></aside>
    <div className="in-form-panel"><div className="in-form-heading"><span className="in-number">PROJE & TEKLİF TALEBİ</span><h2>Detayları paylaşın.</h2><p>Formu doldurun, talebinizi WhatsApp üzerinden birlikte değerlendirelim.</p></div><form onSubmit={submit} className="in-contact-form"><div className="in-field"><label htmlFor="fullName">Ad soyad <span>*</span></label><input id="fullName" name="fullName" autoComplete="name" required minLength="2" maxLength="120" value={form.fullName} onChange={change} placeholder="Adınız ve soyadınız"/></div><div className="in-field"><label htmlFor="phone">Telefon <span>*</span></label><input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required pattern="[+0-9 ()-]{7,25}" title="Lütfen geçerli bir telefon numarası girin." maxLength="25" value={form.phone} onChange={change} placeholder="0 5__ ___ __ __"/></div><div className="in-field"><label htmlFor="email">E-posta</label><input id="email" name="email" type="email" autoComplete="email" maxLength="150" value={form.email} onChange={change} placeholder="ornek@firma.com"/></div><div className="in-field"><label htmlFor="location">Proje konumu</label><input id="location" name="location" autoComplete="address-level2" maxLength="160" value={form.location} onChange={change} placeholder="İl / İlçe"/></div><div className="in-field in-field-full"><label htmlFor="service">İlgilendiğiniz hizmet <span>*</span></label><select id="service" name="service" required value={form.service} onChange={change}><option value="">Hizmet seçiniz</option>{options.map(option => <option key={option} value={option}>{option}</option>)}</select></div><div className="in-field in-field-full"><label htmlFor="message">Projeniz hakkında <span>*</span></label><textarea id="message" name="message" required minLength="10" maxLength="4000" rows="4" value={form.message} onChange={change} placeholder="Yapı türü, kapsam ve ihtiyaçlarınızı kısaca anlatın…"/></div><div className="in-form-footer"><p>WhatsApp yeni sekmede açılır. Mesajı göndermeden önce inceleyebilirsiniz. <span>* Zorunlu alanlar</span></p><button className="button dark" type="submit">WhatsApp’ta devam et<Arrow diagonal/></button></div>{whatsappUrl && <p className="in-form-status" role="status">Mesajınız hazır. <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp görüşmesini açın</a> ve göndererek talebinizi iletin.</p>}</form></div></div></section>
  </main>;
}

export function NotFoundPage() {
  return <main className="inner-page"><section className="in-not-found"><div className="wrap"><Eyebrow>404 / SAYFA BULUNAMADI</Eyebrow><h1>Yeni bir<br/><em>başlangıç yapalım.</em></h1><p>Aradığınız sayfa taşınmış veya kaldırılmış olabilir.</p><Link to="/" className="button dark">Ana sayfaya dönün<Arrow/></Link><TextLink to="/hizmetler">Hizmetlerimizi keşfedin</TextLink></div></section></main>;
}
