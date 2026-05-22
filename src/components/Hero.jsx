import { useEffect, useState } from "react";
import "../styles/components/Hero.css";

import heroMain from "../assets/hero/hero-main.jpg";
import heroTwo from "../assets/hero/hero-2.jpg";
import heroThree from "../assets/hero/hero-3.jpg";

const slides = [
  {
    id: 1,
    image: heroMain,
    title: "Güçlü Enerji\nAltyapıları",
    subtitle: "Modern ve sürdürülebilir mühendislik yaklaşımı.",
    buttonText: "Projeleri İncele",
    buttonLink: "/projeler",
  },
  {
    id: 2,
    image: heroTwo,
    title: "Enerjiyi\nGüvenle Tasarlıyoruz",
    subtitle: "Elektrik projelendirme ve uygulama süreçlerinde profesyonel çözümler.",
    buttonText: "Hizmetleri İncele",
    buttonLink: "/hizmetler",
  },
  {
    id: 3,
    image: heroThree,
    title: "Teknik Proje\nMühendisliği",
    subtitle: "AG, OG, trafo, keşif, metraj ve AutoCAD teknik çizim hizmetleri.",
    buttonText: "İletişime Geç",
    buttonLink: "/iletisim",
  },
];

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = slides[activeIndex];

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider">
      <div className="hero-backgrounds">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={
              index === activeIndex
                ? "hero-background active"
                : "hero-background"
            }
          >
            <img src={slide.image} alt={slide.title} />
          </div>
        ))}
      </div>

      <div className="hero-dark-layer"></div>

      <div className="hero-content-area">
        <div className="hero-content">
          <h1>
            {activeSlide.title.split("\n").map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>

          <p>{activeSlide.subtitle}</p>

          <a href={activeSlide.buttonLink} className="hero-button">
            {activeSlide.buttonText}
            <span>→</span>
          </a>
        </div>
      </div>

      <button className="hero-arrow hero-arrow-left" onClick={goPrev}>
        ‹
      </button>

      <button className="hero-arrow hero-arrow-right" onClick={goNext}>
        ›
      </button>

      <div className="hero-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={index === activeIndex ? "hero-dot active" : "hero-dot"}
            onClick={() => goToSlide(index)}
            aria-label={`Hero ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Hero;