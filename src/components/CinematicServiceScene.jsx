import {
  useMemo,
  useRef,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import "../styles/components/CinematicServiceScene.css";

const titleContainerVariants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.065,
    },
  },
};

const titleLineVariants = {
  hidden: {
    opacity: 0,
    y: "118%",
    rotate: 0.8,
  },

  visible: {
    opacity: 1,
    y: "0%",
    rotate: 0,

    transition: {
      duration: 1.05,
      ease: [
        0.16,
        1,
        0.3,
        1,
      ],
    },
  },
};

function CinematicTitle({
  lines,
  id,
}) {
  return (
    <motion.h2
      id={id}
      className="cinematic-scene-title"
      variants={
        titleContainerVariants
      }
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.48,
      }}
    >
      {lines.map(
        (
          line,
          lineIndex,
        ) => (
          <span
            className="cinematic-scene-title-mask"
            key={`${line}-${lineIndex}`}
          >
            <motion.span
              className="cinematic-scene-title-line"
              variants={
                titleLineVariants
              }
            >
              {line}
            </motion.span>
          </span>
        ),
      )}
    </motion.h2>
  );
}

function TechnicalSurface({
  mode,
}) {
  const surfaceWord =
    mode === "editorial-light"
      ? "UYGULAMA"
      : "MÜHENDİSLİK";

  return (
    <div
      className={`cinematic-surface cinematic-surface--${mode}`}
      aria-hidden="true"
    >
      <div className="cinematic-surface-noise" />

      <div className="cinematic-surface-grid" />

      <div className="cinematic-surface-glow cinematic-surface-glow--one" />

      <div className="cinematic-surface-glow cinematic-surface-glow--two" />

      <div className="cinematic-surface-arc cinematic-surface-arc--one" />

      <div className="cinematic-surface-arc cinematic-surface-arc--two" />

      <div className="cinematic-surface-line cinematic-surface-line--one" />

      <div className="cinematic-surface-line cinematic-surface-line--two" />

      <div className="cinematic-surface-line cinematic-surface-line--three" />

      <div className="cinematic-surface-node cinematic-surface-node--one" />

      <div className="cinematic-surface-node cinematic-surface-node--two" />

      <div className="cinematic-surface-node cinematic-surface-node--three" />

      <div className="cinematic-surface-node cinematic-surface-node--four" />

      <div className="cinematic-surface-panel cinematic-surface-panel--one" />

      <div className="cinematic-surface-panel cinematic-surface-panel--two" />

      <div className="cinematic-surface-scan" />

      <span className="cinematic-surface-word">
        {surfaceWord}
      </span>
    </div>
  );
}

