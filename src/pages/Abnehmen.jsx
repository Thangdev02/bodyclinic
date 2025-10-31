"use client"

import { useState } from "react"
import { ChevronDown, Star } from "react-bootstrap-icons"
import { motion } from "framer-motion"
import "./abnehmen.css"
import TimelineSection from "../components/Home/TimelineSection"
import BMICalculator from "../components/Home/BMICalculator"
import Testimonials from "../components/Home/Testimonials"
import DoctorsSection from "../components/Home/DoctorsSection"
import Finden from "../components/Home/Finden"

// ============ HERO SECTION ============
const HeroSection = () => {
    return (
      <>
       <div className="hero-section">
  <div className="hero-content container">
    <h1 className="hero-title">
      Medizinisches <br /> Abnehmen
    </h1>
    <p className="text-3xl">Programme</p>
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
            <p>Diese Seite wurde von</p>
            <p>
              <strong>Dr. Nicolette Lammers</strong> geprüft.
            </p>
          </div>
        </div>
      </>
    )
  }
// ============ MEDICATION INFO SECTION ============
const MedicationInfoSection = () => {
  return (
    <div className="medication-info-section">
      <div className="medication-container">
        <h2>Informationen zur Medikation</h2>
        <p>
          Für Ihre Behandlung kommen verschiedene Abnehmspritzen in Frage. Alle sind verschreibungspflichtig und sollten
          ausschließlich nach einer sorgfältigen Anamnese und ärztlichen Beratung, die z.B. Begleiterkrankungen
          berücksichtigt, verordnet werden.
        </p>
        <p>
          Ihre behandelnden Ärzt:innen ermitteln im persönlichen Gespräch mit Ihnen, ob und welche Medikamente für Ihre
          Behandlung geeignet sind. Nur bei positiver Indikation werden diese verschrieben. The Body Clinic arbeitet mit
          einer Partnerapotheke zusammen, die Ihre Medikamente im Anschluss optional bequem & diskret zu Ihnen nach
          Hause schickt.
        </p>
        <button className="btn-primary">Medikamente ansehen</button>
      </div>
    </div>
  )
}

// ============ PROGRAM COMPARISON SECTION ============
const ProgramCard = ({ title, price, features, buttonText, isHighlight }) => {
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
  )
}

const ProgramComparisonSection = () => {
  const starterFeatures = ["Ab 345€", "1 Monat (niedrigere Dosierung)", "2× Persönliches Coaching durch Experten", ""]

  const extendedFeatures = ["Ab 485€", "1, 2, oder 3 Monate", "1× pro Monat persönliches Coaching durch Experten", ""]

  return (
    <div className="program-section">
      <div className="program-intro">
        <h2>Finden Sie Ihr Programm für nachhaltigen Gewichtsverlust</h2>
        <div className="program-benefits">
          <h3>In allen Programmen enthalten:</h3>
          <ul>
            <li>
              <span className="checkmark">✓</span>Ärztliche Betreuung – vor Ort oder Online
            </li>
            <li>
              <span className="checkmark">✓</span>GLP-1 Abnehmspritzen
            </li>
            <li>
              <span className="checkmark">✓</span>Medikamentenlieferung (optional)
            </li>
            <li>
              <span className="checkmark">✓</span>Zugang zu Online-Fitnessplattform
            </li>
            <li>
              <span className="checkmark">✓</span>Gewichtsreduktion von bis zu 22%
            </li>
          </ul>
        </div>
      </div>
      <div className="programs-grid">
        <ProgramCard title="Starter-Monat" price="Ab 345€" features={starterFeatures} buttonText="Termin vereinbaren" />
        <ProgramCard
          title="Programmverlängerung"
          price="Ab 485€"
          features={extendedFeatures}
          buttonText="Programm verlängern"
          isHighlight={true}
        />
      </div>
    </div>
  )
}

