import React, { useState, useRef } from "react";
import { gsap } from "gsap";

const features = [
  {
    icon: "fa-user-circle",
    title: "Personalized",
    text: "You are matched with a therapist that fits your needs and style. We take the time to get to know you to make the right pairing.",
  },
  {
    icon: "fa-layer-group",
    title: "Varied",
    text: "We have a large variety of clinician specialties to take care of your needs, including trauma, suicidal ideations, major depression, anxiety, anger, OCD, and perinatal concerns.",
  },
  {
    icon: "fa-flag",
    title: "Specialized",
    text: "As most of our clients are on active duty, we specialize in military-specific concerns, including PCS issues, deployments, and transitioning to civilian life.",
  },
  {
    icon: "fa-file-alt",
    title: "Prepared",
    text: "Our owner, Dr. Lemich, is well-versed in military and VA paperwork, assisting with LIMDU, Med Board, VA, and Security Clearance paperwork if medically necessary.",
  },
];

function ServiceCards() {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const textRefs = useRef([]);

  // GSAP hover animations for desktop cards
  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = (index) => {
    setHoverIndex(null);
  };

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="content-module bg-slate-100">
      <div className=" mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="heading-primary mb-4 pt-5 text-5xl">Our Services</h2>
          <p className="body-primary max-w-2xl mx-auto mb-5">
            How we support active duty service members,
            veterans, and their families.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 pb-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-stone-200 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 text-stone-600">
                <i className={`fas ${feature.icon} fa-2x`}></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="body-primary">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Mobile Accordion - Hero Style */}
        <div className="md:hidden pb-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-b border-b-gray-300 py-3 cursor-pointer"
              onClick={() => toggle(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <i className={`fas ${feature.icon} text-slate-600`}></i>
                  <p className="font-semibold mb-0 text-slate-900">{feature.title}</p>
                </div>
                <span className="text-xl text-slate-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* Mobile expand (click) */}
              {openIndex === index && (
                <div className="mt-3 text-gray-600 text-sm pl-8">
                  {feature.text}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCards;