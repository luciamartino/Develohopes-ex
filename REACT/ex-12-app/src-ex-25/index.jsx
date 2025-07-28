// Modify the chat application so that the bot obtains its responses from an external endpoint using the SWR library to manage network calls.
// Use the mocki.io service to create a mock for your network call!

// Requirements: When the user sends a message, use SWR to make a request to the provided endpoint and obtain the bot's response.


import {createRoot} from "react-dom/client"
import { StrictMode } from "react"
import { App } from "./App"

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <App />
    </StrictMode>
)
