import { NavLink,Link } from "@remix-run/react";
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

import Search from "./Search";

export default function Header(){
    return (
        <>
        <header className="w-full flex flex-wrap flex-col md:flex-row md:justify-between items-center bg-violet-100 h-auto md:h-16 px-4 py-2" >
            <img className= " hover:bg-red-500" src= "" alt="Aquaview Aquarium"/> 
            <nav className="flex flex-nowrap justify-center items-center gap-4 ">
            <NavLink className= "p-2 hover:bg-red-500">Home</NavLink>
            <NavLink className= "p-2 hover:bg-red-500">Product</NavLink>
            <NavLink className= "p-2 mr-12 hover:bg-red-500">Service</NavLink>
            <Search  className= "p-2 hover:bg-red-500"/>
            <NavLink className= "pl-36 p-2 hover:bg-red-500 ">About</NavLink>
            <NavLink className= "p-2 hover:bg-red-500 ">Contact</NavLink>
            </nav>
            <div className="flex justify-center items-center gap-10">
            <span>$0.00</span>
            <Link className="w-8 h-8 bg-opacity-20 rounded text-black "><ShoppingBagIcon></ShoppingBagIcon></Link>
            { false && <Link className= "w-4 h-6 hover:bg-red-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
</Link>}
            </div>
        </header>
        <h1>Header for Aquaview</h1>
        </>
    )
}