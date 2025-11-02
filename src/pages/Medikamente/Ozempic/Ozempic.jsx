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
      question: "Wie viel kostet eine Ozempic-Spritze?",
      answer:
        "Die Kosten variieren je nach Dosierung und Anbieter. Erkundigen Sie sich bei Ihrer Apotheke oder Ihrem ausgewählten Behandler nach den aktuellen Preisen.",
    },
    {
      question: "Wofür steht GLP-1?",
      answer:
        "GLP-1 steht für Glucagon-like Peptide-1. Es ist ein natürliches Hormon, das im Darm gebildet wird und eine wichtige Rolle bei der Blutzuckerregulation, der Insulinausschüttung und dem Sättigungsgefühl spielt. GLP-1-Analoga sind eine Gruppe von Medikamenten, die nach dem gleichen Wirkprinzip funktionieren: Die Wirkstoffe sind ähnlich wie das körpereigene Darmhormon aufgebaut und ahmen dessen Wirkung im Körper nach. Da die Wirkstoffe an den gleichen Rezeptor ansetzen, sind sie auch als GLP-1-Rezeptoragonisten bekannt.",
    },
    {
      question: "Wie viel Gewicht verliert man mit Ozempic bzw. wie viel Kilo nimmt man ab?",
      answer:
        "Ozempic ist ein Medikament, das zur Behandlung von Typ-2-Diabetes entwickelt wurde. Der damit verbundene Gewichtsverlust ist lediglich eine Nebenwirkung. Falls Sie an einer Gewichtsregulation mit Semaglutid interessiert sind, können Sie prüfen, ob Sie für Wegovy in Frage kommen.",
    },
    {
      question: "Was ist besser – Mounjaro oder Ozempic?",
      answer:
        "Mounjaro und Ozempic gehören beide zur Klasse der GLP-1-Rezeptoragonisten, unterscheiden sich jedoch in ihrer Zusammensetzung und Wirkweise. Während Ozempic ausschließlich auf dem GLP-1-Hormon basiert, kombiniert Mounjaro dieses mit dem zusätzlichen Hormon GIP. Diese Dualwirkung kann zu einer stärkeren Regulierung des Blutzuckerspiegels, einem intensiveren Sättigungsgefühl und einer verstärkten Fettverbrennung führen"
    },
    {
      question: "Was ist besser – Ozempic oder Wegovy?",
      answer:
        "Die Wirkung von Ozempic dient primär der Blutzuckerregulierung bei Typ-2-Diabetes. Abnehmen ist nicht das Kernziel der Behandlung, jedoch verlieren viele Patient:innen mit Ozempic Gewicht – aus diesem Grund wurde die Ozempic Spritze einige Zeit insbesondere in Sozialen Medien als Mittel zum Abnehmen beworben. In der Folge kam es zeitweise zu Lieferengpässen.",
    },
    {
      question: "Was ist die häufigste Nebenwirkung von Ozempic?",
      answer:
        "Laut den Fachinformationen von Ozempic waren die am häufigsten bei klinischen Studien berichteten Nebenwirkungen gastrointestinale Störungen, darunter Übelkeit (sehr häufig), Durchfall (sehr häufig) und Erbrechen (häufig). Dabei sind die Häufigkeiten wie folgt definiert: Sehr häufig: (≥ 1/10); häufig: (≥ 1/100, < 1/10). Bei Patient:innen mit geringem Körpergewicht können unter der Behandlung mit Semaglutid häufiger gastrointestinale Nebenwirkungen auftreten.",
    },
    {
      question: "Wer sollte kein Ozempic nehmen?",
      answer: "Ozempic darf nicht angewendet werden, wenn Sie allergisch gegen Semaglutid oder sonstige Bestandteile dieses Arzneimittels sind. Diese sind: Natriummonohydrogenphosphat-Dihydrat (Ph.Eur.), Propylenglycol, Phenol, Wasser für Injektionszwecke, Natriumhydroxid/Salzsäure (zur Einstellung des pH-Wertes). Für weiterführende Informationen können Sie sich hier die Packungsbeilage herunterladen. ",
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
            Ozempic Spritze: Wirkung, Anwendung und FAQs
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
const Ozempic = () => {
    return (
        <div className="min-h-screen bg-[#f3efeb]">
            <HeroSection/>
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-teal-50 to-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center d-flex gap-12" style={{ alignItems: 'center'}}>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        <img src="./ozempicmain.webp" alt="" className="rounded-xl" />
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto text-start">
                    Ozempic ist ein injizierbares Medikament mit dem Wirkstoff Semaglutid. Es wird zur Behandlung von Erwachsenen mit Typ-2-Diabetes mellitus eingesetzt. Ozempic stimuliert die Insulinproduktion und reduziert die Glukoseproduktion in der Leber. Dadurch hilft die Spritze von Ozempic, den Blutzuckerspiegel im gesunden Bereich zu halten. Zudem verlangsamt es die Magenentleerung und reguliert Hunger und Sättigung im Gehirn. Semaglutid hat außerdem positive Auswirkungen auf das Herz-Kreislauf-System, die Nieren und reduziert Entzündungen.
                    </p>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Inhalt</h2>
                    <ul className="space-y-2 text-teal-600">
                        {[
                            "Was ist Ozempic?",
                            "Ozempic Behandlung in Berlin",
                            "Wer hat Ozempic entwickelt?",
                            "Für welche Anwendung ist Ozempic zugelassen?",
                            "Für wen ist Ozempic geeignet?",
                            "Wie wirkt Ozempic?",
                            "Wie lange nimmt man mit Ozempic ab?",
                            "Wie viel Gewichtsverlust ist mit Ozempic möglich?",
                            "Wo kann ich Ozempic kaufen?",
                            "Was sind mögliche Nebenwirkungen von Ozempic?",
                            "Ozempic und Schwangerschaft",
                            "Sicherheit und Zulassung von Ozempic",
                            "Unterschiede zwischen Ozempic und anderen Medikamenten",
                            "Erstattet die Krankenkasse Ozempic?",
                            "Wie kann ich Ozempic absetzen?",
                            "Beipackzettel",
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
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Was ist Ozempic?</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Die Spritze von Ozempic ist ein verschreibungspflichtiges Medikament, das den Wirkstoff{" "}
                        <strong>Semaglutid</strong> enthält. Es gehört zur Klasse der{" "}
                        <strong>GLP-1-Rezeptoragonisten</strong> und wird zur Blutzuckerkontrolle bei Erwachsenen mit
                        Typ-2-Diabetes eingesetzt. Zudem kann Ozempic übergewichtige Patient:innen beim Abnehmen
                        unterstützen. Die Anwendung erfolgt mithilfe eines Injektionspens bzw. eines vorgefüllten Pens,
                        der einmal wöchentlich injiziert wird.
                    </p>
                </div>

                {/* Semaglutid */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Semaglutid</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Semaglutid ist der aktive Wirkstoff in Ozempic. Es ist ein GLP-1-Rezeptoragonist, der die
                        Wirkung des natürlichen Hormons GLP-1 nachahmt. Es verbessert die Insulinausschüttung,
                        reduziert die Glukagonfreisetzung und verlangsamt die Magenentleerung. Dadurch wird die
                        Blutzuckerregulation optimiert. Zusätzlich reduziert Semaglutid dadurch das Hungergefühl,
                        sodass viele Patient:innen einen Gewichtsverlust erfahren.
                    </p>
                </div>

                {/* Behandlung in Berlin */}
                <div className=" p-6 rounded-xl">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Ozempic Behandlung in Berlin</h2>
                    <p className="text-gray-700 mb-4">
                        Lassen Sie sich gerne zu einer Behandlung mit Ozempic in unseren Praxisräumen am
                        Schöneberger Ufer 71, 10785 Berlin, oder Online beraten. Vor einer ärztlichen Beratung
                        empfehlen wir ein kostenfreies, telefonisches Erstgespräch mit der medizinischen Assistenz
                        von The Body Clinic zu vereinbaren, um z.B. Fragen zu unseren Programmen zu klären. Buchen
                        Sie Ihr kostenfreies Erstgespräch mit Klick auf „Termin vereinbaren“.
                    </p>

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
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Wer hat Ozempic entwickelt?</h2>
                    <h3 className="text-xl font-semibold mb-2">Hersteller</h3>
                    <p className="text-gray-700">
                        Ozempic wird von <strong>Novo Nordisk</strong>, einem weltweit tätigen Pharmaunternehmen mit Sitz
                        in Dänemark, produziert. Novo Nordisk hat auch das Medikament <strong>Wegovy</strong> entwickelt,
                        das speziell für die Behandlung von Übergewicht und Adipositas zugelassen ist.
                    </p>
                    <h3 className="text-xl font-semibold mt-4 mb-2">Verfügbarkeit</h3>
                    <p className="text-gray-700">
                        Die Ozempic Spritze ist seit 2017 auf dem Markt und in verschiedenen Ländern, darunter
                        Deutschland, auf Rezept erhältlich. Sie wird als vorgefüllter Pen für subkutane Injektionen
                        angeboten. Nachdem es zeitweise zu einem Engpass bei Ozempic gekommen war (u. a. aufgrund der
                        gestiegenen Anwendung der Ozempic Spritze zum Abnehmen), ist es mittlerweile wieder besser
                        erhältlich.
                    </p>
                </div>

                {/* Weitere Abschnitte können hier ergänzt werden... */}
                {/* Beispiel: Für welche Anwendung... */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Für welche Anwendung ist Ozempic zugelassen?
                    </h2>
                    <p className="text-gray-700">
                        Ozempic ist zugelassen für die Behandlung von Erwachsenen mit:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>
                            Typ-2-Diabetes mellitus insbesondere wenn eine alleinige Diät und Bewegung den
                            Blutzuckerspiegel nicht ausreichend kontrollieren können.
                        </li>
                    </ul>
                </div>


                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Für wen ist Ozempic geeignet?
                    </h2>
                    <p className="text-gray-700">
                        Ozempic ist für Erwachsene mit Typ-2-Diabetes mellitus gedacht, deren Blutzuckerspiegel nicht ausreichend durch Diät und Bewegung kontrolliert werden kann
                    </p>
                </div>


                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Wie wirkt Ozempic?
                    </h2>
                    <p className="text-gray-700">
                        Die Spritze von Ozempic enthält Semaglutid, das die GLP-1-Rezeptoren aktiviert. Dies führt zu einer verstärkten Insulinausschüttung, reduzierter Glukagonfreisetzung und einer verzögerten Magenentleerung. Dadurch sinkt der Blutzuckerspiegel und das Sättigungsgefühl hält länger an, was auch zum Abnehmen von Gewicht beitragen kann.
                    </p>
                    <h3>Dosierung und Anwendung </h3>
                    <p className="text-gray-700">Ozempic ist in Dosierungen von 0,25 mg, 0,5 mg und 1 mg erhältlich. Die Behandlung beginnt mit 0,25 mg einmal pro Woche, um die Verträglichkeit zu verbessern. Die Anwendung erfolgt mithilfe eines Injektionspens bzw. eines vorgefüllten Pens. Nach vier Wochen kann die Dosis auf 0,5 mg erhöht werden. Falls erforderlich, kann eine weitere Erhöhung erfolgen.
                        Die Injektion erfolgt subkutan (unter die Haut) in Bauch, Oberschenkel oder Oberarm. Sie sollte wöchentlich am gleichen Tag verabreicht werden, unabhängig von den Mahlzeiten.</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Wie lange nimmt man mit Ozempic ab?
                    </h2>
                    <p className="text-gray-700">
                        Wichtig ist zunächst zu wissen: Ozempic ist für Erwachsene mit Typ-2-Diabetes gedacht und zugelassen. Gewichtsverlust durch die Einnahme von Ozempic ist ein positiver Nebeneffekt. Für Menschen, die den Wirkstoff Semaglutid zum Gewichtsverlust einsetzen möchten, könnte sich die Abnehmspritze Wegovy besser eignen.
                    </p>
                    <p className="text-gray-700">
                        Die Dauer eines Gewichtsverlusts mit Ozempic (Semaglutid) hängt stark von individuellen Faktoren ab – wie Dosierung, Lebensstil, Ausgangsgewicht und Therapieziel. Die Dosierung von Ozempic wird in der Regel schrittweise gesteigert. Studien zeigen, dass Menschen mit der Medikation über einen Zeitraum von 1 bis 2 Jahren hinweg Gewicht verlieren können. </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Wie viel Gewichtsverlust ist mit Ozempic möglich?
                    </h2>
                    <p className="text-gray-700">
                        Eine genaue Angabe ist vorab schwierig, da der Gewichtsverlust von individuellen Faktoren wie dem Startgewicht abhängt. Die meisten Menschen erleben  bereits in der ersten Woche einen Gewichtsverlust. Die Untergrenze liegt nach 12 Wochen bei einem Gewichtsverlust von 5 % des Startgewichts. Andernfalls kann die Behandlung in Absprache mit Ihrem / Ihrer behandelnden Arzt / Ärztin beendet werden. Die Behandlung sollte nicht abrupt und nur in Abstimmung mit einem Arzt beendet werden.
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Wo kann ich Ozempic kaufen?
                    </h2>
                    <p className="text-gray-700">
                        Ozempic ist nur auf Rezept in Apotheken erhältlich. Das Rezept muss von einem Arzt bzw. einer Ärztin ausgestellt werden. Neben der Anwendung der Ozempic-Spritze wird eine gesunde Lebensweise mit einer ausgewogenen Ernährung empfohlen.
                    </p>
                    <h3>Preise für Ozempic </h3>
                    <p className="text-gray-700">Die Kosten für Ozempic hängen von der jeweiligen Dosierung und Packungsgröße ab und unterliegen den gesetzlichen Preisvorgaben. Patient:innen sollten sich bei ihrer Apotheke oder ihrem Arzt bzw. ihrer Ärztin über die aktuellen Kosten informieren.</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Was sind mögliche Nebenwirkungen von Ozempic?
                    </h2>
                    <p className="text-gray-700">
                        Die häufigsten Nebenwirkungen von Ozempic sind:
                    </p>
                    <ul style={{ listStyleType: 'disc' }}>
                        <li>Übelkeit</li>
                        <li>Durchfall</li>
                        <li>Erbrechen</li>
                        <li>Verstopfung</li>
                        <li>Appetitlosigkeit</li>
                    </ul>
                    <p className="text-gray-700">Diese Nebenwirkungen treten meist zu Beginn der Behandlung auf und lassen mit der Zeit nach. Der Körper benötigt eine Anpassungsphase, daher wird die Dosierung schrittweise erhöht. Seltene, aber schwerwiegende Ozempic-Nebenwirkungen können Pankreatitis oder allergische Reaktionen sein. Bei starken Bauchschmerzen oder allergischen Symptomen sollte sofort ein Arzt konsultiert werden.</p>
                    <h3>Alkohol und Ozempic</h3>
                    <p className="text-gray-700">In den Fachinformationen von Ozempic werden keine spezifischen Wechselwirkungen mit Alkohol beschrieben. Sowohl Ozempic als auch Alkohol wirken jedoch auf den Magen-Darm-Trakt – ihre Kombination kann daher das Risiko für Nebenwirkungen wie Übelkeit, Erbrechen, Durchfall oder Bauchschmerzen erhöhen.</p>
                    <p className="text-gray-700">Auch der Blutzuckerspiegel kann durch beide Substanzen beeinflusst werden, was zu stärkeren Schwankungen und einer erschwerten Blutzuckerkontrolle führen kann. Um eine stabile Stoffwechsellage zu unterstützen und das Risiko von Komplikationen zu verringern, sollte Alkoholkonsum begrenzt werden.</p>
                </div>


                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Ozempic und Schwangerschaft
                    </h2>
                    <p className="text-gray-700">
                        Die Anwendung von Ozempic während der Schwangerschaft und Stillzeit ist nicht erlaubt, da mögliche Risiken für das ungeborene Kind oder das gestillte Baby nicht ausgeschlossen werden können.
                    </p>
                    <h3> Risiken vor und während der Schwangerschaft:</h3>
                    <ul style={{ listStyleType: 'disc' }}>
                        <li >Mögliche Schäden für das ungeborene Kind:  Tierstudien haben gezeigt, dass Semaglutid reproduktionstoxische Effekte haben kann. Beim Menschen liegen nur begrenzte Daten vor, weshalb eine sichere Anwendung nicht gewährleistet werden kann.</li>
                        <li>Lange Verweildauer im Körper: Aufgrund der langen Halbwertszeit von Semaglutid muss das Medikament mindestens 2 Monate vor einer geplanten Schwangerschaft abgesetzt werden.</li>
                    </ul>
                    <h3>Notwendigkeit einer Schwangerschaftsverhütung:</h3>
                    <p className="text-gray-700">Während der Behandlung mit Ozempic wird empfohlen, eine zuverlässige Verhütungsmethode zu verwenden, um eine ungewollte Schwangerschaft zu vermeiden.</p>
                    <h3>Was tun, wenn eine Schwangerschaft eintritt?</h3>
                    <p className="text-gray-700">Falls während der Behandlung eine Schwangerschaft eintritt, muss das Medikament sofort abgesetzt und ärztlicher Rat eingeholt werden, um die Therapie entsprechend anzupassen.</p>
                    <h3> Warum wird Ozempic auch während der Stillzeit nicht empfohlen?</h3>
                    <ul style={{ listStyleType: 'disc' }}>
                        <li >Ungewisse Auswirkungen auf gestillte Kinder: Es ist nicht bekannt, ob Semaglutid in die Muttermilch übergeht.</li>
                        <li>Tierstudien zeigen eine Ausscheidung in die Muttermilch: Bei säugenden Ratten wurde Semaglutid in der Muttermilch nachgewiesen, weshalb ein Risiko für gestillte Babys nicht ausgeschlossen werden kann.</li>
                    </ul>
                    <h3>Beeinflusst Ozempic die Fruchtbarkeit?</h3>
                    <p className="text-gray-700"> Es gibt keine ausreichenden Daten dazu, ob Semaglutid die menschliche Fruchtbarkeit beeinflusst. Bei Versuchen mit männlichen Ratten wurden in Studien keine negativen Auswirkungen auf die Fortpflanzungsfähigkeit festgestellt. Bei weiblichen Ratten wurde jedoch eine leichte Veränderung des Zyklus und eine reduzierte Anzahl von Ovulationen beobachtet, insbesondere wenn die Tiere während der Behandlung Gewicht verloren.</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Sicherheit und Zulassung von Ozempic
                    </h2>
                    <p className="text-gray-700">
                        Ozempic wurde auf Empfehlung der Europäischen Arzneimittelbehörde (EMA) von der Europäischen Kommission zugelassen. Es ist nachgewiesen, dass Ozempic für die meisten Menschen sicher ist, wenn es gemäß den Anweisungen der/ des behandelnden Arztes  bzw. Ärztin verwendet wird. Schwangere und stillende Frauen sollten Ozempic vermeiden, es sei denn, ihr Arzt bzw. ihre Ärztin empfiehlt es ausdrücklich. Eine gesunde Ernährung und regelmäßige Bewegung sind unerlässlich für eine erfolgreiche Therapie.
                    </p>
                    <h3> Wo spritzt man Ozempic?</h3>
                    <p className="text-gray-700">
                        <p className="text-gray-700">
                            Ozempic wurde auf Empfehlung der Europäischen Arzneimittelbehörde (EMA) von der Europäischen Kommission zugelassen. Es ist nachgewiesen, dass Ozempic für die meisten Menschen sicher ist, wenn es gemäß den Anweisungen der/ des behandelnden Arztes  bzw. Ärztin verwendet wird. Schwangere und stillende Frauen sollten Ozempic vermeiden, es sei denn, ihr Arzt bzw. ihre Ärztin empfiehlt es ausdrücklich. Eine gesunde Ernährung und regelmäßige Bewegung sind unerlässlich für eine erfolgreiche Therapie.
                        </p>
                    </p>
                    <h3>Wechselwirkungen und Gegenanzeigen</h3>
                    <p className="text-gray-700">Vor der Anwendung von Ozempic sollten Patient:innen ihren Arzt bzw. ihre Ärztin über bestehende Gesundheitsprobleme und andere, aktuell eingenommene Medikamente informieren.</p>
                    <p className="text-gray-700">Denn Ozempic kann die Wirkung anderer blutzuckersenkender Medikamente verstärken, wodurch das Risiko einer Hypoglykämie (Unterzuckerung) steigt. Eine regelmäßige Blutzuckerkontrolle ist notwendig, und gegebenenfalls muss die Dosierung anderer Diabetesmedikamente angepasst werden. </p>
                    <p className="text-gray-700"><p className="text-gray-700">Denn Ozempic kann die Wirkung anderer blutzuckersenkender Medikamente verstärken, wodurch das Risiko einer Hypoglykämie (Unterzuckerung) steigt. Eine regelmäßige Blutzuckerkontrolle ist notwendig, und gegebenenfalls muss die Dosierung anderer Diabetesmedikamente angepasst werden. </p>
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Unterschiede zwischen Ozempic und anderen Medikamenten
                    </h2>
                    <h3>Ozempic vs. Mounjaro</h3>
                    <p className="text-gray-700">
                        Ozempic und Mounjaro sind beide GLP-1-Rezeptoragonisten, jedoch aktiviert Mounjaro zusätzlich den GIP-Rezeptor, was möglicherweise eine stärkere Wirkung auf den Blutzuckerspiegel und das Körpergewicht hat. Beide Medikamente werden einmal wöchentlich injiziert. Ozempic und Mounjaro sind zugelassen für die Behandlung von Erwachsenen mit Typ-2-Diabetes, Mounjaro zusätzlich für die Behandlung von Menschen mit Adipositas (BMI ≥ 30) oder Übergewicht (BMI ≥ 27) mit mind. einer gewichtsbedingten Begleiterkrankung.
                    </p>
                    <h3>Ozempic vs. Wegovy</h3>
                    <p className="text-gray-700">
                        Wegovy enthält ebenfalls den Wirkstoff Semaglutid und wird vom Hersteller Novo Nordisk vermarktet. Es ist speziell für die Gewichtsabnahme von Menschen mit Adipositas (BMI ≥ 30) oder Übergewicht (BMI ≥ 27) zugelassen und in einer höheren Dosierung als Ozempic verfügbar. Die Wirkung von Ozempic dient hingegen primär der Blutzuckerregulierung bei Typ-2-Diabetes und nicht der Gewichtsregulierung. Beide Medikamente werden einmal wöchentlich injiziert.
                    </p>
                    <h3>Ozempic vs. Saxenda</h3>
                    <p className="text-gray-700">
                        Ozempic und Saxenda sind beide GLP-1-Rezeptoragonisten, jedoch wird Ozempic wöchentlich und Saxenda täglich injiziert. Ozempic wird in erster Linie für Typ-2-Diabetes eingesetzt, während Saxenda nur für Gewichtsabnahme von Menschen mit Adipositas (BMI ≥ 30) oder Übergewicht (BMI ≥ 27)  zugelassen ist.
                    </p>
                    <h3>Ozempic vs. Rybelsus</h3>
                    <p className="text-gray-700">
                        Rybelsus und Ozempic enthalten Semaglutid und sind GLP-1-Rezeptoragonisten. Ozempic wird wöchentlich injiziert, Rybelsus täglich als Tablette eingenommen. Beide dienen zur Behandlung von Typ-2-Diabetes, Ozempic kann auch zur Gewichtsabnahme beitragen. Rybelsus wird in Deutschland derzeit nicht vermarktet.
                    </p>
                    <h3>Ozempic vs. Mysimba</h3>
                    <p className="text-gray-700">
                        Ozempic ist ein GLP-1-Rezeptoragonist zur Behandlung von Typ-2-Diabetes mit möglicher Gewichtsabnahme. Mysimba (Naltrexon/Bupropion) wird gezielt zur Gewichtsreduktion eingesetzt und wirkt auf das Belohnungssystem des Gehirns.
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Erstattet die Krankenkasse Ozempic?
                    </h2>
                    <p className="text-gray-700">
                        Die Erstattung durch Krankenkassen hängt von der individuellen Versicherungspolice und der medizinischen Indikation ab. Patient:innen sollten sich direkt bei ihrer Krankenkasse über Erstattungsmöglichkeiten informieren. Die Kostenübernahme ist nicht in allen Fällen möglich, da oft bestimmte medizinische Voraussetzungen erfüllt sein müssen.                    </p>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Wie kann ich Ozempic absetzen?
                    </h2>
                    <p className="text-gray-700">
                        Das Absetzen sollte in Absprache mit einem Arzt bzw. einer Ärztin erfolgen. Typ-2-Diabetes ist eine chronische Erkrankung, weshalb viele Patient:innen lebenslang auf Medikamente angewiesen sind. Ozempic ist daher oft eine langfristige Therapieoption.
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

                <div>
                    <h2>Verwandte Blogartikel zu Ozempic</h2>
                    <div style={{display:'flex', justifyContent:'center', gap:'2rem',marginTop:'2rem'}}>
                        <div st>
                            <img style={{borderRadius:'50%' ,width:'340px', height:'240px', marginBottom:'1rem'}} src="./zempic1.webp" alt="" />
                            <h4>Mounjaro vs Ozempic: Die wichtigsten Unterschiede</h4>
                            <p className="text-gray-400">23-04-2025</p>
                        </div>
                        <div>
                        <img style={{borderRadius:'50%' ,width:'340px', height:'240px', marginBottom:'1rem'}} src="./zempic2.webp" alt="" />

                            <h4>Wegovy vs Ozempic: Die wichtigsten Unterschiede</h4>
                            <p className="text-gray-400">11-04-2025</p>
                        </div>
                           <div>
                           <img style={{borderRadius:'50%' ,width:'340px', height:'240px', marginBottom:'1rem'}} src="./zempic3.webp" alt="" />
                            <h4>Semaglutid und Alkohol: Neue Forschung zu moglicher Wirkung</h4>
                            <p className="text-gray-400">23-04-2025</p>
                        </div>
                    </div>
                </div>
            </section>
            <FAQSection/>
        </div>
    );
};

export default Ozempic;