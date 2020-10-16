import React from 'react';
import { Typography, Tag, Button } from 'antd';

import * as S from './styled';

interface PropsPokemon {
    id: number;
    name: string;
    types: [
        {
            type: {
                name: string;
            };
        },
    ];
    sprites: {
        other: {
            dream_world: any;
        };
    };
}

interface PropsCardItem {
    pokemonData?: PropsPokemon[];
    pokemonType?: string[];
}

const CardItem: React.FC<PropsCardItem> = ({ pokemonData, pokemonType }) => {

    return (
        <>
            {pokemonData && (
                <>
                    <S.CardContainer>
                        <S.CardItemContainer>
                            <div>
                                <Button size="small" type="dashed">
                                    Capture Pokémon
                                </Button>
                            </div>
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
                        </S.CardItemContainer>
                    </S.CardContainer>
                </>
            )}
        </>
    );
};

export default CardItem;
