"use client"

import { useState } from "react"
import "./erfahrungen.css"

// Hero Section Component
const HeroSection = () => (
  <div className="erfahrungen-hero">
    <div className="hero-breadcrumb">Home / Erfahrungen</div>
    <div className="hero-decorative-circle circle-1"></div>
    <div className="hero-decorative-circle circle-2"></div>
    <h1 className="hero-title">Kundenbewertungen</h1>
    <p className="hero-subtitle">The Body Clinic: Höchste Qualität & echte Erfolge</p>
  </div>
)

// Stats Section Component
const StatsSection = () => (
  <div className="stats-section">
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
          icon: "😊",
          title: "Verbesserte Laune und Wohlbefinden, mehr Energie",
          description: "Patienten berichten von verbesserter Stimmung und erhöhter Energie.",
        },
        {
          icon: "🍎",
          title: "Konstanter Gewichtsverlust",
          description: "Stetiger Gewichtsverlust über die ersten 3 Monate.",
        },
        {
          icon: "⬇️",
          title: "Größeres Gefühl der Selbstkontrolle",
          description: "Verbessertes Sättigungsgefühl und Appetitekontrolle.",
        },
        { icon: "🚫", title: "Weniger Heißhungerattacken", description: "Reduzierte Gelüste und Heißhungerattacken." },
      ],
      image: "./timeline-1-3.png",
      startWeight: "98 kg",
      month2Weight: "92 kg (-6kg)",
      note: "Beispiel für den Gewichtsverlust einer Patentin.",
    },
    "3-6": {
      benefits: [
        {
          icon: "😊",
          title: "Deutlichere Verbesserung der Stimmung",
          description: "Weitere Verbesserung des Wohlbefindens.",
        },
        {
          icon: "🍎",
          title: "Kontinuierlicher Gewichtsverlust",
          description: "Anhaltender Gewichtsverlust mit besseren Ergebnissen.",
        },
        { icon: "⬇️", title: "Starke Selbstkontrolle etabliert", description: "Etablierung gesunder Essgewohnheiten." },
        {
          icon: "💪",
          title: "Erhöhte körperliche Aktivität",
          description: "Mehr Energie für körperliche Aktivitäten.",
        },
      ],
      image: "./timeline-3-6.png",
      startWeight: "98 kg",
      month5Weight: "85 kg (-13kg)",
      note: "Beispiel für den Gewichtsverlust einer Patentin.",
    },
    "6-12": {
      benefits: [
        {
          icon: "😊",
          title: "Stabile emotionale Verbesserung",
          description: "Langfristige positive Stimmungsveränderung.",
        },
        {
          icon: "🍎",
          title: "Signifikanter Gewichtsverlust",
          description: "Beeindruckende Gesamtergebnisse nach 12 Monaten.",
        },
        { icon: "⬇️", title: "Vollständige Selbstkontrolle", description: "Dauerhafte Essgewohnheitsumstellung." },
        { icon: "⭐", title: "Erhöhtes Selbstvertrauen", description: "Verbessertes Körperbild und Selbstvertrauen." },
      ],
      image: "./timeline-6-12.png",
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
                <div className="benefit-icon">{benefit.icon}</div>
                <div className="benefit-text">
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline-right">
            <img src={currentData.image || "/placeholder.svg"} alt="Timeline" className="timeline-image" />
            <div className="timeline-stats">
              <div className="timeline-stat">
                <span className="stat-label">Startgewicht:</span>
                <span className="stat-value">{currentData.startWeight}</span>
              </div>
              <div className="timeline-stat">
                <span className="stat-label">
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
              <p className="timeline-note">{currentData.note}²</p>
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
    <TimelineSection />
  </div>
)

export default ErfahrungenPage
