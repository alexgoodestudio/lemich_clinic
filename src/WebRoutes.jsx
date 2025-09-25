
import { Routes, Route} from "react-router-dom";
import Home from "./assets/Components/Home";
import Team from "./assets/Components/Team";
import Services from "./assets/Components/Services";
import Owners from "./assets/Components/Owners";
import Contact from "./assets/Components/Contact";
import Insurance from "./assets/Components/Insurance";
function WebRoutes() {

  return (
    <Routes>
        <Route path="/team" element={<Team />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="*" element={<Home />}/>
        <Route path="/owners" element={<Owners />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/insurance" element={<Insurance />}/>
    </Routes>
  );  
}

export default WebRoutes;
