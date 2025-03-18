import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-base md:text-lg lg:text-xl font-semibold mb-4">INFORMATION</h4>
            <ul className="space-y-2 text-sm md:text-base ">
              <Link to={'/'}><li className="hover:text-orange-500">Home</li></Link>
              <Link to={'/about-us'}><li className="hover:text-orange-500">About Us</li></Link>
              <Link to={'/'}><li className="hover:text-orange-500">Ingredients</li></Link>
              <Link to={'/contact-us'}><li className="hover:text-orange-500">Contact Us </li></Link>
            </ul>
          </div>
          <div>
            <h4 className="text-base md:text-lg lg:text-xl font-semibold mb-4">PRODUCTS</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <Link to={'/health-supplements'}><li className="hover:text-orange-500">Health Suppliments</li></Link>
              <Link to={'/personal-care'}><li className="hover:text-orange-500">Personal Care</li></Link>
              <Link to={'/livestock'}><li className="hover:text-orange-500">Livestock</li></Link>
              <Link to={'/poultry'}><li className="hover:text-orange-500">Poultry</li></Link>
              <Link to={'/aqua'}><li className="hover:text-orange-500">Aqua</li></Link>
              <Link to={'/swine'}><li className="hover:text-orange-500">Swine</li></Link>
              <Link to={'/pet'}><li className="hover:text-orange-500">Pet</li></Link>
              <Link to={'/'}><li className="hover:text-orange-500">Equine</li></Link>
            </ul>
          </div>
          <div>
            <h4 className="text-base md:text-lg lg:text-xl font-semibold mb-4">SERVICES</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="hover:text-orange-500">FAQ</li>
              <li className="hover:text-orange-500">Privacy Policy</li>
              <li className="hover:text-orange-500">Terms and Conditions</li>
            </ul>
          </div>
          <div>
            <h4 className="text-base md:text-lg lg:text-xl font-semibold mb-4">GET IN TOUCH</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <Link to={'https://www.google.com/maps/place/Aurinko+Healthcare+Private+Limited/@28.353984,77.341102,16z/data=!4m6!3m5!1s0x390cdb9766d62aab:0x499dcf82d3074077!8m2!3d28.3499707!4d77.3450554!16s%2Fg%2F11shjs9rvx?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D'}>
                <li className="hover:text-orange-500 flex flex-col">
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <h3 className="text-lg font-medium">Head Office</h3>
                  </div>
                  <h3>Plot: 1, Mirzapur, Sec-74, Mirzapur Mor, Ballabhgarh, Faridabad, Haryana-121004 Haryana (India)</h3>
                </li>
              </Link>
              <li className="hover:text-orange-500">
                <i className="fa fa-phone mr-2"></i> 01296662200
              </li>
              <li className="hover:text-orange-500">
                <i className="fa fa-envelope mr-2"></i> info@aurinkohealthcare.com
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;