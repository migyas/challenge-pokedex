// export interface IPokemonList {
//     results: [];
// }

export interface IPokemonDetail {
    name: string;
    id: number;
    height: number;
}

export interface IStateList {
    payload: [];

}

export interface IPokemonList {
    data: IStateList[];
}

export interface IPokemonState {
    data: IPokemonList[];
    loading: boolean;
    errorMsg: string;
}
