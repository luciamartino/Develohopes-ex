import { Login } from "./Login"

export function UncontrolledLogin(){

    function handleFormSubmit(event){
        event.preventDefault()
        const username = event.target.elements.namedItem("username").value
        const password = event.target.elements.namedItem("password").value
        const session = event.target.elements.namedItem("session").value

        const data = { username, password, session}

        console.log(data.username, data.password, data.session)
    }

    function loginWithFormData(event){
        const formData = new FormData(event.target.form) //because event.target is the button but FormData takes only a form element, which is the parent in this case
        const datas = {
            username : formData.get("username"),
            password : formData.get("password"),
            session : formData.get("session") === "on" ? true : false
        }

        console.log(datas)
    }

    function handleLogin(e){
        console.log(e.target.value) 
    }


    return(
        <>
            <h1>my lil form </h1>
            <form onSubmit={handleFormSubmit}>
                <input name="username" type="text" placeholder="write your name" />
                <input name="password" type="password" placeholder="write your password" />
                <input name="session" type="checkbox"/>
                <Login handleLogin={handleLogin}/>
                <button type="button" onClick={loginWithFormData}>get Form Data</button> 
            </form>
        </>
    )
}

//the GET FORM DATA needs to specify the type otherwise it assumes it is the submit button
//it appears an empty string from the handleLogin, because usually the login button is not another component but inside the form,
//that way, login button clicked, it triggers the onSubmit and it prints out only the onSubmit