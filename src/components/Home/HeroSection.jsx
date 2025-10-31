"use client"
import { motion } from "framer-motion"
import { CheckCircle, Star } from "react-bootstrap-icons"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#d6c8b8] to-[#d6c1a9] px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
              Gemeinsam
              <br />
              nachhältig
              <br />
              abnehmen.
            </h1>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
                <span className="text-white text-lg">Betreuung durch Ärzte & Coaches</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
                <span className="text-white text-lg">Medikamentöse Therapien – bei ärztlicher Indikation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
                <span className="text-white text-lg">GLP-1 Behandlungen ab 345€ pro Monat</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#2d6a7d] fill-[#2d6a7d]" size={20} />
                ))}
              </div>
              <span className="text-white text-lg font-semibold">5.0 auf Google</span>
            </div>

            {/* CTA Button */}
            <button className="bg-[#2d6a7d] hover:bg-[#245661] text-white px-8 py-3 rounded-full font-semibold text-lg transition duration-300">
              Termin vereinbaren
            </button>
          </motion.div>

          {/* Right - Image with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <img src="./woman.png" alt="Smiling woman" className="w-full h-full object-cover" />

              {/* Floating Card 1 - Top Left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute top-20 left-0 bg-white rounded-xl p-6 shadow-lg w-48"
              >
                <p className="text-gray-900 font-semibold text-center">
                  Betreuung
                  <br />
                  durch Ärzte
                </p>
              </motion.div>

              {/* Floating Card 2 - Top Right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute top-32 right-0 bg-white rounded-xl p-6 shadow-lg w-48"
              >
                <p className="text-gray-900 font-semibold text-center">
                  ab 345€
                  <br />
                  pro Monat
                </p>
              </motion.div>

              {/* Floating Card 3 - Bottom Center */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white rounded-xl p-6 shadow-lg w-48"
              >
                <p className="text-gray-900 font-semibold text-center">
                  u.a. GLP-1
                  <br />
                  Behandlungen
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
