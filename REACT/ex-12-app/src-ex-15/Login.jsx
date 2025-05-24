import { useState } from "react"

export function Login(){

    const [ data, setData ] = useState({
        username: "",
        password: ""
    })

    function handleDataChange(event){
        const name = event.target.name //the key
        const value = event.target.value //the value

        setData((d) =>{
            return{
                ...d,
                [name] : value
            }
        })
    }

    function handleLogin(event){
        event.preventDefault()
        console.log(data.username, data.password)
    }


    return(
        <>
        <form onSubmit={handleLogin}>
            <input name="username" value={data.username} onChange={handleDataChange} placeholder="write ur name" />
            <input name="password" value={data.password} type="password" onChange={handleDataChange} placeholder="write ur password"/>
            <button style={{
                backgroundColor: data.password.length < 8 ? "red" : "green"
            }} type="submit">LOGIN</button>
        </form>
        </>
    )

}

//it's better to use a callback for the setData because it takes the freshest value and use it
//this one is also correct:
        // setData({
        //     ...data,
        //     [name] : value
        // })
//but it's direct and sometime it may happen to not syncronize in time