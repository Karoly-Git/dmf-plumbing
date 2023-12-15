// React Imports
import React from 'react';

// Image Imports
import img1 from '../../img/services/water.jpg';
import img2 from '../../img/services/boiler.jpg';
import img3 from '../../img/services/maintenance.jpg';
import logostamp from '../../img/services/logostamp.png';

export default function Services() {
    const content = [
        {
            img: {
                src: img1,
                alt: 'Close-up of clear water with numerous air bubbles floating upwards.'
            },
            headline: 'Plumbing',
            paragraph: 'We offer a highly professional service across London with a team of experienced and qualified plumbers who are available and we guarantee to solve everything from a plumbing related problem to the design and creation of new bathrooms.'
        },
        {
            img: {
                src: img2,
                alt: 'Close-up view of a white electric hot water boiler with indicator lights and control buttons.'
            },
            headline: 'Heating & Boilers',
            paragraph: 'We can assist towards ensuring compliance with the Consumer Protection Act and help you avoid sale cancellations and other possible repercussions.'
        },
        {
            img: {
                src: img3,
                alt: 'A collection of plumbing tools spread out on an open blueprint.'
            },
            headline: 'Maintenance',
            paragraph: 'We work cleanly and efficiently with minimal disruption, and will always ensure we leave your premises clean and tidy following our visit.'
        },
    ];

    return (
        <section className='services'>
            <div className='container'>
                <div className='box'>
                    {content.map((element) =>
                        <div
                            key={element.headline}
                            className='card'>
                            <h3 className='h3-style img-caption'>{element.headline}</h3>
                            <img className='main-img' src={element.img.src} alt={element.img.alt}></img>
                            <img className='logo-stamp-img' src={logostamp} alt=""></img>
                            <p className='p-style'>{element.paragraph}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
