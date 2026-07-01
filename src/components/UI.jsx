import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

/* ============================================================
   REUSABLE UI COMPONENTS
   ============================================================ */
export function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) { 
          setShown(true); 
          gsap.fromTo(el, 
            { opacity: 0, y: 40 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.8, 
              delay: delay / 1000,
              ease: "power3.out"
            }
          );
          obs.disconnect(); 
        } 
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className={className}>{children}</div>;
}

export function SectionTag({ children }) {
  return <div className="section-tag">{children}</div>;
}
