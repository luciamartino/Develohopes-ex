import { useEffect, useState } from "react";

export function GithubUser({username}){

    const [user, setUser] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
            if(!response){
                throw new Error ("there's an error")
            }

            return response.json()
        })
        .then(json => setUser(json))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
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