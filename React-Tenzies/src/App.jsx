import React, {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import Die from "./Die.jsx"
import Button from './Button.jsx';

export default function App() {

    const [dice, setDice] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false);

    useEffect(() => {
        const allDiceHeld = dice.every(die => die.isHeld);
        const firstDie = dice[0].value;
        const allSameValue = dice.every(die => die.value === firstDie)

        if (allDiceHeld && allSameValue){
            setTenzies(true);
            console.log("You Won!");
        }
    }, [dice])

    function newDie () {
        return { 
            value: `${Math.floor(Math.random() * 6 + 1)}`, 
            isHeld: false,
            key: nanoid(),
        }
    }

    function allNewDice() {
        return [...Array(10).fill(0).map(() => (newDie()))]
    }

    function updateDice() {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ?
                die :
                newDie()
        }))
    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.key === id ? 
                {...die, isHeld: !die.isHeld} : 
                die;
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
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice--container">
                {diceElements}
            </div>
            <Button handleClick={updateDice}/>
        </main>
    )
}