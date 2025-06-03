import { useState } from "react"

export function Form(){

    function useForm(){

        const [data, setData] = useState({
            username: "",
            password: ""
        })

        function handleDataChange(event){
            const name = event.target.name
            const value = event.target.value

            setData((d) => {
                return{
                    ...d,
                    [name] : value
                }
            })

        }

        function handleSubmit(event){
            event.preventDefault()
            console.log(event)
        }

        return {
            data: data,
            onDataChange: handleDataChange,
            onLogin: handleSubmit
        }

    }

    const {data, onDataChange, onLogin } = useForm()
    
    return(
        <>
            <form onSubmit={onLogin}>
                <input type="text" name="username" onChange={onDataChange} value={data.username} placeholder="write your username"/>
                <input type="password" name="password" onChange={onDataChange} value={data.password} placeholder="write your password"/>
                <button type="submit">send pls</button>
            </form>
        </>
    )
}