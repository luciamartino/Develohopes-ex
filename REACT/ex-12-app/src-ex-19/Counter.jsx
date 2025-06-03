import { useCounter } from "./useCounter"

export function Counter(){

    const { counter, onIncrement, onDecrement, onReset } = useCounter(0)

    return(
        <>
        <div className="counter">
            <p>
                Counter: {counter}
            </p>
            <button onClick={onIncrement}>INCREMENT</button>
            <button onClick={onDecrement}>DECREMENT</button>
            <button onClick={onReset}>RESET</button>

        </div>
        </>
    )
}