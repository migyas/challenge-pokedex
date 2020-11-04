import { PropsPokemon } from "../../../components/CardItem";

export const AddPokemonSuccess = (pokemon: PropsPokemon[]) => {
    console.log(pokemon)
    return {
        type: "ADD_POKEMON_TO_POKEDEX_SUCCESS",
        payload: {
            pokemon
        }
    };

};

export const RemovePokemonSuccess = (pokeIndex: number) => {
    return {
        type: "REMOVE_POKEMON_SUCCESS",
        payload: {
            pokeIndex
        }
    };

};
