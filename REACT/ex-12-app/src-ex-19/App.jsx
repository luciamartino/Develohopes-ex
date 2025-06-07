import { Counter } from "./Counter";
import { Form } from "./Form";
import { GithubUser } from "./GithubUser";
import { Location } from "./Location";

export function App(){
    return(
        <>
            <Counter />
            <Form />
            <GithubUser />
            <Location />
        </>
    )
}