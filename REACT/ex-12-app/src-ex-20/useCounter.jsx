import { useCallback, useState } from "react"

export function useCounter(){


    const [counter, setCounter] = useState(0)

    const handleIncrement = () => setCounter((prev) => prev + 1)
    const handleDecrement = () => setCounter((prev) => prev - 1)
    const handleReset = () => setCounter(() => 0)


    const increment = useCallback(handleIncrement, [])
    const decrement = useCallback(handleDecrement, [])
    const reset = useCallback(handleReset, [])


    return {increment, decrement, reset, counter} 
}