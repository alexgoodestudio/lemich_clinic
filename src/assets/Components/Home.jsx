import Hero from "./Hero";
import HeroBottomBanner from "./HeroBottomBanner";
import Banner from "./Banner";
import Mission from "./Mission";
import ServiceCards from "./ServiceCards";
import Tricare from "./Tricare";
import Footer from "./Footer";
import FooterBase from "./FooterBase";
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <div>
        <Helmet>
        <meta
          name="description"
          content="The Lemich Clinic in Norfolk, Virginia located near Naval Station Norfolk offers expert mental health care for active duty military, veterans and spouses. Specializing in PTSD treatment, trauma recovery, anxiety & depression therapy, we provide confidential support to help you heal and thrive. With services like Summary and Nexus Letters for VA disability claims, we guide you through the process of securing the benefits you deserve. TRICARE accepted."
        />
        <title>
          The Lemich Clinic | Norfolk, VA | Military Mental Health Services
        </title>
      </Helmet>
      <Hero />
      <HeroBottomBanner />
      <Mission/>
      <ServiceCards />
      <Tricare />
      <Banner />
      <Footer />
      {/* <FooterBase /> */}
    </div>
  );
}


export default Home;