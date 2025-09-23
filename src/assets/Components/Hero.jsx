import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import unit from "../Images/unit.jpg";

function Hero() {
  return (

      <div className="">
         <div className="row ">
          {/* <div className="col-lg-12"> 
            <img src={unit} alt="creek" className="w-100 h-auto" />
          </div> */}
         
         </div>
         <div className="d-flex align-items-center">
        <div className="row ">
          <div className="col-lg-5 p-5">
            <div className="d-flex align-items-start mb-3">         
              <div>         
                <p className="text-4xl  mb-0 font-extrabold">
                  Home of Military Mental Health
                </p>
              </div>
            </div>

            <p className="text-lg text-slate-600 mb-4  ">
              Norfolk’s top-rated military mental health clinic — specializing in
              trauma-informed care, PTSD treatment, VA paperwork support, and confidential clinical
              services for active duty, veterans and families.
            </p>

            <div className="d-flex">
              <a
                href="tel:+17575361233"
                className="btn px-4 py-2 me-3 bg-slate-900 text-white"
                aria-label="Call The Lemich Clinic"
              >
                Call Us
              </a>

              <a
                href="/contact"
                className="btn px-4 py-2 border border-slate-300 text-slate-900"
                aria-label="Contact and location"
              >
                Contact & Location
              </a>
            </div>
          </div>
          <div className="col-lg-5 p-5">
            <img src={unit} alt="creek" className="w-100 h-auto rounded-lg shadow-lg" />
          </div>
          <div className="col-lg-2 p-5 border-l border-l-gray-300">
            <p className="border-b py-2 border-b-gray-300">test</p>
            <p className="border-b py-2 border-b-gray-300">test</p>
            <p className="border-b py-2 border-b-gray-300">test</p>
            <p className="border-b py-2 border-b-gray-300">test</p>
          </div>
        </div>
        </div>
        </div>      
  
  );
}

export default Hero;
