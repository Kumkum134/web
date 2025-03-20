import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleDropdown = (menu) => {
    setIsDropdownOpen(isDropdownOpen === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (isMobileMenuOpen) {
        closeMobileMenu();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  return (
    <header className={`fixed w-full z-50 top-0 transition-all duration-300
      ${isHomePage ? 'bg-black/10 text-white hover:bg-white hover:text-black' : 'bg-white text-black shadow-md'}
     `}>
      <div className="container mx-auto flex items-center justify-between py-4 lg:py-1 px-6">
        <div className="hidden lg:flex items-center ">
          <Link to="/">
            <img src="/Assets/Aurinko Logo.png" alt="Aurinko Logo" className="h-16 w-auto cursor-pointer mb-[2%]" />
          </Link>
        </div>
        <nav className="hidden lg:flex space-x-6 relative">
          <Link to="/" className="py-2 px-4 hover:underline hover:underline-offset-8 rounded">
            Home
          </Link>

          <div className="relative group">
            <button className="py-2 px-4 hover:underline hover:underline-offset-8 rounded">
              About Us
            </button>
            <div className="absolute left-0 bg-white shadow-lg rounded mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/about-us" className="block px-4 py-2 hover:bg-gray-100">Overview</Link>
              <Link to="/vision-mission" className="block px-4 py-2 hover:bg-gray-100">Vision & Mission</Link>
              <Link to="/manufacturing-facility" className="block px-4 py-2 hover:bg-gray-100">Manufacturing Facility</Link>
              <Link to="/research-development" className="block px-4 py-2 hover:bg-gray-100">Research & Development</Link>
              <Link to="/export" className="block px-4 py-2 hover:bg-gray-100">Export</Link>
              <Link to="/certificates" className="block px-4 py-2 hover:bg-gray-100">Certificates</Link>
            </div>
          </div>
          <div className="relative group">
            <button className="py-2 px-4 hover:underline hover:underline-offset-8 rounded">
              Human
            </button>
            <div className="absolute left-0 bg-white shadow-lg rounded mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/health-supplements" className="block px-4 py-2 hover:bg-gray-100">Health Supplements</Link>
              <div className="relative group/nano">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Nano-biotechnology Compounds
                </button>
                <div className="absolute left-full top-0 bg-white shadow-lg rounded w-48 hidden group-hover/nano:block transition-all duration-200">
                  <Link to="/nanophosphosome" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMobileMenu}>
                    Nanophosphosomes®
                  </Link>
                  <Link to="/neunamin" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMobileMenu}>
                    Neuna®mins
                  </Link>
                  <Link to="/neunamin" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMobileMenu}>
                    Neuna®particles
                  </Link>
                </div>
              </div>
              <Link to="/personal-care" className="block px-4 py-2 hover:bg-gray-100">Personal Care</Link>
              <Link to="/yeppuen" className="block px-4 py-2 hover:bg-gray-100">Yeppuen</Link>
            </div>
          </div>
          <div className="relative group">
            <button className="py-2 px-4 hover:underline hover:underline-offset-8 rounded">
              Veterinary
            </button>
            <div className="absolute left-0 bg-white shadow-lg rounded mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/livestock" className="block px-4 py-2 hover:bg-gray-100">Livestock</Link>
              <Link to="/poultry" className="block px-4 py-2 hover:bg-gray-100">Poultry</Link>
              <Link to="/aqua" className="block px-4 py-2 hover:bg-gray-100">Aqua</Link>
              <Link to="/swine" className="block px-4 py-2 hover:bg-gray-100">Swine</Link>
              <Link to="/equine" className="block px-4 py-2 hover:bg-gray-100">Equine</Link>
              <Link to="/pet" className="block px-4 py-2 hover:bg-gray-100">Pet</Link>
              <Link to="/feed-grain" className="block px-4 py-2 hover:bg-gray-100">Feed & Grain</Link>
              <div className="relative group/nano">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Nano-biotechnology Compounds
                </button>
                <div className="absolute left-full top-0 bg-white shadow-lg rounded w-48 hidden group-hover/nano:block transition-all duration-200">
                  <Link to="/nanophosphosome" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMobileMenu}>
                    Nanophosphosomes®
                  </Link>
                  <Link to="/neunamin" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMobileMenu}>
                    Neuna®mins
                  </Link>
                  <Link to="/neunamin" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMobileMenu}>
                    Neuna®particles
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link to="/ingredients" className="py-2 px-4 hover:underline hover:underline-offset-8 rounded">
            Ingredients
          </Link>

          <div className="relative group">
            <button className="py-2 px-4 hover:underline hover:underline-offset-8 rounded">
              Media
            </button>
            <div className="absolute left-0 bg-white shadow-lg rounded mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/reports" className="block px-4 py-2 hover:bg-gray-100">Reports</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Gallery</Link>
              <Link to="/rating" className="block px-4 py-2 hover:bg-gray-100">Review & Feedback</Link>
              <Link to="/productbrochures" className="block px-4 py-2 hover:bg-gray-100">Brochures</Link>
              <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">Blogs</Link>
              <Link to="/articles" className="block px-4 py-2 hover:bg-gray-100">Articles</Link>
            </div>
          </div>

          <Link to="/contact-us" className="py-2 px-4 hover:underline hover:underline-offset-8 rounded">
            Contact Us
          </Link>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-black hover:text-gray-700 relative ">
          <Link to="https://aurinkohealthcare.in"> <i className="fas fa-shopping-bag text-2xl"></i></Link>
          </button>
        </div>

        <div className="lg:hidden flex items-center w-full justify-between">

          <button className="text-black hover:text-gray-700 focus:outline-none" onClick={toggleMobileMenu}>
            <i className="fas fa-bars text-xl"></i>
          </button>

          <div className="absolute left-1/2 transform -translate-x-1/2 mt-[-6%]">
            <Link to="/">
              <img src="/Assets/Aurinko Logo.png" alt="Aurinko Logo" className="h-16 w-auto cursor-pointer" />
            </Link>
          </div>

          <button className="text-black hover:text-gray-700 relative mr-[7%]">
          <Link to="https://aurinkohealthcare.in"><i className="fas fa-shopping-bag text-xl"></i></Link>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-13 left-0 w-full bg-white/30 backdrop-blur-lg shadow-lg px-4 pb-4 overflow-auto" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
          <Link to="/" className="block py-2 text-gray-800 hover:bg-gray-200" onClick={closeMobileMenu}>Home</Link>
          <div className="mt-2">
            <button onClick={() => toggleDropdown("about")} className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded">
              About Us
            </button>
            <div className={`pl-4 ${isDropdownOpen === "about" ? 'block' : 'hidden'}`}>
              <Link to="/about-us" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Overview
              </Link>
              <Link to="/vision-mission" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Vision & Mission
              </Link>
              <Link to="/manufacturing-facility" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Manufacturing Facility
              </Link>
              <Link to="/research-development" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Research & Development
              </Link>
              <Link to="/export" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Export
              </Link>
              <Link to="/certificates" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Certificates
              </Link>
            </div>
          </div>
          <div className="mt-2">
            <button onClick={() => toggleDropdown("human")} className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded">
              Human
            </button>
            <div className={`pl-4 ${isDropdownOpen === "human" ? 'block' : 'hidden'}`}>
              <Link to="/health-supplements" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Health Supplements
              </Link>
              <div className="relative group/nano">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Nano-biotechnology Compounds
                </button>
                <div className="absolute right-0 top-0 bg-white shadow-lg rounded w-48 hidden group-hover/nano:block transition-all duration-200">
                  <Link to="/nanophosphosome" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMobileMenu}>
                    Nanophosphosomes®
                  </Link>
                  <Link to="/neunamin" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMobileMenu}>
                    Neuna®mins
                  </Link>
                  <Link to="/neunamin" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMobileMenu}>
                    Neuna®particles
                  </Link>
                </div>
              </div>
              <Link to="/personal-care" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Personal Care
              </Link>
              <Link to="/yeppuen" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Yeppuen
              </Link>
            </div>
          </div>

          <div className="mt-2">
            <button onClick={() => toggleDropdown("veterinary")} className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded">
              Veterinary
            </button>
            <div className={`pl-4 ${isDropdownOpen === "veterinary" ? 'block' : 'hidden'}`}>
              <Link to="/livestock" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Livestock
              </Link>
              <Link to="/poultry" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Poultry
              </Link>
              <Link to="/aqua" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Aqua
              </Link>
              <Link to="/swine" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Swine
              </Link>
              <Link to="/equine" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Equine
              </Link>
              <Link to="/pet" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Pet
              </Link>
              <Link to="/feed-grain" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Feed & Grain
              </Link>
              <div className="relative group/nano">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Nano-biotechnology Compounds
                </button>
                <div className="absolute right-0 top-0 bg-white shadow-lg rounded w-48 hidden group-hover/nano:block transition-all duration-200">
                  <Link to="/nanophosphosome" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMobileMenu}>
                    Nanophosphosomes®
                  </Link>
                  <Link to="/neunamin" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMobileMenu}>
                    Neuna®mins
                  </Link>
                  <Link to="/neunamin" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMobileMenu}>
                    Neuna®particles
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link to="/ingredients" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
            Ingredients
          </Link>

          <div className="mt-2">
            <button onClick={() => toggleDropdown("media")} className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded">
              Media
            </button>
            <div className={`pl-4 ${isDropdownOpen === "media" ? 'block' : 'hidden'}`}>
              <Link to="/reports" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Reports
              </Link>
              <Link to="/" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Gallery
              </Link>
              <Link to="/rating" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Review & Feedback
              </Link>
              <Link to="/productbrochures" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Brochures
              </Link>
              <Link to="/blog" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Blogs
              </Link>
              <Link to="/articles" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
                Articles
              </Link>
            </div>
          </div>

          <Link to="/contact-us" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
