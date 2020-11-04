import { Reducer } from 'redux';

const INITIAL_STATE = {
    loading: false,
    errorMsg: '',
    pokemon: []
}

const pokedex: Reducer = (state = INITIAL_STATE, action) => {

    console.log(action.payload)

    switch (action.type) {
        case "ADD_POKEMON_TO_POKEDEX_SUCCESS": {
            const { pokemon } = action.payload;

            return {
                ...state,
                pokemon: state.pokemon.concat(pokemon)
            };
        }
        case "REMOVE_POKEMON_SUCCESS": {
            const { pokeIndex } = action.payload;

            const findPokemonIndex = state.pokemon.findIndex((item: any) => item.id === pokeIndex);

            return {
                ...state,
                pokemon: state.pokemon.filter((e: any, i: number) => i !== findPokemonIndex)
            };
        }
        default: {
            return state;
        }
    }
}

export default pokedex;
