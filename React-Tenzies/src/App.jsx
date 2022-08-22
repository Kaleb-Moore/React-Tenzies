import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import Die from "./Die.jsx"
import Button from './Button.jsx';

export default function App() {

    const [dice, setDice] = useState(allNewDice());

    function allNewDice() {
        return [...Array(10).fill(0).map(() => ({ 
            value: `${Math.floor(Math.random() * 6 + 1)}`, 
            isHeld: false,
            key: nanoid(),
        }))]
    }

    function updateDice() {
        setDice(allNewDice())
    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.key === id ? {...die, isHeld: !die.isHeld} : die;
        }))
    }

    const diceElements = dice.map(die => (
        <Die 
            handleClick={() => holdDice(die.key)} 
            isHeld={die.isHeld} 
            value={die.value} 
            key={die.key}
        />
     ))
    
    return (
        <main>
            <div className="dice--container">
                {diceElements}
            </div>
            <Button handleClick={updateDice}/>
        </main>
    )
}