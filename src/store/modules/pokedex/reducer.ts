import { Reducer } from 'redux';

const INITIAL_STATE = {
    loading: false,
    data: [],
    errorMsg: '',
    pokemon: []
}

const pokedex: Reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "ADD_POKEMON_TO_POKEDEX_SUCCESS": {
            const { pokemon } = action.payload;

            return {
                ...state,
                pokemon: state.pokemon.concat(pokemon)
            };
        }
        default: {
            return state;
        }
    }
}

export default pokedex;
