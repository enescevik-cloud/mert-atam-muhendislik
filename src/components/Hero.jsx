import { useEffect, useRef, useState } from "react";
import "../styles/components/Hero.css";

import heroVideo from "../assets/hero/hero-video.mp4";
import heroTwo from "../assets/hero/hero-2.jpg";
import heroThree from "../assets/hero/hero-3.jpg";

const slides = [
  {
    id: 1,
    type: "video",
    video: heroVideo,
    title: "Güçlü Enerji\nAltyapıları",
    subtitle: "Modern ve sürdürülebilir mühendislik yaklaşımı.",
    buttonText: "Hizmetlerimiz",
    buttonLink: "/hizmetler",
  },
  {
    id: 2,
    type: "image",
    image: heroTwo,
    title: "Enerjiyi\nGüvenle Tasarlıyoruz",
    subtitle:
      "Elektrik projelendirme ve uygulama süreçlerinde profesyonel çözümler.",
    buttonText: "Hizmetleri İncele",
    buttonLink: "/hizmetler",
  },
  {
    id: 3,
    type: "image",
    image: heroThree,
    title: "Teknik Proje\nMühendisliği",
    subtitle:
      "AG, OG, trafo, keşif, metraj ve AutoCAD teknik çizim hizmetleri.",
    buttonText: "İletişime Geç",
    buttonLink: "/iletisim",
  },
];

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);

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

  /*
   * Yalnızca fotoğraf slaytlarında otomatik geçiş yapar.
   * Video slaytında süre kullanılmaz; video tamamen bitince geçilir.
   */
  useEffect(() => {
    if (activeSlide.type !== "image") {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [activeIndex, activeSlide.type]);

  /*
   * Birinci slayda her dönüldüğünde video baştan başlar.
   * Fotoğraf slaytına geçildiğinde video durdurulur.
   */
  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) {
      return;
    }

    if (activeSlide.type === "video") {
      videoElement.currentTime = 0;

      const playPromise = videoElement.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Tarayıcı otomatik oynatmayı engellerse hata gösterilmez.
        });
      }
    } else {
      videoElement.pause();
    }
  }, [activeIndex, activeSlide.type]);

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
            {slide.type === "video" ? (
              <video
                ref={videoRef}
                className="hero-media"
                autoPlay
                muted
                playsInline
                preload="auto"
                aria-hidden="true"
                onEnded={goNext}
              >
                <source src={slide.video} type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
              </video>
            ) : (
              <img
                className="hero-media"
                src={slide.image}
                alt={slide.title.replace(/\n/g," ")}
              />
            )}
          </div>
        ))}
      </div>

      <div className="hero-dark-layer"></div>

      <div className="hero-content-area">
        <div className="hero-content">
          <h1>
            {activeSlide.title.split("\n").map((line, index) => (
              <span key={`${activeSlide.id}-${index}`}>{line}</span>
            ))}
          </h1>

          <p>{activeSlide.subtitle}</p>

          <a href={activeSlide.buttonLink} className="hero-button">
            {activeSlide.buttonText}
            <span>→</span>
          </a>
        </div>
      </div>

      <button
        type="button"
        className="hero-arrow hero-arrow-left"
        onClick={goPrev}
        aria-label="Önceki slayt"
      >
        ‹
      </button>

      <button
        type="button"
        className="hero-arrow hero-arrow-right"
        onClick={goNext}
        aria-label="Sonraki slayt"
      >
        ›
      </button>

      <div className="hero-dots">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.id}
            className={index === activeIndex ? "hero-dot active" : "hero-dot"}
            onClick={() => goToSlide(index)}
            aria-label={`Hero ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Hero;