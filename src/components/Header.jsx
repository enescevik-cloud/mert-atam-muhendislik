import { Fragment, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Arrow } from './UI';
import BrandMark from './BrandMark';
import '../header-behavior.css';
import './mega-navigation.css';

const panels = {
  company: {
    label:'Kurumsal', title:'Şirket profili', text:'İzmir’de elektrik mühendisliği, taahhüt ve otomasyon.', to:'/hakkinda/biz-kimiz', action:'Mert Atam’ı tanıyın',
    groups:[{title:'Kimliğimiz',items:[{title:'Hakkımızda',text:'Çalışma alanları ve mühendislik yaklaşımı.',to:'/hakkinda/biz-kimiz',photo:'v10-project-drafting'}]},{title:'Yönümüz',items:[{title:'Vizyonumuz',text:'Çizim, donanım ve uygulama arasında süreklilik.',to:'/hakkinda/vizyon',photo:'smart-shading'},{title:'Misyonumuz',text:'Projelendirmeden uygulama ve kontrole.',to:'/hakkinda/misyon',photo:'project-coordination'}]}],
    photos:[{title:'Teknik proje',photo:'v10-project-drafting',to:'/hizmetler/elektrik-proje'},{title:'Enerji sistemleri',photo:'report-transformer',to:'/hizmetler/enerji-baglanti-hatlari'},{title:'Saha uygulaması',photo:'v10-panel-installation',to:'/hizmetler/elektrik-taahhut'}],
  },
  engineering: {
    label:'Mühendislik', title:'Çizimden bağlantıya', text:'Proje çizimleri, saha uygulamaları, enerji bağlantıları, otomasyon ve ölçümler.',to:'/hizmetler',action:'Tüm hizmetleri inceleyin',
    groups:[{title:'Proje ve saha',items:[{title:'Elektrik projeleri',text:'AutoCAD, tek hat şeması ve pano yerleşimi.',to:'/hizmetler/elektrik-proje',photo:'v10-project-drafting'},{title:'Elektrik taahhüt',text:'Dağıtım panosu, kablo ve ekipman yerleşimi.',to:'/hizmetler/elektrik-taahhut',photo:'v10-panel-installation'}]},{title:'Bağlantı ve kontrol',items:[{title:'Enerji bağlantı hatları',text:'Yeraltı kabloları, ayırıcı ve trafo bağlantıları.',to:'/hizmetler/enerji-baglanti-hatlari',photo:'cables'},{title:'KNX ve Akıllı Ev Otomasyon',text:'DALI aydınlatma, perde, panel ve interkom.',to:'/hizmetler/akilli-ev',photo:'knx-panel'},{title:'Elektrik Ölçümleri ve Kompanzasyon',text:'Reaktif güç kontrolü, direnç ve çevrim ölçümleri.',to:'/hizmetler/elektrik-muhendislik',photo:'v10-reactive-controller'}]}],
    photos:[{title:'Teknik proje',photo:'v10-project-drafting',to:'/hizmetler/elektrik-proje'},{title:'Dağıtım panoları',photo:'v10-panel-installation',to:'/hizmetler/elektrik-taahhut'},{title:'Enerji güzergâhı',photo:'cables',to:'/hizmetler/enerji-baglanti-hatlari'}],
  },
  applications: {
    label:'Uygulamalar', title:'Sahada ve yapıda',text:'Elektrik altyapısından akıllı yaşam alanlarına uzanan uygulama kapsamı.',to:'/projeler',action:'Uygulama alanlarına bakın',
    groups:[{title:'Tesis altyapısı',items:[{title:'Enerji hattı bağlantıları',text:'Kablo güzergâhları, direk ve trafo bağlantıları.',to:'/projeler#enerji-hatlari',photo:'cables'},{title:'Pano ve tesisat',text:'Dağıtım panoları ve güç kablosu uygulamaları.',to:'/projeler#pano-taahhut',photo:'v10-panel-installation'}]},{title:'Otomasyon ve ölçüm',items:[{title:'Konut otomasyonu',text:'Aydınlatma, perde, interkom ve panel kontrolleri.',to:'/projeler#knx-dali',photo:'knx-panel'},{title:'Ölçüm ve kontrol',text:'Elektrik ölçümleri ve kompanzasyon takibi.',to:'/projeler#olcum-kompanzasyon',photo:'v10-reactive-controller'}]}],
    photos:[{title:'Enerji altyapısı',photo:'report-pole-transformer',to:'/projeler#enerji-hatlari'},{title:'Otomasyon donanımı',photo:'knx-panel',to:'/hizmetler/akilli-ev'},{title:'Elektrik ölçümleri',photo:'v10-reactive-controller',to:'/hizmetler/elektrik-muhendislik'}],
  },
};
const allItems = panel => panel.groups.flatMap(group=>group.items);

