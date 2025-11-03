import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import CTASection from "../../../components/Home/CTASection";

const HeroSection = () => {
    return (
        <>
            <div className="hero-section">
                <div className="hero-content container">
                    <h1 className="hero-title">
                    Standorte
                    </h1>
                    <p className="text-3xl">The Body Clinic hat mehrere Standorte in Deutschland und in den Niederlanden. Alle Praxen arbeiten mit erfahrenen Ärzt:innen, die Patient:innen bei medizinischen Abnehmprogrammen begleiten.
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

const Standotre = () => {
    return (
        <div className="min-h-screen bg-[#f4efec]">
            <HeroSection />
            {/* Hero Section */}
            <section className="bg-[#ede8e2] pt-16 pb-12">
                <h1 className="container font-bold">Deutschland</h1>
            </section>

            {/* 3 Cột: Cột trái trống, 2 cột nội dung bên phải */}
            <section className="container py-12" style={{ marginLeft: '10%' }}>
                <div className="grid md:grid-cols-3 gap-12 text-gray-700">
                    <div className="d-flex flex-col gap-4 align-items-center" >
                        <img style={{width: '100%', height:'300px'}} src="./stan1.webp" alt="Berlin"/>
                        <h2 className="font-bold">Hamburg</h2>
                        <p>Sierichstrasse 6</p>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px', objectFit: 'cover'}} src="./stan2.webp" alt="Berlin"/>
                    <h2 className="font-bold">Munchen</h2>
                        <p>BayerstraBe 21 6</p>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px'}} src="./stan3.webp" alt="Berlin"/>
                    <h2 className="font-bold">Berlin</h2>
                        <p>Schoneberge Ufer 71 6</p>
                    </div>
                </div>
            </section>
            <section className="bg-[#ede8e2] pt-16 pb-12">
                <h1 className="container font-bold">Niederlande</h1>
            </section>
            {/* Stats Bar */}
            <section className="container py-12" style={{ marginLeft: '10%' }}>
                <div className="grid md:grid-cols-4 gap-12 text-gray-700">
                    <div className="d-flex flex-col gap-4 align-items-center" >
                        <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./ner1.webp" alt="Berlin"/>
                        <h2 className="font-bold">Amsterdam</h2>
                        <p>Achillesstraat 85 </p>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./ner2.webp" alt="Berlin"/>
                    <h2 className="font-bold">Utrecht</h2>
                        <p>Jan van Scorelstraat 19</p>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./ner3.webp" alt="Berlin"/>
                    <h2 className="font-bold">Den Haag</h2>
                        <p>Parkstraat 101</p>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./ner4.webp" alt="Berlin"/>
                    <h2 className="font-bold">Eindhoven</h2>
                        <p>Avignonlaan 9B</p>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./ner5.webp" alt="Berlin"/>
                    <h2 className="font-bold">Den Bosch</h2>
                        <p>Oude Vlijmenseweg114</p>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./ner6.webp" alt="Berlin"/>
                    <h2 className="font-bold">Duiven</h2>
                        <p>Ploenstraat 30</p>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./ner7.webp" alt="Berlin"/>
                    <h2 className="font-bold">Groningen</h2>
                        <p>H.A. Kooykerplein 3</p>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./ner8.webp" alt="Berlin"/>
                    <h2 className="font-bold">Heerenveen</h2>
                        <p>Fok 68</p>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./ner9.webp" alt="Berlin"/>
                    <h2 className="font-bold">Maastricht</h2>
                        <p>Parkweg26</p>
                    </div>
                </div>
            </section>
        <CTASection/>
        </div>
    );
};

export default Standotre;