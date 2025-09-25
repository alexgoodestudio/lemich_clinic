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
    <div className="container mx-auto p-4">
      {/* Desktop / Full Screen Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg hover:shadow-lg transition service-hover"
          >
            <div className="mb-4">
              <i className={`fas ${feature.icon} text-gray-600 fa-2x`}></i>
            </div>
            <h2 className="text-gray-800 text-lg font-semibold mb-2 barlow">
              {feature.title}
            </h2>
            <p className="text-gray-600 text-sm">{feature.text}</p>
          </div>
        ))}
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full p-4 bg-gray-100 hover:bg-gray-200 transition"
            >
              <span className="flex items-center gap-2 text-lg font-medium">
                <i className={`fas ${feature.icon}`}></i> {feature.title}
              </span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-700 text-sm">{feature.text}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCards;
