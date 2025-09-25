import React, { useEffect, useRef } from "react";
import { Shield, ArrowRight } from "lucide-react";
import Img from "../Images/new_creek.jpg";

function Insurance() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const moduleRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Simple fade-in animations using CSS transitions
    const animateElement = (element, delay, transform) => {
      if (element) {
        element.style.opacity = '0';
        element.style.transform = transform;
        setTimeout(() => {
          element.style.transition = 'all 0.8s ease-out';
          element.style.opacity = '1';
          element.style.transform = 'translateY(0) translateX(0) scale(1)';
        }, delay);
      }
    };

    animateElement(heroRef.current, 100, 'translateY(20px)');
    animateElement(imageRef.current, 400, 'scale(1.05)');
    animateElement(contentRef.current, 600, 'translateX(30px)');

    // Animate module refs with stagger
    moduleRefs.current.forEach((ref, index) => {
      animateElement(ref, 800 + (index * 100), 'translateY(20px)');
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !moduleRefs.current.includes(el)) {
      moduleRefs.current.push(el);
    }
  };

  const insuranceOptions = [
    {
      icon: 'T',
      title: 'Tricare Prime & Select',
      description: 'No referral required. Provide your benefits number when completing New Client Paperwork.'
    },
    {
      icon: 'VA',
      title: 'Veterans Affairs',
      description: 'A referral is required from the VA prior to scheduling your appointment.'
    },
    {
      icon: 'I',
      title: 'Other Insurance',
      description: 'Veterans with non-Tricare insurance, call our clinic to inquire about in-network benefits.'
    },
    {
      icon: '$',
      title: 'Private Pay',
      description: 'Maximum confidentiality option. Pricing varies by clinician and session length.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Module */}
      <section 
        ref={heroRef}
        className="border-b border-slate-200 py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-4">
            <Shield className="text-slate-700 mr-4 w-8 h-8 md:w-12 md:h-12" />
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 mb-2 tracking-tight leading-tight">
                Payment & Insurance Options
              </h1>
              <p className="text-lg text-slate-600">
                Comprehensive coverage for military families and veterans
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Module */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            
            {/* Image Column */}
            <div className="lg:col-span-5">
              <div 
                ref={imageRef}
                className="relative overflow-hidden rounded-lg aspect-[4/3]"
              >
                <img
                  src={Img}
                  alt="Calm, soothing water representing peace and healing"
                  className="w-full h-full object-cover brightness-95 contrast-105"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7" ref={contentRef}>
              <div className="lg:pl-8">
                
                {/* Active Duty Module */}
                <div 
                  ref={addToRefs}
                  className="mb-12 pb-8 border-b border-slate-200 hover:-translate-y-1 transition-transform duration-300"
                >
                  <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight">
                    Active Duty
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-slate-900 text-white flex items-center justify-center w-8 h-8 rounded mr-4 text-sm font-semibold">
                        T
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-slate-900 mb-2">
                          Tricare Coverage
                        </h3>
                        <p className="text-slate-600 max-w-prose leading-relaxed">
                          Must have an active referral on file for counseling prior to scheduling your appointment.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-slate-900 text-white flex items-center justify-center w-8 h-8 rounded mr-4 text-sm font-semibold">
                        $
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-slate-900 mb-2">
                          Private Pay Options
                        </h3>
                        <p className="text-slate-600 max-w-prose leading-relaxed">
                          Highest level of confidentiality available. Prices vary by clinician and session length.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Veterans Module */}
                <div 
                  ref={addToRefs}
                  className="mb-12 hover:-translate-y-1 transition-transform duration-300"
                >
                  <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight">
                    Veterans & Dependents
                  </h2>
                  
                  <div className="space-y-6">
                    {insuranceOptions.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 bg-slate-900 text-white flex items-center justify-center w-8 h-8 rounded mr-4 text-sm font-semibold">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-slate-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 max-w-prose leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Care Connect Callout Module */}
                <div 
                  ref={addToRefs}
                  className="bg-slate-100 border-l-4 border-slate-700 p-6 rounded-lg mt-12"
                >
                  <div className="flex items-start">
                    <ArrowRight className="text-slate-700 mr-4 mt-1 flex-shrink-0 w-5 h-5" />
                    <div>
                      <h4 className="text-lg font-medium text-slate-900 mb-3">
                        Quick Referral for Active Duty
                      </h4>
                      <p className="text-slate-700 leading-relaxed">
                        Can't see your PCM quickly? Active Duty personnel can visit the Care Connect station at the Behavioral Health Department (Building 3, NMCP) to meet with a Behavioral Health Technician for mental health counseling referrals. Open Monday-Friday, 8:30-10:30 AM. After referral creation, call Tricare to update provider to The Lemich Clinic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Insurance;