import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/contact/contact";
import Footer from "./Layout/Footer/footer";
import About from "./Pages/About us/about";
import VisionMission from "./Pages/About us/vision&mission";
import Healthsupplements from "./Pages/Human/Health-supplements";
import Persnolcare from "./Pages/Human/Persnol care";
import Livestock from "./Pages/Veterinary/Livestock";

const App = () => {
  return (
    <Router>
      <div className="relative">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/health-supplements" element={<Healthsupplements />} />
          <Route path="/personal-care" element={<Persnolcare />} />
          <Route path="/livestock" element={<Livestock />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
