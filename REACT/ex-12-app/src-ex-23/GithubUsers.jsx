import { Outlet } from "react-router"
import { useGithubUser } from "./useGithubUsers"
import { useState } from "react"

export function GithubUsers(){

    const [user, setUser ] = useState("")
    const [userSubmitted, setUserSubmitted] = useState(null) //otherwise, putting "username", it will send the input at every keystroke, but we want to search only the name we submit

    const { users, error, isLoading, onRefresh} = useGithubUser(userSubmitted) //not "username" for the same reason

function handleSubmit(e){
    e.preventDefault()
    setUserSubmitted(user) //set the submitted user with the current input value

}

return(
    <div>
        <form onSubmit={handleSubmit}>
            <input value={user} onChange={(e) => setUser(e.target.value)}/>
            <button type="submit">just send it</button>
        </form>
        <button onClick={onRefresh}>Refresh</button>
        {isLoading && <h3>is loading, just calm down</h3>}
        {error && <h3>an error has occurred, what did you do</h3>}
        {users && (
            <ul>
                    <li key={users.login}>
                        {users.login}
                    </li>
                    <img src={users.avatar_url} width={"100px"} />
            </ul>
        )}

        <Outlet />
    </div>
)
}

//userSubmit is the confirmed username to trigger the fetch