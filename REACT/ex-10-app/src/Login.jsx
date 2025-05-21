import { useState } from "react"

export function Login({onLogin}){

    const [data, setData] = useState({
        username: "",
        password: "",
        session: false,
    })

    function handleInputChange(event){
        const name = event.target.name; //the key 
        const value = event.target.value; //the value
        const checked = event.target.checked;
        const type = event.target.type;

        setData((d) => {
            return {
                ...d, //it works for any of the input tags because it take the key "name" and the value "value", both extracted from the event.target
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleReset(){
        setData({
            username: "",
            password: "",
            session: false,
        })
    }

    function handleLogin(event){
        event.preventDefault()
        onLogin(data)


    }

    return(
        <>
            <form onSubmit={handleLogin}>
                <input name="username" value={data.username} onChange={handleInputChange} placeholder="write your name"/>
                <input name="password" value={data.password}  onChange={handleInputChange} placeholder="write your password"/>
                <input name="session" type="checkbox" checked={data.session} onChange={handleInputChange}/>
                <button disabled={!data.username || !data.password} type="submit">LOGIN</button>
                <button onClick={handleReset} >RESET</button>
            </form>
        </>
    )
}