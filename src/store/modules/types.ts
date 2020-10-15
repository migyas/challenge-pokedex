// export interface IPokemonList {
//     results: [];
// }
interface PropsDetail {
    id?: number;
    name?: string;
    height?: number;
    weight?: number;

    sprites?: {
        other: {
            dream_world: {
                front_default: any;
            };
        };
    };
}

export interface IStateList {
    payload: [];

}

export interface PropsEffect {
    effect_entries?: [
        {
            short_effect: string;
        }
    ];
}

export interface IPokemonList {
    data: IStateList[];
    name: string;
    id: number;
    height?: number;
    weight?: number;
    abilities: [
        {
            ability: {
                name: string;
            }
        }
    ]
    sprites?: {
        other: {
            dream_world: {
                front_default: any;
            };
        };
    };
    types?: [
        {
            type?: {
                name?: string;
            };
        },
    ];
    stats?: [
        {
            base_stat: number;
            stat: {
                name: string[];
            };
        },
    ];
}

export interface IPokemonState {
    data: IPokemonList[];
    loading: boolean;
    errorMsg: string;
}

export interface IState {
    pokedex: IPokemonState;
}
