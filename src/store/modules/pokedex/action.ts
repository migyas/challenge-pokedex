export const AddPokemonSuccess = (pokemon: string) => {

    return {
        type: "ADD_POKEMON_TO_POKEDEX_SUCCESS",
        payload: {
            pokemon
        }
    };

};
