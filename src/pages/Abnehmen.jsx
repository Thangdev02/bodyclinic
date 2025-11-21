"use client";

import { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import "./abnehmen.css";
import { useTranslation } from "react-i18next";
import TimelineSection from "../components/Home/TimelineSection";
import BMICalculator from "../components/Home/BMICalculator";
import Testimonials from "../components/Home/Testimonials";
import DoctorsSection from "../components/Home/DoctorsSection";
import Finden from "../components/Home/Finden";
import CTASection from "../components/Home/CTASection";
import FuBnoten from "../components/FuBnoten";


// ============ HERO SECTION ============
const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="hero-section">
        <div className="hero-content container">
          <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t("abnehmen.hero.title") }} />
          <p className="text-3xl">{t("abnehmen.hero.subtitle")}</p>
        </div>

        {/* Shapes */}
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="author-info">
        <img src="./avtdoctor.webp" alt="Dr. Nicolette Lammers" className="avatar" />
        <div>
          <p>{t("abnehmen.doctor.checked")}</p>
          <p>
            <span style={{ color: '#568a9a' }}>{t("abnehmen.doctor.name")}</span> geprüft.
          </p>
        </div>
      </div>
    </>
  );
};

// ============ MEDICATION INFO SECTION ============
const MedicationInfoSection = () => {
  const { t } = useTranslation();

  return (
    <div className="medication-info-section">
      <div className="medication-container">
        <h2>{t("abnehmen.medication.title")}</h2>
        <p>{t("abnehmen.medication.p1")}</p>
        <p>{t("abnehmen.medication.p2")}</p>
        <button className="btn-primary">{t("abnehmen.medication.button")}</button>
      </div>
    </div>
  );
};

const MedikationInfoSection = () => {
  const { t } = useTranslation();

  return (
    <div className="medication-info-section" style={{ background: 'linear-gradient(135deg, #ede8e2 0%, #ede8e2 100%)' }}>
      <div className="medication-container">
        <h2 style={{ width: '90%' }}>{t("abnehmen.no_medication.title")}</h2>
        <p className="">
          {t("abnehmen.no_medication.p1")}
        </p>
        <p>
          {t("abnehmen.no_medication.p2")}
        </p>
        <button className="btn-primary">{t("abnehmen.no_medication.button")}</button>
      </div>
    </div>
  );
};

// ============ PROGRAM COMPARISON SECTION ============
const ProgramCard = ({ title, price, features, buttonText, isHighlight }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className={`program-card ${isHighlight ? "highlight" : ""}`}
      whileHover={{ translateY: -5 }}
      transition={{ duration: 0.3 }}
    >
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <ul className="features-list">
        {features.map((feature, idx) => (
          <li key={idx}>
            <span className="checkmark">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="btn-secondary">{buttonText}</button>
    </motion.div>
  );
};

const ProgramComparisonSection = () => {
  const { t } = useTranslation();

  const starterFeatures = ["Ab 345€", "1 Monat (niedrigere Dosierung)", "2× Persönliches Coaching durch Experten", ""];
  const extendedFeatures = ["Ab 485€", "1, 2, oder 3 Monate", "1× pro Monat persönliches Coaching durch Experten", ""];

  return (
    <div className="program-section">
      <div className="program-intro">
        <h2>{t("abnehmen.program.title")}</h2>
        <div className="program-benefits">
          <h3>{t("abnehmen.program.included")}</h3>
          <ul>
            <li>
              <span className="checkmark">✓</span>{t("abnehmen.program.feature.1")}
            </li>
            <li>
              <span className="checkmark">✓</span>{t("abnehmen.program.feature.2")}
            </li>
            <li>
              <span className="checkmark">✓</span>{t("abnehmen.program.feature.3")}
            </li>
            <li>
              <span className="checkmark">✓</span>{t("abnehmen.program.feature.4")}
            </li>
            <li>
              <span className="checkmark">✓</span>{t("abnehmen.program.feature.5")}
            </li>
          </ul>
        </div>
      </div>
      <div className="programs-grid">
        <ProgramCard
          title={t("abnehmen.program.starter.title")}
          price={t("abnehmen.program.starter.price")}
          features={starterFeatures}
          buttonText={t("abnehmen.program.starter.button")}
        />
        <ProgramCard
          title={t("abnehmen.program.extended.title")}
          price={t("abnehmen.program.extended.price")}
          features={extendedFeatures}
          buttonText={t("abnehmen.program.extended.button")}
          isHighlight={true}
        />
      </div>
    </div>
  );
};

// ============ EXPERTS SECTION ============
const ExpertsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="experts-section">
      <div className="experts-container">
        <div className="experts-image">
          <img src="./expert.webp" alt="The Body Clinic" className="clinic-photo" />
        </div>
        <div className="experts-content">
          <h2>{t("abnehmen.experts.title")}</h2>
          <p>{t("abnehmen.experts.p1")}</p>
          <h3>{t("abnehmen.experts.subtitle")}</h3>
          <p>
            {t("abnehmen.experts.p2")}
            <span className="link">{t("abnehmen.experts.practices")}</span> {t("abnehmen.experts.p2_continued")}.
          </p>
          <button className="btn-primary">{t("abnehmen.experts.button")}</button>
        </div>
      </div>
    </div>
  );
};

