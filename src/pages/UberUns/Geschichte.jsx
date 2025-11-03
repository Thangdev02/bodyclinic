import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import DoctorsSection from "../../components/Home/DoctorsSection";

const HeroSection = () => {
    return (
        <>
            <div className="hero-section">
                <div className="hero-content container">
                    <h1 className="hero-title">
                        Unsere Geschichte
                    </h1>
                    <p className="text-3xl">Seit über 15 Jahren ein führender Privatpraxenverbund im Bereich ästhetischer Behandlungen und medizinischer Gewichtsreduktion.
                    </p>
                </div>

                {/* Shapes */}
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
    return (
      <div className="px-48 py-24">
        <div className="d-flex gap-12 justify-center container">
          <div className="effect-image cold-4">
            <img src="./abnehmen.webp" alt="Injection preparation" className="injection-photo" />
          </div>
          <div className="effect-content col-6" >
            <h2>Unsere Praxis in Berlin für medizinisches Abnehmen</h2>
            <p>
            19% der Erwachsenen in Deutschland sind laut des RKIs adipös. Starkes Übergewicht ist ein erheblicher Risikofaktor für viele Folgeerkrankungen wie Herz-Kreislauf- oder Krebs-Erkrankungen.
            </p>
            <p>
            Die Body Clinic ist der Experte für medizinisches Abnehmen, z. B. medikamentös begleitet mit GLP-1-Spritzen oder ganz ohne Medikamente. Wir möchten unsere 15 Jahre Erfahrung u.a. mit GLP-1 Medikamenten nutzen, um auch in Deutschland Menschen zu helfen, nachhaltig und sicher Gewicht zu reduzieren.
            </p>
            <p>Wir freuen uns auf Sie – in einer unserer Praxen oder Online.</p>
          </div>
        </div>
      </div>
    )
  }
const Geschichte = () => {
    return (
        <div className="min-h-screen bg-[#f4efec]">
            <HeroSection />
            {/* Hero Section */}
            <section className="bg-[#f4efec] pt-16 pb-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-12 gap-6 items-start">
                        {/* Cột 1: Tiêu đề phụ (MARKTFÜHRER...) */}
                        <div className="md:col-span-3">
                            <p
                                className="text-sm font-semibold uppercase tracking-widest text-[#bcb0a1]"
                                style={{ lineHeight: '1.4' }}
                            >
                                MARKTFÜHRER IN DEN<br />NIEDERLANDEN
                            </p>
                        </div>

                        {/* Cột 2: Tiêu đề chính */}
                        <div className="md:col-span-9">
                            <h1 className="text-3xl md:text-1xl font-light text-gray-800 leading-tight">
                                The Body Clinic ist seit über 15 Jahren führend im Bereich ästhetischer
                                Behandlungen und in den Niederlanden Marktführer auf dem Gebiet der
                                medizinischen Gewichtsabnahme.
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 Cột: Cột trái trống, 2 cột nội dung bên phải */}
            <section className="max-w-7xl px-6 pb-24" style={{ marginLeft: '10%' }}>
                <div className="grid md:grid-cols-3 gap-12 text-gray-700">
                    {/* Cột 1: Trống (chỉ hiện trên md+) */}
                    <div className=" md:block" ></div>

                    {/* Cột 2: Nội dung 1 */}
                    <div className="">
                        <p className="text-lg font-light leading-relaxed ">
                            Mit mehr als <strong className="font-medium">4.500 Patient:innen</strong>, die allein für medizinisches Abnehmen
                            auf uns vertrauen, und neun erfolgreichen Praxisstandorten – u. a. in Amsterdam,
                            Utrecht, Den Haag, Groningen, Eindhoven, Den Bosch und Duiven – haben wir uns als
                            vertrauenswürdige und professionelle Privatpraxis etabliert.
                        </p>
                    </div>
                    {/* Cột 3: Nội dung 2 */}
                    <div>
                        <p className="text-lg font-light leading-relaxed">
                            Seit 2025 ist The Body Clinic auch in Deutschland vertreten. Den Anfang machte unsere
                            erste Praxis in Berlin, gefolgt von Standorten in München und Hamburg. Unser Ziel:
                            Menschen auf ihrem Weg zu nachhaltiger Gewichtsabnahme und mehr Lebensqualität zu
                            begleiten – mit derselben Expertise, die uns in den Niederlanden zur ersten Wahl
                            gemacht hat.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-[#d8dfe0] py-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {/* Stat 1 */}
                        <div>
                            <h3 className="text-5xl font-bold text-gray-800">22%</h3>
                            <p className="text-sm text-gray-600 mt-1">BIS ZU 22% GEWICHTSVERLUST</p>
                        </div>
                        {/* Stat 2 */}
                        <div>
                            <h3 className="text-5xl font-bold text-gray-800">4.500</h3>
                            <p className="text-sm text-gray-600 mt-1">&gt;4.5 TSD. PATIENT:INNEN</p>
                        </div>
                        {/* Stat 3 */}
                        <div>
                            <h3 className="text-5xl font-bold text-gray-800">5,0</h3>
                            <p className="text-sm text-gray-600 mt-1">5,0 AUF GOOGLE</p>
                        </div>
                        {/* Stat 4 */}
                        <div>
                            <h3 className="text-5xl font-bold text-gray-800">14</h3>
                            <p className="text-sm text-gray-600 mt-1">14 ARZTPRAXEN</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" mx-auto py-16 bg-[#d8dfe0] ">
                <div className="grid md:grid-cols-2 gap-12  items-center container" style={{ padding: '0 6%' }}>
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            Was macht uns anders
                        </h2>
                        <p className="mb-6" style={{ fontWeight: 'lighter', lineHeight: '1.8', fontSize: '18px' }}>
                            The Body Clinic bietet <strong>medizinisch betreute Gewichtsabnahme</strong> – vor Ort
                            oder telemedizinisch durch unsere kooperierenden, approbierten Ärzt:innen.
                        </p>
                        <p className="mb-6" style={{ fontWeight: 'lighter', lineHeight: '1.8', fontSize: '18px' }}>
                            Anders als bei reinen Online-Anbietern sprechen Sie mit echten Menschen – für höchste
                            Behandlungsqualität und Sicherheit.
                        </p>
                        <p className="mb-6" style={{ fontWeight: 'lighter', lineHeight: '1.8', fontSize: '18px' }}>
                            Unser ganzheitlicher Ansatz kombiniert individuelle ärztliche Betreuung,
                            Ernährungs- und Lifestyle-Coaching sowie – bei medizinischer Indikation –
                            medikamentöse Optionen wie GLP-1-Spritzen. So haben wir bereits über{" "}
                            <strong>4.500 Patient:innen</strong> erfolgreich unterstützt.
                        </p>
                        <p className="mb-6" style={{ fontWeight: 'lighter', lineHeight: '1.8', fontSize: '18px' }}>
                            Bei medikamentös begleiteten Programmen kann eine bequeme Lieferung durch die
                            Partnerapotheke von The Body Clinic erfolgen – ohne Wartezeiten oder Lieferengpässe.
                        </p>
                        {/* asd */}
                        <div className=" ">
                            <blockquote className="relative text-gray-800 italic mb-6" style={{ fontWeight: 'lighter', lineHeight: '1.8', fontSize: '18px' }}>
                                <span className="absolute top-1" style={{ left: '-60px' }} ><FaQuoteLeft color="#bcb0a1" size={40} /></span> Wir unterstützen Patient:innen nachhaltig und sicher beim Erreichen ihres
                                Wunschgewichts – mit moderner Medizin und persönlicher Begleitung.“
                            </blockquote>
                            <p className="font-semibold text-gray-700">DR. NICOLETTE LAMMERS</p>
                            <p className="text-sm text-gray-600">Ärztin bei The Body Clinic</p>
                        </div>
                    </div>

                    {/* Right - Image */}
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