import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import media from 'styled-media-query';

const { Title, Paragraph } = Typography;

interface PropsModal {
    open?: boolean;
    pokemonImage?: any;
}

export const Header = styled.header`
    z-index: 1500;
    padding-top: 1rem;
    padding-bottom: 6rem;
    justify-content: flex-end;
    text-align: center;
    max-width: 65rem;
    width: 100%;
    margin: 0 auto;
    h1 {
        color: #ffffff;
    }
`;

export const ContainerModal = styled.div<PropsModal>`
    width: 100%;
    height: 100vh;
    background: #EA5D60;
    z-index: 1000;
    opacity: 1;
    align-content: flex-start;

    section {
        background-color: #ffffff;
        padding: 1.5rem;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
    }
`;

export const ButtonClose = styled(Link)`
    position: fixed;
    top: 2.5rem;
    left: 2.5rem;
    cursor: pointer;

  svg {
    color: #222222;
  }
`;

export const TitleDiv = styled(Title)`
    margin: 1rem 0 !important;
    text-transform: capitalize;
    text-Shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

export const SectionDiv = styled.section`
    text-align: start;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    max-width: 65rem;
    margin: 0 auto;
`;

export const DivStatus = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ItemStat = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
`;

export const DivStatusItem = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
`;

export const DivParagraph = styled(Paragraph)`
    text-transform: uppercase;
`;

export const StatP = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const PokemonImage = styled.div<PropsModal>`
    width: 100%;
    width: 20rem;
    height: 13rem;
    margin: 0 auto;
    ${({ pokemonImage }) => pokemonImage ? css`
        background-image: url(${pokemonImage})`
        : ''};
    background-size: contain;
    background-repeat: no-repeat;
`;
