import React, { useState, useRef } from 'react';
import { Card, Typography, Tag, Image, Button } from 'antd';

import * as S from './styled';
import useOutsideClick from '../../hook/useOutsideClick';
import ModalDetail from '../ModalDetail';

// interface CardProps {
//     children: React.ReactNode;
// }

const CardItem: React.FC = () => {
    const [modal, setModal] = useState(false);
    const node = useRef();
    const { Text, Paragraph } = Typography;

    useOutsideClick(node, (): void => {
        if (modal) {
            setModal(false);
        }
    });

    return (
        <>
            <S.ContainerModal open={!modal}>
                <ModalDetail open={!modal} refNode={node} />
            </S.ContainerModal>
            <Card
                style={{
                    width: '100%',
                    height: '100%',
                    marginBottom: '2rem',
                    borderRadius: '25px',
                    position: 'relative',
                    cursor: 'pointer'

                }}
                onClick={() => setModal(true)}
            >
                <S.CardItemContainer>
                    <Button>
                        Leave Pokemon
                    </Button>
                    <Paragraph>#014</Paragraph>

                    <Text strong>Kakuna</Text>
                    <S.CardTags>
                        <Tag color="green">Bug</Tag>
                        <Tag color="purple">Poison</Tag>
                    </S.CardTags>

                    <S.CardPokemonImage />
                    <S.CardBackground />
                </S.CardItemContainer>
            </Card>
        </>
    );
};

export default CardItem;
