import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

export function Hello(){

    const language = useContext(LanguageContext)

    const translation = {
        en : "Hello, World!",
        it: "Ciao, Mondo!",
        es: "Hola Mundo",
        pt: "Olá mundo",
        pl: "Cześć świat"
    }

    return(
        <>
            <h3>{translation[language]}</h3>
        </>
    )
}