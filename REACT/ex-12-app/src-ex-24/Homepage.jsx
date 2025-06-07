import { useState } from "react"
import {useNavigate} from "react-router"

export function Homepage(){

    const [pokemon, setPokemon] = useState("")


    const navigate = useNavigate()
    
    function handleSubmit(e){
        e.preventDefault()
        navigate(`/about/${pokemon}`)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={pokemon} onChange={(e) => setPokemon(e.target.value)} placeholder="choose a pokemon" />
                <button type="submit">go with the pokemons</button>
            </form>
            
            
        </>
    )
}