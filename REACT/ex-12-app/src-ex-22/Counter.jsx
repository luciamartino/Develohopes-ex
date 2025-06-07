import { useState } from "react";

export function Counter({initialValue}){
    const [ counter, setCounter] = useState(initialValue)

    function handleCounterIncrement(){
        setCounter(c => c + 1)
    }

    function handleCounterDecrement(){
        setCounter(c => c - 1)
    }

    function handleCounterReset(){
        setCounter(initialValue)
    }

    return (
        <div className="buttons">
            <p>{counter}</p>
            <button onClick={handleCounterIncrement}>INCREMENT</button>
            <button onClick={handleCounterDecrement}>DECREMENT</button>
            <button onClick={handleCounterReset}>RESET</button>
        </div>
    )

}

