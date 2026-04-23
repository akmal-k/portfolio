import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;
    let shown = false;

    const show = () => {
      if (shown) return;
      shown = true;
      el.classList.add("in-view");
      observer?.disconnect();
    };

    const check = () => {
      const rect = el.getBoundingClientRect();
      // Show if in viewport OR already scrolled past (above viewport)
      if (rect.top < window.innerHeight) {
        show();
        return;
      }
      // Element is below viewport — watch with IntersectionObserver
      observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) show(); },
        { threshold: 0.08 }
      );
      observer.observe(el);
    };

    // Wait for browser scroll restoration to settle before checking
    const timer = setTimeout(check, 120);

    // Hard fallback — show everything after 1.5s regardless
    const fallback = setTimeout(show, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallback);
      observer?.disconnect();
    };
  }, []);

  return ref;
}
