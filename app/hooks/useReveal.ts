import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;
    let raf2: number;

    const check = () => {
      // Check after scroll restoration has settled
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("in-view");
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            observer?.disconnect();
          }
        },
        { threshold: 0.08 }
      );
      observer.observe(el);
    };

    // Double rAF: first frame starts layout, second frame runs after
    // browser scroll restoration is applied
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(check);
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      observer?.disconnect();
    };
  }, []);

  return ref;
}
