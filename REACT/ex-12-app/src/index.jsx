import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { FocusableInput } from "./FocusableInput"

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <FocusableInput />
    </StrictMode>
)