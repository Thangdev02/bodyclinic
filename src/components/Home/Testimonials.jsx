"use client"
import { motion } from "framer-motion"
import { Star } from "react-bootstrap-icons"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ismael Katz",
      rating: 5,
      text: "The Body Clinic is a game-changer in medical weight loss! Their expert team really knows their stuff when it comes to GLP-1 injections like Ozempic and Wegovy. It's not just about quick fixes—they focus on long-term success with personalized support. Whether you visit their Berlin clinic or go online, you're in great hands. Highly recommend for anyone looking to lose weight the right way!",
    },
    {
      name: "A. MS.",
      rating: 5,
      text: "Ich habe mich bereits im Eingangsgespräch sehr wohl gefühlt. Zum ersten Mal wurde ich mit meiner Thematik ernst genommen und es wurde behäuftsam ein ausgereiifter und ganzzeitlicher Plan für meine individuellen Bedürfnisse entwickelt. Ich bin total begeistert und fühle und sehe bereits erste Erfolge!",
    },
    {
      name: "Michael Tekleli",
      rating: 5,
      text: "Wer über Abnehmspritzen nachdenkt, ist bei The Body Clinic genau richtig! Die Fachärzte bieten nicht nur Expertise mit modernen GLP-1–Medikamenten wie Ozempic, Wegovy und Mounjaro, sondern legen auch großen Wert auf eine ganzheitliche Betreuung. Hier steht nachhaltiges Abnehmen im Fokus – professionell, persönlich und mit sichtbaren Erfolgen. Absolut empfehlenswert!",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-[#f3efeb] to-[#f3efeb] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Was unsere Patient:innen sagen</h2>
        <p className="text-center text-gray-700 mb-4">
          &gt; 4.500 Patient:innen vor Ihnen haben bereits erfolgreich den Weg zu einem gesünderen Gewicht
          eingeschlagen.
        </p>

        {/* Google Rating */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <img
            src="./images/google-logo.png"
            alt="Google"
            className="w-8 h-8"
            onError={(e) => (e.target.style.display = "none")}
          />
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="#1e40af" className="text-blue-800" />
            ))}
          </div>
          <span className="text-blue-800 font-bold">5,0 auf Google</span>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#f59e0b" className="text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600">Google review</p>
                </div>
                <img
                  src="./images/google-mini.png"
                  alt="G"
                  className="w-6 h-6 ml-auto"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
