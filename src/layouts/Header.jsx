"use client";

import { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="bg-gradient-to-b from-[#c5bbad] to-[#c5bbad] sticky top-0 z-50">
      <div className="max-w-full mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 ">
          <Link to="/" className="flex items-center gap-2" >
            <span className="text-5xl font-bold text-white" style={{fontWeight:'400'}}>the body clinic</span>
            <div className="flex gap-1 ">
              <div className="w-5 h-5 bg-white rounded-full"></div>
              <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
              <div className="w-5 h-5 bg-gray-100 rounded-full"></div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-8">
            {/* Abnehmen Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("abnehmen")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to="/abnehmen"
                className="text-white font-medium flex items-center gap-1 hover:text-gray-900 transition"
              >
                Abnehmen
                <ChevronDown size={18} />
              </Link>

              {/* Dropdown menu */}
              {openDropdown === "abnehmen" && (
                <div
                  className="absolute left-0 mt-2 bg-white text-gray-700 rounded-lg shadow-lg py-2 w-64 animate-slide-down"
                >
                  <Link
                    to="/spritzen"
                    className="block px-4 py-2 hover:bg-gray-100 transition text-black"
                  >
                     Abnehmen Spritzen
                  </Link>
                  <Link
                    to="/tabletent"
                    className="block px-4 py-2 hover:bg-gray-100 transition text-black"
                  >
                    Abnehmen Tabletten
                  </Link>
                  <Link
                    to="/medikament"
                    className="block px-4 py-2 hover:bg-gray-100 transition text-black"
                  >
                   Abnehmen Medikament
                  </Link>
                </div>
              )}
            </div>

            {/* Medikamente */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("medikamente")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to="/medikamente"
                className="text-white font-medium flex items-center gap-1 hover:text-gray-900 transition"
              >
                Medikamente
                <ChevronDown size={18} />
              </Link>

              {/* Dropdown menu */}
              {openDropdown === "medikamente" && (
                <div
                  className="absolute left-0 mt-2 bg-white text-gray-700 rounded-lg shadow-lg py-2 w-64 animate-slide-down"
                >
                  <Link
                    to="/ozempic"
                    className="block px-4 py-2 hover:bg-gray-100 transition text-black"
                  >
                    Ozempic
                  </Link>
                  <Link
                    to="/wegovy"
                    className="block px-4 py-2 hover:bg-gray-100 transition text-black"
                  >
                    Wegovy
                  </Link>
                  <Link
                    to="/mounjaro"
                    className="block px-4 py-2 hover:bg-gray-100 transition text-black"
                  >
                   Mounjaro
                  </Link>
                  <Link
                    to="/saxenda"
                    className="block px-4 py-2 hover:bg-gray-100 transition text-black"
                  >
                   Saxenda
                  </Link>
                  <Link
                    to="/rybelsus"
                    className="block px-4 py-2 hover:bg-gray-100 transition text-black"
                  >
                   Rybelsus
                  </Link>
                  <Link
                    to="/mysimba"
                    className="block px-4 py-2 hover:bg-gray-100 transition text-black"
                  >
                   Mysimba
                  </Link>
                </div>
              )}
            </div>

            {/* Erfahrungen */}
            <Link
              to="/erfahrungen"
              className="text-white font-medium hover:text-gray-900 transition"
            >
              Erfahrungen
            </Link>

            {/* Über uns */}
            <div className="relative">
              <Link
                to="/ueber-uns"
                className="text-white font-medium flex items-center gap-1 hover:text-gray-900 transition"
              >
                Über uns
                <ChevronDown size={18} />
              </Link>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <img
                src="./images/flag-de.png"
                alt="Deutsch"
                className="w-5 h-5"
                onError={(e) => (e.target.style.display = "none")}
              />
              <ChevronDown size={18} className="text-white" />
            </div>
          </nav>

          {/* Buttons */}
          <button className="border-2 border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-gray-900 transition">
            Programm verlängern
          </button>
          <button className="bg-white text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
            Termin vereinbaren
          </button>
        </div>
      </div>
    </header>
  );
}
