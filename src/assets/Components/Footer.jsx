

function Footer() {
  return (
    <footer className="bg-slate-200 px-6 pt-12 pb-8 text-center md:text-left">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl">
        <div className="flex flex-col space-y-3 md:pr-6 text-start">
       
        </div>
        <div className="flex flex-col space-y-3 text-start">
          <h4 className="font-semibold text-xl text-gray-800">Services</h4>
          <a href="/exclusive-services-norfolk" className="footer-link">Our Services</a>
          <a href="/tricare-health-insurance" className="footer-link">Insurance</a>
          <a href="/contact" className="footer-link">Schedule an Appointment</a>
        </div>
        <div className="flex flex-col space-y-3 text-start">
          <h4 className="font-semibold text-xl text-gray-800">About</h4>
          <a href="/team-norfolk" className="footer-link">Our Team</a>
          <a href="/owners-norfolk" className="footer-link">Clinic Owners</a>
          <a 
            href="https://www.psychologytoday.com/us/therapists/the-lemich-clinic-for-military-mental-health-norfolk-va/755325" 
            className="footer-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Psychology Today 
          </a>
          <a 
            href="https://www.facebook.com/p/The-Lemich-Clinic-For-Military-Mental-Health-100086257112340/" 
            className="footer-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
        <div className="flex flex-col space-y-3 text-start">
          <h4 className="font-semibold text-xl text-gray-800">Support</h4>
          <a href="/contact" className="footer-link">Contact Us</a>
          <a href="tel:17575361233" className="footer-link">(757) 536-1233</a>
          <a href="mailto:info@lemichclinic.org" className="footer-link">info@lemichclinic.org</a>
        </div>
      </div>
      <div className="text-sm text-gray-600 mt-10 border-t pt-4 text-center">
        © {new Date().getFullYear()} The Lemich Clinic <span className="mx-1">•</span> Norfolk, Virginia
      </div>
    </footer>
  );
}

export default Footer;
