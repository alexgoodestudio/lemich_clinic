import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

function Banner() {
  const marqueeRef = useRef(null);
  const textRef = useRef(null);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    const text = textRef.current;
    if (!text) return;

    const textWidth = text.offsetWidth;
    const containerWidth = marqueeRef.current.offsetWidth;

    if (prefersReducedMotion) {
      gsap.set(text, { x: 0 });
      return;
    }

    gsap.fromTo(text,
      { x: containerWidth / 2 },
      { 
        x: -textWidth,
        duration: 34,
        ease: 'none',
        repeat: -1
      }
    );
  }, { scope: marqueeRef });

  return (
    <div 
      ref={marqueeRef}
      className="overflow-hidden bg-slate-300 whitespace-nowrap relative w-full marquee-container"
      role="marquee"
      aria-live="off"
    >
      <h2 
        ref={textRef}
        className="text-5xl font-extrabold text-slate-800 marquee-text"
      >
        Request confidential mental health support today <span className="mx-3" aria-hidden="true">•</span> Located in Norfolk, Virginia <span className="mx-3" aria-hidden="true">•</span> Request confidential mental health support today <span className="mx-3" aria-hidden="true">•</span> Located in Norfolk, Virginia <span className="mx-3" aria-hidden="true">•</span> Request confidential mental health support today <span className="mx-3" aria-hidden="true">•</span> Located in Norfolk, Virginia <span className="mx-3" aria-hidden="true">•</span> Request confidential mental health support today <span className="mx-3" aria-hidden="true">•</span> Located in Norfolk, Virginia <span className="mx-3" aria-hidden="true">•</span>
      </h2>
    </div>
  );
}

export default Banner;