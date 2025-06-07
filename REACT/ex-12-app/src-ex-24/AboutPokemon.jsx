import { useNavigate, useParams } from "react-router"
import { useGetPokemon } from "./useGetPokemon"

export function AboutPokemon(){

    const {chosenPokemon} = useParams()
    const {pokemons, error, isLoading} = useGetPokemon(chosenPokemon)

    const navigate = useNavigate()

    return(
        <>
        {isLoading && <p>is loading rn, just cut him some slack</p>}
        {error && <p>that's an error, so you clearly have done something wrong</p>}
        {pokemons && (
                <div className="pokemonbox">
                    <p>{pokemons.name}</p>
                    <img src={pokemons.sprites.front_default} />
                </div>
            )}
        <button onClick={() => navigate("/")}>go back, where you belong</button>
        </>
    )
}