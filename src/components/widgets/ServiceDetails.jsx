// React Imports
import React from 'react';

export default function ServiceDetails(props) {
    return (
        <div className={props.className}>
            <div className='container'>
                {props.title && <h2 className='title'>
                    {props.title}
                </h2>}
                <div className='box'>
                    {props.details}
                </div>
            </div>
        </div>
    )
}
