
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


    return(
        <>
            <h1>my lil form </h1>
            <form onSubmit={handleFormSubmit}>
                <input name="username" type="text" placeholder="write your name" />
                <input name="password" type="password" placeholder="write your password" />
                <input name="session" type="checkbox" class="checkbox"/>
                <button type="submit" onClick={loginWithFormData}>get Form Data</button> 
            </form>
        </>
    )
}