import { useEffect, useState } from "react"
import useSWR from "swr";
import "./index.css"

export function Chat(){

    const fetcher = url => fetch(url).then(response => response.json())

    const [message, setMessage] = useState("");
    const [texts, setTexts] = useState([])
    const [triggeredURL, setTriggeredURL] = useState(null)
    const {data, error, isLoading} = useSWR(triggeredURL, fetcher)


    function handleInputChange(event){
        setMessage(event.target.value)
    }

    async function handleSubmit(event){
        event.preventDefault();
        if(message.length == 0){
            alert("no message in the box, are u alright?")
        }else{
            setTexts(prev => [...prev, {role: "user", content: message}]);
            setMessage("")
            setTriggeredURL(`https://mocki.io/v1/1fd23cd5-ae96-4d9a-b699-f483f8b00145`)
            //send a message => handleSubmit triggers setTriggeredURL =>  useSWR notices the change => it refetch the new answer from the bot
            //anytime that the button is clicked => useSWR needs to fetch new data

            //This sets the triggerURL state to a new value—specifically, the mock API endpoint,
            // and since useSWR is listening to triggerURL,
            // changing it causes SWR to refetch from that endpoint automatically
        }
    }

    useEffect(()=> {
        if(error){
            alert("There's an error, I really don't know what to do with you")
        }
    }, [error])

    useEffect(()=>{
        if(isLoading){
            alert("Is L-O-A-D-I-N-G means that you just need to shut up and wait")
        }
    }, [isLoading])


    useEffect(() => {
        if(data?.response && !texts.includes(data.response)){
            //if there's a response in the data and this response is not already in the texts array
            setTexts(prev => [...prev, {role: "bot", content: data.response}])
            //if you write setTexts([...texts, data.response]) => it doesn't check if there are duplicates in the texts
        }
    }, [data])

    return(
        <>
        <div className="chatroom">
            <ul>
                {texts.map((msg, index) => ( //if you put {} it doesn't return anything
                    <li key={index} className={msg.role === "user" ? "user-msg" : "bot-msg"}>{msg.content.trim()}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input autoFocus type="text" onChange={handleInputChange} value={message} placeholder="write down what you want"></input>
                <button type="submit">send and get over with it</button>
            </form>
        </div>
        </>
    )
}


//message è quello che viene messo dentro l'input
//texts è l'array dentro il quale vengono inseriti i messaggi precedenti, una volta inviati

//if you want to move the alert behavior out of the render:
// useEffect(() => {
//   if (isLoading) {
//     alert("Is L-O-A-D-I-N-G means that you just need to shut up and wait")
//   }
// }, [isLoading]);

//  useEffect(() => {
//     fetch("https://mocki.io/v1/c06704c7-db58-4435-a59c-480937866126")
//       .then(res => res.text())
//       .then(console.log);
//   }, []);


//That structure { role: "user", content: message } is a little data design magic ✨

// Instead of storing just the raw string message in your texts array, you're now storing an object that includes:

//     role: a label to say who the message is from—either "user" or "bot"

//     content: the actual message text itself
