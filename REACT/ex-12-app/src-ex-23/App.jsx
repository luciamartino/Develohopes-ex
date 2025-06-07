import { SWRConfig } from "swr"
import { GithubUsers } from "./GithubUsers"

const fetcher = url => {
    const response = fetch(url)
    if(!response.ok){
        throw new Error("utente non presente")
    }
    return response.json()
}

export function App(){
    return(
        <SWRConfig value={{fetcher}}>
            <GithubUsers />
        </SWRConfig>
    )
}