import { Reducer } from 'redux';
import produce from 'immer';

import { IPokedexState } from './types';

const INITIAL_STATE: IPokedexState = {
    results: []
}

const pokedex: Reducer= (state, action) => {


    return [];
    // return produce(state, draft => {
    //     switch (action.type) {
    //         case 'ADD_POKEMON_TO_POKEDEX': {

    //         }
    //     }
    // });
}

export default pokedex;
