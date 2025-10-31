"use client"
import { motion } from "framer-motion"
import { CheckCircle } from "react-bootstrap-icons"

export default function Finden() {
  const programs = [
    {
      title: "Abnehmen mit Spritzen",
      features: [
        "Ärztliche Betreuung",
        "Ab 345€ - inkl. Abnehmspritzen",
        "Lieferung, wenn gewünscht!",
        "Gewichtsreduktion bis zu 22%",
      ],
      price: "Mehr erfahren",
    },
    {
      title: "Abnehmen mit Tabletten",
      features: [
        "Ärztliche Betreuung",
        "Preis auf Nachfrage",
        "Lieferung, wenn gewünscht!",
        "Gewichtsreduktion bis zu 15%",
      ],
      price: "Mehr erfahren",
    },
    {
      title: "Abnehmen ohne Medikamente",
      features: ["Ernährungstherapeutische Anamnese", "Ab 120€", "Individuelle Programmdauer"],
      price: "Mehr erfahren",
    },
  ]

  const leftFeatures = [
    "Persönliches Coaching durch Experten",
    "Zugang zu Online-Fitnessplattform",
    "Individuelle Pläne und Hilfsmittel zur Unterstützung Ihrer Abnehmreise",
  ]

  return (
    <section className=" bg-gradient-to-b from-[#f3efeb] to-[#f3efeb] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-start mb-4 text-gray-900">Finden Sie Ihre Abnehmethode</h2>
        <p className="text-start text-gray-700 mb-16 text-lg">
          Individuelle, ärztlich abgestimmte Programme – mit oder ohne Medikamente.
        </p>

        <div className="grid grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="col-span-3">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              In allen
              <br />
              Programmen
              <br />
              enthalten:
            </h3>
            <div className="space-y-4">
              {leftFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="col-span-9 grid grid-cols-3 gap-6">
            {programs.map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className=" rounded-2xl p-8 flex flex-col" style={{ backgroundColor: "#d8dfe0" }}
              >
                <h4 className="text-xl font-bold mb-6 text-gray-900">{program.title}</h4>
                <div className="flex-1 space-y-4 mb-8">
                  {program.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3">
                      <CheckCircle className="text-teal-700 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-800 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className=" text-white px-8 py-3 rounded-full font-medium hover:bg-teal-800 transition w-full" style={{ backgroundColor: "#417485" }}>
                  {program.price}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
