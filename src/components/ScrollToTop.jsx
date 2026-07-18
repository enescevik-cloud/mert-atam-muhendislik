import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = decodeURIComponent(
        hash.replace("#", ""),
      );

      const moveToTarget = () => {
        const target =
          document.getElementById(targetId);

        if (!target) {
          return false;
        }

        const navbarOffset = 104;

        const targetTop =
          target.getBoundingClientRect().top +
          window.scrollY -
          navbarOffset;

        window.scrollTo({
          top: Math.max(0, targetTop),
          left: 0,
          behavior: "smooth",
        });

        return true;
      };

      if (moveToTarget()) {
        return undefined;
      }

      const timeoutId = window.setTimeout(
        moveToTarget,
        120,
      );

      return () => {
        window.clearTimeout(timeoutId);
      };
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    const frameId =
      window.requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
