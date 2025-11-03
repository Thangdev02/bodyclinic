import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import CTASection from "../../../components/Home/CTASection";

const HeroSection = () => {
    return (
        <>
            <div className="hero-section">
                <div className="hero-content container">
                    <h1 className="hero-title">
                    Team & Partner von The Body Clinic
                    </h1>
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

const Team = () => {
    return (
        <div className="min-h-screen bg-[#f4efec]">
            <HeroSection />
            {/* Hero Section */}
            <section className="bg-[#ede8e2] pt-16 pb-12">
                <h1 className="container font-bold">Begleitende Ärzteteam</h1>
            </section>

            {/* 3 Cột: Cột trái trống, 2 cột nội dung bên phải */}
            <section className="container py-12 text-center" style={{ marginLeft: '10%' }}>
                <div className="grid md:grid-cols-4 gap-12 text-gray-700">
                    <div className="d-flex flex-col gap-4 align-items-center" >
                        <img style={{width: '100%', height:'300px'}} src="./team1.webp" alt="Berlin"/>
                        <h3 className="font-bold">HambDr. Nicolette Lammers</h3>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px', objectFit: 'cover'}} src="./team2.webp" alt="Berlin"/>
                    <h3 className="font-bold">Dr. Dr. Torsten Schroder</h3>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px'}} src="./team3.webp" alt="Berlin"/>
                    <h3 className="font-bold">Dr. med. Newroz Narcin</h3>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px'}} src="./team4.webp" alt="Berlin"/>
                    <h3 className="font-bold">Dr. medic Stanislav Kvint</h3>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px'}} src="./team5.webp" alt="Berlin"/>
                    <h3 className="font-bold">Nadine Meier</h3>
                    </div>
                </div>
            </section>
            <section className="bg-[#ede8e2] pt-16 pb-12">
                <h1 className="container font-bold">Ernährungscoaches</h1>
            </section>
            <section className="container py-12" style={{ marginLeft: '10%' }}>
                <div className="grid md:grid-cols-4 gap-12 text-gray-700">
                    <div className="d-flex flex-col gap-4 align-items-center" >
                        <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./er1.webp" alt="Berlin"/>
                        <h3 className="font-bold">Sabine Furste</h3>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./er2.webp" alt="Berlin"/>
                    <h3 className="font-bold">Karla Wichary</h3>
                    </div>
                </div>
            </section>
            <section className="bg-[#ede8e2] pt-16 pb-12">
                <h1 className="container font-bold">Partner</h1>
            </section>
            <section className="container py-12" style={{ marginLeft: '10%' }}>
                <div className="grid md:grid-cols-4 gap-12 text-gray-700">
                    <div className="d-flex flex-col gap-4 align-items-center" >
                        <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./par1.webp" alt="Berlin"/>
                        <h3 className="font-bold">fitnessRAUM.de</h3>
                    </div>
                    <div className="d-flex flex-col gap-4 align-items-center" >
                    <img style={{width: '100%', height:'300px',objectFit: 'cover'}} src="./par2.webp" alt="Berlin"/>
                    <h3 className="font-bold">Witzleben Apotheke</h3>
                    </div>
                </div>
            </section>
        <CTASection/>
        </div>
    );
};

export default Team;