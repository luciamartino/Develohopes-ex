import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { Container } from "./Container"
import { UncontrolledLogin } from "./UncontrolledLogin"
import "./index.css"

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <Container title={"no title page"}>
            <UncontrolledLogin/>
        </Container>
    </StrictMode>
)