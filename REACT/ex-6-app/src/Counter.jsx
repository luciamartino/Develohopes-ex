import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";
import "./Counter.css"

export function Counter({initialValue, incrementValue, decrementValue}){
    const [ counter, setCounter] = useState(initialValue)

    function handleCounterIncrement(){
        setCounter((c) => {return c + incrementValue})
    }

    function handleCounterDecrement(){
        setCounter(c => {return c - decrementValue})
    }

    function handleCounterReset(){
        setCounter(initialValue)
    }

    return (
        <div className="buttons">
            <CounterDisplay counter={counter}/>
            <button onClick={handleCounterIncrement}>INCREMENT</button>
            <button onClick={handleCounterDecrement}>DECREMENT</button>
            <button onClick={handleCounterReset}>RESET</button>
        </div>
    )

}

