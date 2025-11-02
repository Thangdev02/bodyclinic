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
            question: "Was kostet eine Wegovy Spritze?",
            answer:
                "Die Kosten für Wegovy hängen von der jeweiligen Dosierung und Packungsgröße ab und unterliegen den gesetzlichen Preisvorgaben. Patient:innen sollten sich bei ihrer Apotheke oder ihrem Arzt bzw. ihrer Ärztin über die aktuellen Kosten informieren.",
        },
        {
            question: "Wofür steht GLP-1?",
            answer:
                "GLP-1 steht für Glucagon-like Peptide-1. Es ist ein natürliches Hormon, das im Darm gebildet wird und eine wichtige Rolle bei der Blutzuckerregulation, der Insulinausschüttung und dem Sättigungsgefühl spielt. GLP-1-Analoga sind eine Gruppe von Medikamenten, die nach dem gleichen Wirkprinzip funktionieren: Die Wirkstoffe sind ähnlich wie das körpereigene Darmhormon aufgebaut und ahmen dessen Wirkung im Körper nach. Da die Wirkstoffe an den gleichen Rezeptor ansetzen, sind sie auch als GLP-1-Rezeptoragonisten bekannt.",
        },
        {
            question: "Wie viel nimmt man mit Wegovy ab?",
            answer:
                "Eine genaue Angabe ist vorab schwierig, da der Gewichtsverlust von individuellen Faktoren wie dem Startgewicht abhängt sowie von verschiedenen Faktoren wie Ernährung und Bewegung. Die beste Wirkung erzielt Wegovy in Kombination mit einer gesunden Ernährung und ausreichend Bewegung.",
        },
        {
            question: "Was ist besser, Wegovy oder Ozempic?",
            answer:
                "Beide Medikamente enthalten Semaglutid, jedoch ist Wegovy höher dosiert und speziell zur Gewichtsreduktion zugelassen."
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
                        Wegovy Spritze: Wirkung, Anwendung und FAQs
                    </h1>
                    <p className="text-3xl">Semaglutid</p>
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
const Wegovy = () => {
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
                        Wegovy ist ein injizierbares Medikament auf Basis von Semaglutid. Es wird zur Behandlung von Erwachsenen mit Adipositas oder Übergewicht mit mindestens einer gewichtsbedingten Begleiterkrankung eingesetzt. Es unterstützt den Zuckerstoffwechsel und fördert die Gewichtsabnahme, indem es das natürliche Hormon GLP-1 nachahmt. Dies sorgt für ein Sättigungsgefühl, wodurch die Kalorienaufnahme reduziert wird. Wegovy wird einmal wöchentlich mit einem vorgefüllten Injektionspen unter die Haut gespritzt (subkutane Injektion). Die richtige Dosierung von Wegovy ist entscheidend für eine sichere und erfolgreiche Gewichtsabnahme. Sie können mehr über die Dosierung auf unserer Seite „Wegovy Dosierung“ erfahren.
                    </p>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Inhalt</h2>
                    <ul className="space-y-2 text-teal-600">
                        {[
                            "Was ist Wegovy?",
                            "Standort",
                            "Für welche Anwendung ist Wegovy zugelassen?",
                            "Für wen ist Wegovy geeignet?",
                            "Wie wirkt die Wegovy-Spritze?",
                            "Wo kann ich Wegovy kaufen?",
                            "Was sind mögliche Nebenwirkungen?",
                            "Unterschiede zwischen Wegovy und anderen Medikamenten",
                            "Erstattet die Krankenkasse Wegovy?",
                            "Wie kann ich Wegovy absetzen?",
                            "Beipackzettel",
                            "Video über die Anwendung des Wegovy-Injektionspens",
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
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Was ist Wegovy?</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Wegovy ist ein verschreibungspflichtiges Medikament, das den Wirkstoff Semaglutid enthält. Es gehört zur Klasse der GLP-1-Rezeptoragonisten und wird speziell zur Gewichtsreduktion bei Erwachsenen mit Adipositas oder Übergewicht mit mindestens einer Begleiterkrankung (z.B. Bluthochdruck, Diabetes oder Schlafapnoe) eingesetzt. Das Medikament wirkt am besten in Kombination mit einer Lebensstilanpassung, wie einer gesunden Ernährung und ausreichend Bewegung.
                    </p>
                </div>

                {/* Semaglutid */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Semaglutid</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Semaglutid ist ein GLP-1-Rezeptoragonist, der die Wirkung des natürlichen Hormons GLP-1 nachahmt. Es verbessert den Glukosestoffwechsel, verlangsamt die Magenentleerung und wirkt auf das Sättigungszentrum im Gehirn, wodurch das Sättigungsgefühl länger anhält, und die Kalorienaufnahme gesenkt wird. Zudem beeinflusst es das Hunger- und Sättigungszentrum im Gehirn.
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
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Wer hat Wegovy entwickelt?</h2>
                    <h3 className="text-xl font-semibold mb-2">Hersteller</h3>
                    <p className="text-gray-700">
                        Wegovy wird von Novo Nordisk, einem weltweit tätigen Pharmaunternehmen mit Sitz in Dänemark, hergestellt. Novo Nordisk hat auch das Medikament Ozempic entwickelt, das denselben Wirkstoff wie Wegovy enthält: Semaglutid. Während Ozempic für die Behandlung von Typ-2-Diabetes zugelassen ist, wird Wegovy speziell zur Gewichtsreduktion eingesetzt.
                    </p>
                    <h3 className="text-xl font-semibold mt-4 mb-2">Verfügbarkeit in Deutschland</h3>
                    <p className="text-gray-700">
                        Wegovy ist seit 2021 in den USA und seit 2022 in der Europäischen Union erhältlich. Es ist in mehreren Ländern, darunter Deutschland, auf Rezept verfügbar. Es wird als vorgefüllter Pen für subkutane Injektionen angeboten. Nach einer zeitweisen Knappheit an Semaglutid-basierten Medikamenten, insbesondere Ozempic, ist Wegovy nun wieder besser verfügbar.
                    </p>
                </div>

                {/* Weitere Abschnitte können hier ergänzt werden... */}
                {/* Beispiel: Für welche Anwendung... */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Für welche Anwendung ist Wegovy zugelassen?

                    </h2>
                    <p className="text-gray-700">
                        Wegovy ist zugelassen für die Behandlung von Erwachsenen mit:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>
                            Übergewicht (BMI ≥ 27) mit mindestens einer gewichtsbedingten Begleiterkrankung wie Bluthochdruck oder Typ-2-Diabetes.

                        </li>
                        <li>
                            Adipositas (BMI ≥ 30).
                        </li>
                    </ul>
                </div>


                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Für wen ist Wegovy geeignet?
                    </h2>
                    <p className="text-gray-700">
                        Wegovy ist für Erwachsene mit Adipositas oder Übergewicht und mindestens einer gewichtsbedingten Begleiterkrankung gedacht, die mit Diät und Bewegung allein keinen ausreichenden Gewichtsverlust erzielen konnten. Es sollte als Teil eines umfassenden Gewichtsmanagementprogramms verwendet werden, das eine gesunde Ernährung und regelmäßige Bewegung umfasst.
                    </p>
                </div>


                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Wie wirkt die Wegovy-Spritze?
                    </h2>
                    <p className="text-gray-700">
                        Die Wegovy-Injektion enthält Semaglutid, das die GLP-1-Rezeptoren aktiviert. Es verbessert den Glukosestoffwechsel, steigert die Insulinausschüttung, reduziert die Glukagonfreisetzung, verlangsamt die Magenentleerung und wirkt auf das Sättigungszentrum im Gehirn. Dadurch hält das Sättigungsgefühl länger an, die Kalorienaufnahme wird verringert und die Gewichtsabnahme gefördert.
                    </p>
                    <h3>Dosierung und Anwendung</h3>
                    <p className="text-gray-700">Wegovy ist in Dosierungen von 0,25 mg, 0,5 mg, 1 mg, 1,7 mg und 2,4 mg erhältlich. Die Behandlung erfolgt schrittweise, um die Verträglichkeit zu verbessern, und beginnt in der Regel mit 0,25 mg einmal pro Woche. Die Anwendung erfolgt mithilfe eines Injektionspens bzw. Fertigpens. Nach vier Wochen kann die Dosis erstmals gesteigert und dann monatlich stufenweise bis zu einer maximalen Dosis von 2,4 mg erhöht werden.
                    </p>
                    <p className="text-gray-700">Die Injektion erfolgt subkutan (unter die Haut) in Bauch, Oberschenkel oder Oberarm. Sie sollte wöchentlich am gleichen Tag verabreicht werden, unabhängig von den Mahlzeiten. Um Hautreizungen zu vermeiden, sollten die Injektionsstellen regelmäßig gewechselt werden.
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Wo kann ich Wegovy kaufen?
                    </h2>
                    <p className="text-gray-700">
                        Wegovy ist nur auf Rezept in Apotheken erhältlich. Vor Beginn der Behandlung sollte eine ärztliche Beratung erfolgen, um die Eignung und die richtige Dosierung festzulegen. Die beste Wirkung erzielt Wegovy in Kombination mit einer gesunden Ernährung und ausreichend Bewegung.
                    </p>
                    <h3>Preise für Wegovy </h3>
                    <p className="text-gray-700">
                        Die Kosten für Wegovy hängen von der jeweiligen Dosierung und Packungsgröße ab und unterliegen gesetzlichen Preisvorgaben.  Bei The Body Clinic können Sie ein Starter-Programm mit Wegovy ab 395€ erwerben. Dies inkludiert – wenn gewünscht – die kostenfreie Lieferung des Medikaments, persönliches Coaching und Zugang zu Online-Fitnessangeboten, um eine bestmögliche Wirksamkeit zu unterstützen.
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Was sind mögliche Nebenwirkungen?
                    </h2>
                    <p className="text-gray-700">
                        Die häufigsten Nebenwirkungen von Wegovy sind:
                    </p>
                    <ul style={{ listStyleType: 'disc' }}>
                        <li>Übelkeit</li>
                        <li>Durchfall</li>
                        <li>Erbrechen</li>
                        <li>Verstopfung</li>
                        <li>Appetitlosigkeit</li>
                        <li>Bauchschmerzen</li>
                    </ul>
                    <p className="text-gray-700">
                        Diese Nebenwirkungen treten meist zu Beginn der Behandlung auf und lassen mit der Zeit nach. Meistens können sie durch die Befolgung bestimmter Ernährungsempfehlungen gelindert werden. Seltene, aber schwerwiegende Nebenwirkungen können Pankreatitis oder allergische Reaktionen sein. Bei starken Bauchschmerzen oder allergischen Symptomen sollte sofort ein Arzt konsultiert werden.
                    </p>
                    <h3>Sicherheit und Zulassung von Wegovy</h3>
                    <p className="text-gray-700">
                        Wegovy wurde auf Empfehlung der Europäischen Arzneimittelbehörde (EMA) von der Europäischen Kommission für die Behandlung von Adipositas und Übergewicht mit Begleiterkrankungen zugelassen. Diese Zulassung bestätigt, dass das Medikament für Erwachsene mit Übergewicht oder Adipositas sicher ist. Die Wirksamkeit wurde in Kombination mit einer gesunden Ernährung und regelmäßiger Bewegung nachgewiesen.
                    </p>
                    <h3>Wechselwirkungen und Gegenanzeigen
                    </h3>
                    <p className="text-gray-700">
                        Vor der Anwendung von Wegovy sollten Patient:innen ihren Arzt bzw. ihre Ärztin über bestehende Gesundheitsprobleme und andere, aktuell eingenommene Medikamente informieren.                        </p>
                    <p className="text-gray-700">
                        Denn Wegovy kann die Wirkung anderer Medikamente, insbesondere blutzuckersenkender Mittel, beeinflussen. In diesem Fall ist beispielsweise eine regelmäßige Blutzuckerkontrolle notwendig und gegebenenfalls muss die Dosierung anderer Medikamente angepasst werden. Bei der Anwendung von Insulin oder Sulfonylharnstoffen sollten diese vor Beginn der Behandlung mit Wegovy abgesetzt werden. Aufgrund des erhöhten Risikos für diabetische Retinopathie aufgrund einer verbesserten Blutzuckerkontrolle werden regelmäßige Augenuntersuchungen für Diabetespatienten empfohlen.
                    </p>
                    <p className="text-gray-700">
                        Ebenso sollten Patient:innen mit einer Vorgeschichte von Pankreatitis oder schweren Magen-Darm-Erkrankungen vor der Anwendung ihren Arzt bzw. ihre Ärztin konsultieren. Auch wird die Anwendung während der Schwangerschaft und Stillzeit nicht empfohlen.
                    </p>
                    <ul style={{ listStyleType: 'disc' }}>
                        <li>Semaglutid verzögert die Magenentleerung, was das Ausmaß und die Geschwindigkeit der Resorption von (anderen) oral verabreichten Medikamenten verringern kann. Bei Beginn der Behandlung mit Semaglutid bei Patienten, die Vitamin-K-Antagonisten einnehmen, sollte der INR-Wert häufiger kontrolliert werden. Besprechen Sie Ihre Medikamente mit Ihrem Arzt.</li>
                        <li>Während der Behandlung mit GLP-1-Rezeptoragonisten im Zusammenhang mit einer Vollnarkose oder einer tiefen Sedierung wurden Fälle von Lungenaspiration gemeldet. Bevor Sie mit Eingriffen unter Vollnarkose oder tiefer Sedierung fortfahren, sollten Sie das erhöhte Risiko von Magenrestinhalten aufgrund einer verzögerten Magenentleerung berücksichtigen.</li>
                        <p className="text-gray-700">Es wird nicht empfohlen für Patienten mit schwerer Herzinsuffizienz, Nieren- und/oder Leberinsuffizienz.</p>
                    </ul>
                </div>




                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Unterschiede zwischen Wegovy und anderen Medikamenten
                    </h2>
                    <h3>Wegovy vs. Ozempic
                    </h3>
                    <p className="text-gray-700">
                        Wegovy und Ozempic enthalten beide Semaglutid, jedoch wird Wegovy in einer höheren Dosierung speziell zur Gewichtsreduktion eingesetzt, während Ozempic für die Kontrolle des Blutzuckerspiegels bei Typ-2-Diabetes entwickelt wurde. Beide Medikamente werden einmal wöchentlich injiziert.                    </p>
                    <h3>Wegovy vs. Mounjaro </h3>
                    <p className="text-gray-700">Mounjaro ist ein dualer GIP- und GLP-1-Rezeptoragonist, während Wegovy ausschließlich auf den GLP-1-Rezeptor wirkt. Mounjaro könnte eine stärkere Wirkung auf das Körpergewicht haben, ist jedoch nicht ausschließlich für die Gewichtsreduktion zugelassen. Mounjaro wird, ebenso wie Wegovy, einmal wöchentlich injiziert.</p>
                    <h3>Wegovy vs. Saxenda </h3>
                    <p className="text-gray-700">Wegovy und Saxenda sind beide GLP-1-Rezeptoragonisten, jedoch wird Wegovy wöchentlich und Saxenda täglich injiziert. Beide Medikamente sind für die Gewichtsreduktion zugelassen. </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Erstattet die Krankenkasse Wegovy?
                    </h2>
                    <p className="text-gray-700">
                        In Deutschland übernehmen gesetzliche Krankenkassen die Kosten für Wegovy in der Regel nicht, da es derzeit als Lifestyle-Arzneimittel eingestuft ist. Die Erstattung durch Krankenkassen hängt jedoch stark von der individuellen Versicherungspolice und der medizinischen Indikation ab.                    </p>
                    <p className="text-gray-700">Patient:innen sollten sich daher direkt bei ihrer Krankenkasse über Erstattungsmöglichkeiten informieren. Beachten Sie, dass die Erstattung oft nur bei bestimmten medizinischen Voraussetzungen gewährt wird.</p>
                </div>


                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Wie kann ich Wegovy absetzen?
                    </h2>
                    <p className="text-gray-700">
                        Das Absetzen der Behandlung sollte in Absprache mit einem Arzt bzw. einer Ärztin erfolgen, um mögliche Nebenwirkungen zu vermeiden. Wegovy kann entweder vollständig abgesetzt oder auf eine Erhaltungsdosis reduziert werden. Um diese zu erzielen, sollte eine kontrollierte Reduzierung erfolgen.
                    </p>
                </div>


               
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Beipackzettel
                    </h2>
                    <p className="text-gray-700">
                        Wenn Sie weitere Informationen benötigen, können Sie jederzeit die Packungsbeilage zu Rate ziehen, um alles über Ozempic zu erfahren.
                    </p>
                    <button className="btn-primary">Beipackzettel Ozempic</button>
                </div>

               
            </section>
            <FAQSection />
        </div>
    );
};

export default Wegovy;