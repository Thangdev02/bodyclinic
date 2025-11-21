"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import "./erfahrungen.css"
import Testimonials from "../components/Home/Testimonials"
import { BiMessageRounded } from "react-icons/bi"
import { FaAppleAlt } from "react-icons/fa"
import { GiStumpRegrowth } from "react-icons/gi"
import { IoIosWarning } from "react-icons/io"
import Finden from "../components/Home/Finden"
import CTASection from "../components/Home/CTASection"

const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <div className="hero-section">
      <div className="hero-content container">
        <h1 className="hero-title">{t("erfahrungen_hero_title")}</h1>
        <p style={{ fontWeight: 'lighter' }} className="text-3xl">
          {t("erfahrungen_hero_subtitle")}
        </p>
      </div>
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  )
}

const StatsSection = () => {
  const { t } = useTranslation()
  return (
    <div className="stats-section border-t border-white">
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-number">22%</div>
          <div className="stat-label">{t("erfahrungen_stat1")}</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">4.500</div>
          <div className="stat-label">{t("erfahrungen_stat2")}</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">5,0</div>
          <div className="stat-label">{t("erfahrungen_stat3")}</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">10</div>
          <div className="stat-label">{t("erfahrungen_stat4")}</div>
        </div>
      </div>
    </div>
  )
}

const TimelineSection = () => {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState("1-3")

  const timelineData = {
    "1-3": {
      benefits: [
        { icon: BiMessageRounded, title: t("erfahrungen_m1_3_1_title"), desc: t("erfahrungen_m1_3_1_desc") },
        { icon: FaAppleAlt,       title: t("erfahrungen_m1_3_2_title"), desc: t("erfahrungen_m1_3_2_desc") },
        { icon: GiStumpRegrowth,  title: t("erfahrungen_m1_3_3_title"), desc: t("erfahrungen_m1_3_3_desc") },
        { icon: IoIosWarning,     title: t("erfahrungen_m1_3_4_title"), desc: t("erfahrungen_m1_3_4_desc") },
      ],
      weight: "92 kg (-6kg)"
    },
    "3-6": {
      benefits: [
        { icon: BiMessageRounded, title: t("erfahrungen_m3_6_1_title"), desc: t("erfahrungen_m3_6_1_desc") },
        { icon: FaAppleAlt,       title: t("erfahrungen_m3_6_2_title"), desc: t("erfahrungen_m3_6_2_desc") },
        { icon: GiStumpRegrowth,  title: t("erfahrungen_m3_6_3_title"), desc: t("erfahrungen_m3_6_3_desc") },
        { icon: IoIosWarning,     title: t("erfahrungen_m3_6_4_title"), desc: t("erfahrungen_m3_6_4_desc") },
      ],
      weight: "85 kg (-13kg)"
    },
    "6-12": {
      benefits: [
        { icon: BiMessageRounded, title: t("erfahrungen_m6_12_1_title"), desc: t("erfahrungen_m6_12_1_desc") },
        { icon: FaAppleAlt,       title: t("erfahrungen_m6_12_2_title"), desc: t("erfahrungen_m6_12_2_desc") },
        { icon: GiStumpRegrowth,  title: t("erfahrungen_m6_12_3_title"), desc: t("erfahrungen_m6_12_3_desc") },
        { icon: IoIosWarning,     title: t("erfahrungen_m6_12_4_title"), desc: t("erfahrungen_m6_12_4_desc") },
      ],
      weight: "76 kg (-22kg)"
    }
  }

  const current = timelineData[activeTab]

  return (
    <div className="timeline-section">
      <div className="timeline-container">
        <h2 className="timeline-title">{t("erfahrungen_timeline_title")}</h2>
        <p className="timeline-subtitle">{t("erfahrungen_timeline_subtitle")}</p>

        <div className="timeline-tabs">
          <button className={`timeline-tab ${activeTab === "1-3" ? "active" : ""}`} onClick={() => setActiveTab("1-3")}>{t("erfahrungen_tab_1")}</button>
          <button className={`timeline-tab ${activeTab === "3-6" ? "active" : ""}`} onClick={() => setActiveTab("3-6")}>{t("erfahrungen_tab_2")}</button>
          <button className={`timeline-tab ${activeTab === "6-12" ? "active" : ""}`} onClick={() => setActiveTab("6-12")}>{t("erfahrungen_tab_3")}</button>
        </div>

        <div className="timeline-content">
          <div className="timeline-left">
            {current.benefits.map((b, i) => (
              <div key={i} className="benefit-card">
                <div className="benefit-icon text-2xl text-[black]"><b.icon /></div>
                <div className="benefit-text">
                  <h4>{b.title}</h4>
                  <p className="text-gray-600 text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline-right">
            <img src="./stasweigh.webp" alt="Timeline" className="timeline-image rounded" />
            <div className="timeline-stats">
              <div className="timeline-stat">
                <span className="text-[black]">{t("erfahrungen_startweight")}:</span>
                <span className="text-[black] font-semibold">98 kg</span>
              </div>
              <div className="timeline-stat">
                <span className="text-[black]">{t("erfahrungen_month_label")}:</span>
                <span className="stat-value font-bold text-teal-600">{current.weight}</span>
              </div>
              <p className="text-[black] text-sm" style={{ fontWeight: "lighter" }}>{t("erfahrungen_note")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ErfahrungenPage = () => (
  <div className="erfahrungen-page">
    <HeroSection />
    <StatsSection />
    <Testimonials />
    <TimelineSection />
    <Finden />
    <CTASection />
  </div>
)

export default ErfahrungenPage