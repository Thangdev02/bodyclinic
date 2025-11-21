import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";

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

const FAQSection = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: t("Was kostet eine Mounjaro Spritze?"),
            answer: t("Mounjaro wird entweder in Form einer Durchstechflasche (d.h. die Injektionen müssen mithilfe einer Spritze aufgezogen werden) oder eines Mehrfachdosis-Fertigpens abgegeben (diese enthalten Dosen für einen Monat). Die Kosten für eine Mounjaro-Injektion variieren somit je nach Darreichungsform, Dosierung und Land."),
        },
        {
            question: t("Wofür stehen GLP-1 und GIP?"),
            answer: t("GLP-1 steht für Glucagon-ähnliches Peptid-1, ein natürliches Hormon, das im Darm produziert wird und eine entscheidende Rolle bei der Regulierung des Blutzuckerspiegels und der Verbesserung der Insulinsensitivität spielt. GLP-1-Analoga sind eine Gruppe von Medikamenten, die nach dem gleichen Wirkprinzip funktionieren: Die Wirkstoffe sind ähnlich wie das körpereigene Darmhormon aufgebaut und ahmen dessen"),
        },
        {
            question: t("Wie viel nimmt man mit Mounjaro ab?"),
            answer: t("Mit Mounjaro kann je nach Dosierung und individueller Reaktion eine signifikante Gewichtsreduktion erzielt werden. Studien zeigen, dass Patienten im Durchschnitt bis zu 15–22 % ihres Körpergewichts verlieren können, insbesondere bei höheren Dosierungen und in Kombination mit Lebensstiländerungen. Die tatsächlichen Ergebnisse variieren jedoch und sollten mit einem Arzt besprochen werden."),
        },
        {
            question: t("Was ist besser, Ozempic oder Mounjaro?"),
            answer: t("Ob Ozempic oder Mounjaro besser ist, hängt von den individuellen Bedürfnissen und gesundheitlichen Zielen des Patienten ab. Mounjaro kombiniert GLP-1- und GIP-Rezeptor-Agonisten, was möglicherweise stärkere Effekte auf Blutzuckersenkung und Gewichtsreduktion bietet, während Ozempic ein bewährter GLP-1-Rezeptor-Agonist ist. Die Entscheidung sollte gemeinsam mit einem Arzt bzw. einer Ärztin getroffen werden, basierend auf der medizinischen Vorgeschichte und den gewünschten Ergebnissen.")
        },
    ];

    return (
        <div className="faq-section">
            <div className="faq-container container">
                <h2>{t("FAQs zum medizinischen Abnehmen mit Spritzen")}</h2>
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

const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="hero-section">
                <div className="hero-content container">
                    <h1 className="hero-title">
                        {t("Mounjaro Spritze: Wirkung, Anwendung und FAQs")}
                    </h1>
                    <p className="text-3xl">{t("Tirzepatid")}</p>
                </div>

                <div className="hero-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
            </div>

            <div className="author-info">
                <img src="./avtdoctor.webp" alt="Dr. Nicolette Lammers" className="avatar" />
                <div>
                    <p>{t("Diese Seite wurde von")}</p>
                    <p>
                        <span style={{ color: "#568a9a" }}>{t("Dr. Nicolette Lammers")}</span> {t("geprüft.")}
                    </p>
                </div>
            </div>
        </>
    );
};

