import React from 'react';

export default function Die(props) {
    return (
        <div className={`die ${props.isHeld ? "die-held" : ""}`}>
            <p className="die--face">{props.value}</p>
        </div>
    )
}