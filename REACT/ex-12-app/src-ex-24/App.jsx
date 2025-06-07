//Creare un'applicazione con le seguenti feature,
//Pagina homepage con al suo interno un form di ricerca e un tasto submit, al click del bottone vi deve mandare una pagina interna,

// della vostra applicazione (es: localhost:8000/pikachu) con useNavigate 
// const navigate = useNavigate();
// navigate('/targetpath')
// navigate('/path', { replace: true }); 

//All'interno della pagina specifica del pokemon bisogna ricavarsi il nome del pokemon attraverso i params e fare
//una fetch con un hook custom chiamato useGetPokemon che utilizzerà a sua volta l'hook useSWR

import { Homepage } from "./Homepage";
import { BrowserRouter, Route, Routes } from "react-router";
import { AboutPokemon } from "./AboutPokemon";


export function App(){

    // const fetcher = url => {
    //     const response = fetch(url)
    //     if(!response.ok){
    //         throw new Error("an error has occured")
    //     }
    //     return response.json()
    // }

    return(
        <>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />}/>
                    <Route path="/about/:chosenPokemon" element={<AboutPokemon />} />
                </Routes>
        </BrowserRouter>
        </>
    )
}