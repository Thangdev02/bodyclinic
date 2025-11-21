"use client";

import { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpenDropdown(null); // đóng dropdown sau khi chọn
  };

  const currentLang = i18n.language || "nl";

  return (
    <header className="bg-gradient-to-b from-[#c5bbad] to-[#c5bbad] sticky top-0 z-50 shadow-md">
      <div className="max-w-full mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-3">
            <span className="text-5xl font-bold text-white" style={{ fontWeight: 400 }}>
              {t("the body clinic")}
            </span>
            <div className="flex gap-1">
              <div className="w-5 h-5 bg-white rounded-full"></div>
              <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
              <div className="w-5 h-5 bg-gray-100 rounded-full"></div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-8 text-lg">
            {/* Abnehmen Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("abnehmen")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to="/abnehmen"
                className="text-white font-medium flex items-center gap-1 hover:text-gray-200 transition"
              >
                {t("Abnehmen")}
                <ChevronDown size={18} />
              </Link>

              {openDropdown === "abnehmen" && (
                <div className="absolute left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-xl py-3 w-64 z-50 border border-gray-100">
                  <Link to="/spritzen" className="block px-5 py-2.5 hover:bg-gray-50 transition">
                    {t("Abnehmen Spritzen")}
                  </Link>
                  <Link to="/tabletent" className="block px-5 py-2.5 hover:bg-gray-50 transition">
                    {t("Abnehmen Tabletten")}
                  </Link>
                  <Link to="/medikament" className="block px-5 py-2.5 hover:bg-gray-50 transition">
                    {t("Abnehmen Medikament")}
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
                className="text-white font-medium flex items-center gap-1 hover:text-gray-200 transition"
              >
                {t("Medikamente")}
                <ChevronDown size={18} />
              </Link>

              {openDropdown === "medikamente" && (
                <div className="absolute left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-xl py-3 w-64 z-50 border border-gray-100">
                  <Link to="/ozempic" className="block px-5 py-2.5 hover:bg-gray-50 transition">{t("Ozempic")}</Link>
                  <Link to="/wegovy" className="block px-5 py-2.5 hover:bg-gray-50 transition">{t("Wegovy")}</Link>
                  <Link to="/mounjaro" className="block px-5 py-2.5 hover:bg-gray-50 transition">{t("Mounjaro")}</Link>
                  <Link to="/saxenda" className="block px-5 py-2.5 hover:bg-gray-50 transition">{t("Saxenda")}</Link>
                  <Link to="/rybelsus" className="block px-5 py-2.5 hover:bg-gray-50 transition">{t("Rybelsus")}</Link>
                  <Link to="/mysimba" className="block px-5 py-2.5 hover:bg-gray-50 transition">{t("Mysimba")}</Link>
                </div>
              )}
            </div>

            {/* Erfahrungen */}
            <Link
              to="/erfahrungen"
              className="text-white font-medium hover:text-gray-200 transition"
            >
              {t("Erfahrungen")}
            </Link>

            {/* Über uns */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("ueber-uns")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to="/ueber-uns"
                className="text-white font-medium flex items-center gap-1 hover:text-gray-200 transition"
              >
                {t("Uber uns")}
                <ChevronDown size={18} />
              </Link>

              {openDropdown === "ueber-uns" && (
                <div className="absolute left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-xl py-3 w-64 z-50 border border-gray-100">
                  <Link to="/geschichte" className="block px-5 py-2.5 hover:bg-gray-50 transition">
                    {t("Unsenre Geschichte")}
                  </Link>
                  <Link to="/standorte" className="block px-5 py-2.5 hover:bg-gray-50 transition">
                    {t("Standorte")}
                  </Link>
                  <Link to="/team" className="block px-5 py-2.5 hover:bg-gray-50 transition">
                    {t("Team")}
                  </Link>
                  <Link to="/stellenangebote" className="block px-5 py-2.5 hover:bg-gray-50 transition">
                    {t("Stellenangebote")}
                  </Link>
                  <Link to="/blog" className="block px-5 py-2.5 hover:bg-gray-50 transition">
                    {t("Blog")}
                  </Link>
                  <Link to="/kontakt" className="block px-5 py-2.5 hover:bg-gray-50 transition">
                    {t("Kontakt")}
                  </Link>
                </div>
              )}
            </div>

            {/* Language Selector - Đẹp lung linh */}
                        {/* Language Selector – ĐẸP Y HÌNH, MOBILE FRIENDLY */}
                        <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === "lang" ? null : "lang")}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium text-sm hover:bg-white/30 transition-all duration-200"
              >
                <img
                  src={currentLang === "en" ? "./enFlag.jpg" : "./nlFlag.png"}
                  alt={currentLang}
                  className="w-6 h-6 rounded-full object-cover shadow-sm"
                />
                <span className="uppercase tracking-wider">{currentLang}</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${openDropdown === "lang" ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown ngôn ngữ – siêu sạch như ảnh */}
              {openDropdown === "lang" && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 z-50">
                  <button
                    onClick={() => changeLanguage("nl")}
                    className={`w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-all text-left ${
                      currentLang === "nl" ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img src="./nlFlag.png" alt="NL" className="w-7 h-7 rounded-full" />
                      <span className="font-medium text-gray-800">Nederlands</span>
                    </div>
                  </button>

                  <button
                    onClick={() => changeLanguage("en")}
                    className={`w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-all text-left ${
                      currentLang === "en" ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img src="./enFlag.jpg" alt="EN" className="w-7 h-7 rounded-full" />
                      <span className="font-medium text-gray-800">English</span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="border-2 border-white text-white px-7 py-3 rounded-full font-medium hover:bg-white hover:text-[#c5bbad] transition text-sm">
              {t("Programm verlängern")}
            </button>
            <button className="bg-white text-[#c5bbad] px-7 py-3 rounded-full font-medium hover:bg-gray-100 transition shadow-lg text-sm">
              {t("Termin vereinbaren")}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}