// React Imports
import React from 'react';
// Component Imports
import Services from '../Services';
// Component Imports
import Certificates from '../Certificates';

export default function Home() {
    return (
        <div className='page home'>
            <div className='head-container'>
                <div className='box'>
                    <div className='content-box'>
                        <div>
                            <h2>Home</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Certificates />
            <h1>Precision in Plumbing, Warmth in Heating, Excellence in Boiler Solutions.</h1>
            <Services />
        </div>
    )
}
