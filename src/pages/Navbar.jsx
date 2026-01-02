import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='bg-purple-200 px-10 py-5'>
      <div className='flex items-center'>
        <h1 className='text-xl mx-5 sm:text-2xl md:text-3xl lg:text-4xl font-bold'>
          Sopheach <br className="sm:hidden" />Viseth
        </h1>
        <h1 className='hidden sm:block font-bold text-5xl pt-0 pb-4 absolute left-1/2 -translate-x-1/2'>Computer Scient</h1>
        
        {/* Menu button - only visible on mobile */}
        <button 
          className='ml-auto sm:hidden text-2xl font-bold'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕ ': '☰'}
        </button>


        {/* Desktop menu - hidden on mobile */}
        <ul className='hidden sm:flex gap-4 ml-[50%] font-bold'>
          {["/", "/about", "/contact"].map((path, i) => {
            const name = ["Home", "About Me", "Contact Me"];
            return (
              <li key={path}>
                <NavLink to={path}>
                  <button className='bg-purple-950 rounded-lg mx-0 p-3 text-white'>
                    {name[i]}
                  </button>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile menu - with transition animation */}
      <div 
        className={`sm:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className='flex flex-col gap-4 mt-4 font-bold '>
          {["/", "/about", "/contact"].map((path, i) => {
            const name = ["Home", "About Me", "Contact Me"];
            return (
              <li className='ml-auto' key={path}>
                <NavLink 
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <button className='bg-purple-950 rounded-lg mx-0 p-3 text-white'>
                    {name[i]}
                  </button>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar