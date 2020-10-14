import styled, {css} from 'styled-components';
import pokemonImage from '../../assets/kakuna.svg';
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

  ${({pokemonImage}) => pokemonImage ? css`
  background-image: url(${pokemonImage})`
  : ''};
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 99;
`;
