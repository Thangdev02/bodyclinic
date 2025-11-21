import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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
    );
};

const FAQSection = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { q: t("mysimba_faq1_q"), a: t("mysimba_faq1_a") },
        { q: t("mysimba_faq2_q"), a: t("mysimba_faq2_a") },
        { q: t("mysimba_faq3_q"), a: t("mysimba_faq3_a") },
        { q: t("mysimba_faq4_q"), a: t("mysimba_faq4_a") },
        { q: t("mysimba_faq5_q"), a: t("mysimba_faq5_a") },
        { q: t("mysimba_faq6_q"), a: t("mysimba_faq6_a") },
    ];

    return (
        <div className="faq-section">
            <div className="faq-container container">
                <h2>{t("mysimba_faqs_section_title")}</h2>
                <div className="faq-list">
                    {faqs.map((faq, idx) => (
                        <FAQItem
                            key={idx}
                            question={faq.q}
                            answer={faq.a}
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
                    <h1 className="hero-title">{t("mysimba_hero_title")}</h1>
                    <p className="text-3xl">{t("mysimba_hero_subtitle")}</p>
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
                    <p>{t("mysimba_author_line1")}</p>
                    <p>
                        <span style={{ color: "#568a9a" }}>{t("mysimba_author_doctor")}</span> {t("mysimba_author_line2")}
                    </p>
                </div>
            </div>
        </>
    );
};

const Mysimba = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-[#f3efeb]">
            <HeroSection />

            <section className="bg-gradient-to-b from-teal-50 to-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center d-flex gap-12" style={{ alignItems: "center" }}>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        <img src="./ozempicmain.webp" alt="" className="rounded-xl" />
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto text-start">
                        {t("mysimba_main_description")}
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{t("mysimba_toc_title")}</h2>
                    <ul className="space-y-2 text-teal-600">
                        {[1,2,3,4,5,6,7,8,9,10,11,12,13].map(i => (
                            <li key={i} className="hover:underline cursor-pointer">
                                • {t(`mysimba_toc_${i}`)}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-12 space-y-12">

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("mysimba_what_is_title")}</h2>
                    <p className="text-gray-700 leading-relaxed">{t("mysimba_what_is_p1")}</p>
                    <h3>{t("mysimba_active_substance_title")}</h3>
                    <p className="text-gray-700">{t("mysimba_active_substance_desc")}</p>
                </div>

                <div className="p-6 rounded-xl">
                    <div className="bg-[#ede8e2] rounded-lg shadow-sm p-6 mt-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold text-3xl mb-3">{t("mysimba_locations_title")}</h3>
                                <div className="space-y-2 text-gray-700">
                                    <p><strong>{t("mysimba_clinic_berlin")}</strong></p>
                                    <p>Schöneberger Ufer 71</p>
                                    <p>10785 Berlin</p>
                                    <hr className="my-3" />
                                    <p><strong>{t("mysimba_clinic_munich")}</strong></p>
                                    <p>Bayerstraße 21</p>
                                    <p>80335 München</p>
                                    <hr className="my-3" />
                                    <p><strong>{t("mysimba_clinic_hamburg")}</strong></p>
                                    <p>Sierichstraße 6</p>
                                    <p>22301 Hamburg</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-3">{t("mysimba_opening_hours_title")}</h3>
                                <table className="w-full text-gray-700">
                                    <tbody>
                                        <tr><td className="py-1">{t("mysimba_monday")}</td><td className="text-right">9:00 - 17:00</td></tr>
                                        <tr><td className="py-1">{t("mysimba_tuesday")}</td><td className="text-right">9:00 - 17:00</td></tr>
                                        <tr><td className="py-1">{t("mysimba_wednesday")}</td><td className="text-right">9:00 - 17:00</td></tr>
                                        <tr><td className="py-1">{t("mysimba_thursday")}</td><td className="text-right">9:00 - 17:00</td></tr>
                                        <tr><td className="py-1">{t("mysimba_friday")}</td><td className="text-right">9:00 - 17:00</td></tr>
                                        <tr><td className="py-1">{t("mysimba_saturday")}</td><td className="text-right">{t("mysimba_weekend_hours")}</td></tr>
                                        <tr><td className="py-1">{t("mysimba_sunday")}</td><td className="text-right">{t("mysimba_weekend_hours")}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <button className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition">
                            {t("mysimba_start_program_button")}
                        </button>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("mysimba_developer_title")}</h2>
                    <h3 className="text-xl font-semibold mb-2">{t("mysimba_manufacturer")}</h3>
                    <p className="text-gray-700">{t("mysimba_manufacturer_text")}</p>
                    <h3 className="text-xl font-semibold mt-4 mb-2">{t("mysimba_availability_title")}</h3>
                    <p className="text-gray-700">{t("mysimba_availability_text")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("mysimba_approved_title")}</h2>
                    <p className="text-gray-700">{t("mysimba_approved_p1")}</p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>{t("mysimba_approved_item1")}</li>
                        <li>{t("mysimba_approved_item2")}</li>
                    </ul>
                    <p className="text-gray-700">{t("mysimba_approved_footer")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("mysimba_suitable_title")}</h2>
                    <p className="text-gray-700">{t("mysimba_suitable_text")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("mysimba_how_works_title")}</h2>
                    <p className="text-gray-700">{t("mysimba_how_works_p1")}</p>
                    <h3>{t("mysimba_dosage_title")}</h3>
                    <p className="text-gray-700">{t("mysimba_dosage_text")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("mysimba_where_buy_title")}</h2>
                    <p className="text-gray-700">{t("mysimba_where_buy_p1")}</p>
                    <h3>{t("mysimba_prices_title")}</h3>
                    <p className="text-gray-700">{t("mysimba_prices_text")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("mysimba_side_effects_title")}</h2>
                    <p className="text-gray-700">{t("mysimba_side_effects_intro")}</p>
                    <ul style={{ listStyleType: 'disc', marginLeft: '2rem' }}>
                        <li>{t("mysimba_nausea")}</li>
                        <li>{t("mysimba_diarrhea")}</li>
                        <li>{t("mysimba_constipation")}</li>
                        <li>{t("mysimba_headache")}</li>
                        <li>{t("mysimba_appetite_loss")}</li>
                    </ul>
                    <p className="text-gray-700">{t("mysimba_side_effects_footer")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("mysimba_safety_title")}</h2>
                    <p className="text-gray-700">{t("mysimba_safety_p1")}</p>
                    <h3>{t("mysimba_interactions_title")}</h3>
                    <p className="text-gray-700">{t("mysimba_interactions_p1")}</p>
                    <p className="text-gray-700">{t("mysimba_interactions_p2")}</p>
                    <p className="text-gray-700">{t("mysimba_interactions_p3")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("mysimba_differences_title")}</h2>
                    <h3>{t("mysimba_vs_ozempic_title")}</h3>
                    <p className="text-gray-700">{t("mysimba_vs_ozempic_text")}</p>
                    <h3>{t("mysimba_vs_wegovy_title")}</h3>
                    <p className="text-gray-700">{t("mysimba_vs_wegovy_text")}</p>
                    <h3>{t("mysimba_vs_mounjaro_title")}</h3>
                    <p className="text-gray-700">{t("mysimba_vs_mounjaro_text")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("mysimba_insurance_title")}</h2>
                    <p className="text-gray-700">{t("mysimba_insurance_text")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("mysimba_stop_title")}</h2>
                    <p className="text-gray-700">{t("mysimba_stop_text")}</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("mysimba_insert_title")}</h2>
                    <p className="text-gray-700">{t("mysimba_insert_text")}</p>
                    <button className="btn-primary">{t("mysimba_insert_button")}</button>
                </div>

                <FAQSection />

                <div>
                    <h2>{t("mysimba_related_title")}</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                        <div style={{ textAlign: 'center', maxWidth: '340px' }}>
                            <img style={{ borderRadius: '50%', width: '340px', height: '240px', marginBottom: '1rem' }} src="./zempic1.webp" alt="" />
                            <h4>{t("mysimba_article1")}</h4>
                            <p className="text-gray-400">23-04-2025</p>
                        </div>
                        <div style={{ textAlign: 'center', maxWidth: '340px' }}>
                            <img style={{ borderRadius: '50%', width: '340px', height: '240px', marginBottom: '1rem' }} src="./zempic2.webp" alt="" />
                            <h4>{t("mysimba_article2")}</h4>
                            <p className="text-gray-400">11-04-2025</p>
                        </div>
                        <div style={{ textAlign: 'center', maxWidth: '340px' }}>
                            <img style={{ borderRadius: '50%', width: '340px', height: '240px', marginBottom: '1rem' }} src="./zempic3.webp" alt="" />
                            <h4>{t("mysimba_article3")}</h4>
                            <p className="text-gray-400">23-04-2025</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mysimba;