// ============ EFFECT SECTION ============
const EffectSection = () => {
  const { t } = useTranslation();

  return (
    <div className="effect-section">
      <div className="effect-container">
        <div className="effect-image">
          <img src="./wirkung.webp" alt="Injection preparation" className="injection-photo" />
        </div>
        <div className="effect-content">
          <h2>{t("abnehmen.effect.title")}</h2>
          <p>{t("abnehmen.effect.p1")}</p>
          <p>{t("abnehmen.effect.p2")}</p>
          <p>{t("abnehmen.effect.p3")}</p>
          <button className="btn-primary">{t("abnehmen.effect.button")}</button>
        </div>
      </div>
    </div>
  );
};

// ============ INDICATIONS SECTION ============
const IndicationsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="indications-section">
      <div className="indications-container">
        <h2>{t("abnehmen.indications.title")}</h2>
        <p>{t("abnehmen.indications.p1")}</p>
        <div className="indications-grid">
          <div className="indication-box">
            <p>{t("abnehmen.indications.condition1")}</p>
          </div>
          <div className="indication-box">
            <p>{t("abnehmen.indications.condition2")}</p>
          </div>
        </div>
        <button className="btn-primary">{t("abnehmen.indications.button")}</button>
      </div>
    </div>
  );
};

// ============ FAQ ACCORDION ============
const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  const { t } = useTranslation();

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

const SubHeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative w-full h-[80vh] bg-center bg-cover flex items-center"
      style={{
        backgroundImage: "url('./abbanner.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container relative z-10 max-w-3xl px-6 md:px-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" dangerouslySetInnerHTML={{ __html: t("abnehmen.subhero.title") }} />
        <button className="bg-[#3A8CA4] hover:bg-[#327a8e] transition-colors text-white font-medium text-lg px-10 py-4 rounded-full shadow-lg">
          {t("abnehmen.subhero.button")}
        </button>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();

  const faqs = [
    {
      question: t("abnehmen.faq.1.q"),
      answer: t("abnehmen.faq.1.a"),
    },
    {
      question: t("abnehmen.faq.2.q"),
      answer: t("abnehmen.faq.2.a"),
    },
    {
      question: t("abnehmen.faq.3.q"),
      answer: t("abnehmen.faq.3.a"),
    },
    {
      question: t("abnehmen.faq.4.q"),
      answer: t("abnehmen.faq.4.a"),
    },
    {
      question: t("abnehmen.faq.5.q"),
      answer: t("abnehmen.faq.5.a"),
    },
    {
      question: t("abnehmen.faq.6.q"),
      answer: t("abnehmen.faq.6.a"),
    },
    {
      question: t("abnehmen.faq.7.q"),
      answer: t("abnehmen.faq.7.a"),
    },
    {
      question: t("abnehmen.faq.8.q"),
      answer: t("abnehmen.faq.8.a"),
    },
    {
      question: t("abnehmen.faq.9.q"),
      answer: t("abnehmen.faq.9.a"),
    },
  ];

  return (
    <div className="faq-section">
      <div className="faq-container">
        <h2>{t("abnehmen.faq.title")}</h2>
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

// ============ MAIN PAGE ============
export default function AbnehmenPage() {
const { t } = useTranslation();
  
  return (
    <div className="abnehmen-page">
      <HeroSection />
      <section style={{ background: 'linear-gradient(135deg, #f4efec 0%, #f4efec 100%)' }}>
        <div className="container py-24">
          <h1>{t("abnehmen.what_is.title")}</h1>
          <p style={{ fontSize: '18px', lineHeight: '1.5', marginTop: '1rem' }}>
            {t("abnehmen.what_is.desc")}
          </p>
        </div>
      </section>

      <Finden />
      <MedicationInfoSection />
      <MedikationInfoSection />
      <SubHeroSection />
      <Testimonials />
      <FuBnoten />
    </div>
  );
}