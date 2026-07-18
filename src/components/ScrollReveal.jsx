import { useEffect, useRef, useState } from "react";
import "../styles/components/ScrollReveal.css";

function ScrollReveal({
  as = "div",
  children,
  className = "",
  variant = "up",
  delay = 0,
  threshold = 0.16,
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      {
        threshold,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const Component = as;

  return (
    <Component
      ref={elementRef}
      className={[
        "scroll-reveal",
        `scroll-reveal--${variant}`,
        isVisible ? "is-visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        "--scroll-reveal-delay": `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
}

export default ScrollReveal;