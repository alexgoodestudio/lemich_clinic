

function ServiceCards() {
  return (
    <div className="container mb-5">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-center">
        {[
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
        ].map((feature, index) => (
          <div
            key={index}
            className="p-lg-3 p-2 service-hover border rounded mb-lg-0"
          >
            <div className="mb-4 mt-lg-5 mt-4">
              <i className={`fas ${feature.icon} text-gray-600 fa-2x`}></i>
            </div>
            <h2 className="spaced-underline-card-header card-header text-gray-800 barlow text-md md:text-xl mb-3">
              {feature.title}
            </h2>
            <p className="text-gray-600 card-text mb-lg-5 mb-2">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCards;
