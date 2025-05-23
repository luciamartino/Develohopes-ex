import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { Color } from "../src-ex-13/Color"
import { Colors } from "../src-ex-13/Colors"

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <Color color={
            {
                id: 1,
                name: "rebeccapurple"
            }
        } />
        <Colors colors={
            [
                {
                    id:2,
                    name: "slytherin green"
                },
                {
                    id:3,
                    name:"blood orange"
                },
                {
                    id:4,
                    name: "dirty white"
                }
            ]
        } />
    </StrictMode>
)