"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons"

export default function DoctorsSection() {
  const doctors = [
    { name: "Dr. Nicolette Lammers", role: "Arzt",avatar:"./doctor1.webp" },
    { name: "Dr. Dr. Torsten Schröder", role: "Arzt",avatar:"./doctor2.webp" },
    { name: "Dr. medic Stanislav Kvint", role: "Arzt",avatar:"./doctor3.webp" },
    { name: "Dr. med. Newroz Narcin", role: "Arzt",avatar:"./doctor4.webp" },
    { name: "Nadine Meier", role: "Ernährungscoach",avatar:"./doctor5.webp" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const showDoctors = doctors.slice(currentIndex, currentIndex + 5)

  return (
    <section className="bg-gradient-to-b from-[#f3efeb] to-[#f3efeb] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Begleitende Ärzte</h2>
        <p className="text-center text-gray-700 mb-12">
          Echte Ärzte, individuelle Begleitung: Diese erfahrenen, approbierten Mediziner:innen entwickeln in
          persönlichen Gesprächen die für Sie beste Therapie für nachhaltigen Gewichtsverlust.
        </p>

        {/* Doctors Grid */}
        <div className="grid grid-cols-5 gap-6 mb-8">
          {showDoctors.map((doctor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center overflow-hidden">
                <img src={doctor.avatar} alt={doctor.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-gray-900 text-center">{doctor.name}</h4>
              <p className="text-sm text-gray-600 text-center">{doctor.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {[0, 1].map((dot) => (
              <button
                key={dot}
                onClick={() => setCurrentIndex(dot * 5)}
                className={`w-3 h-3 rounded-full transition ${
                  currentIndex === dot * 5 ? "bg-gray-900" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrentIndex(Math.min(doctors.length - 5, currentIndex + 1))}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* More Button */}
        <div className="flex justify-center">
          <button className=" text-white px-8 py-3 rounded-full font-medium hover:bg-teal-800 transition" style={{ backgroundColor: "#417485" }}>
            Mehr erfahren
          </button>
        </div>
      </div>
    </section>
  )
}
