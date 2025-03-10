import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Search from "../search/search";

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <div className={`w-full z-50 font-semibold sticky top-0 ${isHomePage ? "bg-black/10 text-white hover:bg-white hover:text-black" : "bg-white z-50 text-black shadow-md"} flex flex-wrap items-center justify-between p-2 md:px-6 lg:px-12`}>
            <div className="z-30">
                <Link to={'/'}> <img
                    src="/Assets/Aurinko Logo.png"
                    alt="Aurinko Logo"
                    className="h-16 w-auto cursor-pointer z-30"
                /></Link>
            </div>
            <div className="flex gap-4 z-30">
                <Navbar />
                <Search />
                <button className="relative">
                    <FaShoppingBag size={20} className="cursor-pointer transition-all" />
                </button>
            </div>
        </div>
    );
};

export default Header;