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
            nr: '01',
            img: {
                src: water,
                alt: 'Close-up of clear water with numerous air bubbles floating upwards.'
            },
            headline: 'Plumbing Services',
            paragraph: 'We offer a highly professional service across London with a team of experienced and qualified plumbers who are available and we guarantee to solve everything from a plumbing related problem to the design and creation of new bathrooms.'
        },
        {
            nr: '02',
            img: {
                src: boiler,
                alt: 'Close-up view of a white electric hot water boiler with indicator lights and control buttons.'
            },
            headline: 'Heating & Boiler Repairs',
            paragraph: 'We can assist towards ensuring compliance with the Consumer Protection Act and help you avoid sale cancellations and other possible repercussions.'
        },
        {
            nr: '03',
            img: {
                src: maintrnance,
                alt: 'A collection of plumbing tools spread out on an open blueprint.'
            },
            headline: 'Maintenance',
            paragraph: 'We work cleanly and efficiently with minimal disruption, and will always ensure we leave your premises clean and tidy following our visit.'
        },
    ];

    return (
        <div className='services'>
            <h2>DMF Plumbing Services</h2>
            <div className='container'>
                {content.map((element) =>
                    <div className='box'>
                        <img className='main-img' src={element.img.src} alt={element.img.alt}></img>
                        <img className='logo-stamp-img' src={logostamp} alt=""></img>
                        <h3>{element.nr}</h3>
                        <h2>{element.headline}</h2>
                        <p>{element.paragraph}</p>
                    </div>
                )}
            </div>
        </div >
    )
}
