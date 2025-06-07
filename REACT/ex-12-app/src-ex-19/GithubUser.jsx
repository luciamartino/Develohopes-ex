import { useState } from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser(){
    
    const [search, setSearch] = useState("") // componente controllato
    const { user, error, loading, getData } = useGithubUser(search)

    if (error) {
        return <p>there's an error</p>;
    }

    if (loading && user) {
        return <p>is loading...</p>;
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getData(search)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleSearch}/>
            <input type="submit" value="cerca" />
        </form>
            <div>
                {user && user.name}
            </div>
        </>
    )
}