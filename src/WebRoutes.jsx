
import { Routes, Route} from "react-router-dom";
import Home from "./assets/Components/Home";
import Team from "./assets/Components/Team";
import Services from "./assets/Components/Services";
import Owners from "./assets/Components/Owners";
function WebRoutes() {

  return (
    <Routes>
        <Route path="/team" element={<Team />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="*" element={<Home />}/>
        <Route path="/owners" element={<Owners />}/>
    </Routes>
  );
}

export default WebRoutes;
