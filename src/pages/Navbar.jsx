import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-blue-900 px-10 py-5 z-30">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Sopheach Viseth
          </h1>

          {/* Menu button - only visible on mobile */}
          <button
            className="sm:hidden text-2xl font-bold text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          {/* Desktop menu - hidden on mobile */}
          <ul className="hidden sm:flex gap-2 lg:gap-4 font-bold">
            {["/", "/edocation", "/skill", "/project", "/contact"].map(
              (path, i) => {
                const name = [
                  "Home",
                  "Edocation",
                  "Skill",
                  "Project",
                  "Contact Me",
                ];
                return (
                  <li key={path}>
                    <NavLink to={path}>
                      <button className="bg-purple-950 rounded-lg px-3 py-2 lg:px-4 lg:py-3 text-white text-sm lg:text-base whitespace-nowrap hover:bg-purple-800 transition-colors">
                        {name[i]}
                      </button>
                    </NavLink>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </nav>

      {/* Overlay - only on mobile */}
      {isMenuOpen && (
        <div className="sm:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300" />
      )}

      {/* Mobile off-canvas menu - slides from left */}
      <div
        className={`sm:hidden fixed top-0 left-0 h-full w-64 bg-blue-900 z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex items-center justify-between p-5 border-b border-blue-700">
          <h1 className="text-white text-lg font-bold">Sopheach Viseth</h1>
          <button
            className="text-white text-2xl font-bold hover:bg-blue-800 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Menu items */}
        <ul className="flex flex-col gap-4 px-5 pt-2 font-bold">
          {["/", "/edocation", "/skill", "/project", "/contact"].map(
            (path, i) => {
              const name = [
                "Home",
                "Edocation",
                "Skill",
                "Project",
                "Contact Me",
              ];
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block"
                  >
                    <button className="bg-purple-950 rounded-lg px-4 py-3 text-white hover:bg-purple-800 transition-colors w-full text-left">
                      {name[i]}
                    </button>
                  </NavLink>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
