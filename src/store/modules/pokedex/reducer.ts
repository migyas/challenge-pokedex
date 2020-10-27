import { Reducer } from 'redux';

const INITIAL_STATE = {
    loading: false,
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
        case "REMOVE_POKEMON_SUCCESS": {
            const { pokeID } = action.payload;

            const pokeIndex = pokeID.findIndex((item: any, i: any) => item.id == i);

            console.log(pokeID)
            return {
                pokeID:
                    state.pokemon.slice(pokeIndex + 1),
                // ...state.pokemon.slice(pokemon + 1)

            };
        }
        default: {
            return state;
        }
    }
}

export default pokedex;
