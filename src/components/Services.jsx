// React Imports
import React from 'react';
// Image Imports
import boiler from '../img/services/boiler.jpg';
import maintrnance from '../img/services/maintenance.jpg';
import water from '../img/services/water.jpg';
import logostamp from '../img/services/logostamp.png';

export default function Services() {
    const content = [
        {
            img: {
                src: water,
                alt: 'Close-up of clear water with numerous air bubbles floating upwards.'
            },
            headline: 'Plumbing Services',
            paragraph: 'We offer a highly professional service across London with a team of experienced and qualified plumbers who are available and we guarantee to solve everything from a plumbing related problem to the design and creation of new bathrooms.'
        },
        {
            img: {
                src: boiler,
                alt: 'Close-up view of a white electric hot water boiler with indicator lights and control buttons.'
            },
            headline: 'Heating & Boiler Repairs',
            paragraph: 'We can assist towards ensuring compliance with the Consumer Protection Act and help you avoid sale cancellations and other possible repercussions.'
        },
        {
            img: {
                src: maintrnance,
                alt: 'A collection of plumbing tools spread out on an open blueprint.'
            },
            headline: 'Maintenance',
            paragraph: 'We work cleanly and efficiently with minimal disruption, and will always ensure we leave your premises clean and tidy following our visit.'
        },
    ];

    return (
        <section className='services'>
            <div className='container'>
                <h2 className='h2-style'>Services</h2>
                <div className='box'>
                    {content.map((element) =>
                        <div
                            key={element.headline}
                            className='card'>
                            <img className='main-img' src={element.img.src} alt={element.img.alt}></img>
                            <img className='logo-stamp-img' src={logostamp} alt=""></img>
                            <h3 className='h3-style'>{element.headline}</h3>
                            <p className='p-style'>{element.paragraph}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
