import Hero from '../components/Hero.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function ProjectsPage() {
  return (
    <>
      <Hero compact title="Projeler" subtitle="Tamamlanan ve devam eden mühendislik çalışmaları için hazır proje bölümü." />
      <section className="section">
        <SectionTitle title="Proje portfolyosu" text="Fotoğraflar eklendiğinde burası grid proje vitrini olarak kullanılacak." />
        <div className="feature-grid">
          <div className="feature-card"><h3>AG Projeleri</h3><p>Proje görselleri sonradan eklenecek.</p></div>
          <div className="feature-card"><h3>Enerji Sistemleri</h3><p>Saha ve uygulama görselleri sonradan eklenecek.</p></div>
          <div className="feature-card"><h3>Teknik Çizimler</h3><p>AutoCAD ve proje çıktıları sonradan eklenecek.</p></div>
        </div>
      </section>
    </>
  );
}
