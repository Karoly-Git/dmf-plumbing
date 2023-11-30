import React from 'react';
import { Link } from 'react-router-dom';

// Icon Imports
import { IoIosArrowRoundForward as ArrowIcon } from "react-icons/io";

export default function Prices() {
    return (
        <div className='page prices'>

            <div className='head-container'>
                <div className='box'>
                    <div className='content-box'>
                        <div>
                            <h2>Prices &#38; Charges</h2>
                            <p>
                                <Link to={'/'}>Home</Link>
                                <ArrowIcon className='icon' />
                                Prices &#38; Charges
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
