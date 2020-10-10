export interface IPokedexPokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
        other: {
            dream_world: {
                front_default: string;
            }
        }
    };
    types: [
        {
            type: {
                name: string;
            }
        }
    ]
    stats: [
        {
            base_stat: number;
            stat: {
                name: string;
            }
        }
    ]
}
export interface IPokedexItem {
    name: string;
    url: IPokedexPokemon;
}

export interface IPokedexState {
    results: IPokedexItem[];
}

interface PropsPokemonStats {
    id: number;
    name: string;
    height: number;
    move: {
        name: string;
    };
    sprites: {
        other: {
            dream_world: {
                front_default: string;
            };
        };
    };
    stats: [
        {
            base_stat: number;
            stat: {
                name: string;
            };
        },
    ];
    types: [
        {
            type: {
                name: string;
            };
        },
    ];
    weight: number;
}

interface PropsOption {
    id?: number;
    name: string;
}


