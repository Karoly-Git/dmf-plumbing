// React Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Icon Imports
import { IoIosArrowRoundForward as ArrowIcon } from "react-icons/io";

export default function HeadContainer(props) {
    return (
        <div className='head-container'>
            <div className='box'>
                <div className='content-box'>
                    <div>
                        <h2>{props.h2}</h2>
                        <p>
                            <Link to="/">Home</Link>
                            <ArrowIcon className='icon' />
                            {props.h2}
                        </p>
                    </div>
                    {props.headIcon ? <img className='icon' src={props.headIcon} alt="icon" /> : <></>}
                </div>
            </div>
        </div>
    )
}
