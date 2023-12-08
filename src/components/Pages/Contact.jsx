// React Imports
import React from 'react';
import { Link } from 'react-router-dom';
// Icon Imports
import { IoIosArrowRoundForward as ArrowIcon } from "react-icons/io";
// Component Imports
import Certificates from '../Certificates';

export default function Contact() {
    return (
        <div className='page contact'>

            <div className='head-container'>
                <div className='box'>
                    <div className='content-box'>
                        <div>
                            <h2>Contacts</h2>
                            <p>
                                <Link to={'/'}>Home</Link>
                                <ArrowIcon className='icon' />
                                Contacts
                            </p>
                        </div>
                    </div>
                </div>
                <Certificates />
            </div>
        </div>
    )
}
