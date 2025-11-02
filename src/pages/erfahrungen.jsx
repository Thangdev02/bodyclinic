"use client"

import { useState } from "react"
import "./erfahrungen.css"
import Testimonials from "../components/Home/Testimonials"
import { BiMessageRounded } from "react-icons/bi";
import { FaAppleAlt } from "react-icons/fa";
import { GiStumpRegrowth } from "react-icons/gi";
import { IoIosWarning } from "react-icons/io";
import Finden from "../components/Home/Finden";
import CTASection from "../components/Home/CTASection";

// Hero Section Component
const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-content container">
          <h1 className="hero-title">
            Kundenbewertungen
          </h1>
          <p style={{ fontWeight: 'lighter' }} className="text-3xl">The Body Clinic: Höchste Qualität & echte Erfolge
          </p>
        </div>

        {/* Shapes */}
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>



    </>
  )
}

// Stats Section Component
const StatsSection = () => (
  <div className="stats-section border-t border-white">
    <div className="stats-container">
      <div className="stat-card">
        <div className="stat-number">22%</div>
        <div className="stat-label">BIS ZU 22% GEWICHTSVERLUST</div>
      </div>
      <div className="stat-card">
        <div className="stat-number">4.500</div>
        <div className="stat-label">&gt;4.5 TSD. PATIENT:INNEN</div>
      </div>
      <div className="stat-card">
        <div className="stat-number">5,0</div>
        <div className="stat-label">5.0 AUF GOOGLE</div>
      </div>
      <div className="stat-card">
        <div className="stat-number">10</div>
        <div className="stat-label">10 ARZTPRAXEN</div>
      </div>
    </div>
  </div>
)

// Timeline Section Component
const TimelineSection = () => {
  const [activeTab, setActiveTab] = useState("1-3")

  const timelineData = {
    "1-3": {
      benefits: [
        {
          icon: BiMessageRounded,
          title: "Verbesserte Laune und Wohlbefinden, mehr Energie",
          description: "Patienten berichten von verbesserter Stimmung und erhöhter Energie.",
        },
        {
          icon: FaAppleAlt,
          title: "Konstanter Gewichtsverlust",
          description: "Stetiger Gewichtsverlust über die ersten 3 Monate.",
        },
        {
          icon: GiStumpRegrowth,
          title: "Größeres Gefühl der Selbstkontrolle",
          description: "Verbessertes Sättigungsgefühl und Appetitekontrolle.",
        },
        { icon: IoIosWarning, title: "Möglicherweise Nebenwirkungen der Medikamente", description: "Reduzierte Gelüste und Heißhungerattacken." },
      ],
      image: "./stasweigh.webp",
      startWeight: "98 kg",
      month2Weight: "92 kg (-6kg)",
      note: "Beispiel für den Gewichtsverlust einer Patentin.",
    },
    "3-6": {
      benefits: [
        {
          icon: BiMessageRounded,
          title: "Deutlichere Verbesserung der Stimmung",
          description: "Weitere Verbesserung des Wohlbefindens.",
        },
        {
          icon: FaAppleAlt,
          title: "Kontinuierlicher Gewichtsverlust",
          description: "Anhaltender Gewichtsverlust mit besseren Ergebnissen.",
        },
        { icon: GiStumpRegrowth, title: "Starke Selbstkontrolle etabliert", description: "Etablierung gesunder Essgewohnheiten." },
        {
          icon: IoIosWarning,
          title: "Erhöhte körperliche Aktivität",
          description: "Mehr Energie für körperliche Aktivitäten.",
        },
      ],
      image: "./stasweigh.webp",
      startWeight: "98 kg",
      month5Weight: "85 kg (-13kg)",
      note: "Beispiel für den Gewichtsverlust einer Patentin.",
    },
    "6-12": {
      benefits: [
        {
          icon: BiMessageRounded,
          title: "Stabile emotionale Verbesserung",
          description: "Langfristige positive Stimmungsveränderung.",
        },
        {
          icon: FaAppleAlt,
          title: "Signifikanter Gewichtsverlust",
          description: "Beeindruckende Gesamtergebnisse nach 12 Monaten.",
        },
        { icon: GiStumpRegrowth, title: "Vollständige Selbstkontrolle", description: "Dauerhafte Essgewohnheitsumstellung." },
        { icon: IoIosWarning, title: "Erhöhtes Selbstvertrauen", description: "Verbessertes Körperbild und Selbstvertrauen." },
      ],
      image: "./stasweigh.webp",
      startWeight: "98 kg",
      month12Weight: "76 kg (-22kg)",
      note: "Beispiel für den Gewichtsverlust einer Patentin.",
    },
  }

  const currentData = timelineData[activeTab]

  return (
    <div className="timeline-section">
      <div className="timeline-container">
        <h2 className="timeline-title">Die ersten 12 Monate in Programmen mit medikamentöser Behandlung</h2>
        <p className="timeline-subtitle">
          Typische Fortschritte unserer Patient:innen. Ergebnisse und Zeiträume können von Person zu Person variieren.
        </p>

        {/* Tab Navigation */}
        <div className="timeline-tabs">
          {["1-3", "3-6", "6-12"].map((tab) => (
            <button
              key={tab}
              className={`timeline-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "1-3" ? "Monate 1 – 3" : tab === "3-6" ? "Monate 3 – 6" : "Monate 6 – 12"}
            </button>
          ))}
        </div>

        {/* Timeline Content */}
        <div className="timeline-content">
          <div className="timeline-left">
            {currentData.benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon text-2xl text-[black]">
                  {typeof benefit.icon === "function" ? (
                    <benefit.icon />
                  ) : (
                    benefit.icon
                  )}
                </div>

                <div className="benefit-text">
                  <h4>{benefit.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline-right">
            <img src={currentData.image || "./stasweigh.webp"} alt="Timeline" className="timeline-image rounded" />
            <div className="timeline-stats">
              <div className="timeline-stat">
                <span className="text-[black]">Startgewicht:</span>
                <span className="text-[black]">{currentData.startWeight}</span>
              </div>
              <div className="timeline-stat">
                <span className="text-[black]">
                  {activeTab === "1-3" ? "Monat 2" : activeTab === "3-6" ? "Monat 5" : "Monat 12"}:
                </span>
                <span className="stat-value">
                  {activeTab === "1-3"
                    ? currentData.month2Weight
                    : activeTab === "3-6"
                      ? currentData.month5Weight
                      : currentData.month12Weight}
                </span>
              </div>
              <p className="text-[black] " style={{ fontWeight: "lighter" }}>{currentData.note}²</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Page Component
const ErfahrungenPage = () => (
  <div className="erfahrungen-page">
    <HeroSection />
    <StatsSection />
    <Testimonials />
    <TimelineSection />
    <Finden/>
    <CTASection/>
  </div>
)

export default ErfahrungenPage
