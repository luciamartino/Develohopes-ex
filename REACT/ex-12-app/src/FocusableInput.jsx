import { useEffect } from "react"
import { useRef } from "react"

export function FocusableInput(){

    const inputRef = useRef(null)
    const hasMounted = useRef(false) //false because it traks if the event has run or not, so in the beginning it has to be false

    useEffect(() => {
        inputRef.current?.focus() //.current to get the actual value of the REF object
        if(!hasMounted.current){ //if hasMounted.current is false, it means that this equation with ! is true, therefore the if succeeded 
            console.log("First time mounted")
            hasMounted.current = true //it's set on true because now the if is never true so it cannot run => a way to run the code only once
        }
    }, []) //empty [] in order to run it once

    return(
        <>
        <h1>my cute lil input</h1>
            <input ref={inputRef} name="username" type="text" placeholder="write smt or not idc"/>
        </>
    )
}