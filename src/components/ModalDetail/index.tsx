import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';

import * as S from './styled';
import { Tag, Typography } from 'antd';

interface PropsModal {
    open: boolean;
    refNode: any;
}

const ModalDetail: React.FC<PropsModal> = ({ open, refNode }) => {
    const { Title, Text, Paragraph } = Typography;

    return (
        <>
            <S.ButtonClose open={open}>
                <ArrowLeftOutlined />
            </S.ButtonClose>
            <S.ContainerModal ref={refNode} open={open}>
                <header>
                    <Text strong>#014</Text>
                    <Title>Kakuna</Title>
                    <S.PokemonImage />
                    <Tag color="#8BD674" style={{ borderRadius: '2px' }}>
                        Bug
                    </Tag>
                    <Tag color="#9F6E97" style={{ borderRadius: '2px' }}>
                        Poison
                    </Tag>
                </header>

                <section style={{ textAlign: 'start' }}>
                    <h2 style={{ textAlign: 'center' }}>Stats</h2>
                    <Paragraph>HP</Paragraph>
                    <Paragraph>Peso/Weight</Paragraph>
                    <Paragraph>Height</Paragraph>
                    <div style={{ backgroundColor: 'yellowgreen' }}>
                        <Paragraph>Lista de Tipos</Paragraph>
                        <Paragraph>Todos pokemons do mesmo tipo</Paragraph>
                    </div>
                    <div style={{ backgroundColor: 'greenyellow' }}>
                        <Paragraph>Lista de Habilidades</Paragraph>
                        <Paragraph>
                            Ao clicar mostrar o "short_effect" da mesma{' '}
                        </Paragraph>
                    </div>
                    <Paragraph>Estatísticas de velocidade</Paragraph>
                    <Paragraph>Defense</Paragraph>
                    <Paragraph>Atack</Paragraph>
                    <Paragraph>Cada passo de sua evolução</Paragraph>
                </section>
            </S.ContainerModal>
        </>
    );
};

export default ModalDetail;
