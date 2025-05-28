import { useState } from "react"

export function Container({title, children}){

    const [ collapsed, setCollapsed ] = useState(true)

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
            <div className="top">
                <h1 onClick={handleToggleCollapsed} style={{
                    cursor: "pointer"
                }}>
                    {title} 
                </h1>
            </div>
            <div>
                {collapsed && <div>{children}</div>}
            </div>
        </div>
    )
}