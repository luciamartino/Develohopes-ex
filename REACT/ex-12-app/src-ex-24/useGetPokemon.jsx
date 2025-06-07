import useSWR from "swr";

const fetcher = url => fetch(url).then((response) => response.json())

export function useGetPokemon(yourPokemon){

    const {data, error, isLoading} = useSWR( yourPokemon ? `https://pokeapi.co/api/v2/pokemon/${yourPokemon}` : null, fetcher)

    return{
        pokemons: data,
        error,
        isLoading
    }
}
