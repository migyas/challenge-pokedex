import styled, { css } from 'styled-components';
import { Card, Typography } from 'antd';

const { Paragraph, Title } = Typography;

import backgroundPoke from '../../assets/main-background.svg';

interface PropsModal {
    open?: boolean;
}

interface PropsImage {
    pokemonImage?: any;
}

export const CardItemContainer = styled.section`
    display: flex;
    flex-direction: column;
`;

export const CardContainer = styled(Card)`
    width: 100%;
    max-width: 35rem;
    height: 100%;
    height: 19.5rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    border-radius: 25px;
    position: relative;
    cursor: pointer;
    background-color: #8BD674;
`;

export const ParagraphDiv = styled(Paragraph)`
    margin: 0;
    margin-top: .5rem;
    font-weight: bold;
`;

export const TitleDiv = styled(Title)`
    margin: 0!important;
    padding: 0;
    margin-bottom: .5rem;
    color: #fff !important;
    text-transform: capitalize;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

export const CardTags = styled.div``;

export const ContainerModal = styled.div<PropsModal>`
`;

export const CardBackground = styled.div`
    position: absolute;
    width: 12.8rem;
    height: 12.8rem;
    top: 0rem;
    right: .59rem;
    background-image: url(${backgroundPoke});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.025;

`;

export const CardPokemonImage = styled.div<PropsImage>`
    position: absolute;
    width: 10rem;
    height: 100%;
    top: -1.5rem;
    right: 0rem;

    ${({ pokemonImage }) => pokemonImage ? css`
    background-image: url(${pokemonImage})`
    : ''};
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 99;
`;
