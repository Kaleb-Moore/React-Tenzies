import React from 'react';

export default function Button(props) {
    return (
        <button className='roll-btn' onClick={props.handleClick}>Roll</button>
    )
}