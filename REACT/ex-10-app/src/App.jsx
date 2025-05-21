import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";

export function App(){

    function propLogin(state){
        console.log(state) //it receives the login data from the child and can do whatever is needed 
    }
    return(
        <>
            <InteractiveWelcome />
            <Login onLogin={propLogin}/>
        </>
    )
}