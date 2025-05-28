import { LanguageContext } from "./LanguageContext"
import { Hello } from "./Hello"
import { useState } from "react"

export function App(){

    const [ language, setLanguage ] = useState("it")

    function handleLanguageChange(event){
        const value = event.target.value
        setLanguage(value)
    }
    const languages = [
        {   code : "it", 
            label : "ITALIANO"
        },
        {
            code : "en",
            label : "ENGLISH"
        },
        {
            code : "es",
            label : "ESPAÑOL"
        },
        {
            code : "pt",
            label : "PORTUGUÊS"
        },
        {
            code : "pl",
            label : "POLSKI"
        }

    ]
    
    return(
        <>
            <select value={language} onChange={handleLanguageChange}>
                <option value=""></option>
                {languages.map((l) => {
                    return <option value={l.code} key={l.label}>{l.label}</option>
                })}
            </select>
            <LanguageContext.Provider value={language}>
                <Hello />
            </LanguageContext.Provider>
        </>
    )

}

//it takes the different language value because in the PROVIDER we set the value on the language variable change;
//it is linked to the SELECT value, it's the same, so whenever we change it in the SELECT TAG, it authomatically changes in the value in the PROVIDER;
//therefore the new languages is a value accessible to all the component inside the PROVIDER;
//with this new value we can change the output, the value is the {l.code}