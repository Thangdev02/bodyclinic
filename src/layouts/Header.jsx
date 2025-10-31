"use client"

import { useState } from "react"
import { ChevronDown } from "react-bootstrap-icons"

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <header className="bg-gradient-to-b from-[#c5bbad] to-[#c5bbad] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">the body clinic</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-whiterounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {/* Abnahmen */}
          <div className="relative group">
            <button className="text-white font-medium flex items-center gap-1 hover:text-gray-900 transition">
              Abnahmen
              <ChevronDown size={18} />
            </button>
          </div>

          {/* Medikamente */}
          <div className="relative group">
            <button className="text-white font-medium flex items-center gap-1 hover:text-gray-900 transition">
              Medikamente
              <ChevronDown size={18} />
            </button>
          </div>

          {/* Erfahrungen */}
          <button className="text-white font-medium hover:text-gray-900 transition">Erfahrungen</button>

          {/* Über uns */}
          <div className="relative group">
            <button className="text-white font-medium flex items-center gap-1 hover:text-gray-900 transition">
              Über uns
              <ChevronDown size={18} />
            </button>
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
        <div className="flex items-center gap-4">
          <button className="border-2 border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-white transition">
            Programm verlängern
          </button>
          <button className="bg-white text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
            Termin vereinbaren
          </button>
        </div>
      </div>
    </header>
  )
}
