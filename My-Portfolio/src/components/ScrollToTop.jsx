import React, { useEffect, useState, useRef } from "react";
import { FaChevronUp } from "react-icons/fa";
import "../styles/ScrollToTop.css";

/* Find the element that actually scrolls (window or a container) */
function findScroller() {
  const candidates = [
    document.scrollingElement,
    document.documentElement,
    document.body,
    document.getElementById("root"),
    document.querySelector(".app"),
  ].filter(Boolean);

  for (const el of candidates) {
    if (el.scrollHeight > el.clientHeight) return el;
  }
  return window;
}

/* Easing */
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/* Force animated scroll (always animates; ignores reduced-motion) */
function animatedScrollToTop(target, duration = 700) {
  const isWindow = target === window;
  const start = isWindow
    ? window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    : target.scrollTop;

  if (start <= 0) return;

  const startTime = performance.now();
  let rafId;

  const step = (now) => {
    const elapsed = now - startTime;
    const t = Math.min(1, elapsed / duration);
    const eased = easeInOutCubic(t);
    const next = Math.round(start * (1 - eased));

    if (isWindow) window.scrollTo(0, next);
    else target.scrollTop = next;

    if (t < 1) rafId = requestAnimationFrame(step);
  };

  // Cancel animation if user interacts
  const cancel = () => rafId && cancelAnimationFrame(rafId);
  window.addEventListener("wheel", cancel, { passive: true, once: true });
  window.addEventListener("touchstart", cancel, { passive: true, once: true });
  window.addEventListener("keydown", cancel, { passive: true, once: true });

  rafId = requestAnimationFrame(step);
}

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const hero = document.getElementById("home");

    if (hero && "IntersectionObserver" in window) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => setVisible(!entry.isIntersecting),
        { root: null, threshold: 0.05, rootMargin: "0px 0px -20% 0px" }
      );
      observerRef.current.observe(hero);
      return () => observerRef.current?.disconnect();
    }

    // Fallback if #home not found
    const onScroll = () => {
      const scroller =
        document.scrollingElement || document.documentElement || document.body;
      setVisible((scroller?.scrollTop || 0) > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); // avoid any parent anchors or handlers
    const scroller = findScroller();
    animatedScrollToTop(scroller, 800); // adjust duration if desired
  };

  return (
    <button
      type="button"
      className={`scroll-top-btn ${visible ? "visible" : ""}`}
      onClick={onClick}
      aria-label="Scroll to top"
    >
      <FaChevronUp />
    </button>
  );
}
