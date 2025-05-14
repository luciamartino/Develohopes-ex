import { AlertClock } from "./AlertClock";

export function App(){
    function handleButtonClick(){
        const now = new Date()
        alert(`The current time is ${now.toLocaleTimeString()}`)
    }
    return (
        <AlertClock label="I dare you to click on me" eventHandler={handleButtonClick}/>
    )
}