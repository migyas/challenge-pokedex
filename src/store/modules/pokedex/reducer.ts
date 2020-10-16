import { Reducer } from 'redux';
import produce from 'immer';
import { IPokemonState } from '../types';

const INITIAL_STATE: IPokemonState = {
    loading: false,
    data: [],
    errorMsg: '',
}

const pokedex: Reducer<IPokemonState> = (state = INITIAL_STATE, action) => {
    console.log(state, action)

    return produce(state, draft => {
        switch (action.type) {
            case "ADD_POKEMON_TO_POKEDEX_SUCCESS": {
                const { data } = action.payload;

                const pokemonInPokedexIndex = draft.data.findIndex(item =>
                    item.id == data.id);

                if (pokemonInPokedexIndex >= 0) {
                    draft.data[pokemonInPokedexIndex].id;
                } else {
                    console.log(draft.data);
                }
                break;
            }
            case "ADD_POKEMON_TO_POKEDEX_FAILURE": {
                draft.errorMsg;
                break;
            }
        }
    })
}

export default pokedex;
