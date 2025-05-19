import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { Chat } from "./Chat"

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <Chat />
    </StrictMode>

)