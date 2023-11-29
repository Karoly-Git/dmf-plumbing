import React from 'react';
import { Link } from 'react-router-dom';

// Icon Imports
import { IoIosArrowRoundForward as ArrowIcon } from "react-icons/io";

export default function Terms() {
    return (
        <div className='page terms'>

            <div className='head-container'>
                <div className='box'>
                    <div className='content-box'>
                        <div>
                            <h2>Terms &#38; Conditions</h2>
                            <p>
                                <Link to={'/'}>Home</Link>
                                <ArrowIcon className='icon' />
                                Terms &#38; Conditions
                            </p>
                        </div>
                        <div>
                            <input></input>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
