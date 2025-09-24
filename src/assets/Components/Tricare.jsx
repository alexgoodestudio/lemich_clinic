import { Link } from "react-router-dom";

function Tricare() {
  return (
    <div className="bg-tricare text-white py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h2 className="tomorrow mb-4">
              TRICARE <span className="light-blue">ACCEPTED</span>
            </h2>
            
            <p className="mb-4">
              <span className="barlow text-xl">Great news! We are in-network with <em>TRICARE</em>.</span>
            </p>
            
            <p className="mb-4">
              Active duty, please have your referral made to{" "}
              <Link to="/contact" className="text-white text-decoration-underline">
                The Lemich Clinic
              </Link>. Dependents and retirees, no referral is needed. Just make an appointment, and we'll take care of the rest.
            </p>
            
            <Link to="/tricare-health-insurance" className="text-white text-decoration-none">
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tricare;
