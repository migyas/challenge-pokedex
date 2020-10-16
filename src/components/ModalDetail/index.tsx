import React, { useEffect } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Tag, Typography, Divider } from 'antd';

import * as S from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { IPokemonState, IState } from '../../store/modules/types';
import { GetPokemon } from '../../store/modules/search/action';

const ModalDetail: React.FC = (props: any) => {
    const { Title, Text, Paragraph } = Typography;

    const dispacth = useDispatch();
    const pokemonDetail = useSelector<IState, IPokemonState>(
        state => state.search,
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
            <S.ButtonClose to={'/'}>
                <ArrowLeftOutlined />
            </S.ButtonClose>

            {!!pokemonDetail && showData()}
            {pokemonDetail.data[pokemonName] && (
                <>
                    <S.ContainerModal>
                        <S.Header>
                            <Text strong>#{pokeData.id}</Text>
                            <S.TitleDiv>{pokeData.name}</S.TitleDiv>
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

                        <S.SectionDiv>
                            <h2 style={{ textAlign: 'center' }}>Stats</h2>
                            <S.DivStatus style={{}}>
                                {pokeData!.stats!.map(e => (
                                    <>
                                        <S.DivStatusItem>
                                            <S.DivParagraph
                                                strong
                                                style={{
                                                    textTransform: 'uppercase',
                                                }}
                                            >
                                                {e.stat.name}
                                            </S.DivParagraph>
                                            <S.StatP style={{}}>
                                                {e.base_stat}
                                            </S.StatP>
                                        </S.DivStatusItem>
                                        <Divider
                                            style={{
                                                margin: '0',
                                                marginBottom: '1rem',
                                            }}
                                            plain
                                        />
                                    </>
                                ))}
                            </S.DivStatus>

                            <S.ItemStat style={{}}>
                                <S.DivParagraph
                                    strong
                                    style={{ textTransform: 'uppercase' }}
                                >
                                    Weight
                                </S.DivParagraph>
                                <S.StatP>{pokeData.weight}</S.StatP>
                            </S.ItemStat>
                            <Divider
                                style={{ margin: '0', marginBottom: '1rem' }}
                                plain
                            />

                            <S.ItemStat>
                                <S.DivParagraph strong>Height</S.DivParagraph>
                                <S.StatP>{pokeData.height}</S.StatP>
                            </S.ItemStat>
                            <Divider
                                style={{ margin: '0', marginBottom: '1rem' }}
                                plain
                            />

                            <S.ItemStat style={{ flexDirection: 'column' }}>
                                <S.DivParagraph strong>
                                    Lista de Habilidades
                                </S.DivParagraph>
                                <S.DivParagraph>
                                    {pokeData.abilities.map(e => (
                                        <Tag color="red">{e.ability.name}</Tag>
                                    ))}
                                </S.DivParagraph>
                            </S.ItemStat>
                            <Divider
                                style={{ margin: '0', marginBottom: '1rem' }}
                                plain
                            />
                        </S.SectionDiv>
                    </S.ContainerModal>
                </>
            )}
        </>
    );
};

export default ModalDetail;
