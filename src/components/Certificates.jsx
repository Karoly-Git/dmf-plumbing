// React Imports
import React from 'react';

// Image Imports
import checkatrade from '../img/certs/check_a_trade.jpg';
import gassafe from '../img/certs/gas-safe.jpg';
import vaillant from '../img/certs/vaillant.jpg';

export default function Certificates() {
    return (
        <section className='certs'>
            <img id='check-a-trade' src={checkatrade} alt="Check A Trade logo" />
            <img id='gas-safe' src={gassafe} alt="Gas Safe logo" />
            <img id='vaillant' src={vaillant} alt="Vaillant logo" />
        </section>
    )
}
