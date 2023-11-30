// React imports
import React from 'react';
import { Link } from 'react-router-dom';

export default function Available() {
    return (
        <div id='available'>
            <div className="container">
                <div className='box'>
                    <h2>We are Available for you</h2>
                    <p>
                        Have an emergency? Need a plumber fast? We are on standby for you right now!
                    </p>
                </div>

                <div className='box'>
                    <Link to={'/contact'}>Contact Us</Link>
                </div>
            </div>
        </div>
    )
}
