import React from 'react'

export default function SloganContainer(props) {
    return (
        <div className='slogan-container'>
            {props.sloganIcon ? <img className='icon' src={props.sloganIcon} alt="icon" /> : <></>}
            {props.h1 ? <h1 className='slogan'>{props.h1}</h1> : <h2 className='slogan'>{props.h2}</h2>}
        </div>
    )
}
