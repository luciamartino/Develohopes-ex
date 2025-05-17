import { useEffect, useState } from "react"

export function Clock(){

    const [date, setDate ] = useState(new Date())

    useEffect(() =>{
        const interval = setInterval(()=> {
            setDate(new Date())
        }, 1000)

        // return(
        //     clearInterval(interval)
        // )
    }, [])

    return (
        <>
        <h2>Current Time: {date.toLocaleTimeString()}</h2>
        </>
    )
}