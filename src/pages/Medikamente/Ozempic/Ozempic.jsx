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
    )
}

const FAQSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { q: "ozempic.faq.q1", a: "ozempic.faq.a1" },
    { q: "ozempic.faq.q2", a: "ozempic.faq.a2" },
    { q: "ozempic.faq.q3", a: "ozempic.faq.a3" },
    { q: "ozempic.faq.q4", a: "ozempic.faq.a4" },
    { q: "ozempic.faq.q5", a: "ozempic.faq.a5" },
    { q: "ozempic.faq.q6", a: "ozempic.faq.a6" },
    { q: "ozempic.faq.q7", a: "ozempic.faq.a7" },
  ]

  return (
    <div className="faq-section">
      <div className="faq-container container">
        <h2>{t("ozempic.faq.title")}</h2>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={t(faq.q)}
              answer={t(faq.a)}
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
    const { t } = useTranslation();
    return (
      <>
        <div className="hero-section">
          <div className="hero-content container">
            <h1 className="hero-title">
              {t("ozempic.hero.title")}
            </h1>
            <p className="text-3xl">{t("ozempic.hero.subtitle")}</p>
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
            <p>{t("ozempic.author.checkedby")}</p>
            <p>
              <span style={{ color: '#568a9a' }}>{t("ozempic.author.name")}</span> {t("ozempic.author.text")}
            </p>
          </div>
        </div>
      </>
    )
}

