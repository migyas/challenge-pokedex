import React, { useCallback } from 'react';
import { Tag, Button } from 'antd';

import * as S from './styled';
import { useDispatch } from 'react-redux';
import { AddPokemonSuccess } from '../../store/modules/pokedex/action';
import { IStateList } from '../../store/modules/types';
import { Link } from 'react-router-dom';

export interface PropsPokemon {
    payload: [];
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

interface PropsCardItem {
    pokemonData: PropsPokemon[];
    pokemonType?: string[];
}

const CardItem: React.FC<PropsCardItem> = ({
    pokemonData,
    pokemonType,
}) => {
    const dispacth = useDispatch();

    const handleAddPokemonToPokemon = useCallback(() => {
        dispacth(AddPokemonSuccess(pokemonData));
    }, [dispacth, pokemonData]);

    return (
        <>
            {pokemonData && (
                <>
                    {/*  */}

                    <S.CardContainer>
                        <div>
                            <Button
                                size="small"
                                type="dashed"
                                onClick={handleAddPokemonToPokemon}
                            >
                                Capture Pokémon
                            </Button>
                        </div>
                        <S.CardItemContainer>
                            <Link to={`/pokemon/${pokemonData!.map((e: any) => e.name)}`}>
                                <S.ParagraphDiv strong>
                                    {`# ${pokemonData!.map((e: any) => e.id)}`}
                                </S.ParagraphDiv>
                                <S.TitleDiv>
                                    {pokemonData!.map((e: any) => e.name)}
                                </S.TitleDiv>
                                <S.CardTags>
                                    {pokemonType &&
                                        pokemonType!.map((e: any) => (
                                            <Tag>{e.type.name}</Tag>
                                        ))}
                                </S.CardTags>
                                <S.CardPokemonImage
                                    pokemonImage={
                                        pokemonData &&
                                        pokemonData!.map(
                                            (e: any) =>
                                                e.sprites!.other!.dream_world!
                                                    .front_default,
                                        )
                                    }
                                />
                                <S.CardBackground />
                            </Link>
                        </S.CardItemContainer>
                    </S.CardContainer>
                </>
            )}
        </>
    );
};

export default CardItem;
