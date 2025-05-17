import { useEffect, useState } from "react"

export function Counter({initialValue, incrementValue}){

    const [ counter, setCouter ] = useState(initialValue)

    useEffect(() => {
        console.log(counter)
    }, [counter])

    function handleIncrementButton(){
        setCouter(c => {return c + incrementValue})
    }

    return (
        <div>
            <h2>The current Counter is: {counter} </h2>
            <button onClick={handleIncrementButton}>INCREMENT</button>
        </div>
    )
}