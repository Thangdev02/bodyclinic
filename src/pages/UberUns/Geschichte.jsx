import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import DoctorsSection from "../../components/Home/DoctorsSection";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="hero-section">
                <div className="hero-content container">
                    <h1 className="hero-title">
                        {t("geschichte.hero.title")}
                    </h1>
                    <p className="text-3xl">{t("geschichte.hero.desc")}</p>
                </div>

                <div className="hero-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
            </div>
        </>
    )
}

const EffectSection = () => {
    const { t } = useTranslation();
    return (
      <div className="px-48 py-24">
        <div className="d-flex gap-12 justify-center container">
          <div className="effect-image cold-4">
            <img src="./abnehmen.webp" alt="Injection preparation" className="injection-photo" />
          </div>
          <div className="effect-content col-6">
            <h2>{t("geschichte.effect.title")}</h2>
            <p>{t("geschichte.effect.p1")}</p>
            <p>{t("geschichte.effect.p2")}</p>
            <p>{t("geschichte.effect.p3")}</p>
          </div>
        </div>
      </div>
    )
}

const Geschichte = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-[#f4efec]">
            <HeroSection />
            <section className="bg-[#f4efec] pt-16 pb-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-3">
                            <p
                                className="text-sm font-semibold uppercase tracking-widest text-[#bcb0a1]"
                                style={{ lineHeight: '1.4' }}
                                dangerouslySetInnerHTML={{ __html: t("geschichte.marktfuehrer") }}
                            >
                            </p>
                        </div>

                        <div className="md:col-span-9">
                            <h1 className="text-3xl md:text-1xl font-light text-gray-800 leading-tight">
                                {t("geschichte.mainheading")}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl px-6 pb-24" style={{ marginLeft: '10%' }}>
                <div className="grid md:grid-cols-3 gap-12 text-gray-700">
                    <div className=" md:block" ></div>

                    <div className="">
                        <p className="text-lg font-light leading-relaxed " dangerouslySetInnerHTML={{ __html: t("geschichte.col2") }}></p>
                    </div>
                    <div>
                        <p className="text-lg font-light leading-relaxed">
                            {t("geschichte.col3")}
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#d8dfe0] py-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <h3 className="text-5xl font-bold text-gray-800">{t("geschichte.stat1.value")}</h3>
                            <p className="text-sm text-gray-600 mt-1">{t("geschichte.stat1.label")}</p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold text-gray-800">{t("geschichte.stat2.value")}</h3>
                            <p className="text-sm text-gray-600 mt-1">{t("geschichte.stat2.label")}</p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold text-gray-800">{t("geschichte.stat3.value")}</h3>
                            <p className="text-sm text-gray-600 mt-1">{t("geschichte.stat3.label")}</p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold text-gray-800">{t("geschichte.stat4.value")}</h3>
                            <p className="text-sm text-gray-600 mt-1">{t("geschichte.stat4.label")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" mx-auto py-16 bg-[#d8dfe0] ">
                <div className="grid md:grid-cols-2 gap-12  items-center container" style={{ padding: '0 6%' }}>
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            {t("geschichte.difference.title")}
                        </h2>
                        <p className="mb-6" style={{ fontWeight: 'lighter', lineHeight: '1.8', fontSize: '18px' }} dangerouslySetInnerHTML={{ __html: t("geschichte.difference.p1") }}></p>
                        <p className="mb-6" style={{ fontWeight: 'lighter', lineHeight: '1.8', fontSize: '18px' }}>
                            {t("geschichte.difference.p2")}
                        </p>
                        <p className="mb-6" style={{ fontWeight: 'lighter', lineHeight: '1.8', fontSize: '18px' }} dangerouslySetInnerHTML={{ __html: t("geschichte.difference.p3") }}></p>
                        <p className="mb-6" style={{ fontWeight: 'lighter', lineHeight: '1.8', fontSize: '18px' }}>
                            {t("geschichte.difference.p4")}
                        </p>
                        <div className=" ">
                            <blockquote className="relative text-gray-800 italic mb-6" style={{ fontWeight: 'lighter', lineHeight: '1.8', fontSize: '18px' }}>
                                <span className="absolute top-1" style={{ left: '-60px' }} ><FaQuoteLeft color="#bcb0a1" size={40} /></span> {t("geschichte.quote")}
                            </blockquote>
                            <p className="font-semibold text-gray-700">{t("geschichte.doctor.name")}</p>
                            <p className="text-sm text-gray-600">{t("geschichte.doctor.title")}</p>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src="./geschichtes.webp"
                            alt="Ärztin berät Patientin"
                            className="rounded-xl shadow-lg w-90 object-cover"
                            style={{ height: '70vh' }}
                        />
                    </div>
                </div>
            </section>

            <EffectSection/>
            <DoctorsSection/>
        </div>
    );
};

export default Geschichte;