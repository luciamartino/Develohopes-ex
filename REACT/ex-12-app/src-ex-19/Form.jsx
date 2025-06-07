import { useForm } from "./useForm"

export function Form(){

    function handleSubmit(event){
            event.preventDefault()
            console.log(event)
        }


    const {data, handleDataChange } = useForm()
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" onChange={handleDataChange} value={data.username} placeholder="write your username"/>
                <input type="password" name="password" onChange={handleDataChange} value={data.password} placeholder="write your password"/>
                <button type="submit">send pls</button>
            </form>
        </>
    )
}