import { memo, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Photo, Arrow, Eyebrow } from './UI';

const slides = [
  {name:'opening',tag:'ELEKTRİK PROJE & TAAHHÜT',title:<>Enerjinin gücü.<br/><em>Mühendisliğin imzası.</em></>,text:'Tek hat şemaları, saha uygulamaları, enerji bağlantıları ve KNX/DALI otomasyonu. Çizim, donanım ve kontrol aynı bütünün parçaları.',to:'/hizmetler',label:'Elektrik çözümlerimizi keşfedin',alt:'Elektrik projesi ve saha çalışmalarını anlatan açılış görseli',bottom:'ELEKTRİK PROJE / TAAHHÜT / KNX'},
  {name:'hero-2',tag:'ELEKTRİK TAAHHÜT & UYGULAMA',title:<>Güçlü bir altyapı.<br/><em>Güven veren gelecek.</em></>,text:'Dağıtım panoları, güç kabloları ve ekipman yerleşimi. Proje kayıtlarıyla birlikte ele alınan saha uygulamaları.',to:'/hizmetler/elektrik-taahhut',label:'Taahhüt hizmetlerimiz',alt:'Elektrik tesisatı saha uygulaması fotoğrafı',bottom:'PANO / GÜÇ KABLOLARI / SAHA KOORDİNASYONU'},
  {name:'hero-3',tag:'PROJE & MÜHENDİSLİK',title:<>İyi tasarımın ardında.<br/><em>Doğru mühendislik.</em></>,text:'AutoCAD tek hat şemaları, devre adları, koruma cihazları ve kablo bilgileri. Proje ile pano yerleşimi arasında açık bir ilişki.',to:'/hizmetler/elektrik-proje',label:'Projeye yakından bakın',alt:'Elektrik proje ve teknik çizim çalışma masası',bottom:'TEK HAT / DEVRE TANIMLARI / PANO YERLEŞİMİ'},
];

function HomeHero() {
  const [active,setActive] = useState(0); const slide = slides[active];
  const [source,setSource]=useState(''),[wantsPlay,setWantsPlay]=useState(false),[playing,setPlaying]=useState(false),[videoReady,setVideoReady]=useState(false),[hasStarted,setHasStarted]=useState(false),[visible,setVisible]=useState(true),[pageVisible,setPageVisible]=useState(true),[menuOpen,setMenuOpen]=useState(false);
  const video=useRef(null),hero=useRef(null);
  useEffect(()=>{setSource(matchMedia('(max-width:700px)').matches?'/media/opening-mobile.mp4':'/media/opening-desktop.mp4');setWantsPlay(!matchMedia('(prefers-reduced-motion:reduce)').matches&&!navigator.connection?.saveData);setPageVisible(!document.hidden);const onPage=()=>setPageVisible(!document.hidden);const onMenu=event=>setMenuOpen(Boolean(event.detail));document.addEventListener('visibilitychange',onPage);document.addEventListener('mert-menu-visibility',onMenu);const io=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting),{threshold:.05});if(hero.current)io.observe(hero.current);return()=>{io.disconnect();document.removeEventListener('visibilitychange',onPage);document.removeEventListener('mert-menu-visibility',onMenu);};},[]);
  useEffect(()=>{if(!video.current)return;if(active===0&&source&&wantsPlay&&visible&&pageVisible&&!menuOpen)video.current.play()?.catch(()=>setPlaying(false));else video.current.pause();},[active,source,wantsPlay,visible,pageVisible,menuOpen]);
  function choose(index){if(active===index)return;video.current?.pause();setPlaying(false);setVideoReady(false);setActive(index);if(index===0)setWantsPlay(true);}
  function playback(){if(active!==0){setVideoReady(false);setActive(0);setWantsPlay(true);}else setWantsPlay(value=>!value);}


  return <section ref={hero} className="home-hero" aria-label="Mert Atam Mühendislik çözümleri">
      <div className="hero-photo" key={slide.name}><Photo name={slide.name} alt={slide.alt} eager sizes="100vw"/>{active===0&&<video ref={video} className={'hero-opening-video'+(videoReady?' hero-opening-video-ready':'')} src={wantsPlay||hasStarted?source||undefined:undefined} poster="/media/opening-poster.jpg" muted playsInline preload="none" aria-hidden="true" onPlaying={()=>{setPlaying(true);setHasStarted(true);setVideoReady(true);}} onPause={()=>setPlaying(false)} onEnded={()=>choose(1)}/>}</div><div className="hero-shade"/>
      <div className="wrap hero-content" key={`text-${active}`}><Eyebrow light>{slide.tag}</Eyebrow><h1>{slide.title}</h1><p className="hero-description">{slide.text}</p><Link to={slide.to} className="button ivory">{slide.label}<Arrow diagonal/></Link></div>
      <div className="wrap hero-bottom"><p>{slide.bottom}</p><div className="hero-controls" role="group" aria-label="Görsel seçimi"><button className="hero-play" type="button" onClick={playback} aria-label={active!==0?'Videoyu yeniden oynat':playing?'Videoyu duraklat':'Videoyu oynat'}>{playing&&active===0?<svg width="13" height="13" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M5 3h3v14H5zM12 3h3v14h-3z"/></svg>:<svg width="13" height="13" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="m6 3 11 7-11 7z"/></svg>}</button>{slides.map((s,i)=><button key={s.name} aria-label={`${i+1}. görsel: ${s.tag}`} aria-pressed={i===active} onClick={()=>choose(i)}><span>0{i+1}</span><i className={i===active?'active':''}/></button>)}<a href="#hizmetler" className="hero-scroll" aria-label="Uzmanlık alanlarına ilerle">↓</a></div></div>
    </section>;
}

export default memo(HomeHero);
