import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router"

export function GithubUserList(){
    const [ users, setUsers ] = useState(null)
    const [loading, setLoading] = useState(true)
    const [ error, setError] = useState(null)

useEffect(() => {
    fetch(`https://api.github.com/users`)
        .then(response => {
            if(!response.ok){
                throw new Error("Errore durante il fetch")
            }

            return response.json()
        })
        .then((json) => {
            setUsers(json)
        })
        .catch((err) => 
        setError(err.message))
        .finally(() => {
            setLoading(false)
        })
}, [])

if(loading){
    return <p>Loading...</p>
    }

if(error){
    return <p>{error}</p>
    }

if(!users){
    return <p style={{
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        padding: "10px"
    }}>no user available</p>
    }

    
    return(
        <>
        <Outlet />
        <ul>
            {users.map((u) => {
                <li key={u.login}>
                    <Link to={u.login}>{u.login}</Link>
                </li>
            })}
        </ul>
        </>
    )
}