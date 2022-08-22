import React from 'react';
import Die from "./Die.jsx"

export default function App() {

    function allNewDice() {
        const numArray = Array.from({length: 10}, () => Math.floor(Math.random() * 6 + 1));
    }

    return (
        <main>
            <div className="dice--container">
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
            </div>
        </main>
    )
}