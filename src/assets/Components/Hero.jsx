import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { gsap } from "gsap";
import unit from "../Images/unit.jpg";
import ship from "../Images/ship.jpg";

function Hero() {
  const imageContainerRef = useRef(null);
  const slideImageRef = useRef(null);
  const baseImageRef = useRef(null);
  const currentImageRef = useRef(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const services = [
    {
      title: "PTSD Treatment",
      text: "Evidence-based therapy tailored for service members living with trauma symptoms, flashbacks, and hypervigilance.",
    },
    {
      title: "Trauma Therapy",
      text: "Specialized treatment for combat stress, military sexual trauma, and critical incident experiences.",
    },
    {
      title: "Family Counseling",
      text: "Support for spouses and children to strengthen relationships impacted by deployments and transitions.",
    },
    {
      title: "Military Transitions",
      text: "Guidance and therapy for navigating PCS moves, deployments, and the transition to civilian life.",
    },
    {
      title: "VA Paperwork",
      text: "Assistance with mental health documentation for LIMDU, Med Board, VA claims, and security clearance cases.",
    },
  ];

  useEffect(() => {
    const slideAnimation = () => {
      const slideImg = slideImageRef.current;
      const baseImg = baseImageRef.current;
      if (!slideImg || !baseImg) return;

      const nextImage = currentImageRef.current === 0 ? ship : unit;
      slideImg.src = nextImage;

      const tl = gsap.timeline({
        onComplete: () => {
          baseImg.src = nextImage;
          gsap.set(slideImg, { opacity: 0 });
          currentImageRef.current = currentImageRef.current === 0 ? 1 : 0;
        },
      });

      tl.set(slideImg, { x: "100%", opacity: 1 }).to(slideImg, {
        x: "0%",
        duration: 1,
        ease: "power2.inOut",
      });
    };

    const interval = setInterval(slideAnimation, 6000);
    return () => clearInterval(interval);
  }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
      <div className="row "></div>
      <div className="d-flex align-items-center">
        <div className="row ">
          <div className="col-lg-5 p-5">
            <div className="d-flex align-items-start mb-3">
              <div>
                <p className="text-4xl mb-0 font-extrabold">
                  Home of Military Mental Health
                </p>
              </div>
            </div>

            <p className="text-lg text-slate-600 mb-4">
              Dedicated to the Mental Health of Norfolk, Virginia's Military
              Community — specializing in trauma-informed care, PTSD treatment,
              VA paperwork support, and confidential clinical services for
              active duty, veterans and families.
            </p>

            <div className="d-flex">
              <a
                href="tel:+17575361233"
                className="btn btn-dark rounded px-4 py-2 me-3"
                aria-label="Call The Lemich Clinic"
              >
                Call Us
              </a>
              <a
                href="/contact"
                className="btn btn-outline-secondary rounded px-4 py-2"
                aria-label="Contact and location"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="col-lg-5 p-5">
            <div
              ref={imageContainerRef}
              className="position-relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                ref={baseImageRef}
                src={unit}
                alt="creek"
                className="base-image w-100 h-auto"
              />

              <img
                ref={slideImageRef}
                src={ship}
                alt="creek"
                className="w-100 h-auto position-absolute top-0 start-0"
                style={{
                  opacity: 0,
                  transform: "translateX(100%)",
                  zIndex: 2,
                }}
              />
            </div>
          </div>

          <div className="col-lg-2 p-5 border-l border-l-gray-300">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-b border-b-gray-300 py-3 cursor-pointer group"
                onClick={() => toggle(index)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div className="flex justify-between items-center">
                  <p className="font-semibold mb-0">{service.title}</p>
                  <span className="text-xl">
                    {hoverIndex === index || openIndex === index ? "−" : "+"}
                  </span>
                </div>

                {/* Mobile expand (click) */}
                <div className="md:hidden">
                  {openIndex === index && (
                    <div className="mt-2 text-gray-600 text-sm">
                      {service.text}
                    </div>
                  )}
                </div>

                {/* Desktop expand (hover only) */}
                <div className="hidden md:block max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300 ease-in-out text-gray-600 text-sm mt-2">
                  {service.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