const Mounjaro = () => {
    const { t } = useTranslation();

    const tableOfContents = [
        "Was ist Mounjaro?",
        "Standort",
        "Für welche Anwendung ist Mounjaro zugelassen?",
        "Für wen ist Mounjaro geeignet?",
        "Wie wirkt die Mounjaro-Spritze?",
        "Wo kann ich Mounjaro kaufen?",
        "Was sind mögliche Nebenwirkungen?",
        "Unterschiede zwischen Mounjaro und anderen Medikamenten",
        "Erstattet die Krankenkasse Mounjaro?",
        "Wie kann ich Mounjaro absetzen?",
        "Beipackzettel",
        "Video über die Anwendung des Mounjaro-Injektionspens",
    ];

    return (
        <div className="min-h-screen bg-[#f3efeb]">
            <HeroSection />

            <section className="bg-gradient-to-b from-teal-50 to-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center d-flex gap-12" style={{ alignItems: "center" }}>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        <img src="./ozempicmain.webp" alt="" className="rounded-xl" />
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto text-start">
                        {t("Mounjaro ist ein injizierbares Medikament mit dem Wirkstoff Tirzepatid. Es wird zur Behandlung von Typ-2-Diabetes mellitus und zur Gewichtskontrolle eingesetzt. Es unterstützt die Blutzuckerregulierung und trägt zur Gewichtsreduktion bei Übergewicht und Adipositas bei. Die Anwendung erfolgt wöchentlich mit einem vorgefüllten Injektionspen. Die richtige Dosierung von Mounjaro ist entscheidend für Sicherheit und Wirksamkeit. Sie können mehr über die Dosierung auf unserer Seite „Mounjaro Dosierung“ erfahren.")}
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{t("Inhalt")}</h2>
                    <ul className="space-y-2 text-teal-600">
                        {tableOfContents.map((item, index) => (
                            <li key={index} className="hover:underline cursor-pointer">
                                • {t(item)}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-12 space-y-12">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("Was ist Mounjaro?")}</h2>
                    <p className="text-gray-700 leading-relaxed">
                        {t("Mounjaro ist ein verschreibungspflichtiges Medikament mit dem Wirkstoff Tirzepatid, das den Zuckerstoffwechsel, die Appetitregulation und die Fettverbrennung verbessert. Es wird zur Blutzuckerkontrolle bei Erwachsenen mit Typ-2-Diabetes und zur Behandlung von Übergewicht und Adipositas eingesetzt.")}
                    </p>
                    <h3>{t("Tirzepatid")}</h3>
                    <p className="text-gray-700">
                        {t("Tirzepatid ist ein dualer GIP- und GLP-1-Rezeptoragonist. Es ahmt die Wirkung der Hormone GIP (glukoseabhängiges insulinotropes Polypeptid) und GLP-1 (Glucagon-ähnliches Peptid-1) nach, die beide eine wichtige Rolle bei der Regulierung des Blutzuckerspiegels, des Appetits und des Fettstoffwechsels spielen. Durch die Aktivierung dieser Rezeptoren verbessert Tirzepatid die Insulinsensitivität und damit die Blutzuckerkontrolle, fördert die Lipolyse und reduziert den Appetit, was zur Gewichtsabnahme beiträgt.")}
                    </p>
                </div>

                <div className="p-6 rounded-xl">
                    <div className="bg-[#ede8e2] rounded-lg shadow-sm p-6 mt-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold text-3xl mb-3">{t("Standort")}</h3>
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
                                <h3 className="font-bold text-lg mb-3">{t("Öffnungszeiten")}</h3>
                                <table className="w-full text-gray-700">
                                    <tbody>
                                        <tr><td className="py-1">{t("Montag")}</td><td className="text-right">9:00 - 17:00</td></tr>
                                        <tr><td className="py-1">{t("Dienstag")}</td><td className="text-right">9:00 - 17:00</td></tr>
                                        <tr><td className="py-1">{t("Mittwoch")}</td><td className="text-right">9:00 - 17:00</td></tr>
                                        <tr><td className="py-1">{t("Donnerstag")}</td><td className="text-right">9:00 - 17:00</td></tr>
                                        <tr><td className="py-1">{t("Freitag")}</td><td className="text-right">9:00 - 17:00</td></tr>
                                        <tr><td className="py-1">{t("Samstag")}</td><td className="text-right">{t("(nur Telemedizin) 10:00 - 18:00")}</td></tr>
                                        <tr><td className="py-1">{t("Sonntag")}</td><td className="text-right">{t("(nur Telemedizin) 10:00 - 18:00")}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <button className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition">
                            {t("Programm starten")}
                        </button>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("Wer hat Ozempic entwickelt?")}</h2>
                    <h3 className="text-xl font-semibold mb-2">{t("Hersteller")}</h3>
                    <p className="text-gray-700">
                        {t("Mounjaro wird von Eli Lilly and Company, einem internationalen Pharmaunternehmen mit Sitz in Indianapolis, USA, hergestellt. In den USA hat Eli Lilly auch ein Tirzepatid-Medikament speziell für Adipositas unter dem Namen Zepbound auf den Markt gebracht. Eli Lilly hat derzeit jedoch keine Pläne, Zepbound in Europa einzuführen.")}
                    </p>
                    <h3 className="text-xl font-semibold mt-4 mb-2">{t("Verfügbarkeit in Deutschland")}</h3>
                    <p className="text-gray-700">
                        {t("Mounjaro ist seit 2022 auf dem Markt und in verschiedenen Ländern, darunter Deutschland, auf Rezept erhältlich. Es wird als vorgefüllter Pen zur subkutanen Injektion angeboten.")}
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("Für welche Anwendung ist Mounjaro zugelassen?")}</h2>
                    <p className="text-gray-700">
                        {t("Mounjaro ist zugelassen für die Behandlung von Erwachsenen mit:")}
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>{t("Typ-2-Diabetes mellitus, insbesondere wenn Diät und Bewegung allein nicht ausreichen, um den Blutzuckerspiegel zu regulieren.")}</li>
                        <li>{t("Übergewicht (BMI ≥ 27) mit mindestens einer gewichtsbedingten Begleiterkrankung.")}</li>
                        <li>{t("Adipositas (BMI ≥ 30).")}</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("Für wen ist Mounjaro geeignet?")}</h2>
                    <p className="text-gray-700">
                        {t("Mounjaro ist für Erwachsene mit Typ-2-Diabetes mellitus gedacht, die ihren Blutzuckerspiegel nicht ausreichend mit Diät und Bewegung kontrollieren können. Es ist auch für Erwachsene mit Übergewicht und gewichtsbedingten Gesundheitsproblemen sowie Erwachsene mit Adipositas geeignet.")}
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("Wie wirkt die Mounjaro-Spritze?")}</h2>
                    <p className="text-gray-700">
                        {t("Mounjaro enthält Tirzepatid, das sowohl GIP- als auch GLP-1-Rezeptoren aktiviert. Dies führt zu einer verbesserten Insulinsensitivität und einer besseren Blutzuckerkontrolle, einer verringerten Glukagonproduktion und einer verstärkten Lipolyse. Außerdem verlangsamt es die Magenentleerung und unterdrückt den Appetit, was zur Gewichtsabnahme beiträgt.")}
                    </p>
                    <h3>{t("Dosierung und Anwendung")}</h3>
                    <p className="text-gray-700">
                        {t("Mounjaro ist in Dosierungen von 2,5 mg, 5 mg, 7,5 mg, 10 mg, 12,5 mg und 15 mg erhältlich. Die Behandlung erfolgt schrittweise, um die Verträglichkeit zu verbessern, beginnt in der Regel mit 2,5 mg einmal pro Woche. Die Anwendung erfolgt mithilfe eines Injektionspens bzw. Fertigpens oder durch Aufziehen aus einer Durchstechflasche. Bei Bedarf kann die Dosis nach vier Wochen auf 5 mg erhöht und dann je nach individueller Verträglichkeit jeden Monat schrittweise bis zu einer maximalen Dosis von 15 mg pro Woche gesteigert werden.\nDie Injektion erfolgt subkutan (unter die Haut) in Bauch, Oberschenkel oder Oberarm. Um Hautreizungen zu vermeiden, sollten die Injektionsstellen regelmäßig gewechselt werden.")}
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("Wo kann ich Mounjaro kaufen?")}</h2>
                    <p className="text-gray-700">
                        {t("Mounjaro ist nur auf Rezept in Apotheken erhältlich. Vor Beginn der Behandlung sollte eine ärztliche Beratung erfolgen, um die Eignung und die richtige Dosierung festzulegen. Die Wirksamkeit von Mounjaro wurde nur in Kombination mit einem gesunden Lebensstil und einer ausgewogenen Ernährung nachgewiesen.")}
                    </p>
                    <h3>{t("Preise für Mounjaro")}</h3>
                    <p className="text-gray-700">
                        {t("Die Kosten für Mounjaro variieren je nach Dosierung und Packungsgröße und unterliegen gesetzlichen Vorschriften. Bei The Body Clinic können Sie ein Starter-Programm mit Mounjaro ab 450€ beginnen. Dies inkludiert – wenn gewünscht – die kostenfreie Lieferung des Medikaments, persönliches Coaching und Zugang zu Online-Fitnessangeboten, um eine bestmögliche Wirksamkeit zu unterstützen.")}
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("Wie viel Gewichtsverlust ist mit Ozempic möglich?")}</h2>
                    <p className="text-gray-700">
                        {t("Eine genaue Angabe ist vorab schwierig, da der Gewichtsverlust von individuellen Faktoren wie dem Startgewicht abhängt. Die meisten Menschen erleben bereits in der ersten Woche einen Gewichtsverlust. Die Untergrenze liegt nach 12 Wochen bei einem Gewichtsverlust von 5 % des Startgewichts. Andernfalls kann die Behandlung in Absprache mit Ihrem / Ihrer behandelnden Arzt / Ärztin beendet werden. Die Behandlung sollte nicht abrupt und nur in Abstimmung mit einem Arzt beendet werden.")}
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("Was sind mögliche Nebenwirkungen?")}</h2>
                    <p className="text-gray-700">
                        {t("Die häufigsten Nebenwirkungen von Mounjaro sind")}
                    </p>
                    <ul style={{ listStyleType: "disc", marginLeft: "1.5rem" }}>
                        <li>{t("Übelkeit")}</li>
                        <li>{t("Durchfall")}</li>
                        <li>{t("Erbrechen")}</li>
                        <li>{t("Verstopfung")}</li>
                        <li>{t("Bauchschmerzen")}</li>
                    </ul>
                    <p className="text-gray-700">{t("Diese Nebenwirkungen treten meist zu Beginn der Behandlung auf und lassen mit der Zeit nach. Seltene, aber schwerwiegende Nebenwirkungen können Pankreatitis oder allergische Reaktionen sein. Bei starken Bauchschmerzen oder allergischen Symptomen sollte sofort ein Arzt konsultiert werden.")}</p>
                    <h3>{t("Sicherheit und Zulassung von Mounjaro")}</h3>
                    <p className="text-gray-700">{t("Mounjaro wurde auf Empfehlung der Europäischen Arzneimittelbehörde (EMA) von der Europäischen Kommission zugelassen. Diese Zulassung bestätigt, dass die Anwendung dieses Medikaments für Erwachsene mit Typ-2-Diabetes, Übergewicht oder Adipositas sicher ist. Eine begleitende Lebensstiländerung mit gesunder Ernährung und ausreichend Bewegung ist essenziell.")}</p>
                    <h3>{t("Wechselwirkungen und Gegenanzeigen")}</h3>
                    <p className="text-gray-700">{t("Vor der Anwendung von Mounjaro sollten Patient:innen ihren Arzt bzw. ihre Ärztin über bestehende Gesundheitsprobleme und eingenommene Medikamente informieren.")}</p>
                    <p className="text-gray-700">{t("Mounjaro kann die Wirkung anderer blutzuckersenkender Medikamente verstärken, wodurch das Risiko einer Hypoglykämie (Unterzuckerung) steigt. Eine regelmäßige Blutzuckerkontrolle ist notwendig, und gegebenenfalls muss die Dosierung anderer Diabetesmedikamente angepasst werden.")}</p>
                    <p className="text-gray-700">{t("Patient:innen mit einer Vorgeschichte von Pankreatitis oder schweren Magen-Darm-Erkrankungen sollten vor der Anwendung ihren Arzt bzw. ihre Ärztin konsultieren. Die Anwendung während der Schwangerschaft und Stillzeit wird nicht empfohlen.")}</p>
                    <p className="text-gray-700">{t("Bei Insulin und Sulfonylharnstoffen sollten diese vor Beginn der Behandlung mit Mounjaro abgesetzt werden. Außerdem besteht aufgrund der verbesserten Blutzuckerkontrolle ein erhöhtes Risiko für diabetische Retinopathie, weshalb regelmäßige Augenuntersuchungen für Diabetespatienten empfohlen werden.")}</p>
                    <ul style={{ listStyleType: "disc", marginLeft: "1.5rem" }}>
                        <li>{t("Mounjaro verzögert die Magenentleerung, was das Ausmaß und die Geschwindigkeit der Resorption von (anderen) oral verabreichten Medikamenten verringern kann. Bei Beginn der Behandlung mit Mounjaro bei Patienten, die Vitamin-K-Antagonisten einnehmen, sollte der INR-Wert häufiger kontrolliert werden. Besprechen Sie Ihre Medikamente mit Ihrem Arzt.")}</li>
                        <li>{t("Während der Behandlung mit GLP-1-Rezeptoragonisten im Zusammenhang mit einer Vollnarkose oder einer tiefen Sedierung wurden Fälle von Lungenaspiration gemeldet. Vor der Durchführung von Eingriffen unter Vollnarkose oder tiefer Sedierung sollte das erhöhte Risiko von Magenrestinhalten aufgrund einer verzögerten Magenentleerung berücksichtigt werden.")}</li>
                        <p className="text-gray-700">{t("Es wird nicht empfohlen für Patienten mit schwerer Herzinsuffizienz, Nieren- und/oder Leberinsuffizienz.")}</p>
                    </ul>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("Unterschiede zwischen Mounjaro und anderen Medikamenten")}</h2>
                    <h3>{t("Mounjaro vs. Ozempic")}</h3>
                    <p className="text-gray-700">
                        {t("Mounjaro (Tirzepatid) und Ozempic (Semaglutid) sind beide GLP-1-Rezeptoragonisten. Mounjaro aktiviert zusätzlich den GIP-Rezeptor, was eine stärkere Wirkung auf den Blutzuckerspiegel und das Sättigungsgefühl haben kann. Beide Medikamente werden einmal wöchentlich injiziert. Beide sind für die Behandlung von Typ-2-Diabetes zugelassen. Zusätzlich ist Mounjaro auch zur Gewichtsreduktion unter den oben genannten Voraussetzungen zugelassen.")}
                    </p>
                    <h3>{t("Mounjaro vs. Wegovy")}</h3>
                    <p className="text-gray-700">
                        {t("Mounjaro und Wegovy sind beide GLP-1-Rezeptoragonisten, jedoch aktiviert Mounjaro zusätzlich den GIP-Rezeptor, was eine verstärkte Wirkung auf die Blutzuckerregulation und lipolysis hat. Beide Medikamente werden einmal wöchentlich injiziert. Mounjaro ist sowohl für die Behandlung von Typ-2-Diabetes als auch zur Gewichtsreduktion zugelassen, Wegovy hingegen ausschließlich zur Gewichtsabnahme.")}
                    </p>
                    <h3>{t("Mounjaro vs. Saxenda")}</h3>
                    <p className="text-gray-700">
                        {t("Mounjaro und Saxenda sind beide GLP-1-Rezeptoragonisten, jedoch aktiviert Mounjaro wie oben beschrieben zusätzlich den GIP-Rezeptor. Mounjaro wird wöchentlich und Saxenda täglich injiziert. Mounjaro ist zusätzlich für die Behandlung von Typ-2-Diabetes zugelassen, Saxenda nicht.")}
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("Erstattet die Krankenkasse Mounjaro?")}</h2>
                    <p className="text-gray-700">
                        {t("In Deutschland übernehmen gesetzliche Krankenkassen die Kosten für Mounjaro für Gewichtsabnahme in der Regel nicht, da es für diesen Anwendungsfall derzeit als Lifestyle-Arzneimittel eingestuft ist. Die Erstattung durch Krankenkassen hängt jedoch stark von der individuellen Versicherungspolice und der medizinischen Indikation ab. Patient:innen sollten sich daher direkt bei ihrer Krankenkasse über Erstattungsmöglichkeiten informieren.")}
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("Wie kann ich Mounjaro absetzen?")}</h2>
                    <p className="text-gray-700">
                        {t("Das Absetzen der Behandlung sollte in Absprache mit einem Arzt bzw. einer Ärztin erfolgen, um mögliche Nebenwirkungen zu vermeiden. Häufig erfolgt eine Umstellung auf eine Erhaltungsdosis, wobei Mounjaro schrittweise reduziert wird. Es ist auch möglich, die Medikation vollständig abzusetzen. In diesem Fall besteht jedoch das Risiko einer erneuten Gewichtszunahme.")}
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("Beipackzettel")}</h2>
                    <p className="text-gray-700">
                        {t("Wenn Sie weitere Informationen benötigen, können Sie jederzeit die Packungsbeilage zu Rate ziehen, um alles über Ozempic zu erfahren.")}
                    </p>
                    <button className="btn-primary">{t("Beipackzettel Ozempic")}</button>
                </div>

                <div>
                    <h2>{t("Verwandte Blogartikel zu Mounjaro")}</h2>
                    <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem" }}>
                        <div>
                            <img style={{ borderRadius: "50%", width: "340px", height: "240px", marginBottom: "1rem" }} src="./zempic1.webp" alt="" />
                            <h4>{t("Mounjaro vs Ozempic: Die wichtigsten Unterschiede")}</h4>
                            <p className="text-gray-400">23-04-2025</p>
                        </div>
                        <div>
                            <img style={{ borderRadius: "50%", width: "340px", height: "240px", marginBottom: "1rem" }} src="./zempic2.webp" alt="" />
                            <h4>{t("Wegovy vs Ozempic: Die wichtigsten Unterschiede")}</h4>
                            <p className="text-gray-400">11-04-2025</p>
                        </div>
                        <div>
                            <img style={{ borderRadius: "50%", width: "340px", height: "240px", marginBottom: "1rem" }} src="./zempic3.webp" alt="" />
                            <h4>{t("Semaglutid und Alkohol: Neue Forschung zu möglicher Wirkung")}</h4>
                            <p className="text-gray-400">23-04-2025</p>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection />
        </div>
    );
};

export default Mounjaro;