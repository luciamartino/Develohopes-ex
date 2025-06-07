import { useState } from "react"

export function useForm(){

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

    return {
            data: data,
            handleDataChange,
        }
}