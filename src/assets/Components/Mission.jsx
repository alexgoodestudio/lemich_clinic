import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Mission() {
  const containerRef = useRef(null);
  const missionRef = useRef(null);
  const textRef = useRef(null);
  const accentRef = useRef(null);
  const statsRefs = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate "MISSION" text in
    tl.fromTo(missionRef.current, 
      { 
        y: 50, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        ease: "power2.out"
      }
    );

    // Animate paragraph text with slight delay
    tl.fromTo(textRef.current,
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      },
      "-=0.4"
    );

    // Animate accent line
    tl.fromTo(accentRef.current,
      {
        width: "0%"
      },
      {
        width: "100%",
        duration: 0.8,
        ease: "power2.out"
      },
      "-=0.2"
    );

    // Animate statistics counters
    const statsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".mission-stats-grid",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Counter animations for each statistic
    statsTimeline
      .to(statsRefs.current[0], {
        textContent: 15,
        duration: 2,
        snap: { textContent: 1 },
        ease: "power2.out"
      })
      .to(statsRefs.current[1], {
        textContent: "100%",
        duration: 2,
        ease: "power2.out",
        onUpdate: function() {
          const progress = this.progress();
          const value = Math.round(progress * 100);
          this.targets()[0].textContent = value + "%";
        }
      }, "-=1.5")
      .to(statsRefs.current[2], {
        textContent: "500+",
        duration: 2,
        ease: "power2.out",
        onUpdate: function() {
          const progress = this.progress();
          const value = Math.round(progress * 500);
          this.targets()[0].textContent = value + "+";
        }
      }, "-=1.5")
      .to(statsRefs.current[3], {
        textContent: "24/7",
        duration: 2,
        ease: "power2.out",
        onUpdate: function() {
          const progress = this.progress();
          if (progress < 0.5) {
            const hours = Math.round(progress * 48);
            this.targets()[0].textContent = hours + "/7";
          } else {
            this.targets()[0].textContent = "24/7";
          }
        }
      }, "-=1.5");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-5">
      <div className="container">
        {/* Bento-style grid layout */}
        <div className="row g-0">
          
          {/* Left column - Mission statement header */}
          <div className="col-lg-5 pe-lg-5 mb-4 mb-lg-0">
            <div className="position-relative">
              <div 
                ref={missionRef}
                className="text-8xl text-slate-900 font-bold leading-none"
                style={{ fontFamily: 'var(--font-barlow)' }}
              >
                OUR
                <br />
                MISSION
              </div>
              
              {/* Accent line */}
              <div 
                ref={accentRef}
                className="mission-accent-line bg-emerald-500 mt-3"
              ></div>
            </div>
          </div>

          {/* Right column - Mission text */}
          <div className="col-lg-7 ps-lg-4">
            <div className="mission-text-container">
              <p 
                ref={textRef}
                className="text-lg text-slate-600 leading-relaxed mb-0"
              >
                The Lemich Clinic for Military Mental Health was founded on
                the belief that everyone who serves should have access to
                high-quality, confidential mental health care. The majority
                of our clients are active duty sailors at Naval Station
                Norfolk. We also see service members from the other military
                installations in Virginia. We also work with military
                spouses and recent veterans. If you are a first responder or
                outside the military, contact us to see if you qualify for
                our program.
              </p>
            </div>
          </div>

        </div>


        {/* Statistics section with counter animations */}
        <div className="row mt-5 pt-4">
          <div className="col-12">
            <div className="mission-stats-grid d-flex justify-content-between align-items-center flex-wrap gap-4">
              <div className="mission-stat-item text-center">
                <div 
                  ref={el => statsRefs.current[0] = el}
                  className="text-3xl font-bold text-slate-900"
                >
                  0
                </div>
                <div className="text-sm text-slate-500 mt-1">Years of Service</div>
              </div>
              <div className="mission-stat-item text-center">
                <div 
                  ref={el => statsRefs.current[1] = el}
                  className="text-3xl font-bold text-slate-900"
                >
                  0%
                </div>
                <div className="text-sm text-slate-500 mt-1">TRICARE Coverage</div>
              </div>
              <div className="mission-stat-item text-center">
                <div 
                  ref={el => statsRefs.current[2] = el}
                  className="text-3xl font-bold text-slate-900"
                >
                  0+
                </div>
                <div className="text-sm text-slate-500 mt-1">Service Members Helped</div>
              </div>
              <div className="mission-stat-item text-center">
                <div 
                  ref={el => statsRefs.current[3] = el}
                  className="text-3xl font-bold text-slate-900"
                >
                  0/7
                </div>
                <div className="text-sm text-slate-500 mt-1">Days Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;