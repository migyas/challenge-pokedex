import React, { useState, useRef } from 'react';
import { Card, Typography, Tag, Image, Button } from 'antd';

import * as S from './styled';
import bugIcon from '../../assets/bug-icon.svg';
import useOutsideClick from '../../hook/useOutsideClick';
import ModalDetail from '../ModalDetail';
import { QuestionOutlined } from '@ant-design/icons';


interface PropsDetail {
    id?: number;
    hp?: number;
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
    sprites?: {
        other: {
            dream_world: {
                front_default: any;
            };
        };
    };
}

interface PropsPokemon {
    pokemonDetail: PropsDetail;
}

const CardItem: React.FC<PropsPokemon> = ({ pokemonDetail }: PropsPokemon) => {
    const [modal, setModal] = useState(false);
    const node = useRef();
    const { Text, Paragraph, Title } = Typography;

    useOutsideClick(node, (): void => {
        if (modal) {
            setModal(false);
        }
    });

    // function getAllPokemonByType() {
    //     const responseData = await api.get(`/type/${pokemonDetail.types[0].type?.name}`);
    // }

    const spritesOther = pokemonDetail.sprites!.other.dream_world;

    return (
        <>
            <S.ContainerModal open={modal}>
                <ModalDetail
                    open={modal}
                    refNode={node}
                    pokemonDetail={pokemonDetail}
                />
            </S.ContainerModal>
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
                onClick={() => setModal(true)}
            >
                <S.CardItemContainer>
                    <div>
                        <Button size="small" type="primary" danger>
                            Leave Pokemon
                        </Button>
                    </div>
                    <Paragraph style={{ margin: 0, marginTop: '.5rem' }}>
                        #{pokemonDetail.id}
                    </Paragraph>
                    <Title
                        style={{
                            margin: 0,
                            marginTop: '.5rem',
                            marginBottom: '.5rem',
                            color: '#fff',
                            textTransform: 'capitalize',
                            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
                        }}
                    >
                        {pokemonDetail.name}
                    </Title>{' '}
                    <S.CardTags>
                        {pokemonDetail.types!.map(e => <Tag color="red">{e.type!.name}</Tag>)}
                        {/* <Tag color="#8CB230">{pokemonDetail.types!.type}</Tag>
                        <Tag color="#A552CC">Poison</Tag> */}
                    </S.CardTags>
                    <S.CardPokemonImage
                        pokemonImage={spritesOther.front_default}
                    />
                    <S.CardBackground />
                </S.CardItemContainer>
            </Card>
        </>
    );
};

export default CardItem;
