"use client";

import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { CheckCircle, Star, ChevronDown } from "react-bootstrap-icons";
import { BiMessageRounded } from "react-icons/bi";
import { FaAppleAlt } from "react-icons/fa";
import { GiStumpRegrowth } from "react-icons/gi";
import { IoIosWarning } from "react-icons/io";

import Finden from '../../../components/Home/Finden';
import TimelineSection from '../../../components/Home/TimelineSection';
import Testimonials from '../../../components/Home/Testimonials';
import ExpertsSection from '../../../components/Home/ExpertsSection';
import DoctorsSection from '../../../components/Home/DoctorsSection';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="faq-item">
      <button className="faq-header" onClick={onToggle}>
        <span>{question}</span>
        <ChevronDown className={`faq-icon ${isOpen ? "open" : ""}`} />
      </button>
      {isOpen && (
        <motion.div
          className="faq-answer"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p>{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

const Diesection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("1-3");

  const timelineData = {
    "1-3": {
      benefits: [
        { icon: BiMessageRounded, title: t("tabletten.timeline.1_3.benefit1.title"), description: t("tabletten.timeline.1_3.benefit1.desc") },
        { icon: FaAppleAlt,       title: t("tabletten.timeline.1_3.benefit2.title"), description: t("tabletten.timeline.1_3.benefit2.desc") },
        { icon: GiStumpRegrowth,  title: t("tabletten.timeline.1_3.benefit3.title"), description: t("tabletten.timeline.1_3.benefit3.desc") },
        { icon: IoIosWarning,     title: t("tabletten.timeline.1_3.benefit4.title"), description: t("tabletten.timeline.1_3.benefit4.desc") },
      ],
      image: "./stasweigh.webp",
      startWeight: "98 kg",
      month2Weight: "92 kg (-6kg)",
      note: t("tabletten.timeline.note"),
    },
    "3-6": {
      benefits: [
        { icon: BiMessageRounded, title: t("tabletten.timeline.3_6.benefit1.title"), description: t("tabletten.timeline.3_6.benefit1.desc") },
        { icon: FaAppleAlt,       title: t("tabletten.timeline.3_6.benefit2.title"), description: t("tabletten.timeline.3_6.benefit2.desc") },
        { icon: GiStumpRegrowth,  title: t("tabletten.timeline.3_6.benefit3.title"), description: t("tabletten.timeline.3_6.benefit3.desc") },
        { icon: IoIosWarning,     title: t("tabletten.timeline.3_6.benefit4.title"), description: t("tabletten.timeline.3_6.benefit4.desc") },
      ],
      image: "./stasweigh.webp",
      startWeight: "98 kg",
      month5Weight: "85 kg (-13kg)",
      note: t("tabletten.timeline.note"),
    },
    "6-12": {
      benefits: [
        { icon: BiMessageRounded, title: t("tabletten.timeline.6_12.benefit1.title"), description: t("tabletten.timeline.6_12.benefit1.desc") },
        { icon: FaAppleAlt,       title: t("tabletten.timeline.6_12.benefit2.title"), description: t("tabletten.timeline.6_12.benefit2.desc") },
        { icon: GiStumpRegrowth,  title: t("tabletten.timeline.6_12.benefit3.title"), description: t("tabletten.timeline.6_12.benefit3.desc") },
        { icon: IoIosWarning,     title: t("tabletten.timeline.6_12.benefit4.title"), description: t("tabletten.timeline.6_12.benefit4.desc") },
      ],
      image: "./stasweigh.webp",
      startWeight: "98 kg",
      month12Weight: "76 kg (-22kg)",
      note: t("tabletten.timeline.note"),
    },
  };

  const currentData = timelineData[activeTab];

  return (
    <div className="timeline-section">
      <div className="timeline-container">
        <h2 className="timeline-title">{t("tabletten.timeline.title")}</h2>
        <p className="timeline-subtitle">{t("tabletten.timeline.subtitle")}</p>

        <div className="timeline-tabs">
          {["1-3", "3-6", "6-12"].map((tab) => (
            <button
              key={tab}
              className={`timeline-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "1-3" ? t("tabletten.timeline.tab1") : tab === "3-6" ? t("tabletten.timeline.tab2") : t("tabletten.timeline.tab3")}
            </button>
          ))}
        </div>

        <div className="timeline-content">
          <div className="timeline-left">
            {currentData.benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon text-2xl text-[black]">
                  <benefit.icon />
                </div>
                <div className="benefit-text">
                  <h4>{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline-right">
            <img src={currentData.image} alt="Timeline" className="timeline-image rounded" />
            <div className="timeline-stats">
              <div className="timeline-stat">
                <span className="text-[black]">{t("tabletten.timeline.start")}</span>
                <span className="text-[black]">{currentData.startWeight}</span>
              </div>
              <div className="timeline-stat">
                <span className="text-[black]">
                  {activeTab === "1-3" ? t("tabletten.timeline.month2") :
                   activeTab === "3-6" ? t("tabletten.timeline.month5") : t("tabletten.timeline.month12")}:
                </span>
                <span className="stat-value">
                  {activeTab === "1-3" ? currentData.month2Weight :
                   activeTab === "3-6" ? currentData.month5Weight : currentData.month12Weight}
                </span>
              </div>
              <p className="text-[black]" style={{ fontWeight: "lighter" }}>{currentData.note}²</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MedicationInfoSection = () => {
  const { t } = useTranslation();
  return (
    <div className="medication-info-section">
      <div className="medication-container">
        <h2>{t("tabletten.medication.title")}</h2>
        <p>{t("tabletten.medication.p1")}</p>
        <p>{t("tabletten.medication.p2")}</p>
        <button className="btn-primary">{t("tabletten.medication.button")}</button>
      </div>
    </div>
  );
};

const SubHeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full h-[80vh] bg-center bg-cover flex items-center"
      style={{ backgroundImage: "url('./abbanner.jpg')" }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container relative z-10 max-w-3xl px-6 md:px-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          dangerouslySetInnerHTML={{ __html: t("tabletten.subhero.title") }} />
        <button className="bg-[#3A8CA4] hover:bg-[#327a8e] transition-colors text-white font-medium text-lg px-10 py-4 rounded-full shadow-lg">
          {t("tabletten.subhero.button")}
        </button>
      </div>
    </section>
  );
};

const EffectSection = () => {
  const { t } = useTranslation();
  return (
    <div className="effect-section">
      <div className="effect-container">
        <div className="effect-image">
          <img src="./wirkung.webp" alt="Injection preparation" className="injection-photo" />
        </div>
        <div className="effect-content">
          <h2>{t("tabletten.effect.title")}</h2>
          <p>{t("tabletten.effect.p1")}</p>
          <p>{t("tabletten.effect.p2")}</p>
          <p>{t("tabletten.effect.p3")}</p>
          <button className="btn-primary">{t("tabletten.effect.button")}</button>
        </div>
      </div>
    </div>
  );
};

const SafetySection = () => {
  const { t } = useTranslation();
  return (
    <div className="safety-section">
      <div className="safety-container container">
        <div className="safety-content">
          <h2>{t("tabletten.safety.title")}</h2>
          <p>{t("tabletten.safety.p1")}</p>
          <p dangerouslySetInnerHTML={{ __html: t("tabletten.safety.p2") }} />
        </div>
        <div className="safety-image">
          <img src="./schier.webp" alt="Medical consultation" className="consultation-photo" />
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: t("tabletten.faq.1.q"), answer: t("tabletten.faq.1.a") },
    { question: t("tabletten.faq.2.q"), answer: t("tabletten.faq.2.a") },
    { question: t("tabletten.faq.3.q"), answer: t("tabletten.faq.3.a") },
    { question: t("tabletten.faq.4.q"), answer: t("tabletten.faq.4.a") },
    { question: t("tabletten.faq.5.q"), answer: t("tabletten.faq.5.a") },
    { question: t("tabletten.faq.6.q"), answer: t("tabletten.faq.6.a") },
    { question: t("tabletten.faq.7.q"), answer: t("tabletten.faq.7.a") },
    { question: t("tabletten.faq.8.q"), answer: t("tabletten.faq.8.a") },
    { question: t("tabletten.faq.9.q"), answer: t("tabletten.faq.9.a") },
  ];

  return (
    <div className="faq-section">
      <div className="faq-container container">
        <h2>{t("tabletten.faq.title")}</h2>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Tabletent = () => {
  const { t } = useTranslation();

  return (
    <div className="erfahrungen-page">
      <section className="bg-gradient-to-b from-[#d6c8b8] to-[#d6c1a9] px-4 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-2 gap-12 items-center">

            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
                {t("tabletten.hero.title")}
              </h1>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
                  <span className="text-white text-lg">{t("tabletten.hero.benefit1")}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
                  <span className="text-white text-lg">{t("tabletten.hero.benefit2")}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
                  <span className="text-white text-lg">{t("tabletten.hero.benefit3")}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
                  <span className="text-white text-lg">{t("tabletten.hero.benefit4")}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-8">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-[#2d6a7d] fill-[#2d6a7d]" size={20} />
                  ))}
                </div>
                <span className="text-white text-lg font-semibold">{t("tabletten.hero.rating")}</span>
              </div>

              <button className="bg-[#2d6a7d] hover:bg-[#245661] text-white px-8 py-3 rounded-full font-semibold text-lg transition duration-300">
                {t("tabletten.hero.button")}
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
              <img src="./spri.webp" alt="Smiling woman" className="w-full h-full object-cover rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="author-info">
        <img src="./avtdoctor.webp" alt="Dr. Nicolette Lammers" className="avatar" />
        <div>
          <p>{t("tabletten.author.checked")}</p>
          <p><span style={{ color: '#568a9a' }}>{t("tabletten.author.name")}</span> geprüft.</p>
        </div>
      </div>

      <Finden />
      <Diesection />
      <MedicationInfoSection />
      <SubHeroSection />
      <Testimonials />
      <ExpertsSection />
      <DoctorsSection />
      <EffectSection />
      <SafetySection />
      <FAQSection />
    </div>
  );
};

export default Tabletent;