function MenuPhoto({item,main=false,close}) {
  return <Link className={'mega-photo'+(main?' mega-photo-main':'')} to={item.to} onClick={()=>close()} aria-label={item.title+' sayfasını aç'}><img src={'/images/'+item.photo+'-800.webp'} srcSet={'/images/'+item.photo+'-400.webp 400w, /images/'+item.photo+'-800.webp 800w'} sizes={main?'(max-width:1000px) 90vw, 350px':'(max-width:1000px) 42vw, 170px'} width="800" height="450" alt={item.title} loading="lazy" decoding="async"/><span>{item.title}<Arrow diagonal width="14" height="14"/></span></Link>;
}
function MegaPanel({type,close}) {
  const data=panels[type],items=allItems(data);
  const [preview,setPreview]=useState(null);
  const primary=preview?{...preview,title:preview.title}:data.photos[0];
  const rest=data.photos.filter(photo=>photo.photo!==primary.photo).slice(0,2);
  return <section id="site-mega-menu" className="nav-mega" aria-label={data.label+' menüsü'}><div className="mega-inner">
    <div className="mega-intro"><span>MERT ATAM / İZMİR</span><h2>{data.title}</h2><p>{data.text}</p><Link to={data.to} onClick={()=>close()}>{data.action}<Arrow diagonal width="16" height="16"/></Link></div>
    <nav className="mega-groups" aria-label={data.label+' bağlantıları'}>{data.groups.map(group=><section className="mega-group" key={group.title}><h3>{group.title}</h3><div>{group.items.map(item=><Link key={item.to} to={item.to} onClick={()=>close()} onFocus={()=>setPreview(item)} onPointerEnter={()=>setPreview(item)}><small>{String(items.indexOf(item)+1).padStart(2,'0')}</small><span>{item.title}</span><Arrow diagonal width="14" height="14"/></Link>)}</div></section>)}</nav>
    <aside className="mega-preview"><div className="mega-preview-top"><span>HİZMET VE YAŞAM ALANLARI</span><button type="button" aria-label="Mega menüyü kapat" onClick={()=>close(true)}>Kapat <i aria-hidden="true">×</i></button></div><MenuPhoto item={primary} main close={close}/><div className="mega-thumbs">{rest.map(photo=><MenuPhoto key={photo.photo} item={photo} close={close}/>)}</div><p>{preview?.text || 'Saha fotoğrafları ve temsili görsellerden bir seçki.'}</p></aside>
  </div></section>;
}
function Brand({close}) {return <Link to="/" className="brand" onClick={()=>close()} aria-label="Mert Atam Mühendislik ana sayfa"><BrandMark/><span>MERT ATAM<small>MÜHENDİSLİK</small></span></Link>;}

