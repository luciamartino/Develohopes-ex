import { GithubUser } from "./GithubUser";
import { GithubUsers } from "./GithubUsers";

export function App(){
    return(
        <>
            <GithubUser username={"mojombo"}/>
            <GithubUsers />
        </>
    )
}