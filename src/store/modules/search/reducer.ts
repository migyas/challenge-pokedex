import { Reducer } from 'redux';
import { IPokemonState } from '../types';

const INITIAL_STATE: IPokemonState = {
    loading: false,
    data: [],
    errorMsg: '',
}

const search: Reducer<IPokemonState> = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "POKEMON_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
        case "POKEMON_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: "Unable to find pokemon"
            };
        case "POKEMON_SUCCESS":
            return {
                ...state,
                loading: false,
                errorMsg: "",
                data: {
                    ...state.data,
                    [action.pokemonName]: action.payload
                }
            };
        default:
            return state
    }
}

export default search;
