// React imports
import React from 'react';
import { Link } from 'react-router-dom';

export default function Available() {
    return (
        <section className='available'>
            <div className="container">
                <div className='box'>
                    <h2>Need a Plumber You Can Rely On?</h2>
                    <p>
                        From urgent repairs to planned plumbing and heating work, we're here to help with professional, reliable service.
                    </p>
                </div>

                <div className='box'>
                    <Link to={'/contact'}>Get in Touch</Link>
                </div>
            </div>
        </section>)
}
