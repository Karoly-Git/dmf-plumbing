// React Imports
import React from 'react';
// Component Imports
import Services from '../Services';


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
            <Services />
        </div>
    )
}
