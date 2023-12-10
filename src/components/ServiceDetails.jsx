// React Imports
import React from 'react';
//Style Imports
import '../css/service-details.css';

export default function ServiceDetails(props) {
    return (
        <div className={props.className}>
            <div className='container'>
                <h2 className='title'>
                    {props.slogan}
                </h2>
                <div className='box'>
                    {props.details}
                </div>
            </div>
        </div>
    )
}
