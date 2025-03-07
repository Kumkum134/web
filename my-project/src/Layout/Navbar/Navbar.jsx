import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (dropdownName) => {
        if (openDropdown === dropdownName) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(dropdownName);
        }
    };


    return (
        <nav className="p-4 z-30">
            <div className="flex items-center justify-between">
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                <div className="hidden md:flex md:flex-wrap md:items-center lg:flex lg:flex-wrap">
                    <Link to="/" className="py-2 px-4 hover:underline hover:underline-offset-8 rounded">
                        Home
                    </Link>

                    <div className="relative group">
                        <button className="py-2 px-4 hover:underline hover:underline-offset-8 rounded">
                            About Us
                        </button>
                        <div className="absolute left-0 bg-white shadow-lg rounded mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <Link to="/about-us" className="block px-4 py-2 hover:bg-gray-100">
                                Overview
                            </Link>
                            <Link to="/vision-mission" className="block px-4 py-2 hover:bg-gray-100">
                                Vision & Mission
                            </Link>
                            <Link to="/manufacturing-facility" className="block px-4 py-2 hover:bg-gray-100">
                                Manufacturing Facility
                            </Link>
                            <Link to="/research-development" className="block px-4 py-2 hover:bg-gray-100">
                                Research & Development
                            </Link>
                            <Link to="/export" className="block px-4 py-2 hover:bg-gray-100">
                                Export
                            </Link>
                            <Link to="/certificates" className="block px-4 py-2 hover:bg-gray-100">
                                Certificates
                            </Link>
                        </div>
                    </div>

                    <div className="relative group">
                        <button className="py-2 px-4 hover:underline hover:underline-offset-8 rounded">
                            Human
                        </button>
                        <div className="absolute left-0 bg-white shadow-lg rounded mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <Link to="/health-supplements" className="block px-4 py-2 hover:bg-gray-100">
                                Health Supplements
                            </Link>
                            <div className="relative group/nano">
                                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                                    Nano-biotechnology Compounds
                                </button>
                                <div className="absolute left-full top-0 bg-white shadow-lg rounded w-48 hidden group-hover/nano:block transition-all duration-200">
                                    <Link to="/nanophosphosome" className="block px-4 py-2 hover:bg-gray-100">
                                        Nanophosphosomes®
                                    </Link>
                                    <Link to="/neunamin" className="block px-4 py-2 hover:bg-gray-100">
                                        Neuna®mins
                                    </Link>
                                    <Link to="/neunamin" className="block px-4 py-2 hover:bg-gray-100">
                                        Neuna®particles
                                    </Link>
                                </div>
                            </div>
                            <Link to="/personal-care" className="block px-4 py-2 hover:bg-gray-100">
                                Personal Care
                            </Link>
                            <Link to="/yeppuen" className="block px-4 py-2 hover:bg-gray-100">
                                Yeppuen
                            </Link>
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
                                    <Link to="/nanophosphosome" className="block px-4 py-2 hover:bg-gray-100">
                                        Nanophosphosomes®
                                    </Link>
                                    <Link to="/neunamin" className="block px-4 py-2 hover:bg-gray-100">
                                        Neuna®mins
                                    </Link>
                                    <Link to="/neunamin" className="block px-4 py-2 hover:bg-gray-100">
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
                            <Link to="/reports" className="block px-4 py-2 hover:bg-gray-100">
                                Reports
                            </Link>
                            <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                                Gallery
                            </Link>
                            <Link to="/rating" className="block px-4 py-2 hover:bg-gray-100">
                                Review & Feedback
                            </Link>
                            <Link to="/productbrochures" className="block px-4 py-2 hover:bg-gray-100">
                                Brochures
                            </Link>
                            <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">
                                Blogs
                            </Link>
                            <Link to="/articles" className="block px-4 py-2 hover:bg-gray-100">
                                Articles
                            </Link>
                        </div>
                    </div>
                    <Link to="/contact-us" className="py-2 px-4 hover:underline hover:underline-offset-8 rounded">
                        Contact Us
                    </Link>
                </div>
            </div>

            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
                <Link to="/" className="block py-2 px-4 hover:bg-gray-100 rounded">
                    Home
                </Link>

                <div className="mt-2">
                    <button onClick={() => toggleDropdown("about")} className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded">
                        About Us
                    </button>
                    <div className={`pl-4 ${openDropdown === "about" ? 'block' : 'hidden'}`}>
                        <Link to="/about-us" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Overview
                        </Link>
                        <Link to="/vision-mission" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Vision & Mission
                        </Link>
                        <Link to="/manufacturing-facility" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Manufacturing Facility
                        </Link>
                        <Link to="/research-development" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Research & Development
                        </Link>
                        <Link to="/export" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Export
                        </Link>
                        <Link to="/certificates" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Certificates
                        </Link>
                    </div>
                </div>

                <div className="mt-2">
                    <button onClick={() => toggleDropdown("human")} className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded">
                        Human
                    </button>
                    <div className={`pl-4 ${openDropdown === "human" ? 'block' : 'hidden'}`}>
                        <Link to="/health-supplements" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Health Supplements
                        </Link>
                        <div className="relative group/nano">
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                                Nano-biotechnology Compounds
                            </button>
                            <div className="absolute left-full top-0 bg-white shadow-lg rounded w-48 hidden group-hover/nano:block transition-all duration-200">
                                <Link to="/nanophosphosome" className="block px-4 py-2 hover:bg-gray-100">
                                    Nanophosphosomes®
                                </Link>
                                <Link to="/neunamin" className="block px-4 py-2 hover:bg-gray-100">
                                    Neuna®mins
                                </Link>
                                <Link to="/neunamin" className="block px-4 py-2 hover:bg-gray-100">
                                    Neuna®particles
                                </Link>
                            </div>
                        </div>
                        <Link to="/personal-care" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Personal Care
                        </Link>
                        <Link to="/yeppuen" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Yeppuen
                        </Link>
                    </div>
                </div>

                <div className="mt-2">
                    <button onClick={() => toggleDropdown("veterinary")} className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded">
                        Veterinary
                    </button>
                    <div className={`pl-4 ${openDropdown === "veterinary" ? 'block' : 'hidden'}`}>
                        <Link to="/livestock" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Livestock
                        </Link>
                        <Link to="/poultry" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Poultry
                        </Link>
                        <Link to="/aqua" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Aqua
                        </Link>
                        <Link to="/swine" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Swine
                        </Link>
                        <Link to="/equine" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Equine
                        </Link>
                        <Link to="/pet" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Pet
                        </Link>
                        <Link to="/feed-grain" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Feed & Grain
                        </Link>
                        <div className="relative group/nano">
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                                Nano-biotechnology Compounds
                            </button>
                            <div className="absolute left-full top-0 bg-white shadow-lg rounded w-48 hidden group-hover/nano:block transition-all duration-200">
                                <Link to="/nanophosphosome" className="block px-4 py-2 hover:bg-gray-100">
                                    Nanophosphosomes®
                                </Link>
                                <Link to="/Neunamin" className="block px-4 py-2 hover:bg-gray-100">
                                    Neuna®mins
                                </Link>
                                <Link to="/Neunamin" className="block px-4 py-2 hover:bg-gray-100">
                                    Neuna®particles
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to="/ingredients" className="block py-2 px-4 hover:bg-gray-100 rounded">
                    Ingredients
                </Link>

                <div className="mt-2">
                    <button onClick={() => toggleDropdown("media")} className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded">
                        Media
                    </button>
                    <div className={`pl-4 ${openDropdown === "media" ? 'block' : 'hidden'}`}>
                        <Link to="/reports" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Reports
                        </Link>
                        <Link to="/" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Gallery
                        </Link>
                        <Link to="/rating" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Review & Feedback
                        </Link>
                        <Link to="/productbrochures" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Brochures
                        </Link>
                        <Link to="/blog" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Blogs
                        </Link>
                        <Link to="/articles" className="block py-2 px-4 hover:bg-gray-100 rounded">
                            Articles
                        </Link>
                    </div>
                </div>

                <Link to="/contact-us" className="block py-2 px-4 hover:bg-gray-100 rounded">
                    Contact Us
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;