import React from "react";
import { useTranslation } from "react-i18next";
import CTASection from "../../../components/Home/CTASection";

const HeroSection = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="hero-section">
                <div className="hero-content container">
                    <h1 className="hero-title">
                        {t("standorte.hero.title")}
                    </h1>
                    <p className="text-3xl">{t("standorte.hero.desc")}</p>
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

const Standotre = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-[#f4efec]">
            <HeroSection />
            <section className="bg-[#ede8e2] pt-16 pb-12">
                <h1 className="container font-bold">{t("standorte.section.germany")}</h1>
            </section>

            <section className="container py-12" style={{ marginLeft: '10%' }}>
                <div className="grid md:grid-cols-3 gap-12 text-gray-700">
                    <div className="d-flex flex-col gap-4 align-items-center" >
                        <img style={{width: '100%', height:'300px'}} src="./stan1.webp" alt="Hamburg"/>
                        <h2 className="font-bold">{t("standorte.hamburg")}</h2>
                        <p>{t("standorte.hamburg.address")}</p>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px', objectFit: 'cover'}} src="./stan2.webp" alt="München"/>
                    <h2 className="font-bold">{t("standorte.muenchen")}</h2>
                        <p>{t("standorte.muenchen.address")}</p>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px'}} src="./stan3.webp" alt="Berlin"/>
                    <h2 className="font-bold">{t("standorte.berlin")}</h2>
                        <p>{t("standorte.berlin.address")}</p>
                    </div>
                </div>
            </section>
            <section className="bg-[#ede8e2] pt-16 pb-12">
                <h1 className="container font-bold">{t("standorte.section.netherlands")}</h1>
            </section>
            <section className="container py-12" style={{ marginLeft: '10%' }}>
                <div className="grid md:grid-cols-4 gap-12 text-gray-700">
                    <div className="d-flex flex-col gap-4 align-items-center" >
                        <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./ner1.webp" alt="Amsterdam"/>
                        <h2 className="font-bold">{t("standorte.amsterdam")}</h2>
                        <p>{t("standorte.amsterdam.address")}</p>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./ner2.webp" alt="Utrecht"/>
                    <h2 className="font-bold">{t("standorte.utrecht")}</h2>
                        <p>{t("standorte.utrecht.address")}</p>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./ner3.webp" alt="Den Haag"/>
                    <h2 className="font-bold">{t("standorte.denhaag")}</h2>
                        <p>{t("standorte.denhaag.address")}</p>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./ner4.webp" alt="Eindhoven"/>
                    <h2 className="font-bold">{t("standorte.eindhoven")}</h2>
                        <p>{t("standorte.eindhoven.address")}</p>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./ner5.webp" alt="Den Bosch"/>
                    <h2 className="font-bold">{t("standorte.denbosch")}</h2>
                        <p>{t("standorte.denbosch.address")}</p>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./ner6.webp" alt="Duiven"/>
                    <h2 className="font-bold">{t("standorte.duiven")}</h2>
                        <p>{t("standorte.duiven.address")}</p>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./ner7.webp" alt="Groningen"/>
                    <h2 className="font-bold">{t("standorte.groningen")}</h2>
                        <p>{t("standorte.groningen.address")}</p>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./ner8.webp" alt="Heerenveen"/>
                    <h2 className="font-bold">{t("standorte.heerenveen")}</h2>
                        <p>{t("standorte.heerenveen.address")}</p>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./ner9.webp" alt="Maastricht"/>
                    <h2 className="font-bold">{t("standorte.maastricht")}</h2>
                        <p>{t("standorte.maastricht.address")}</p>
                    </div>
                </div>
            </section>
        <CTASection/>
        </div>
    );
};

export default Standotre;