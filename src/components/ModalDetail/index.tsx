import React, { useEffect, useState } from 'react';
import { ArrowLeftOutlined, DownOutlined } from '@ant-design/icons';
import { Tag, Typography, Divider, Menu, Dropdown } from 'antd';

import * as S from './styled';
import api from '../../service/api';
import { useDispatch, useSelector } from 'react-redux';
import { IPokemonState, IState, PropsEffect } from '../../store/modules/types';
import { GetPokemon } from '../../store/modules/pokedex/action';

const ModalDetail: React.FC = (props: any) => {
    const { Title, Text, Paragraph } = Typography;
    // const [ability, setAbility] = useState<PropsEffect[]>([]);

    const dispacth = useDispatch();
    const pokemonDetail = useSelector<IState, IPokemonState>(
        state => state.pokedex,
    );

    const pokemonName = props.match.params.pokemon;

    const pokeData = pokemonDetail.data[pokemonName];

    useEffect(() => {
        dispacth(GetPokemon(pokemonName));
    }, [pokemonName]);

    const showData = () => {
        if (pokemonDetail.data[pokemonName]) {
            return <div />;
        }

        if (pokemonDetail.loading) {
            return <p>Loading...</p>;
        }

        if (pokemonDetail.errorMsg !== '') {
            return <p>{pokemonDetail.errorMsg}</p>;
        }

        return <p>error getting pokemon</p>;
    };

    return (
        <>
            <S.ButtonClose>
                <ArrowLeftOutlined />
            </S.ButtonClose>

            {!!pokemonDetail && showData()}
            {pokemonDetail.data[pokemonName] && (
                <>
                    <S.ContainerModal>
                        <S.Header>
                            <Text strong>#{pokeData.id}</Text>
                            <Title
                                style={{
                                    textTransform: 'capitalize',
                                    textShadow:
                                        '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
                                }}
                            >
                                {pokeData.name}
                            </Title>
                            <S.PokemonImage
                                pokemonImage={
                                    pokeData!.sprites!.other!.dream_world
                                        .front_default
                                }
                            />
                            {pokeData.types!.map(e => (
                                <Tag color="cyan">{e.type!.name}</Tag>
                            ))}
                        </S.Header>

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
                                {pokeData!.stats!.map(e => (
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
                                                style={{
                                                    textTransform: 'uppercase',
                                                }}
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
                                <p
                                    style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {pokeData.weight}
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
                                <p
                                    style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {pokeData.height}
                                </p>
                            </div>
                            <Divider
                                style={{ margin: '0', marginBottom: '1rem' }}
                                plain
                            />

                            <div>
                                <Paragraph
                                    strong
                                    style={{ textTransform: 'uppercase' }}
                                >
                                    Lista de Habilidades
                                </Paragraph>
                                <Paragraph>
                                    {pokeData.abilities.map(e => (
                                        <Tag>{e.ability.name}</Tag>
                                    ))}
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
                                <Paragraph>
                                    Cada passo de sua evolução
                                </Paragraph>
                            </div>
                        </section>
                    </S.ContainerModal>
                </>
            )}
        </>
    );
};

export default ModalDetail;
