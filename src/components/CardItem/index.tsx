import React, { useState, useRef } from 'react';
import { Card, Typography, Tag, Image, Button } from 'antd';

import * as S from './styled';
import useOutsideClick from '../../hook/useOutsideClick';
import ModalDetail from '../ModalDetail';

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
    const node = useRef();
    const { Text, Paragraph, Title } = Typography;

    const pokemon = pokemonData;

    // useOutsideClick(node, (): void => {
    //     if (modal) {
    //         setModal(false);
    //     }
    // });

    return (
        <>
            {pokemonData && (
                <>
                    <Card
                        style={{
                            width: '100%',
                            height: '100%',
                            marginBottom: '2rem',
                            borderRadius: '25px',
                            position: 'relative',
                            cursor: 'pointer',
                            backgroundColor: '#8BD674',
                        }}
                        // onClick={() => setModal(true)}
                    >
                        <S.CardItemContainer>
                            {/* <div>
                        <Button size="small" type="primary" danger>
                            Leave Pokemon
                        </Button>
                    </div> */}
                            <Paragraph
                                style={{
                                    margin: 0,
                                    marginTop: '.5rem',
                                    fontWeight: 'bold',
                                }}
                            >
                                {!pokemonData && '#'}{' '}
                                {`# ${pokemonData!.map((e: any) => e.id)}`}
                            </Paragraph>
                            <Title
                                style={{
                                    margin: 0,
                                    marginTop: '.5rem',
                                    marginBottom: '.5rem',
                                    color: '#fff',
                                    textTransform: 'capitalize',
                                    textShadow:
                                        '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
                                }}
                            >
                                {pokemonData!.map((e: any) => e.name)}
                            </Title>
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
                    </Card>
                </>
            )}
        </>
    );
};

export default CardItem;
