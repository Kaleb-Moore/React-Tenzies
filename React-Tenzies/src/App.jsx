import React, {useState} from 'react';
import Die from "./Die.jsx"

export default function App() {

    const [dice, setDice] = useState(allNewDice());

    function allNewDice() {
        return Array.from({length: 10}, () => Math.floor(Math.random() * 6 + 1));
    }

    const diceElements = dice.map(die => <Die value={die} />)
    
    return (
        <main>
            <div className="dice--container">
                {diceElements}
            </div>
        </main>
    )
}