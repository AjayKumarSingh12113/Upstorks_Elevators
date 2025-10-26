
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo1 from "../images/logo1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "Projects", to: "/projects" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  // Determine navbar classes based on route
  const isHome = location.pathname === "/";

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isHome ? "bg-transparent" : "bg-white"
      } shadow h-20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full space-x-6">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo1}
              alt="a-elevate"
              className="h-12 sm:h-14 md:h-16 transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-20">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `${
                    isHome
                      ? "text-red-600 text-xl hover:text-gray-700"
                      : isActive
                      ? "text-indigo-600 font-extrabold underline hover:decoration-red-700"
                      : "text-red-700 text-xl hover:text-indigo-600 "
                  } transition-colors duration-300`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded transition-colors duration-300 ${
                isHome ? "text-black" : "text-gray-700 hover:text-indigo-600 "
              }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden px-2 pt-2 pb-3 space-y-1 shadow transition-all duration-300 ${
            isHome ? "bg-transparent" : "bg-white"
          }`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `${
                  isHome
                    ? "block text-black  font-extrabold px-3 py-2 rounded hover:text-gray-700 underline decoration-red-400 "
                    : isActive
                    ? "block text-indigo-600 font-semibold px-3 py-2 rounded "
                    : "block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded "
                } transition-colors duration-300 `
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

