import api from '../../../service/api';

export const GetPokemon = (pokemon: string) => async (dispatch: any) => {
    try {
        dispatch({
            type: "POKEMON_LOADING"
        });

        const res = await api.get(`/pokemon/${pokemon}`)

        dispatch({
            type: "POKEMON_SUCCESS",
            payload: res.data,
            pokemonName: pokemon
        })
    } catch (e) {
        dispatch({
            type: "POKEMON_FAIL",
        })
    }
};