// ============ EXPERTS SECTION ============
const ExpertsSection = () => {
  return (
    <div className="experts-section">
      <div className="experts-container">
        <div className="experts-image">
          <img src="./expert.webp" alt="The Body Clinic" className="clinic-photo" />
        </div>
        <div className="experts-content">
          <h2>Experten für medizinisches Abnehmen mit Spritzen</h2>
          <p>
            Mit der Body Clinic finden Sie individuelle, ärztlich begleitete Konzepte für nachhaltige Gewichtsabnahme –
            mit oder ohne Medikamente. Mit über 15 Jahren Erfahrung und mehr als 3.200 behandelten Patient:innen sind
            wir Marktführer in den Niederlanden – und jetzt auch in Deutschland für Sie da.
          </p>
          <h3>Persönlich, ganzheitlich und menschlich</h3>
          <p>
            Wir legen Wert auf Qualität und Ganzheitlichkeit: Sie erhalten persönliche, individuelle Betreuung durch
            approbierte Fachärzt:innen und Ernährungscoaches für nachhaltige Ergebnisse. Sie sprechen mit echten
            Menschen, nicht mit Algorithmen. Wir freuen uns auf Sie – in einer unserer{" "}
            <span className="link">Praxen</span> oder Online.
          </p>
          <button className="btn-primary">Unsere Geschichte</button>
        </div>
      </div>
     
    </div>
  )
}

// ============ SAFETY SECTION ============
const SafetySection = () => {
  return (
    <div className="safety-section">
      <div className="safety-container">
        <div className="safety-content">
          <h2>Sicherheit von Abnehmspritzen zur Gewichtsabnahme</h2>
          <p>
            Medikamente, die bei Vorliegen einer medizinischen Indikation für Ihre Behandlung in Betracht kommen
            könnten, sind von der Europäischen Kommission und weiteren Gesundheitsbehörden zugelassen, was bedeutet,
            dass sie nach intensiven, regulierten Tests als sicher und wirksam eingestuft wurden.
          </p>
          <p>
            Wie andere Medikamente können auch Abnehmspritzen Nebenwirkungen wie Übelkeit und Durchfall verursachen.
            Unter <span className="link">Medikamente</span> können Sie die häufigsten Nebenwirkungen nachlesen. In
            Deutschland sind Abnehmspritzen ausschließlich auf Rezept erhältlich.
          </p>
        </div>
        <div className="safety-image">
          <img src="./schier.webp" alt="Medical consultation" className="consultation-photo" />
        </div>
      </div>
    </div>
  )
}

// ============ EFFECT SECTION ============
const EffectSection = () => {
  return (
    <div className="effect-section">
      <div className="effect-container">
        <div className="effect-image">
          <img src="./wirkung.webp" alt="Injection preparation" className="injection-photo" />
        </div>
        <div className="effect-content">
          <h2>Wirkung von Abnehmspritzen zur Gewichtsabnahme</h2>
          <p>
            Die Wirkung der Medikamente ähnelt der des natürlich vorkommenden GLP-1-Hormons: Sie regulieren den Appetit,
            indem sie das Hungergefühl reduzieren und das Sättigungsgefühl verstärken. So kann der Appetit verringert
            und häufig ein Gewichtsverlust erzielt werden.
          </p>
          <p>
            Wenn Ihnen die Medikamente ärztlich verordnet werden, können Sie die Injektionen selbst verabreichen. Da sie
            jedoch nicht für jeden geeignet sind und Nebenwirkungen auftreten können, ist eine ausführliche ärztliche
            Beratung wichtig – ebenso wie das sorgfältige Lesen der jeweiligen Packungsbeilagen.
          </p>
          <p>Die Beipackzettel finden Sie unter Medikamente.</p>
          <button className="btn-primary">Medikamente ansehen</button>
        </div>
      </div>
    </div>
  )
}

