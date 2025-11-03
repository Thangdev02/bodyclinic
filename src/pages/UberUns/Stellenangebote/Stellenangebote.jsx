import React from 'react';
import CTASection from '../../../components/Home/CTASection';

const Stellenangebote = () => {
    return (
        <div className='bg-[#f3efeb]'>
            <div className='container'>

                <div className='py-16'><h1 className='font-bold text-6xl' style={{ color: '#568a9a' }}>Stellenangebote</h1></div>
                <div className="grid md:grid-cols-3 gap-6 text-gray-700 mb-10">
                    <div className='bg-white px-8 py-8 rounded-3xl'>
                        <h1 className='font-bold text-4xl mb-8'>Arzt / Ärztin medikamentöse Gewichtsreduktion / Adipositas (w/m/d) – Nürnberg</h1>
                        <button className='bg-[#417485] hover:bg-[#417485] transition-colors text-white font-medium text-lg px-10 py-3 rounded-full shadow-lg'>Read More</button>
                    </div>
                    <div className='bg-white px-8 py-8 rounded-3xl'>
                        <h1 className='font-bold text-4xl mb-8'>Arzt / Ärztin medikamentöse Gewichtsreduktion / Adipositas (w/m/d) – Stuttgart</h1>
                        <button className='bg-[#417485] hover:bg-[#417485] transition-colors text-white font-medium text-lg px-10 py-3 rounded-full shadow-lg'>Read More</button>
                    </div>
                    <div className='bg-white px-8 py-8 rounded-3xl'>
                        <h1 className='font-bold text-4xl mb-8'>Arzt / Ärztin medikamentöse Gewichtsreduktion / Adipositas (w/m/d) – Hannover</h1>
                        <button className='bg-[#417485] hover:bg-[#417485] transition-colors text-white font-medium text-lg px-10 py-3 rounded-full shadow-lg'>Read More</button>
                    </div>
                </div>


                <div className="grid md:grid-cols-3 gap-6 text-gray-700 mb-10">
                    <div className='bg-white px-8 py-8 rounded-3xl'>
                        <h1 className='font-bold text-4xl mb-8'>Arzt / Ärztin medikamentöse Gewichtsreduktion / Adipositas (w/m/d) – Köln / Düsseldorf</h1>
                        <button className='bg-[#417485] hover:bg-[#417485] transition-colors text-white font-medium text-lg px-10 py-3 rounded-full shadow-lg'>Read More</button>
                    </div>
                    <div className='bg-white px-8 py-8 rounded-3xl'>
                        <h1 className='font-bold text-4xl mb-8'>Arzt / Ärztin medikamentöse Gewichtsreduktion / Adipositas (w/m/d) – Hamburg</h1>
                        <button className='bg-[#417485] hover:bg-[#417485] transition-colors text-white font-medium text-lg px-10 py-3 rounded-full shadow-lg'>Read More</button>
                    </div>
                    <div className='bg-white px-8 py-8 rounded-3xl'>
                        <h1 className='font-bold text-4xl mb-8'>Arzt / Ärztin medikamentöse Gewichtsreduktion / Adipositas (w/m/d) – München</h1>
                        <button className='bg-[#417485] hover:bg-[#417485] transition-colors text-white font-medium text-lg px-10 py-3 rounded-full shadow-lg'>Read More</button>
                    </div>
                </div>


                <div className="grid md:grid-cols-3 gap-6 text-gray-700 mb-24">
                    <div className='bg-white px-8 py-8 rounded-3xl'>
                        <h1 className='font-bold text-4xl mb-8'>Customer Care Mitarbeiter (w/m/d)</h1>
                        <button className='bg-[#417485] hover:bg-[#417485] transition-colors text-white font-medium text-lg px-10 py-3 rounded-full shadow-lg'>Read More</button>
                    </div>
                    <div className='bg-white px-8 py-8 rounded-3xl'>
                        <h1 className='font-bold text-4xl mb-8'>Arzt / Ärztin medikamentöse Gewichtsreduktion / Adipositas (w/m/d) – Frankfurt</h1>
                        <button className='bg-[#417485] hover:bg-[#417485] transition-colors text-white font-medium text-lg px-10 py-3 rounded-full shadow-lg'>Read More</button>
                    </div>
                    <div className='bg-white px-8 py-8 rounded-3xl'>
                        <h1 className='font-bold text-4xl mb-8'>Rezeptionist (w/m/d)</h1>
                        <button className='bg-[#417485] hover:bg-[#417485] transition-colors text-white font-medium text-lg px-10 py-3 rounded-full shadow-lg'>Read More</button>
                    </div>
                </div>
            </div>
        <CTASection />
        </div>
    );
};

export default Stellenangebote;