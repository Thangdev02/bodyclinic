import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Vielen Dank, ${vorname}! Du bist jetzt angemeldet.`);
    setEmail(""); setVorname(""); setNachname("");
  };

  const locations = [
    { name: "The Body Clinic Berlin", addr: "Schöneberger Ufer 71, 10785 Berlin" },
    { name: "The Body Clinic München", addr: "Bayerstraße 21, 80335 München" },
    { name: "The Body Clinic Hamburg", addr: "Sierichstraße 6, 22301 Hamburg" },
    { name: "The Body Clinic Amsterdam-Zuid", addr: "Achillesstraat 85, 1076 PX Amsterdam" },
    { name: "The Body Clinic Amsterdam Buitenveldert", addr: "Buitenveldert 116, 1081 AB Amsterdam" },
    { name: "The Body Clinic Rotterdam", addr: "Heemraadsingel 180, 3021 LH Rotterdam" },
    { name: "The Body Clinic Utrecht", addr: "Jan van Scorelstraat 19, 3583 CJ Utrecht" },
    { name: "The Body Clinic Den Haag", addr: "Parkstraat 101, 2514 JH Den Haag" },
    { name: "The Body Clinic Eindhoven", addr: "Avignonlaan 9B, 5627 GA Eindhoven" },
    { name: "The Body Clinic Den Bosch", addr: "Oude Vlijmenseweg 114, 5223 GS 's-Hertogenbosch" },
    { name: "The Body Clinic Duiven", addr: "Ploenstraat 30, 6921 PN Duiven" },
    { name: "The Body Clinic Groningen", addr: "H.A. Kooykerplein 3, 9713 GT Groningen" },
    { name: "The Body Clinic Heerenveen", addr: "Fok 68, 8441 BR Heerenveen" },
    { name: "The Body Clinic Maastricht", addr: "Parkweg 26, 6212 XN Maastricht" },
  ];

  return (
    <footer className="bg-[#1f1f1f] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Über uns */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Über uns</h3>
            <p className="text-sm leading-relaxed">
              Die Body Clinic ist der Experte für medizinisches Abnehmen mit Spritze.
              Mit über 15 Jahren Erfahrung, u.a. in der Anwendung der neuesten GLP-1-Medikamente,
              und mehr als 4.500 zufriedenen Patient:innen sind wir in den Niederlanden bereits
              Marktführer in der privatärztlichen Versorgung und nun auch in Deutschland aktiv.
            </p>
          </div>

          {/* Column 2: Standorte */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Standorte</h3>
            <ul className="text-sm space-y-3">
              {locations.map((loc, i) => (
                <li key={i}>
                  <p className="font-medium text-white">{loc.name}</p>
                  <p className="text-gray-400">{loc.addr}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Medikamente */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Medikamente</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>Abnehmen mit Spritzen</li>
              <li>Medikamente zum Abnehmen</li>
              <li>Ozempic</li>
              <li>Wegovy</li>
              <li>Mounjaro</li>
              <li>Saxenda</li>
              <li>Rybelsus</li>
              <li>Mysimba</li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Newsletter</h3>
            <p className="text-sm mb-6">
              Abonnieren Sie unseren Newsletter für aktuelle Infos rund um medizinisches Abnehmen und The Body Clinic.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="E-Mail-Adresse"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                placeholder="Vorname"
                value={vorname}
                onChange={(e) => setVorname(e.target.value)}
                required
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                placeholder="Nachname"
                value={nachname}
                onChange={(e) => setNachname(e.target.value)}
                required
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="w-full py-3 bg-teal-500 text-white font-medium rounded-full hover:bg-teal-400 transition"
              >
                Abonnieren
              </button>
            </form>

            <div className="mt-8">
              <p className="text-sm uppercase tracking-wider mb-3">Folgen Sie uns</p>
              <div className="flex gap-4">
                {["linkedin", "instagram", "facebook", "youtube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-teal-500 transition"
                  >
                    <span className="sr-only">{social}</span>
                    <img src={`/icons/${social}.svg`} alt={social} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500">Copyright © 2025 – The Body Clinic</p>
          <div className="flex gap-6 mt-4 md:mt-0 text-gray-400">
            <a href="#" className="hover:text-teal-400 transition">Impressum</a>
            <a href="#" className="hover:text-teal-400 transition">Cookie Einstellungen</a>
            <a href="#" className="hover:text-teal-400 transition">Datenschutzerklärung</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;