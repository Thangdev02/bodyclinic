import React from 'react';
import CTASection from '../../../components/Home/CTASection';
import { title } from 'framer-motion/client';

const Blog = () => {
    const blogs = [
        {
            image:'./log1.webp',
            title:'Ozempic und Schwangerschaft',
            date: '27-10-2025'
        },
        {
            image:'./log2.webp',
            title:'Der Unterschied zwischen Hunger, Appetit und Esslust – wichtig auch unter Einnahme von Abnehmmedikamenten',
            date: '21-10-2025'
        }
        ,
        {
            image:'./log3.webp',
            title:'Wasser, Elektrolyte & Co. – was dein Körper beim schnellen Gewichtsverlust wirklich braucht',
            date: '15-10-2025'
        }
        ,
        {
            image:'./log4.webp',
            title:'Abnehmen mit Apfelessig: Was wirklich dahinter steckt',
            date: '15-10-2025'
        }
        ,
        {
            image:'./log5.webp',
            title:'Die Rolle der Ballaststoffe für Darmgesundheit und Sättigung – speziell bei reduzierter Nahrungsaufnahme',
            date: '15-10-2025'
        }
        ,
        {
            image:'./log6.webp',
            title:'GLP-1 Abnehmerfolge richtig messen – nicht nur die Waage zählt',
            date: '09-10-2025'
        }
        ,
        {
            image:'./blog1.webp',
            title:'Lebensmittelqualität statt nur Kalorien zählen – so versorgst du deinen Körper wirklich',
            date: '09-10-2025'
        }
        ,
        {
            image:'./log7.webp',
            title:'Abnehmen mit Eiweiß – wissenschaftlich fundiert und medizinisch begleitet',
            date: '09-10-2025'
        }
        ,
        {
            image:'./log8.webp',
            title:'Abnehmen mit Medikamenten – warum Sie trotzdem essen müssen',
            date: '01-08-2025'
        }
        ,
        {
            image:'./log9.webp',
            title:'Abnehmen mit Chia Samen',
            date: '01-08-2025'
        }
        ,
        {
            image:'./log10.webp',
            title:'Langfristig erfolgreich – wie Sie nach der Spritzentherapie Ihr Gewicht stabilisieren',
            date: '01-08-2025'
        },
        {
            image:'./log11.webp',
            title:'Abnehmen mit Haferflocken: The Body Clinic',
            date: '01-08-2025'
        }

    ]
    return (
        <div className='bg-[#f3efeb]'>
            <div className='container'>
                <div className='py-16'><h1 className='font-bold text-6xl' style={{ color: '#568a9a' }}>Stellenangebote</h1></div>
                <div className="grid md:grid-cols-3 gap-6 text-gray-700 mb-10">
                    {blogs.map(blog => <div>
                        <img src={blog.image} style={{  width: '100%',height:'200px'}} alt="" />
                        <div className='bg-white px-8 py-8 ' style={{height:'420px'}}>
                            <h1 className='font-bold text-3xl mb-8'>{blog.title}</h1>
                            <p style={{color:'#417485'}}>{blog.date}</p>
                            <button className='bg-[#417485] hover:bg-[#417485] transition-colors text-white font-medium text-lg px-10 py-3 rounded-full shadow-lg'>Read More</button>
                        </div>
                    </div>)}
                   
                </div>


                
            </div>
        <CTASection />
        </div>
    );
};

export default Blog;