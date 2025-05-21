import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome(){
    const [user, setName] = useState("")

    function handleName(event){
        const value = event.target.value
        setName(value)
    }

    return (
        <>
            <input value={user} onChange={handleName} />
            <Welcome name={user} />
        </>
    )

}