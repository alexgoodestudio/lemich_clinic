import Hero from "./Hero";
import HeroBottomBanner from "./HeroBottomBanner";
import Banner from "./Banner";
import Mission from "./Mission";
import ServiceCards from "./ServiceCards";
import Tricare from "./Tricare";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Hero />
      <HeroBottomBanner />
      <Mission/>
      <ServiceCards />
      <Tricare />
      <Banner />
      <Footer/>
    </div>
  );
}


export default Home;