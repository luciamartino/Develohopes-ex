import { useState } from "react"
import itadorikun from "../public/itadorikun.jpg"
import nobara from "../public/nobara.jpg"
import "./index.css"


export function Chat(){

    const [ message, setMessage ] = useState("")
    const [ texts, setTexts ] = useState([]) //initializing the array of texts with everything we put past {message}
    const risposte = ["ciao", "okay!"]

    function handleChangeMessage(event){ //respond to changes in input tag; 
        setMessage(event.target.value) //it updates the value of the state {message} with the new text inside the input
    }

    function handleSendMessage(event){
        event.preventDefault(); //prevent browser reload
        setTexts([...texts, message])
        setMessage("")
    }

    return (
        <>
            <form onSubmit={handleSendMessage}>
                <div>
                    <input onChange={handleChangeMessage} value={message} placeholder="write here"></input>
                    <button type="submit">send</button> 
                </div>
            </form>
           <div className="received">
                 <span><img src={itadorikun} width={"30px"} height={"30px"}></img> Hello there!</span>
             </div>
             <div className="sent">
                 <span>Do you need smt? <img src={nobara} width={"30px"} height={"30px"}></img></span>
             </div>
        
            <div> {texts.map((msg, index) => (
                <>
                <div className="sent-text">
                    <span key={index}>{msg} <img src={nobara} width={"30px"} height={"30px"}></img></span>
                </div>
                <div className="received-text">
                    <span key={index}><img src={itadorikun} width={"30px"} height={"30px"}></img> {risposte[index]}</span>
                </div>
                </>
            ))}</div>

        
        </>)
}

//value={message} in order to make the input a controlled component
//<button type="submit">send</button>   --> means that when the button is clicked, it triggers the onChange because it's in a form