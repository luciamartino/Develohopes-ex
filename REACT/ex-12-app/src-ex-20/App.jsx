import { FilteredList } from "./FilteredList";
import { useCounter } from "./useCounter";

export function App(){

    const array = [
        {
            name: "sara",
            age: 17,
            id: 1
        },
        {
            name: "silvia",
            age: 56,
            id: 2
        },
                {
            name: "simona",
            age: 87,
            id: 3
        },
                {
            name: "sandra",
            age: 4,
            id: 4
        }
    ]

    const {counter, increment, decrement, reset} = useCounter()

    return (
        <>
        <div className="counter">
            <h2>ex 1</h2>
            <p>
                Counter: {counter}
            </p>
            <button onClick={increment}>INCREMENT</button>
            <button onClick={decrement}>DECREMENT</button>
            <button onClick={reset}>RESET</button>

        </div>
            <FilteredList items={array}/>
        </>
    )
}