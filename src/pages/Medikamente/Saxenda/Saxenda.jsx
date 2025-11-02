import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "react-bootstrap-icons";

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
            question: "Wie viel Gewicht kann man mit Saxenda verlieren?",
            answer:
                "Mit Saxenda verlieren Patienten im Durchschnitt etwa 1 kg pro Woche. Das Ergebnis variiert jedoch von Person zu Person und hängt stark davon ab, ob die Anwendung mit einer langfristigen Lebensstiländerung einhergeht. Die Behandlung sollte abgebrochen werden, wenn nach 12 Wochen mit der maximalen Tagesdosis von 3,0 mg nicht mindestens 5 % des ursprünglichen Körpergewichts verloren wurden.",
        },
        {
            question: "Wofür steht GLP-1?",
            answer:
                "GLP-1 steht für Glucagon-like Peptide-1. Es ist ein natürliches Hormon, das im Darm gebildet wird und eine wichtige Rolle bei der Blutzuckerregulation, der Insulinausschüttung und dem Sättigungsgefühl spielt. GLP-1-Analoga sind eine Gruppe von Medikamenten, die nach dem gleichen Wirkprinzip funktionieren: Die Wirkstoffe sind ähnlich wie das körpereigene Darmhormon aufgebaut und ahmen dessen Wirkung im Körper nach. Da die Wirkstoffe an den gleichen Rezeptor ansetzen, sind sie auch als GLP-1-Rezeptoragonisten bekannt.",
        },
        {
            question: "Wer darf Saxenda verschreiben?",
            answer:
                "Saxenda darf ausschließlich von einem Arzt bzw. einer Ärztin verschrieben werden, entweder nach einer physischen oder einer Online-Konsultation.",
        },
        {
            question: "Wie schnell wirkt Saxenda / Liraglutid?",
            answer:
                "Die Dosierung von Saxenda wird in der Regel innerhalb von 4 Wochen schrittweise gesteigert. Patient:innen berichten oft von einer schnellen Wirkung auf das Hungergefühl und die Sättigung, jedoch können anfangs leichte Nebenwirkungen wie Übelkeit auftreten. Sollte nach 12 Wochen bei der Tagesdosis von 3,0 mg kein Gewichtsverlust von mindestens 5 % erreicht werden, wird die Behandlung in der Regel beendet."
        },
        {
            question: "Wie lange reicht ein Saxenda-Pen?",
            answer:
                "Ein vorgefüllter Saxenda-Pen enthält 18 mg Liraglutid. Bei einer Erhaltungsdosis von 3,0 mg pro Tag reicht ein Pen für 6 Injektionen, also 6 Tage. Saxenda ist in Packungen mit 1, 3 oder 5 Pens erhältlich, wobei nicht alle Packungsgrößen auf dem Markt verfügbar sind."
        },
        {
            question: "Wie lange kann man Saxenda verwenden?",
            answer:
                "Es gibt keine maximale Nutzungsdauer für Saxenda. Sie können es so lange verwenden, wie Sie keine anderen Medikamente einnehmen, die damit in Konflikt stehen, oder Sie keine Gegenindikationen entwickeln."
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

const HeroSection = () => {
    return (
        <>
            <div className="hero-section">
                <div className="hero-content container">
                    <h1 className="hero-title">
                        Saxenda Injektion: Wirkung, Anwendung und FAQs
                    </h1>
                    <p className="text-3xl">Liraglutid</p>
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
                        <span style={{ color: '#568a9a' }}>Dr. Nicolette Lammers</span> geprüft.
                    </p>
                </div>
            </div>
        </>
    )
}
const Saxenda = () => {
    return (
        <div className="min-h-screen bg-[#f3efeb]">
            <HeroSection />
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-teal-50 to-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center d-flex gap-12" style={{ alignItems: 'center' }}>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        <img src="./ozempicmain.webp" alt="" className="rounded-xl" />
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto text-start">

                        Saxenda ist ein injizierbares Medikament zur Unterstützung der Gewichtsabnahme bei Erwachsenen mit Adipositas oder Übergewicht mit mindestens einer gewichtsbedingten Begleiterkrankung. Es imitiert das natürliche Hormon GLP-1 und hilft, das Hungergefühl zu reduzieren. Die Verabreichung erfolgt täglich mit einem vorgefüllten Injektionspen.
                    </p>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Inhalt</h2>
                    <ul className="space-y-2 text-teal-600">
                        {[
                            "Was ist Saxenda?",
                            "Standort",
                            "Für welche Anwendung ist Saxenda zugelassen?",
                            "Für wen ist Saxenda geeignet?",
                            "Wie wirkt die Saxenda-Spritze?",
                            "Wo kann ich Saxenda kaufen?",
                            "Was sind mögliche Nebenwirkungen?",
                            "Sicherheit und Zulassung von Saxenda",
                            "Unterschiede zwischen Saxenda und anderen Medikamenten",
                            "Erstattet die Krankenkasse Saxenda?",
                            "Wie kann ich Saxenda absetzen?",
                            "Beipackzettel Saxenda",
                            "Video über die Anwendung des Saxenda-Injektionspens",
                        ].map((item, index) => (
                            <li key={index} className="hover:underline cursor-pointer">
                                • {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-6 py-12 space-y-12">
                {/* Was ist Ozempic? */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Was ist Saxenda?
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Saxenda ist ein verschreibungspflichtiges Medikament, das den Wirkstoff Liraglutid enthält. Es gehört zur Klasse der GLP-1-Rezeptoragonisten und wird speziell zur Gewichtsabnahme bei Erwachsenen mit Übergewicht und Adipositas eingesetzt. Abnehmmedikamente werden häufig in Kombination mit einer Lebensstilanpassung verschrieben. Eine gesunde Ernährung und regelmäßige Bewegung sind entscheidend für gute Ergebnisse.
                    </p>
                    <h3>Liraglutid</h3>
                    <p className="text-gray-700">Liraglutid ist ein GLP-1-Rezeptoragonist, der die Wirkung des natürlichen Hormons GLP-1 nachahmt. Es verbessert die Insulinausschüttung, reduziert die Glukagonproduktion und verlangsamt die Magenentleerung, wodurch das Sättigungsgefühl länger anhält und die Kalorienaufnahme verringert wird. Zudem beeinflusst es das Hunger- und Sättigungsgefühl im Gehirn.

                    </p>
                </div>



                {/* Behandlung in Berlin */}
                <div className=" p-6 rounded-xl">


                    <div className="bg-[#ede8e2] rounded-lg shadow-sm p-6 mt-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold text-3xl mb-3">Standort</h3>
                                <div className="space-y-2 text-gray-700">
                                    <p><strong>The Body Clinic Berlin</strong></p>
                                    <p>Schöneberger Ufer 71</p>
                                    <p>10785 Berlin</p>
                                    <hr className="my-3" />
                                    <p><strong>The Body Clinic München</strong></p>
                                    <p>Bayerstraße 21</p>
                                    <p>80335 München</p>
                                    <hr className="my-3" />
                                    <p><strong>The Body Clinic Hamburg</strong></p>
                                    <p>Sierichstraße 6</p>
                                    <p>22301 Hamburg</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-3">Öffnungszeiten</h3>
                                <table className="w-full text-gray-700">
                                    <tbody>
                                        <tr><td className="py-1">Montag</td><td className="text-right">9:00 - 17:00</td></tr>
                                        <tr><td className="py-1">Dienstag</td><td className="text-right">9:00 - 17:00</td></tr>
                                        <tr><td className="py-1">Mittwoch</td><td className="text-right">9:00 - 17:00</td></tr>
                                        <tr><td className="py-1">Donnerstag</td><td className="text-right">9:00 - 17:00</td></tr>
                                        <tr><td className="py-1">Freitag</td><td className="text-right">9:00 - 17:00</td></tr>
                                        <tr><td className="py-1">Samstag</td><td className="text-right">(nur Telemedizin) 10:00 - 18:00</td></tr>
                                        <tr><td className="py-1">Sonntag</td><td className="text-right">(nur Telemedizin) 10:00 - 18:00</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <button className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition">
                            Programm starten
                        </button>
                    </div>
                </div>

                {/* Wer hat Ozempic entwickelt? */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Wer hat Saxenda entwickelt?</h2>
                    <h3 className="text-xl font-semibold mb-2">Hersteller</h3>
                    <p className="text-gray-700">
                        Saxenda wird von Novo Nordisk, einem weltweit tätigen Pharmaunternehmen mit Sitz in Dänemark, produziert. Novo Nordisk stellt auch andere bekannte Abnehmmedikamente wie Ozempic und Wegovy her.
                    </p>
                    <h3 className="text-xl font-semibold mt-4 mb-2">Verfügbarkeit in Deutschland
                    </h3>
                    <p className="text-gray-700">
                        Saxenda ist seit 2015 auf dem Markt und in mehreren Ländern, darunter Deutschland, auf Rezept erhältlich. Es wird als vorgefüllter Pen für subkutane Injektionen angeboten.
                    </p>
                </div>

                {/* Weitere Abschnitte können hier ergänzt werden... */}
                {/* Beispiel: Für welche Anwendung... */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Für welche Anwendung ist Saxenda zugelassen?
                    </h2>
                    <p className="text-gray-700">
                        Saxenda ist zugelassen für die Behandlung von Erwachsenen mit:


                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>
                            Übergewicht (BMI ≥ 27) mit mindestens einer gewichtsbedingten Begleiterkrankung, wie Bluthochdruck oder Typ-2-Diabetes

                        </li>
                        <li>
                            Adipositas (BMI ≥ 30).

                        </li>
                    </ul>
                    <p className="text-gray-700">Es sollte in Kombination mit einer kalorienreduzierten Ernährung und regelmäßiger körperlicher Aktivität verwendet werden.
                    </p>
                </div>


                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Für wen ist Saxenda geeignet?

                    </h2>
                    <p className="text-gray-700">
                        Saxenda ist für Erwachsene mit Übergewicht oder Adipositas gedacht, die mit Diät und Bewegung allein keinen ausreichendes Gewichtsverlust erzielen konnten. Es sollte als Teil eines umfassenden Gewichtsmanagementprogramms verwendet werden.
                    </p>
                </div>


                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Wie wirkt die Saxenda-Spritze?

                    </h2>
                    <p className="text-gray-700">
                        Die Saxenda-Injektion enthält Liraglutid, das die GLP-1-Rezeptoren aktiviert. Dies führt zu einer erhöhten Insulinausschüttung, reduzierten Glukagonproduktion und einer verzögerten Magenentleerung. Dadurch bleibt das Sättigungsgefühl länger bestehen, die Kalorienaufnahme wird reduziert und die Gewichtsabnahme gefördert. Zudem wirkt es auf das Hunger- und Sättigungszentrum im Gehirn.

                    </p>
                    <h3>Dosierung und Anwendung
                    </h3>
                    <p className="text-gray-700">Saxenda ist in einer Konzentration von 6 mg/ml erhältlich. Die Behandlung beginnt mit einer Dosis von 0,6 mg pro Tag, die schrittweise auf bis zu 3,0 mg pro Tag erhöht werden kann, was die maximale Dosis darstellt.
                        Die Anwendung erfolgt mithilfe eines Injektionspens bzw. eines Fertigpens und wird subkutan (unter die Haut) in den Bauch, Oberschenkel oder Oberarm injiziert. Sie sollte täglich zur gleichen Zeit verabreicht werden, unabhängig von den Mahlzeiten. Um Hautreizungen zu vermeiden, sollten die Injektionsstellen regelmäßig gewechselt werden.
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Wo kann ich Saxenda kaufen?


                    </h2>
                    <p className="text-gray-700">
                        Saxenda ist nur auf ärztliche Verschreibung in Apotheken erhältlich. Vor Beginn der Behandlung sollte eine ärztliche Beratung erfolgen, um die Eignung und die richtige Dosierung festzulegen. Die beste Wirkung erzielt Saxenda in Kombination mit einer gesunden Ernährung und ausreichend Bewegung.
                    </p>
                    <h3>Preise für Saxenda

                    </h3>
                    <p className="text-gray-700">
                        Die Kosten für Saxenda variieren je nach Dosierung und Packungsgröße und unterliegen gesetzlichen Vorschriften. Bei The Body Clinic können Sie ein Starter-Programm mit Saxenda ab 345€ erwerben. Dies inkludiert – wenn gewünscht – die kostenfreie Lieferung des Medikaments, persönliches Coaching und Zugang zu Online-Fitnessangeboten, um eine bestmögliche Wirksamkeit zu unterstützen.

                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Was sind mögliche Nebenwirkungen?

                    </h2>
                    <p className="text-gray-700">
                        Die häufigsten Nebenwirkungen von Saxenda sind:
                    </p>
                    <ul style={{ listStyleType: 'disc' }}>
                        <li>Übelkeit</li>
                        <li>Durchfall</li>
                        <li>Verstopfung</li>
                        <li>Kopfschmerzen</li>
                        <li>Appetitlosigkeit</li>
                    </ul>
                    <p className="text-gray-700">Diese Symptome treten meist zu Beginn der Behandlung auf und lassen mit der Zeit nach. Seltene, aber schwerwiegende Nebenwirkungen können Pankreatitis oder allergische Reaktionen sein. Bei starken Bauchschmerzen oder allergischen Symptomen sollte sofort ein Arzt konsultiert werden.
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Sicherheit und Zulassung von Saxenda
                    </h2>
                    <p className="text-gray-700">
                        Saxenda wurde auf Empfehlung der Europäischen Arzneimittelbehörde (EMA) von der Europäischen Kommission zur Anwendung bei Erwachsenen mit Übergewicht oder Adipositas zugelassen. Diese Zulassung bestätigt, dass das Medikament wie in der Fachinformation beschrieben wirkt und sicher ist. Eine gesunde Ernährung und regelmäßige Bewegung sind entscheidend für eine erfolgreiche Behandlung.
                    </p>
                    <h3>Wechselwirkungen und Gegenanzeigen                    </h3>
                    <p className="text-gray-700">Vor der Anwendung von Saxenda sollten Patienten ihren Arzt bzw. ihre Ärztin über bestehende Gesundheitsprobleme und eingenommene Medikamente informieren.
                    </p>
                    <p className="text-gray-700">Saxenda kann die Wirkung blutzuckersenkender Medikamente beeinflussen. Eine regelmäßige Blutzuckerkontrolle ist erforderlich, und falls nötig, sollte die Dosierung anderer Medikamente angepasst werden.
                    </p>
                    <p className="text-gray-700">Patient:innen mit einer Vorgeschichte von Pankreatitis oder schweren Magen-Darm-Erkrankungen sollten vor der Anwendung ihren Arzt konsultieren. Die Anwendung während der Schwangerschaft und Stillzeit wird nicht empfohlen.
                    </p>

                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Unterschiede zwischen Saxenda und anderen Medikamenten

                    </h2>
                    <h3>Saxenda vs. Ozempic
                    </h3>
                    <p className="text-gray-700">
                    Saxenda und Ozempic sind beide GLP-1-Rezeptoragonisten, jedoch wird Saxenda täglich injiziert, während Ozempic nur einmal wöchentlich verabreicht wird. Zudem ist Saxenda speziell für die Gewichtsreduktion zugelassen, während Ozempic primär für die Behandlung von Typ-2-Diabetes entwickelt wurde.</p>
                    <h3>Saxenda vs. Wegovy
                    </h3>
                    <p className="text-gray-700">
                    Saxenda und Wegovy enthalten beide GLP-1-Rezeptoragonisten, jedoch wird Wegovy in einer höheren Dosierung zur Gewichtsreduktion verwendet und nur einmal wöchentlich injiziert, während Saxenda täglich verabreicht wird.                    </p>
                    <h3>Saxenda vs. Mounjaro

                    </h3>
                    <p className="text-gray-700">
                    Saxenda und Mounjaro sind beide GLP-1-Rezeptoragonisten, jedoch aktiviert Mounjaro zusätzlich den GIP-Rezeptor. Mounjaro wird wöchentlich und Saxenda täglich injiziert. Mounjaro ist zusätzlich für die Behandlung von Typ-2-Diabetes zugelassen, Saxenda nicht.</p>

                </div>


                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Erstattet die Krankenkasse Saxenda? </h2>
                    <p className="text-gray-700">In Deutschland übernehmen gesetzliche Krankenkassen die Kosten für Saxenda in der Regel nicht, da es derzeit als Lifestyle-Arzneimittel eingestuft ist. Die Erstattung durch Krankenkassen hängt jedoch stark von der individuellen Versicherungspolice und der medizinischen Indikation ab. Patient:innen sollten sich daher direkt bei ihrer Krankenkasse über Erstattungsmöglichkeiten informieren.</p>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Wie kann ich Saxenda absetzen?
                    </h2>
                    <p className="text-gray-700">Das Absetzen der Behandlung sollte in Absprache mit einem Arzt bzw. einer Ärztin erfolgen, um mögliche Nebenwirkungen zu vermeiden. Saxenda kann entweder vollständig abgesetzt oder schrittweise auf eine Erhaltungsdosis reduziert werden. In diesem Fall ist eine langsame Dosisanpassung empfehlenswert.
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Beipackzettel Saxenda
                    </h2>
                    <p className="text-gray-700">
                    Wenn Sie weitere Informationen benötigen, können Sie jederzeit die Packungsbeilage zu Rate ziehen, um alles über Saxenda zu erfahren.</p>
                    <button className="btn-primary">Beipackzettel Ozempic</button>
                </div>
                <FAQSection />

                <div>
                    <h2>Häufig gestellte Fragen (FAQ) Saxenda</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
                        <div st>
                            <img style={{ borderRadius: '50%', width: '340px', height: '240px', marginBottom: '1rem' }} src="./zempic1.webp" alt="" />
                            <h4>Mounjaro vs Ozempic: Die wichtigsten Unterschiede</h4>
                            <p className="text-gray-400">23-04-2025</p>
                        </div>
                        <div>
                            <img style={{ borderRadius: '50%', width: '340px', height: '240px', marginBottom: '1rem' }} src="./zempic2.webp" alt="" />

                            <h4>Wegovy vs Ozempic: Die wichtigsten Unterschiede</h4>
                            <p className="text-gray-400">11-04-2025</p>
                        </div>
                        <div>
                            <img style={{ borderRadius: '50%', width: '340px', height: '240px', marginBottom: '1rem' }} src="./zempic3.webp" alt="" />
                            <h4>Semaglutid und Alkohol: Neue Forschung zu moglicher Wirkung</h4>
                            <p className="text-gray-400">23-04-2025</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Saxenda;