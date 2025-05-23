import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { TodoList } from "./TodoList"
import "./index.css"

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <TodoList />
    </StrictMode>
)