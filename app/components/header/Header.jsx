import { NavLink,Link } from "@remix-run/react";
import { useState } from "react";
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";


import Search from "./Search";

export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
       <header className="w-full bg-violet-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
           {/* Logo */}
          <img className="h-10 hover:bg-red-500" src="" alt="Aquaview Aquarium" />
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink className="p-2 hover:text-red-600 transition duration-300">Home</NavLink>
            <NavLink className="p-2 hover:text-red-600 transition duration-300">Product</NavLink>
            <NavLink className="p-2 hover:text-red-600 transition duration-300">Service</NavLink>
             <Search className="p-2 mx-4 " />
             <NavLink className="p-2 hover:text-red-600 transition duration-300">About</NavLink>
             <NavLink className="p-2 hover:text-red-600 transition duration-300">Contact</NavLink>
           </nav>

          {/* Shopping Cart & Mobile Menu Button */}
          <div className="flex items-center gap-6">
              <span>$0.00</span>
            <Link >
              <ShoppingBagIcon className="h-6 w-6" />
            </Link>

             {/* Mobile Menu Button */}
             <button
         className="md:hidden focus:outline-none"
               onClick={() => setMenuOpen(!menuOpen)}
             >
               {menuOpen ? (
                 <RxCross1 className="h-8 w-8" />
               ) : (
                 <GiHamburgerMenu 
                 className="h-8 w-8 "  />
               )}
             </button>
           </div>
         </div>

        {/* Mobile Navigation (Collapsible) */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col items-center space-y-4 py-4 bg-violet-200">
            <NavLink className="p-2 hover:text-red-600 transition duration-300">Home</NavLink>
            <NavLink className="p-2 hover:text-red-600 transition duration-300">Product</NavLink>
            <NavLink className="p-2 hover:text-red-600 transition duration-300">Service</NavLink>
            <NavLink className="p-2 hover:text-red-600 transition duration-300">About</NavLink>
            <NavLink className="p-2 hover:text-red-600 transition duration-300">Contact</NavLink>
          </nav>
        )}
      </div>
    </header> 
        </>
)
}
