import { useEffect, useState } from "react"
import { Link, Outlet, useNavigate } from "react-router"

export function GithubUserList(){
    const [users, setUsers ] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState("")

    const navigate = useNavigate()

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

    function handleSubmit(e){
    e.preventDefault()
    if(search){
        navigate(`/users/${search}`)
    }
    setSearch("")
    }

    
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button type="submit">just send it</button>
        </form>
        <ul className="list">
            {users.map((u) => (
                <li key={u.login}>
                    <Link to={u.login}>{u.login}</Link>
                </li>
            ))}
        </ul>
        <Outlet />
        </>
    )
}