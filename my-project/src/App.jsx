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
import Poultry from "./Pages/Veterinary/Poultry";
import Aqua from "./Pages/Veterinary/Aqua";
import Swine from "./Pages/Veterinary/Swine";
import FeedGrain from "./Pages/Veterinary/Feed & Grain";
import Blog from "./Pages/Blog/Blog";
import ProductBrochures from "./Pages/Product Brochures/ProductBrochures";

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
          <Route path="/poultry" element={<Poultry />} />
          <Route path="/aqua" element={<Aqua />} />
          <Route path="/swine" element={<Swine />} />
          <Route path="/feed-grain" element={<FeedGrain />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/productbrochures" element={<ProductBrochures />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;