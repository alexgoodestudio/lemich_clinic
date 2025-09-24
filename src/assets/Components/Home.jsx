import Hero from "./Hero";
import HeroBottomBanner from "./HeroBottomBanner";
import Banner from "./Banner";
import Mission from "./Mission";
import ServiceCards from "./ServiceCards";
import Tricare from "./Tricare";

function Home() {
  return (
    <div>
      <Hero />
      <HeroBottomBanner />
      <Mission/>
      <ServiceCards />
      <Tricare />
      <Banner />
    </div>
  );
}


export default Home;