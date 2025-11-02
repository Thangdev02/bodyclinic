import React, { useState } from 'react';
import Finden from '../../../components/Home/Finden';
import { motion } from "framer-motion"
import { CheckCircle, Star } from "react-bootstrap-icons"
import TimelineSection from '../../../components/Home/TimelineSection';
import { BiMessageRounded } from "react-icons/bi";
import { FaAppleAlt } from "react-icons/fa";
import { GiStumpRegrowth } from "react-icons/gi";
import { IoIosWarning } from "react-icons/io";
import Testimonials from '../../../components/Home/Testimonials';
import ExpertsSection from '../../../components/Home/ExpertsSection';
import DoctorsSection from '../../../components/Home/DoctorsSection';
import { ChevronDown } from "react-bootstrap-icons"
const Diesection = () => {
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
const SubHeroSection = () => {
    return (
        <section
            className=" relative w-full h-[80vh] bg-center bg-cover flex items-center"
            style={{
                backgroundImage:
                    "url('./abbanner.jpg')",
            }}
        >
            {/* Overlay mờ tối để chữ nổi bật */}
            <div className=" absolute inset-0 bg-black/40"></div>

            {/* Nội dung chính */}
            <div className="container relative z-10 max-w-3xl px-6 md:px-16 text-white">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    Ihre Reise zu <br />
                    nachhaltigem <br />
                    Gewichtsverlust <br />
                    beginnt hier
                </h1>

                <button className="bg-[#3A8CA4] hover:bg-[#327a8e] transition-colors text-white font-medium text-lg px-10 py-4 rounded-full shadow-lg">
                    Termin vereinbaren
                </button>
            </div>
        </section>
    );
}
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
const SafetySection = () => {
    return (
        <div className="safety-section">
            <div className="safety-container container">
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
            <div className="faq-container container">
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
const Tabletent = () => (
    <div className="erfahrungen-page">
        <section className="bg-gradient-to-b from-[#d6c8b8] to-[#d6c1a9] px-4 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
                            Abnehmen mit Tabletten

                        </h1>

                        {/* Benefits List */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
                                <span className="text-white text-lg">Klinisch bewährte Behandlungen bis 15% Gewichtsverlust             </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
                                <span className="text-white text-lg">Ärztliche Betreuung – vor Ort oder Online</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
                                <span className="text-white text-lg">Medikamentenlieferung direkt nach Hause1</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
                                <span className="text-white text-lg">Persönliches Coaching und Online-Fitnessplattform</span>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-8">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="text-[#2d6a7d] fill-[#2d6a7d]" size={20} />
                                ))}
                            </div>
                            <span className="text-white text-lg font-semibold">5.0 auf Google</span>
                        </div>

                        {/* CTA Button */}
                        <button className="bg-[#2d6a7d] hover:bg-[#245661] text-white px-8 py-3 rounded-full font-semibold text-lg transition duration-300">
                            Termin vereinbaren
                        </button>
                    </motion.div>

                    {/* Right - Image with Floating Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Main Image */}
                        <div className="relative">
                            <img src="./spri.webp" alt="Smiling woman" className="w-full h-full object-cover rounded-3xl" />
                        </div>
                    </motion.div>
                </div>

            </div>

        </section>
        <div className="author-info">
            <img src="./avtdoctor.webp" alt="Dr. Nicolette Lammers" className="avatar" />
            <div>
                <p>Diese Seite wurde von</p>
                <p>
                    <span style={{ color: '#568a9a' }}>Dr. Nicolette Lammers</span> geprüft.
                </p>
            </div>
        </div>
        <Finden />
        <TimelineSection />
        <MedicationInfoSection />
        <SubHeroSection />
        <Testimonials />
        <ExpertsSection />
        <DoctorsSection />
        <EffectSection />
        <SafetySection />
        <FAQSection />

    </div>
)

export default Tabletent