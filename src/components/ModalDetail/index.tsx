import React, { useState } from 'react';
import { ArrowLeftOutlined, DownOutlined } from '@ant-design/icons';
import { Tag, Typography, Divider, Menu, Dropdown } from 'antd';

import * as S from './styled';

interface PropsModal {
    open: boolean;
    refNode: any;
    pokemonDetail: PropsDetail;
    pokemonType?: PropsTypes[];
}

interface PropsTypes {
    name?: string;
    id?: number;
    pokemon?: [
        {
            pokemon: [
                {
                    name: string[];
                },
            ];
        },
    ];
}

interface PropsDetail {
    id?: number;
    name?: string;
    height?: number;
    weight?: number;
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
    sprites?: {
        other: {
            dream_world: {
                front_default: any;
            };
        };
    };
}

const ModalDetail: React.FC<PropsModal> = ({
    open,
    refNode,
    pokemonDetail,
}) => {
    const { Title, Text, Paragraph } = Typography;

    const spritesOther = pokemonDetail.sprites!.other.dream_world;
    const pokemonTag = pokemonDetail.types!.map(y => y.type!.name);
    // const pokemonTypeName = pokemonType.map(e =>
    //     e.pokemon!.map(i => i.pokemon),
    // );

    // async function getPokemonType(): Promise<any> {
    //     const response = await api.get('/type/');
    //     const pokemonsType = response.data.results;

    //     const pokemonsDataTypes = [];

    //     for (const pokemonType of pokemonsType) {

    //         pokemonsDataTypes.push(responseData.data);
    //     }

    //     console.log(pokemonsDataTypes);

    //     setTypes(pokemonsDataTypes);
    // }

    return (
        <>
            <S.ButtonClose open={open}>
                <ArrowLeftOutlined />
            </S.ButtonClose>
            <S.ContainerModal ref={refNode} open={open}>
                <header>
                    <Text strong>#{pokemonDetail.id}</Text>
                    <Title
                        style={{
                            textTransform: 'capitalize',
                            textShadow:
                                '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
                        }}
                    >
                        {pokemonDetail.name}
                    </Title>
                    <S.PokemonImage pokemonImage={spritesOther.front_default} />
                    {pokemonDetail.types!.map(e => (
                        <Tag color="gray">{e.type!.name}</Tag>
                    ))}
                </header>

                <section
                    style={{
                        textAlign: 'start',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <h2 style={{ textAlign: 'center' }}>Stats</h2>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        {pokemonDetail.stats!.map(e => (
                            <>
                                <div
                                    style={{
                                        padding: '1rem',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Paragraph
                                        strong
                                        style={{ textTransform: 'uppercase' }}
                                    >
                                        {e.stat.name}
                                    </Paragraph>
                                    <p
                                        style={{
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {e.base_stat}
                                    </p>
                                </div>
                                <Divider
                                    style={{
                                        margin: '0',
                                        marginBottom: '1rem',
                                    }}
                                    plain
                                />
                            </>
                        ))}
                    </div>

                    <div
                        style={{
                            padding: '1rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Paragraph
                            strong
                            style={{ textTransform: 'uppercase' }}
                        >
                            Weight
                        </Paragraph>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                            {pokemonDetail.weight}
                        </p>
                    </div>
                    <Divider
                        style={{ margin: '0', marginBottom: '1rem' }}
                        plain
                    />

                    <div
                        style={{
                            padding: '1rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Paragraph
                            strong
                            style={{ textTransform: 'uppercase' }}
                        >
                            Height
                        </Paragraph>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                            {pokemonDetail.height}
                        </p>
                    </div>
                    <Divider
                        style={{ margin: '0', marginBottom: '1rem' }}
                        plain
                    />

                    <div style={{ padding: '1rem' }}>
                        <Paragraph
                            strong
                            style={{ textTransform: 'uppercase' }}
                        >
                            List of Type
                        </Paragraph>
                        {/* {pokemonTag[0] === 'normal' &&
                            pokemonTypeName[0].map((i: any) => (
                                <div>{i.name}</div>
                            ))} */}

                        {pokemonDetail.types!.map(y => (
                            <>
                                <Tag style={{ margin: '1rem' }}>
                                    {y.type!.name}
                                </Tag>
                            </>
                        ))}
                        <Divider
                            style={{
                                margin: '0',
                                marginBottom: '1rem',
                            }}
                            plain
                        />
                    </div>

                    <div style={{ backgroundColor: 'greenyellow' }}>
                        <Paragraph>Lista de Habilidades</Paragraph>
                        <Paragraph>
                            Ao clicar mostrar o "short_effect" da mesma{' '}
                        </Paragraph>
                    </div>
                    <Divider
                        style={{ margin: '0', marginBottom: '1rem' }}
                        plain
                    />

                    <Divider
                        style={{ margin: '0', marginBottom: '1rem' }}
                        plain
                    />

                    <div>
                        <Paragraph>Cada passo de sua evolução</Paragraph>
                    </div>
                </section>
            </S.ContainerModal>
        </>
    );
};

export default ModalDetail;