export default function Header() {
  const {pathname,hash,search}=useLocation();
  const [mobile,setMobile]=useState(false),[active,setActive]=useState(null);
  const [passed,setPassed]=useState(()=>({white:typeof window!=='undefined'&&window.scrollY>20,progress:typeof window!=='undefined'&&window.scrollY>120,ink:typeof window!=='undefined'&&window.scrollY>=465,green:typeof window!=='undefined'&&window.scrollY>620}));
  const shell=useRef(null),toggle=useRef(null),trigger=useRef(null),sentinels=useRef([]),closeTimer=useRef(null),activeRef=useRef(null),openMode=useRef(null),restoring=useRef(false);
  const home=pathname==='/',hasMenu=mobile||Boolean(active),solid=!home||passed.white||hasMenu;
  const phase=hasMenu?'white':!solid?'transparent':passed.green?'green':passed.progress?'blend':'white';
  function cancelClose(){if(closeTimer.current!==null){clearTimeout(closeTimer.current);closeTimer.current=null;}}
  function focus(node){if(!node)return;restoring.current=true;node.focus({preventScroll:true});queueMicrotask(()=>{restoring.current=false;});}
  function hidePanel(){cancelClose();activeRef.current=null;openMode.current=null;setActive(null);}
  function close(returnFocus=false){hidePanel();setMobile(false);if(returnFocus===true)focus(mobile?toggle.current:trigger.current);}
  function open(type,node,mode){cancelClose();if(mode==='hover'&&activeRef.current===type&&openMode.current==='click')return;trigger.current=node;activeRef.current=type;openMode.current=mode;setActive(type);}
  function desktopClick(type,event){if(activeRef.current===type&&openMode.current==='click')close();else open(type,event.currentTarget,'click');}
  function desktopKey(type,event){if(event.key!=='ArrowDown')return;event.preventDefault();open(type,event.currentTarget,'keyboard');requestAnimationFrame(()=>shell.current?.querySelector('.nav-mega a')?.focus());}
  function leave(event){if(event.pointerType==='touch'||mobile||openMode.current==='click')return;if(openMode.current==='keyboard'&&shell.current?.contains(document.activeElement))return;cancelClose();closeTimer.current=setTimeout(hidePanel,220);}
  useEffect(()=>{close();},[pathname,hash,search]);
  useEffect(()=>()=>cancelClose(),[]);
  useEffect(()=>{const observer=new IntersectionObserver(entries=>setPassed(previous=>{const next={...previous};for(const entry of entries)next[entry.target.dataset.stage]=entry.boundingClientRect.bottom<=0;return Object.keys(next).some(key=>next[key]!==previous[key])?next:previous;}),{threshold:0});for(const node of sentinels.current)if(node)observer.observe(node);return()=>observer.disconnect();},[]);
  useEffect(()=>{const media=matchMedia('(max-width:1000px)');function reset(){const wasFocused=shell.current?.contains(document.activeElement);close();if(wasFocused)focus(shell.current?.querySelector('.brand'));}media.addEventListener('change',reset);return()=>media.removeEventListener('change',reset);},[]);
  useEffect(()=>{document.dispatchEvent(new CustomEvent('mert-menu-visibility',{detail:hasMenu}));return()=>document.dispatchEvent(new CustomEvent('mert-menu-visibility',{detail:false}));},[hasMenu]);
  useEffect(()=>{
    if(!hasMenu)return;
    function key(event){if(event.key==='Escape'){event.preventDefault();if(mobile&&active){hidePanel();focus(trigger.current);}else close(true);}if(event.key==='Tab'&&mobile){const nodes=[...shell.current.querySelectorAll('a,button')].filter(node=>node.getClientRects().length&&!node.disabled);if(event.shiftKey&&document.activeElement===nodes[0]){event.preventDefault();nodes.at(-1)?.focus();}else if(!event.shiftKey&&document.activeElement===nodes.at(-1)){event.preventDefault();nodes[0]?.focus();}}}
    function outside(event){if(shell.current?.contains(event.target))return;if(event.target.closest('.header-menu-backdrop'))event.preventDefault();close();}
    document.addEventListener('keydown',key);document.addEventListener('pointerdown',outside,true);
    return()=>{document.removeEventListener('keydown',key);document.removeEventListener('pointerdown',outside,true);};
  },[hasMenu,mobile,active]);
  useEffect(()=>{if(!mobile)return;const previous=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=previous;};},[mobile]);
  const current=pathname.startsWith('/hakkinda')?'company':pathname.startsWith('/hizmetler')?'engineering':pathname.startsWith('/projeler')?'applications':null;
  const panel=type=><MegaPanel key={type} type={type} close={close}/>;
  return <>{['white','progress','ink','green'].map((stage,index)=><span key={stage} ref={node=>{sentinels.current[index]=node;}} className={'header-stage-sentinel header-stage-'+stage} data-stage={stage} aria-hidden="true"/>)}
    <div ref={shell} data-nav-phase={phase} className={'header-shell'+(home?' header-shell-home':'')+(solid?' is-solid':'')+(passed.progress?' has-progress':'')+(passed.ink?' has-ink':'')+(passed.green?' is-green':'')+(hasMenu?' has-menu':'')} onPointerEnter={cancelClose} onPointerLeave={leave} onBlur={event=>{if(event.relatedTarget&&!shell.current?.contains(event.relatedTarget)&&!mobile)hidePanel();}}>
      <div className="utility"><div className="wrap"><span>ELEKTRİK · TAAHHÜT · KNX / İZMİR</span><a href="tel:+905558889598">0 555 888 9598 <span>↗</span></a></div></div>
      <header className="site-header"><div className="wrap header-inner"><Brand close={close}/><nav className="desktop-nav" aria-label="Ana menü">{Object.entries(panels).map(([type,data])=><button type="button" key={type} className={current===type?'nav-current':undefined} onPointerEnter={event=>{if(event.pointerType!=='touch')open(type,event.currentTarget,'hover');}} onFocus={event=>{if(!restoring.current&&event.currentTarget.matches(':focus-visible'))open(type,event.currentTarget,'keyboard');}} onKeyDown={event=>desktopKey(type,event)} onClick={event=>desktopClick(type,event)} aria-expanded={active===type} aria-controls="site-mega-menu" aria-haspopup="true">{data.label}<span aria-hidden="true">⌄</span></button>)}<NavLink to="/referanslar" onFocus={hidePanel} onPointerEnter={hidePanel} onClick={()=>close()}>Referanslar</NavLink></nav><Link to="/iletisim" className="header-contact" onClick={()=>close()}>Projenizi konuşalım <Arrow diagonal/></Link><button className="menu-toggle" type="button" ref={toggle} onClick={()=>{if(mobile)close(true);else{hidePanel();setMobile(true);}}} aria-expanded={mobile} aria-controls="mobile-menu" aria-label={mobile?'Menüyü kapat':'Menüyü aç'}><span>{mobile?'KAPAT':'MENÜ'}</span><i className={mobile?'open':''}><b/><b/></i></button></div>
        <div id="mobile-menu" className="mobile-menu" hidden={!mobile}><nav className="mobile-main-links" aria-label="Mobil menü">{Object.entries(panels).map(([type,data],index)=><Fragment key={type}><button type="button" className={current===type?'nav-current':undefined} aria-expanded={active===type} aria-controls="site-mega-menu" onClick={event=>{if(activeRef.current===type)hidePanel();else open(type,event.currentTarget,'click');}}><small>{String(index+1).padStart(2,'0')}</small>{data.label}<span aria-hidden="true">{active===type?'−':'+'}</span></button>{mobile&&active===type&&panel(type)}</Fragment>)}<NavLink to="/referanslar" onClick={()=>close()}><small>04</small>Referanslar<Arrow diagonal/></NavLink><NavLink to="/iletisim" onClick={()=>close()}><small>05</small>İletişim<Arrow diagonal/></NavLink></nav><a className="mobile-phone" href="tel:+905558889598">0 555 888 9598</a></div>
        {!mobile&&active&&panel(active)}
      </header>
    </div>{!home&&<div className="header-space" aria-hidden="true"/>}{hasMenu&&<button className="header-menu-backdrop" type="button" aria-label="Menünün dışına tıklayarak kapat" tabIndex="-1" onClick={()=>close()}/>}
  </>;
}