const Ozempic = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-[#f3efeb]">
            <HeroSection/>

            <section className="bg-gradient-to-b from-teal-50 to-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center d-flex gap-12" style={{ alignItems: 'center'}}>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        <img src="./ozempicmain.webp" alt="" className="rounded-xl" />
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto text-start">
                        {t("ozempic.maindesc")}
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{t("ozempic.toc.title")}</h2>
                    <ul className="space-y-2 text-teal-600">
                        {t("ozempic.toc.items", { returnObjects: true }).map((item, index) => (
                            <li key={index} className="hover:underline cursor-pointer">
                                • {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-12 space-y-12">

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("ozempic.section.whatis")}</h2>
                    <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t("ozempic.section.whatis.p") }} />
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{t("ozempic.section.semaglutid")}</h3>
                    <p className="text-gray-700 leading-relaxed">{t("ozempic.section.semaglutid.p")}</p>
                </div>

                <div className="p-6 rounded-xl">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("ozempic.section.berlin")}</h2>
                    <p className="text-gray-700 mb-4">{t("ozempic.section.berlin.p1")}</p>

                    <div className="bg-[#ede8e2] rounded-lg shadow-sm p-6 mt-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold text-3xl mb-3">{t("ozempic.section.location.title")}</h3>
                                <div className="space-y-2 text-gray-700">
                                    <p><strong>{t("ozempic.section.location.berlin")}</strong></p>
                                    <p>{t("ozempic.section.location.berlin.address1")}</p>
                                    <p>{t("ozempic.section.location.berlin.address2")}</p>
                                    <hr className="my-3" />
                                    <p><strong>{t("ozempic.section.location.munich")}</strong></p>
                                    <p>{t("ozempic.section.location.munich.address1")}</p>
                                    <p>{t("ozempic.section.location.munich.address2")}</p>
                                    <hr className="my-3" />
                                    <p><strong>{t("ozempic.section.location.hamburg")}</strong></p>
                                    <p>{t("ozempic.section.location.hamburg.address1")}</p>
                                    <p>{t("ozempic.section.location.hamburg.address2")}</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-3">{t("ozempic.section.opening.title")}</h3>
                                <table className="w-full text-gray-700">
                                    <tbody>
                                        <tr><td className="py-1">{t("ozempic.section.opening.monday")}</td><td className="text-right">{t("ozempic.section.opening.time.week")}</td></tr>
                                        <tr><td className="py-1">{t("ozempic.section.opening.tuesday")}</td><td className="text-right">{t("ozempic.section.opening.time.week")}</td></tr>
                                        <tr><td className="py-1">{t("ozempic.section.opening.wednesday")}</td><td className="text-right">{t("ozempic.section.opening.time.week")}</td></tr>
                                        <tr><td className="py-1">{t("ozempic.section.opening.thursday")}</td><td className="text-right">{t("ozempic.section.opening.time.week")}</td></tr>
                                        <tr><td className="py-1">{t("ozempic.section.opening.friday")}</td><td className="text-right">{t("ozempic.section.opening.time.week")}</td></tr>
                                        <tr><td className="py-1">{t("ozempic.section.opening.saturday")}</td><td className="text-right">{t("ozempic.section.opening.time.weekend")}</td></tr>
                                        <tr><td className="py-1">{t("ozempic.section.opening.sunday")}</td><td className="text-right">{t("ozempic.section.opening.time.weekend")}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <button className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition">
                            {t("ozempic.section.startbutton")}
                        </button>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("ozempic.section.developer")}</h2>
                    <h3 className="text-xl font-semibold mb-2">{t("ozempic.section.developer.manufacturer")}</h3>
                    <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: t("ozempic.section.developer.manufacturer.p") }} />
                    <h3 className="text-xl font-semibold mt-4 mb-2">{t("ozempic.section.developer.availability")}</h3>
                    <p className="text-gray-700">{t("ozempic.section.developer.availability.p")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("ozempic.section.approval")}</h2>
                    <p className="text-gray-700">{t("ozempic.section.approval")}</p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>{t("ozempic.section.approval.list1")}</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("ozempic.section.suitable")}</h2>
                    <p className="text-gray-700">{t("ozempic.section.suitable.p")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("ozempic.section.h.works")}</h2>
                    <p className="text-gray-700">{t("ozempic.section.howworks.p")}</p>
                    <h3>{t("ozempic.section.dosage.title")}</h3>
                    <p className="text-gray-700">{t("ozempic.section.dosage.p")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("ozempic.section.howlong")}</h2>
                    <p className="text-gray-700">{t("ozempic.section.howlong.p1")}</p>
                    <p className="text-gray-700">{t("ozempic.section.howlong.p2")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("ozempic.section.howmuch")}</h2>
                    <p className="text-gray-700">{t("ozempic.section.howmuch.p")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("ozempic.section.wherebuy")}</h2>
                    <p className="text-gray-700">{t("ozempic.section.wherebuy.p")}</p>
                    <h3>{t("ozempic.section.price.title")}</h3>
                    <p className="text-gray-700">{t("ozempic.section.price.p")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("ozempic.section.sideeffects")}</h2>
                    <p className="text-gray-700">{t("ozempic.section.sideeffects.p1")}</p>
                    <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
                        <li>{t("ozempic.section.sideeffects.list1")}</li>
                        <li>{t("ozempic.section.sideeffects.list2")}</li>
                        <li>{t("ozempic.section.sideeffects.list3")}</li>
                        <li>{t("ozempic.section.sideeffects.list4")}</li>
                        <li>{t("ozempic.section.sideeffects.list5")}</li>
                    </ul>
                    <p className="text-gray-700">{t("ozempic.section.sideeffects.p2")}</p>
                    <h3>{t("ozempic.section.alcohol.title")}</h3>
                    <p className="text-gray-700">{t("ozempic.section.alcohol.p1")}</p>
                    <p className="text-gray-700">{t("ozempic.section.alcohol.p2")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("ozempic.section.pregnancy")}</h2>
                    <p className="text-gray-700">{t("ozempic.section.pregnancy.p")}</p>
                    <h3>{t("ozempic.section.pregnancy.risk.title")}</h3>
                    <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
                        <li>{t("ozempic.section.pregnancy.risk1")}</li>
                        <li>{t("ozempic.section.pregnancy.risk2")}</li>
                    </ul>
                    <h3>{t("ozempic.section.pregnancy.contraception.title")}</h3>
                    <p className="text-gray-700">{t("ozempic.section.pregnancy.contraception.p")}</p>
                    <h3>{t("ozempic.section.pregnancy.ifpregnant.title")}</h3>
                    <p className="text-gray-700">{t("ozempic.section.pregnancy.ifpregnant.p")}</p>
                    <h3>{t("ozempic.section.pregnancy.breastfeeding.title")}</h3>
                    <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
                        <li>{t("ozempic.section.pregnancy.breastfeeding1")}</li>
                        <li>{t("ozempic.section.pregnancy.breastfeeding2")}</li>
                    </ul>
                    <h3>{t("ozempic.section.pregnancy.fertility.title")}</h3>
                    <p className="text-gray-700">{t("ozempic.section.pregnancy.fertility.p")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("ozempic.section.safety")}</h2>
                    <p className="text-gray-700">{t("ozempic.section.safety.p")}</p>
                    <h3>{t("ozempic.section.injection.title")}</h3>
                    <p className="text-gray-700">{t("ozempic.section.injection.p")}</p>
                    <h3>{t("ozempic.section.interactions.title")}</h3>
                    <p className="text-gray-700">{t("ozempic.section.interactions.p")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("ozempic.section.differences")}</h2>
                    <h3>Ozempic vs. Mounjaro</h3>
                    <p className="text-gray-700">{t("ozempic.section.diff.mounjaro")}</p>
                    <h3>Ozempic vs. Wegovy</h3>
                    <p className="text-gray-700">{t("ozempic.section.diff.wegovy")}</p>
                    <h3>Ozempic vs. Saxenda</h3>
                    <p className="text-gray-700">{t("ozempic.section.diff.saxenda")}</p>
                    <h3>Ozempic vs. Rybelsus</h3>
                    <p className="text-gray-700">{t("ozempic.section.diff.rybelsus")}</p>
                    <h3>Ozempic vs. Mysimba</h3>
                    <p className="text-gray-700">{t("ozempic.section.diff.mysimba")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("ozempic.section.insurance")}</h2>
                    <p className="text-gray-700">{t("ozempic.section.insurance.p")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("ozempic.section.stop")}</h2>
                    <p className="text-gray-700">{t("ozempic.section.stop.p")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("ozempic.section.leaflet")}</h2>
                    <p className="text-gray-700">{t("ozempic.section.leaflet.p")}</p>
                    <button className="btn-primary">{t("ozempic.section.leaflet.button")}</button>
                </div>

                <div>
                    <h2>{t("ozempic.related.title")}</h2>
                    <div style={{display:'flex', justifyContent:'center', gap:'2rem',marginTop:'2rem', flexWrap:'wrap'}}>
                        <div>
                            <img style={{borderRadius:'50%',width:'340px', height:'240px', marginBottom:'1rem', objectFit:'cover'}} src="./zempic1.webp" alt="" />
                            <h4>{t("ozempic.related.article1.title")}</h4>
                            <p className="text-gray-400">{t("ozempic.related.article1.date")}</p>
                        </div>
                        <div>
                        <img style={{borderRadius:'50%',width:'340px', height:'240px', marginBottom:'1rem', objectFit:'cover'}} src="./zempic2.webp" alt="" />
                            <h4>{t("ozempic.related.article2.title")}</h4>
                            <p className="text-gray-400">{t("ozempic.related.article2.date")}</p>
                        </div>
                           <div>
                           <img style={{borderRadius:'50%',width:'340px', height:'240px', marginBottom:'1rem', objectFit:'cover'}} src="./zempic3.webp" alt="" />
                            <h4>{t("ozempic.related.article3.title")}</h4>
                            <p className="text-gray-400">{t("ozempic.related.article3.date")}</p>
                        </div>
                    </div>
                </div>
            </section>
            <FAQSection/>
        </div>
    );
};

export default Ozempic;