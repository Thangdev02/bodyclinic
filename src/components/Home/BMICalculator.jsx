"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function BMICalculator() {
  const [height, setHeight] = useState(180)
  const [weight, setWeight] = useState(75)

  const bmi = (weight / (height / 100) ** 2).toFixed(1)

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return { category: "Untergewicht (BMI < 18.5)", color: "#d2f9ff" }
    if (bmi < 25) return { category: "Normalgewicht (BMI 18,5 – 25)", color: "bg-cyan-200" }
    if (bmi < 30) return { category: "Übergewicht (BMI 25 – 30)", color: "bg-yellow-200" }
    return { category: "Adipositas (BMI > 30)", color: "bg-red-200" }
  }

  const category = getBMICategory(Number.parseFloat(bmi))

  return (
    <section className="bg-gradient-to-b from-[#f1ece7] to-[#f1ece7] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <h2 className="text-5xl font-bold mb-6 text-gray-900" style={{ lineHeight: "1.2" }}>
              Berechnen Sie, ob Abnehmen mit Spritzen für Sie geeignet ist
            </h2>
            <p className="text-gray-700 text-lg" style={{ lineHeight: "2" }}>
              Ermitteln Sie schnell und einfach Ihren BMI, um zu prüfen, ob medizinisches Abnehmen für Sie geeignet ist.
              Geben Sie einfach Ihre Größe und Ihr Gewicht ein – unser Rechner zeigt Ihnen Ihr Ergebnis an
            </p>
          </div>

          {/* Right - Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">BMI-Rechner</h3>

            {/* Height */}
            <div className="mb-8">
              <label className="block text-gray-900 font-medium mb-4">Größe</label>
              <input
                type="range"
                min="120"
                max="250"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>120 cm</span>
                <span>{height} cm</span>
                <span>250 cm</span>
              </div>
            </div>

            {/* Weight */}
            <div className="mb-8">
              <label className="block text-gray-900 font-medium mb-4">Gewicht</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setWeight(Math.max(20, weight - 1))}
                  className="border-2 border-gray-300 w-10 h-10 rounded hover:bg-gray-100"
                >
                  −
                </button>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="flex-1 text-center text-2xl font-bold text-gray-900 border-b-2 border-gray-300 pb-2"
                />
                <button
                  onClick={() => setWeight(Math.min(200, weight + 1))}
                  className="border-2 border-gray-300 w-10 h-10 rounded hover:bg-gray-100"
                >
                  +
                </button>
                <span className="text-gray-700 font-medium">kg</span>
              </div>
            </div>

            {/* Result */}
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <p className="text-gray-600 mb-2">Ihr BMI</p>
              <p className="text-4xl font-bold text-gray-900">{bmi}</p>
            </div>

            {/* Category */}
            <div className={`${category.color} p-6 rounded-lg`}>
              <p className="font-bold text-gray-900 mb-3">{category.category}</p>
              <p className="text-gray-800 text-1xl">
                Ihr Körpergewicht liegt im gesunden Bereich. Eine medizinische Gewichtsreduktion mit Medikamenten ist
                nicht erforderlich. Bei Fragen zu einem gesunden Lebensstil können Sie sich gerne an uns wenden.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
