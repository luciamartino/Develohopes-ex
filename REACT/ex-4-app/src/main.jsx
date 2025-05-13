import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { Welcome } from "./Welcome"

createRoot(document.getElementById("root")).render(<Welcome name = "John" age ={27} />)