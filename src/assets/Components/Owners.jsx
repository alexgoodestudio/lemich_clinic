import img4 from "../Images/owners-min.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Helmet } from "react-helmet";

function Owners() {
  const logoRef = useRef(null); // Reference for the logo

  useEffect(() => {
    window.scrollTo(0, 0);

    // Ensure the animation runs only after the component is mounted
    gsap.fromTo(
      logoRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="bg-white ">
      <Helmet>
        <meta
          name="description"
          content="Meet the founders of The Lemich Clinic: Gregory and Jennifer Lemich, experts in mental health services for veterans and military personnel in Norfolk, VA."
        />
        <title>Meet The Owners | The Lemich Clinic | Norfolk, VA</title>
      </Helmet>

      <div className="row d-flex justify-content-center align-items-center">
  
      
        <div className="col-lg-4 text-center p-lg-0">
          <img
            ref={logoRef}
            src={img4}
            alt="Gregory and Jennifer Lemich"
            className="p-lg-5 p-0"
          />
        </div>

        <div className="col-lg-7 px-lg-5 px-4">
      
          <div className="p-lg-5 p-1">
            <h1 className=" text-start text-gray-800">
              Meet The Owners
            </h1>
            <div className="text-center">
              <p className=" text-gray-600 text-justify mt-3 mb-4">
                The Lemich Clinic was founded by Gregory and Jennifer Lemich.
                Jennifer is a 22-year US Navy retiree and current Navy employee.
                Gregory holds a PhD in Counselor Education and Supervision, and is
                an adjunct professor at Old Dominion University. Together, they
                have been happily married for 9 years and live in Norfolk,
                Virginia, with their French Bulldog and two cats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Owners;
