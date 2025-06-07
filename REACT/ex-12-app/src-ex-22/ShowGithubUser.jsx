import { useEffect, useState } from "react"
import { useParams } from "react-router"

export function ShowGithubUser(){
    const { username } = useParams()

    const [ user, setUser ] = useState(null)
    const [loading, setLoading] = useState(true)
    const [ error, setError] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if(!response.ok){
                throw new Error("Errore durante il fetch")
            }

            return response.json()
        })
        .then((json) => {
            setUser(json)
        })
        .catch((err) => 
        setError(err.message)) //err and not error because otherwise it prints out null because it is not yet set in a new value, and it changes only when the username changes
        .finally(() => {
            setLoading(false)
        })
    }, [username])

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>{error}</p>
    }

    if(!user){
        return <p style={{
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            padding: "10px"
        }}>no user available</p>
    }

    return(
        <>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            }}>
            <p>name: {user.name}</p>
            <p>login: {user.login}</p>
            <img style={{
                height: "100px",
                width: "100px",
                padding: "10px"
            }}src={user.avatar_url} alt="avatar image" />
        </div>
        </>
    )
}