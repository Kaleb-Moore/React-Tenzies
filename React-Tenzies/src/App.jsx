import React, {useState} from 'react';
import Die from "./Die.jsx"

export default function App() {

    const [dice, setDice] = useState(allNewDice());

    console.log(dice)

    function allNewDice() {
        return Array.from({length: 10}, () => Math.floor(Math.random() * 6 + 1));
    }

    return (
        <main>
            <div className="dice--container">
                
            </div>
        </main>
    )
}