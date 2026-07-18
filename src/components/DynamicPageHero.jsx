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

import "../styles/components/DynamicPageHero.css";

const titleContainerVariants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.075,
    },
  },
};

const titleLineVariants = {
  hidden: {
    opacity: 0,
    y: "118%",
  },

  visible: {
    opacity: 1,
    y: "0%",

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

function DynamicPageHero({
  eyebrow,
  title,
  titleLines,
  description,
  image,
  imageAlt,
  index = "01",
  footerLeft = "İzmir",
  footerRight = "MERT ATAM MÜHENDİSLİK",
  cta,
  objectPosition = "center center",
}) {
  const heroRef =
    useRef(null);

  const reduceMotion =
    useReducedMotion();

  const lines =
    useMemo(
      () => {
        if (
          Array.isArray(
            titleLines,
          ) &&
          titleLines.length > 0
        ) {
          return titleLines;
        }

        return [
          title,
        ].filter(Boolean);
      },
      [
        title,
        titleLines,
      ],
    );

  const {
    scrollYProgress,
  } = useScroll({
    target: heroRef,

    offset: [
      "start start",
      "end start",
    ],
  });

  const imageYRaw =
    useTransform(
      scrollYProgress,
      [
        0,
        1,
      ],
      [
        0,
        135,
      ],
    );

  const imageScaleRaw =
    useTransform(
      scrollYProgress,
      [
        0,
        1,
      ],
      [
        1.04,
        1.14,
      ],
    );

  const contentYRaw =
    useTransform(
      scrollYProgress,
      [
        0,
        1,
      ],
      [
        0,
        -92,
      ],
    );

  const contentOpacityRaw =
    useTransform(
      scrollYProgress,
      [
        0,
        0.76,
      ],
      [
        1,
        0,
      ],
    );

  const metaXRaw =
    useTransform(
      scrollYProgress,
      [
        0,
        1,
      ],
      [
        0,
        24,
      ],
    );

  const imageY =
    useSpring(
      imageYRaw,
      {
        stiffness: 82,
        damping: 27,
        mass: 0.4,
      },
    );

  const imageScale =
    useSpring(
      imageScaleRaw,
      {
        stiffness: 74,
        damping: 26,
        mass: 0.42,
      },
    );

  const contentY =
    useSpring(
      contentYRaw,
      {
        stiffness: 88,
        damping: 27,
        mass: 0.37,
      },
    );

  const contentOpacity =
    useSpring(
      contentOpacityRaw,
      {
        stiffness: 100,
        damping: 29,
        mass: 0.3,
      },
    );

  const metaX =
    useSpring(
      metaXRaw,
      {
        stiffness: 82,
        damping: 27,
        mass: 0.36,
      },
    );

  return (
    <section
      ref={heroRef}
      className="dynamic-page-hero"
      aria-labelledby="dynamic-page-hero-title"
    >
      <motion.div
        className="dynamic-page-hero-image"
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
          src={image}
          alt={
            imageAlt ||
            title ||
            eyebrow
          }
          style={{
            objectPosition,
          }}
          fetchPriority="high"
          decoding="async"
        />
      </motion.div>

      <div className="dynamic-page-hero-overlay" />

      <div className="dynamic-page-hero-vignette" />

      <div className="dynamic-page-hero-grain" />

      <motion.div
        className="dynamic-page-hero-frame"
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
        <motion.header
          className="dynamic-page-hero-meta"
          style={
            reduceMotion
              ? undefined
              : {
                  x:
                    metaX,
                }
          }
        >
          <span className="dynamic-page-hero-index">
            {index}
          </span>

          <span className="dynamic-page-hero-meta-rule" />

          <strong>
            {eyebrow}
          </strong>
        </motion.header>

        <div className="dynamic-page-hero-copy">
          <motion.span
            className="dynamic-page-hero-kicker"
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}
          >
            {eyebrow}
          </motion.span>

          <motion.h1
            id="dynamic-page-hero-title"
            variants={
              titleContainerVariants
            }
            initial="hidden"
            animate="visible"
          >
            {lines.map(
              (
                line,
                lineIndex,
              ) => (
                <span
                  className="dynamic-page-hero-line-mask"
                  key={`${line}-${lineIndex}`}
                >
                  <motion.span
                    className="dynamic-page-hero-line"
                    variants={
                      titleLineVariants
                    }
                  >
                    {line}
                  </motion.span>
                </span>
              ),
            )}
          </motion.h1>

          {description && (
            <motion.p
              initial={{
                opacity: 0,
                y: 28,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.32,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
            >
              {description}
            </motion.p>
          )}

          {cta && (
            <motion.div
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.85,
                delay: 0.45,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
            >
              <Link
                to={cta.to}
                className="dynamic-page-hero-link"
              >
                <span>
                  {cta.label}
                </span>

                <i aria-hidden="true">
                  ↗
                </i>
              </Link>
            </motion.div>
          )}
        </div>

        <footer className="dynamic-page-hero-footer">
          <span>
            {footerLeft}
          </span>

          <span className="dynamic-page-hero-footer-rule" />

          <span>
            {footerRight}
          </span>
        </footer>
      </motion.div>

      <div
        className="dynamic-page-hero-scroll-mark"
        aria-hidden="true"
      >
        <span />

        <small>
          Kaydır
        </small>
      </div>
    </section>
  );
}

export default DynamicPageHero;