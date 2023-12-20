// React Imports
import React from 'react';

// Image Imports
import checkatrade from '../../img/certs/checkatrade.png';
import gassafe from '../../img/certs/gassafe.jpg';
import vaillant from '../../img/certs/vaillant.png';

export default function Certificates() {
    return (
        <section className='certs'>
            <img id='checkatrade' src={checkatrade} alt="Check A Trade logo" />
            <img id='gassafe' src={gassafe} alt="Gas Safe logo" />
            <img id='vaillant' src={vaillant} alt="Vaillant logo" />
        </section>
    )
}
