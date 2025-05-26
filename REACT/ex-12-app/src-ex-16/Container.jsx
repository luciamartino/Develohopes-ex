import { useState } from "react"

export function Container({title, children}){

    const [ collapsed, setCollapsed ] = useState(false)

    function handleToggleCollapsed(){
        setCollapsed(c => !c)
    }

    return(
        <div style={{
            backgroundColor: "white",
            border: "1px solid red",
            padding: "10px",
            borderRadius: "25px 25px"
        }}>
            <div class="top">
                <h1>
                    {title} 
                </h1>
                <button onClick={handleToggleCollapsed}>TOGGLE</button>
            </div>
            <div>
                {collapsed && <div>{children}</div>}
            </div>
        </div>
    )
}