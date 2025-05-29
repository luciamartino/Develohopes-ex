import { useState } from "react"
import { GithubUser } from "./GithubUser"

export function GithubUsers(){

    const [ search, setSearch ] = useState("")
    const [ usernames, setUsernames] = useState([])

    function handleSubmit(event){
        event.preventDefault()
        setUsernames((prev) => [search, ...prev])
        console.log(search)

    }

    function handleChangeInput(event){
        setSearch(event.target.value)

    }

    return (
        <>
            <form style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "10px"
                }}
                onSubmit={handleSubmit}>
                <input name="search" type="text" onChange={handleChangeInput} value={search} />
                <button type="submit">send</button>
            </form>

            <ul>
                {usernames.map((user) =>
                    <GithubUser key={user} username={user} />
                )}
            </ul>
        </>
    )
}