function CinematicServiceScene({
  service,
  index = 0,
}) {
  const sceneRef =
    useRef(null);

  const reduceMotion =
    useReducedMotion();

  const visualMode =
    service.homeVisual ||
    "image";

  const isImageScene =
    visualMode === "image";

  const sceneImage =
    isImageScene
      ? service.homeHero ||
        service.hero
      : null;

  const titleLines =
    useMemo(
      () => {
        if (
          Array.isArray(
            service.homeTitleLines,
          ) &&
          service.homeTitleLines
            .length > 0
        ) {
          return service.homeTitleLines;
        }

        return [
          service.title,
        ];
      },
      [
        service.homeTitleLines,
        service.title,
      ],
    );

  const {
    scrollYProgress,
  } = useScroll({
    target: sceneRef,

    offset: [
      "start end",
      "end start",
    ],
  });

  const imageYRaw =
    useTransform(
      scrollYProgress,
      [
        0,
        0.5,
        1,
      ],
      [
        "-5%",
        "0%",
        "5%",
      ],
    );

  const imageScaleRaw =
    useTransform(
      scrollYProgress,
      [
        0,
        0.5,
        1,
      ],
      [
        1.12,
        1.025,
        1.12,
      ],
    );

  const contentYRaw =
    useTransform(
      scrollYProgress,
      [
        0,
        0.28,
        0.72,
        1,
      ],
      [
        105,
        0,
        0,
        -90,
      ],
    );

  const contentOpacityRaw =
    useTransform(
      scrollYProgress,
      [
        0.07,
        0.25,
        0.75,
        0.93,
      ],
      [
        0,
        1,
        1,
        0,
      ],
    );

  const metaXRaw =
    useTransform(
      scrollYProgress,
      [
        0.1,
        0.5,
        0.9,
      ],
      [
        30,
        0,
        -24,
      ],
    );

  const surfaceYRaw =
    useTransform(
      scrollYProgress,
      [
        0,
        0.5,
        1,
      ],
      [
        48,
        0,
        -42,
      ],
    );

  const imageY =
    useSpring(
      imageYRaw,
      {
        stiffness: 82,
        damping: 27,
        mass: 0.42,
      },
    );

  const imageScale =
    useSpring(
      imageScaleRaw,
      {
        stiffness: 72,
        damping: 26,
        mass: 0.45,
      },
    );

  const contentY =
    useSpring(
      contentYRaw,
      {
        stiffness: 90,
        damping: 27,
        mass: 0.38,
      },
    );

  const contentOpacity =
    useSpring(
      contentOpacityRaw,
      {
        stiffness: 105,
        damping: 29,
        mass: 0.3,
      },
    );

  const metaX =
    useSpring(
      metaXRaw,
      {
        stiffness: 88,
        damping: 28,
        mass: 0.36,
      },
    );

  const surfaceY =
    useSpring(
      surfaceYRaw,
      {
        stiffness: 78,
        damping: 28,
        mass: 0.42,
      },
    );

  const titleId =
    `home-service-title-${service.slug}`;

  const serviceNumber =
    service.number ||
    String(
      index + 1,
    ).padStart(
      2,
      "0",
    );

  return (
    <section
      ref={sceneRef}
      className="cinematic-scene"
      data-visual={
        visualMode
      }
      data-align={
        service.homeAlign ||
        "left"
      }
      aria-labelledby={
        titleId
      }
    >
      <div className="cinematic-scene-sticky">
        <div className="cinematic-scene-media">
          {sceneImage ? (
            <motion.div
              className="cinematic-scene-image-layer"
              style={
                reduceMotion
                  ? undefined
                  : {
                      y:
                        imageY,

                      scale:
                        imageScale,
                    }
              }
            >
              <img
                src={
                  sceneImage
                }
                alt={`${service.title} — MERT ATAM MÜHENDİSLİK`}
                loading={
                  index === 0
                    ? "eager"
                    : "lazy"
                }
                decoding="async"
                fetchPriority={
                  index === 0
                    ? "high"
                    : "auto"
                }
                style={{
                  objectPosition:
                    service.homeFocalPoint ||
                    "center center",
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              className="cinematic-scene-surface-layer"
              style={
                reduceMotion
                  ? undefined
                  : {
                      y:
                        surfaceY,
                    }
              }
            >
              <TechnicalSurface
                mode={
                  visualMode
                }
              />
            </motion.div>
          )}

          <div className="cinematic-scene-overlay" />

          <div className="cinematic-scene-vignette" />

          <div className="cinematic-scene-film-grain" />
        </div>

        <div className="cinematic-scene-frame">
          <motion.header
            className="cinematic-scene-meta"
            style={
              reduceMotion
                ? undefined
                : {
                    x:
                      metaX,
                  }
            }
          >
            <span className="cinematic-scene-number">
              {
                serviceNumber
              }
            </span>

            <span className="cinematic-scene-meta-rule" />

            <span className="cinematic-scene-eyebrow">
              {
                service.eyebrow
              }
            </span>
          </motion.header>

          <motion.div
            className="cinematic-scene-copy"
            style={
              reduceMotion
                ? undefined
                : {
                    y:
                      contentY,

                    opacity:
                      contentOpacity,
                  }
            }
          >
            <span className="cinematic-scene-kicker">
              {
                service.eyebrow
              }
            </span>

            <CinematicTitle
              lines={
                titleLines
              }
              id={
                titleId
              }
            />

            <motion.p
              className="cinematic-scene-statement"
              initial={{
                opacity: 0,
                y: 28,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.5,
              }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
            >
              {
                service.statement
              }
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.5,
              }}
              transition={{
                duration: 0.85,
                delay: 0.42,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
            >
              <Link
                to={`/hizmetler/${service.slug}`}
                className="cinematic-scene-link"
              >
                <span>
                  Hizmeti keşfedin
                </span>

                <i aria-hidden="true">
                  ↗
                </i>
              </Link>
            </motion.div>
          </motion.div>

          <footer className="cinematic-scene-footer">
            <span>
              İzmir
            </span>

            <span className="cinematic-scene-footer-rule" />

            <span>
              MERT ATAM MÜHENDİSLİK
            </span>
          </footer>
        </div>

        <div
          className="cinematic-scene-progress-mark"
          aria-hidden="true"
        >
          <motion.span
            style={{
              scaleY:
                scrollYProgress,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default CinematicServiceScene;