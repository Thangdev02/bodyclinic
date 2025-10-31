"use client"
import { motion } from "framer-motion"
import { PlayCircle } from "react-bootstrap-icons"

export default function ExpertsSection() {
  return (
    <section className="bg-gradient-to-b from-[#ede8e2] to-[#ede8e2] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left - Video */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <div className="bg-gradient-to-br from-amber-200 to-amber-300 rounded-3xl overflow-hidden h-96">
              <img src="./image.png" alt="Video Thumbnail" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center hover:bg-black/30 transition cursor-pointer">
                <PlayCircle size={80} className="text-white" />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Experten für medizinisches Abnehmen</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Wir legen Wert auf Qualität und Ganzheitlichkeit: Sie erhalten persönliche, individuelle Betreuung durch
              approbierte Fachärzt:innen und Ernährungscoaches für nachhaltige Ergebnisse. Sie sprechen mit echten
              Menschen, nicht mit Algorithmen.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Wir freuen uns auf Sie – in unseren Praxen in Berlin, München, Hamburg oder Online.
            </p>
            <button className=" text-white px-8 py-3 rounded-full font-medium hover:bg-teal-800 transition" style={{ backgroundColor: "#417485" }}>
              Unsere Programme
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
