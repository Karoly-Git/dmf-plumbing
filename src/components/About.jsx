// React Imports
import React from 'react';
// Image Imports
import boiler from '../img/services/boiler.jpg';
import maintrnance from '../img/services/maintenance.jpg';
import water from '../img/services/water.jpg';
import logostamp from '../img/services/logostamp.png';

export default function About() {
    const content = [
        {
            nr: '01',
            img: {
                src: water,
                alt: 'Close-up of clear water with numerous air bubbles floating upwards.'
            },
            headline: 'Plumbing Services',
            list: <ul>
                <li>Plumbing</li>
                <li>Heating &#38; Boilers</li>
                <li>Drainage</li>
                <li>Gas</li>
                <li>Maintenance</li>
                <li>Commercial gas</li>
                <li>Commercial plumbing</li>
                <li>New Installations</li>
                <li>No Call out Rates</li>
                <li>Certified Installations</li>
                <li>Gas Inspections</li>
                <li>And more…</li>
            </ul>
        },
        {
            nr: '02',
            img: {
                src: boiler,
                alt: 'Close-up view of a white electric hot water boiler with indicator lights and control buttons.'
            },
            headline: 'Experience & Professionalism',
            list: <ul>
                <li>100% transparent charges</li>
                <li>Working hours customer support</li>
                <li>Guaranteed work</li>
                <li>Quality workmanship</li>
                <li>No call-out charge</li>
                <li>Qualified operatives</li>
                <li>Bathroom fitting</li>
                <li>Shower pump installs</li>
            </ul>

        },
        {
            nr: '03',
            img: {
                src: maintrnance,
                alt: 'A collection of plumbing tools spread out on an open blueprint.'
            },
            headline: 'Recent Feedback',
            list: <ul>
                <li>Feedback 1</li>
                <li>Feedback 2</li>
                <li>Feedback 3</li>
            </ul>
        },
    ];

    return (
        <section className='services'>
            <div className='container'>
                <h2 className='h2-style'>Comprehensive Plumbing Solutions</h2>
                <div className='box'>
                    {content.map((element) =>
                        <div
                            key={element.headline}
                            className='card'>
                            <h3 className='h3-style'>{element.headline}</h3>
                            {element.list}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}


