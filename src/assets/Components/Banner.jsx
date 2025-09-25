import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Banner() {
  const marqueeRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const text = textRef.current;
    
    if (!marquee || !text) return;

    // Get the width of the text and container
    const textWidth = text.offsetWidth;
    const containerWidth = marquee.offsetWidth;
    
    // Create the animation
    const tl = gsap.timeline({ repeat: -1 });
    
    // Start from halfway across screen, move to completely off the left
    tl.fromTo(text, 
      { x: containerWidth / 2 },
      { 
        x: -textWidth,
        duration: 34,
        ease: "none"
      }
    );

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={marqueeRef}
      className="overflow-hidden  text-slate-800 bg-slate-300 whitespace-nowrap relative w-full "
      style={{ height: '110px' }}
    >
      <h1 
        ref={textRef}
        className="text-5xl font-extrabold py-5 absolute top-1/2 transform -translate-y-1/2  text-transparent bg-clip-text "
      >
        Request confidential mental health support today &nbsp; <span className='mx-3'>•</span> &nbsp; Located in Norfolk, Virginia &nbsp; <span className='mx-3'>•</span> &nbsp; Request confidential mental health support today &nbsp; <span className='mx-3'>•</span> &nbsp; Located in Norfolk, Virginia &nbsp; <span className='mx-3'>•</span> &nbsp;Request confidential mental health support today &nbsp; <span className='mx-3'>•</span> &nbsp; Located in Norfolk, Virginia &nbsp; <span className='mx-3'>•</span> &nbsp; Request confidential mental health support today &nbsp; <span className='mx-3'>•</span> &nbsp; Located in Norfolk, Virginia &nbsp; <span className='mx-3'>•</span> &nbsp;
      </h1>
    </div>
  );
}

export default Banner;