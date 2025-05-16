import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { Counter } from "./Counter"
import "./counter.css"

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <Counter initialValue={7} incrementValue={3} decrementValue={5}/>
    </StrictMode>
)