import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Home from "./assets/Components/Home";
import Team from "./assets/Components/Team";
import Services from "./assets/Components/Services";
import Owners from "./assets/Components/Owners";
import Contact from "./assets/Components/Contact";
import Insurance from "./assets/Components/Insurance";
import Blog from "./assets/Components/Blog";
import BlogPost from "./assets/Components/BlogPost";

function WebRoutes() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/team" element={<Team />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/owners" element={<Owners />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/insurance" element={<Insurance />}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        
        <Route path="*" element={<Home />}/>
      </Routes>
    </HelmetProvider>
  );  
}

export default WebRoutes;