import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-6">
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 text-center md:text-left">
          
          <div>
            <h4 className="text-xl font-semibold mb-2 text-orange-500">INFORMATION</h4>
            <ul className="space-y-1 text-base">
              <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-orange-400 transition">About Us</Link></li>
              <li><Link to="/ingredients" className="hover:text-orange-400 transition">Ingredients</Link></li>
              <li><Link to="/contact-us" className="hover:text-orange-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2 text-orange-500">PRODUCTS</h4>
            <ul className="space-y-1 text-base">
              {["Health Supplements", "Personal Care", "Livestock", "Poultry", "Aqua", "Swine", "Pet", "Equine"].map((item, index) => (
                <li key={index}>
                  <Link to={`/${item.toLowerCase().replace(" ", "-")}`} className="hover:text-orange-400 transition">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2 text-orange-500">SERVICES</h4>
            <ul className="space-y-1 text-base">
              <li className="hover:text-orange-400 transition">FAQ</li>
              <li className="hover:text-orange-400 transition">Privacy Policy</li>
              <li className="hover:text-orange-400 transition">Terms and Conditions</li>
            </ul>
          </div>

        </div>

        <div className="text-center md:text-left mt-2">
          <h4 className="text-xl font-semibold mb-4 text-orange-500">GET IN TOUCH</h4>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 ">
            
            <div>
              <h5 className="font-semibold mb-2">Head Office</h5>
              <p>
                <i className="fas fa-map-marker-alt mr-2"></i>
                <Link to="https://maps.app.goo.gl/26BJUNAtfpp1FtMr6" target="_blank" className="hover:text-orange-400 transition">
                  Plot: 1, Mirzapur, Sec-74, Ballabhgarh, Faridabad, Haryana-121004 (India)
                </Link>
              </p>
              <p><i className="fa fa-phone mr-2"></i> 01296662200</p>
              <p><i className="fa fa-envelope mr-2"></i> info@aurinkohealthcare.com</p>
            </div>

            <div>
              <h5 className="font-semibold mb-2">Branch Office (Zimbabwe)</h5>
              <p>
                <i className="fas fa-map-marker-alt mr-2"></i>
                <Link to="" target="_blank" className="hover:text-orange-400 transition">
                  Unit 10, 248 Williams Way, MASA, Harare, Zimbabwe
                </Link>
              </p>
              <p><i className="fa fa-phone mr-2"></i> +26263772235379</p>
              <p><i className="fa fa-envelope mr-2"></i> Drabhay@aurinkohealthcare.com</p>
            </div>

            <div>
              <h5 className="font-semibold mb-2">Branch Office (Korea)</h5>
              <p>
                <i className="fas fa-map-marker-alt mr-2"></i>
                <Link to="" target="_blank" className="hover:text-orange-400 transition">
                  1622 Suite, U1 center, 385 bungil 25, jomaruro, Buchuncity, Gyunggido, Korea
                </Link>
              </p>
              <p><i className="fa fa-phone mr-2"></i> 02-839-8200</p>
              <p><i className="fa fa-envelope mr-2"></i> info@aurinkohealthcare.com</p>
            </div>

          </div>
        </div>

        <div className="text-center mt-8 border-t border-orange-400 pt-4">
          <p className="text-sm text-gray-300">
          © 2014 Aurinko Healthcare Pvt. Ltd. | aurinkohealthcare.com
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
