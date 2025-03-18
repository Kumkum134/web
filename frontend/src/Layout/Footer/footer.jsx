
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-12">

          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-orange-500">INFORMATION</h4>
            <ul className="space-y-3 text-base">
              <Link to={'/'}><li className="hover:text-orange-400 transition">Home</li></Link>
              <Link to={'/about-us'}><li className="hover:text-orange-400 transition">About Us</li></Link>
              <Link to={'/'}><li className="hover:text-orange-400 transition">Ingredients</li></Link>
              <Link to={'/contact-us'}><li className="hover:text-orange-400 transition">Contact Us</li></Link>
            </ul>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-orange-500">PRODUCTS</h4>
            <ul className="space-y-3 text-base">
              <Link to={'/health-supplements'}><li className="hover:text-orange-400">Health Supplements</li></Link>
              <Link to={'/personal-care'}><li className="hover:text-orange-400">Personal Care</li></Link>
              <Link to={'/livestock'}><li className="hover:text-orange-400">Livestock</li></Link>
              <Link to={'/poultry'}><li className="hover:text-orange-400">Poultry</li></Link>
              <Link to={'/aqua'}><li className="hover:text-orange-400">Aqua</li></Link>
              <Link to={'/swine'}><li className="hover:text-orange-400">Swine</li></Link>
              <Link to={'/pet'}><li className="hover:text-orange-400">Pet</li></Link>
              <Link to={'/'}><li className="hover:text-orange-400">Equine</li></Link>
            </ul>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-orange-500">SERVICES</h4>
            <ul className="space-y-3 text-base">
              <li className="hover:text-orange-400 transition">FAQ</li>
              <li className="hover:text-orange-400 transition">Privacy Policy</li>
              <li className="hover:text-orange-400 transition">Terms and Conditions</li>
            </ul>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-orange-500">GET IN TOUCH</h4>
            <ul className="space-y-2 text-base">  
              <li>
                <Link to={'https://goo.gl/maps/xyz'} target="_blank" rel="noopener noreferrer">
                  <li className="hover:text-orange-400 transition">
                    <div className="flex items-center justify-center">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      <span>Head Office</span>
                    </div>
                    <p className="text-sm">Plot: 1, Mirzapur, Sec-74, Ballabhgarh, Faridabad, Haryana-121004 (India)</p>
                  </li>
                </Link>
                <li><i className="fa fa-phone mr-2"></i> 01296662200</li>
                <li><i className="fa fa-envelope mr-2"></i> info@aurinkohealthcare.com</li>
              </li>
              <li>
                <Link to={'https://goo.gl/maps/xyz'} target="_blank" rel="noopener noreferrer">
                  <li className="hover:text-orange-400 transition">
                    <div className="flex items-center justify-center">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      <span>Branch Office (Zimbabwe)</span>
                    </div>
                    <p className="text-sm">Unit 10, 248 Williams Way, Msasa, Harare, Zimbabwe-1277</p>
                  </li>
                </Link>
                <li><i className="fa fa-phone mr-2"></i> +26263772235379</li>
                <li><i className="fa fa-envelope mr-2"></i> Drabhay@aurinkohealthcare.com</li>
              </li>
              <li>
                <Link to={'https://goo.gl/maps/xyz'} target="_blank" rel="noopener noreferrer">
                  <li className="hover:text-orange-400 transition">
                    <div className="flex items-center justify-center">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      <span>Branch Office (Buchun)</span>
                    </div>
                    <p className="text-sm">1622 Suite, u1 center, 385 bungil 25, Tomaruro, Buchun City, Gyunggido</p>
                  </li>
                </Link>
                <li><i className="fa fa-phone mr-2"></i> 02-839-8200</li>
                <li><i className="fa fa-envelope mr-2"></i> info@aurinkohealthcare.com</li>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;