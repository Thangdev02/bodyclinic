"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

export default function StatsScrollSection() {
  const textRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // Calculate scroll progress (0 to 1) as section enters viewport
        const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / windowHeight))

        // Get all text spans and animate color
        const spans = textRef.current.querySelectorAll("span.text-char")
        spans.forEach((span, index) => {
          // Stagger the color change for each character
          const charProgress = Math.max(0, scrollProgress - index * 0.01)
          const grayValue = Math.round(160 - charProgress * 60) // 160 (gray) to 100 (darker)
          span.style.color = `rgb(${grayValue}, ${grayValue}, ${grayValue})`
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const stats = [
    {
      value: "22%",
      label: "BIS ZU 22% GEWICHTSVERLUST",
    },
    {
      value: "4.500",
      label: ">4.5 TSD. PATIENT:INNEN",
    },
    {
      value: "5,0",
      label: "5.0 AUF GOOGLE",
    },
    {
      value: "10",
      label: "10 ÄRZTPRAXEN",
    },
  ]

  // Function to split text into individual characters for animation
  const renderTextWithCharSpans = (text) => {
    return text.split("").map((char, idx) => (
      <span key={idx} className="text-char">
        {char}
      </span>
    ))
  }

  const fullText =
    "Sie individuelle, ärztlich begleitete Konzepte für nachhaltige Gewichtsabnahme mit oder ohne Medikamente – seit über 15 Jahren bewährt und jetzt auch in Deutschland."

  return (
    <section className="w-full bg-gradient-to-b from-[#ede8e2] to-[#ede8e2] py-20 px-4 sm:px-8 lg:px-16">
      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-3">{stat.value}</div>
              <p className="text-xs sm:text-sm font-semibold text-gray-600 tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Animated Text - Text fills in from gray to black */}
      <div className="max-w-4xl mx-auto text-even">
        <div  style={{lineHeight: "1.6"}} ref={textRef} className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold leading-tight ">
          <span className="text-gray-900">Mit der Body Clinic finden </span>
          <br />
          <span  style={{lineHeight: "1.6"}} className="text-gray-400">{renderTextWithCharSpans(fullText)}</span>
        </div>
      </div>
    </section>
  )
}
