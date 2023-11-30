// React Imports
import React from 'react';
import Certificates from '../Certificates';
// Component Imports


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
        </div>
    )
}
