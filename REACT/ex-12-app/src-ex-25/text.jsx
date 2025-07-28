//https://mocki.io/v1/fe3867aa-e93a-4acc-a116-5530b173a121

import { useState } from "react" //to handle data fetching
import useSWR from "swr"

const fetcher = (url) => fetch(url).then(res => res.json()) //reusable function that fetches from a given urland parses the json response

export function Chat() {
    const [message, setMessage] = useState("")
    const [texts, setTexts] = useState([])

    const { data, mutate } = useSWR(null, fetcher)

    async function handleSubmit(event){
        event.preventDefault()
        if(message.length === 0){
            alert("no text in the input, just write something and don't waste my time")
        } else {
            // Add user message
            setTexts(prev => [...prev, `🧍 You: ${message}`])
            setMessage("")

            // Trigger mock endpoint fetch
            const mockURL = "https://mocki.io/v1/abcd1234-your-endpoint"
            const response = await fetcher(mockURL)

            // Add bot response
            if(response?.response){
                setTexts(prev => [...prev, `🤖 Bot: ${response.response}`])
            } else {
                setTexts(prev => [...prev, "🤖 Bot: Sorry, no response from the server!"])
            }
        }
    }

    function handleInputChange(event){
        setMessage(event.target.value)
    }

    return (
        <div className="chatroom">
            <ul>
                {texts.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input autoFocus type="text" onChange={handleInputChange} value={message} placeholder="dont overthink it, just send it"/>
                <button type="submit">send</button>
            </form>
        </div>
    )
}
