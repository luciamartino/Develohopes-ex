import { useState } from "react"

export function Chat(){

    const [message, setMessage] = useState("")
    const [texts, setTexts] = useState([])

    function handleInputChange(event){
        setMessage(event.target.value)
    }



    function handleSubmit(event){
        event.preventDefault()
        if(message.length == 0){
            alert("no text in the imput, just write something and don't waste my time")
        }else{
            setTexts([...texts, message])
            setMessage("")
        }

    }


    return(
        <>
        <div className="chatroom">
            <ul>
                {texts.map((msg, index) => (
                    <li key={index}>{msg.trim()}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input autoFocus type="text" onChange={handleInputChange} value={message} placeholder="dont ovethink it, just send it"/>
                <button type="submit">send</button>
            </form>
        </div>
        </>
    )
}