// ============ INDICATIONS SECTION ============
const IndicationsSection = () => {
  return (
    <div className="indications-section">
      <div className="indications-container">
        <h2>Indikation zur Anwendung von Injektionen zur Gewichtsabnahme</h2>
        <p>
          Eine individuelle medizinische Beurteilung ist Voraussetzung für jede Behandlung. Um für das medizinische
          Abnehmen mit Spritzen in Frage zu kommen, müssen Sie u.a. eine der folgenden Indikationen erfüllen:
        </p>
        <div className="indications-grid">
          <div className="indication-box">
            <p>
              BMI ≥ 27 mit mindestens einer gewichtsbezogenen Erkrankung, wie: Dysglykämie (Prädiabetes oder
              Typ-2-Diabetes), Hypertonie (Bluthochdruck), Dyslipidämie (eine Störung des Fettstoffwechsels) oder
              Obstruktive Schlafapnoe
            </p>
          </div>
          <div className="indication-box">
            <p>BMI ≥ 30</p>
          </div>
        </div>
        <button className="btn-primary">Termin vereinbaren</button>
      </div>
    </div>
  )
}

// ============ FAQ ACCORDION ============
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
  )
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Welche Abnehmspritzen kommen für meine Behandlung in Frage?",
      answer:
        "Die Auswahl hängt von Ihrer individuellen medizinischen Situation ab. Unsere Ärzte werden dies in einem persönlichen Gespräch mit Ihnen besprechen.",
    },
    {
      question: "Kann ich die Injektionen selbst verabreichen?",
      answer:
        "Ja, wenn Ihnen die Medikamente ärztlich verordnet werden, können Sie die Injektionen selbst verabreichen. Es ist jedoch wichtig, dass Sie die Anweisungen Ihres Arztes befolgen.",
    },
    {
      question: "Welches Ergebnis kann ich erwarten?",
      answer:
        "Die Ergebnisse variieren von Person zu Person. Durchschnittlich können Sie mit einer Gewichtsreduktion von bis zu 22% rechnen.",
    },
    {
      question: "Wann kann ich die Abnehmspritzen absetzen?",
      answer:
        "Dies sollte mit Ihrem Arzt besprochen werden, basierend auf Ihren individuellen Zielen und dem erreichten Erfolg.",
    },
    {
      question: "Welche Nebenwirkungen gibt es?",
      answer:
        "Häufige Nebenwirkungen sind Übelkeit und Durchfall. Alle möglichen Nebenwirkungen sind in der Packungsbeilage aufgelistet.",
    },
    {
      question: "Kann ich die Medikamente ohne Begleitung durch einen Arzt oder Diätassistenten erhalten?",
      answer:
        "Nein, eine ärztliche Betreuung ist erforderlich. Medikamente ohne entsprechende medizinische Überwachung auszugeben, wäre unverantwortlich.",
    },
    {
      question: "Wie buche ich einen Termin bei The Body Clinic?",
      answer: "Sie können einen Termin online über unsere Website buchen oder uns kontaktieren.",
    },
    {
      question: "Kann ich die Medikamente auch über den Hausarzt erhalten?",
      answer: "Ja, wenn Ihr Hausarzt damit einverstanden ist, kann er Ihnen auch die Medikamente verschreiben.",
    },
    {
      question: "Werden Abnehmspritzen von der Krankenkasse erstattet?",
      answer: "Das hängt von Ihrer Krankenkasse ab. Bitte erkundigen Sie sich bei Ihrer Krankenversicherung.",
    },
  ]

  return (
    <div className="faq-section">
      <div className="faq-container">
        <h2>FAQs zum medizinischen Abnehmen mit Spritzen</h2>
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
  )
}




// ============ MAIN PAGE ============
export default function AbnehmenPage() {
  return (
    <div className="abnehmen-page">
      <HeroSection />
      {/* <ProgramComparisonSection /> */}
 <Finden />
 <BMICalculator />
      <MedicationInfoSection />
         <Testimonials />
      <ExpertsSection />
        <DoctorsSection />
        <IndicationsSection />
      <EffectSection />

      <SafetySection />
      
      <FAQSection />
    </div>
  )
}
