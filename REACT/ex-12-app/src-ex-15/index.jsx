import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { Welcome } from "./Welcome"
import "./index.css"
import { CounterDisplay } from "./CounterDisplay"
import { Login } from "./Login"

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <Welcome name={"Ruby"} />
        <CounterDisplay counter={46}/>
        <Login />
    </StrictMode>
)