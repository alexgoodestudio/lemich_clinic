import React, { useState } from "react";

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
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

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

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-stone-200 overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full p-4 bg-stone-50 hover:bg-stone-100 transition"
              >
                <span className="flex items-center gap-3 text-lg font-medium text-slate-900">
                  <i className={`fas ${feature.icon}`}></i>
                  {feature.title}
                </span>
                <span className="text-xl font-bold text-slate-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white text-gray-700 text-sm">
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
