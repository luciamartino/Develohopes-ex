import { useParams } from "react-router"
import { GithubUser } from "./GithubUser"

export function ShowGithubUser(){
    const { username } = useParams()

    return(
        <>
        {username &&
        <GithubUser username={username} />
        }
        </>
    )
}