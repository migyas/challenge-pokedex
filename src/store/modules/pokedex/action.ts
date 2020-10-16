import { PropsPokemon } from "../../../components/CardItem";

export const AddPokemonSuccess = (pokemon: PropsPokemon[]) => {

    return {
        type: "ADD_POKEMON_TO_POKEDEX_SUCCESS",
        payload: {
            pokemon
        }
    };

};
