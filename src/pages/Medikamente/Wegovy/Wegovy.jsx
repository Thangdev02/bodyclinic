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
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { q: "wegovy.faq.q1", a: "wegovy.faq.a1" },
        { q: "wegovy.faq.q2", a: "wegovy.faq.a2" },
        { q: "wegovy.faq.q3", a: "wegovy.faq.a3" },
        { q: "wegovy.faq.q4", a: "wegovy.faq.a4" },
    ];

    return (
        <div className="faq-section">
            <div className="faq-container container">
                <h2>{t("wegovy.faq.title")}</h2>
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
                    <h1 className="hero-title">{t("wegovy.hero.title")}</h1>
                    <p className="text-3xl">{t("wegovy.hero.subtitle")}</p>
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
                    <p>{t("wegovy.author.checkedby")}</p>
                    <p>
                        <span style={{ color: '#568a9a' }}>{t("wegovy.author.name")}</span> {t("wegovy.author.text")}
                    </p>
                </div>
            </div>
        </>
    )
}

const Wegovy = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-[#f3efeb]">
            <HeroSection />

            <section className="bg-gradient-to-b from-teal-50 to-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center d-flex gap-12" style={{ alignItems: 'center' }}>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        <img src="./wegovymain.webp" alt="Wegovy" className="rounded-xl" />
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto text-start">
                        {t("wegovy.maindesc")}
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{t("wegovy.toc.title")}</h2>
                    <ul className="space-y-2 text-teal-600">
                        {t("wegovy.toc.items", { returnObjects: true }).map((item, index) => (
                            <li key={index} className="hover:underline cursor-pointer">• {item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-12 space-y-12">

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("wegovy.section.whatis")}</h2>
                    <p className="text-gray-700 leading-relaxed">{t("wegovy.section.whatis.p")}</p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{t("wegovy.section.semaglutid")}</h3>
                    <p className="text-gray-700 leading-relaxed">{t("wegovy.section.semaglutid.p")}</p>
                </div>

                <div className="p-6 rounded-xl">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("wegovy.section.berlin")}</h2>
                    <p className="text-gray-700 mb-4">{t("wegovy.section.berlin.p1")}</p>

                    <div className="bg-[#ede8e2] rounded-lg shadow-sm p-6 mt-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold text-3xl mb-3">{t("wegovy.section.location.title")}</h3>
                                <div className="space-y-2 text-gray-700">
                                    <p><strong>{t("wegovy.section.location.berlin")}</strong></p>
                                    <p>{t("wegovy.section.location.berlin.address1")}</p>
                                    <p>{t("wegovy.section.location.berlin.address2")}</p>
                                    <hr className="my-3" />
                                    <p><strong>{t("wegovy.section.location.munich")}</strong></p>
                                    <p>{t("wegovy.section.location.munich.address1")}</p>
                                    <p>{t("wegovy.section.location.munich.address2")}</p>
                                    <hr className="my-3" />
                                    <p><strong>{t("wegovy.section.location.hamburg")}</strong></p>
                                    <p>{t("wegovy.section.location.hamburg.address1")}</p>
                                    <p>{t("wegovy.section.location.hamburg.address2")}</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-3">{t("wegovy.section.opening.title")}</h3>
                                <table className="w-full text-gray-700">
                                    <tbody>
                                        <tr><td className="py-1">{t("wegovy.section.opening.monday")}</td><td className="text-right">{t("wegovy.section.opening.time.week")}</td></tr>
                                        <tr><td className="py-1">{t("wegovy.section.opening.tuesday")}</td><td className="text-right">{t("wegovy.section.opening.time.week")}</td></tr>
                                        <tr><td className="py-1">{t("wegovy.section.opening.wednesday")}</td><td className="text-right">{t("wegovy.section.opening.time.week")}</td></tr>
                                        <tr><td className="py-1">{t("wegovy.section.opening.thursday")}</td><td className="text-right">{t("wegovy.section.opening.time.week")}</td></tr>
                                        <tr><td className="py-1">{t("wegovy.section.opening.friday")}</td><td className="text-right">{t("wegovy.section.opening.time.week")}</td></tr>
                                        <tr><td className="py-1">{t("wegovy.section.opening.saturday")}</td><td className="text-right">{t("wegovy.section.opening.time.weekend")}</td></tr>
                                        <tr><td className="py-1">{t("wegovy.section.opening.sunday")}</td><td className="text-right">{t("wegovy.section.opening.time.weekend")}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <button className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition">
                            {t("wegovy.section.startbutton")}
                        </button>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("wegovy.section.developer")}</h2>
                    <h3 className="text-xl font-semibold mb-2">{t("wegovy.section.developer.manufacturer")}</h3>
                    <p className="text-gray-700">{t("wegovy.section.developer.manufacturer.p")}</p>
                    <h3 className="text-xl font-semibold mt-4 mb-2">{t("wegovy.section.developer.availability")}</h3>
                    <p className="text-gray-700">{t("wegovy.section.developer.availability.p")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("wegovy.section.approval")}</h2>
                    <p className="text-gray-700">{t("wegovy.section.approval.p")}</p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>{t("wegovy.section.approval.list1")}</li>
                        <li>{t("wegovy.section.approval.list2")}</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("wegovy.section.suitable")}</h2>
                    <p className="text-gray-700">{t("wegovy.section.suitable.p")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("wegovy.section.howworks")}</h2>
                    <p className="text-gray-700">{t("wegovy.section.howworks.p")}</p>
                    <h3>{t("wegovy.section.dosage.title")}</h3>
                    <p className="text-gray-700">{t("wegovy.section.dosage.p1")}</p>
                    <p className="text-gray-700">{t("wegovy.section.dosage.p2")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("wegovy.section.wherebuy")}</h2>
                    <p className="text-gray-700">{t("wegovy.section.wherebuy.p")}</p>
                    <h3>{t("wegovy.section.price.title")}</h3>
                    <p className="text-gray-700">{t("wegovy.section.price.p")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("wegovy.section.sideeffects")}</h2>
                    <p className="text-gray-700">{t("wegovy.section.sideeffects.p1")}</p>
                    <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
                        <li>{t("wegovy.section.sideeffects.list1")}</li>
                        <li>{t("wegovy.section.sideeffects.list2")}</li>
                        <li>{t("wegovy.section.sideeffects.list3")}</li>
                        <li>{t("wegovy.section.sideeffects.list4")}</li>
                        <li>{t("wegovy.section.sideeffects.list5")}</li>
                        <li>{t("wegovy.section.sideeffects.list6")}</li>
                    </ul>
                    <p className="text-gray-700">{t("wegovy.section.sideeffects.p2")}</p>
                    <h3>{t("wegovy.section.safety.title")}</h3>
                    <p className="text-gray-700">{t("wegovy.section.safety.p")}</p>
                    <h3>{t("wegovy.section.interactions.title")}</h3>
                    <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: t("wegovy.section.interactions.p") }} />
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("wegovy.section.differences")}</h2>
                    <h3>Wegovy vs. Ozempic</h3>
                    <p className="text-gray-700">{t("wegovy.section.diff.ozempic")}</p>
                    <h3>Wegovy vs. Mounjaro</h3>
                    <p className="text-gray-700">{t("wegovy.section.diff.mounjaro")}</p>
                    <h3>Wegovy vs. Saxenda</h3>
                    <p className="text-gray-700">{t("wegovy.section.diff.saxenda")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("wegovy.section.insurance")}</h2>
                    <p className="text-gray-700">{t("wegovy.section.insurance.p")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("wegovy.section.stop")}</h2>
                    <p className="text-gray-700">{t("wegovy.section.stop.p")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("wegovy.section.leaflet")}</h2>
                    <p className="text-gray-700">{t("wegovy.section.leaflet.p")}</p>
                    <button className="btn-primary">{t("wegovy.section.leaflet.button")}</button>
                </div>

            </section>
            <FAQSection />
        </div>
    );
};

export default Wegovy;