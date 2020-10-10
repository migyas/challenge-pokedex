import styled, {css} from 'styled-components'

import pokemonImage from '../../assets/kakuna.svg';

interface PropsModal {
    open?: boolean;
    pokemonImage?: any;
}

export const ContainerModal = styled.div<PropsModal>`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9999;
    background: #8CB230;
    opacity: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-content: flex-start;

    header {
        padding-top: 6rem;
        padding-bottom: 6rem;
        justify-content: baseline;
        text-align: center;

        h1 {
            color: #ffffff;
        }
    }

    section {
        background-color: #ffffff;
        padding: 1.5rem;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
    }

${({ open }) =>
    open
      ? css`
          transform: translateX(0);
        `
      : css`
          transform: translateX(100%);
        `};

  transition: transform 0.3s ease-in-out;

`;

export const ButtonClose = styled.div<PropsModal>`
    position: fixed;
    height: 100vh;
    top: 2.5rem;
    left: 2.5;
    z-index: 999999;
    cursor: pointer;


${({ open }) =>
    open
      ? css`
          transform: translateX(0);
        `
      : css`
          transform: translateX(100%);
        `};
  transition: transform 0.3s ease-in-out;

  svg {
    ${({ open }) =>
      open
        ? css`
            display: flex;
          `
        : css`
            display: none;
          `};
    color: #EA5D60;
    /* opacity: 0.2; */
  }

`;

export const PokemonImage = styled.div<PropsModal>`
    position: absolute;
    width: 100%;
    height: 13rem;
    top: 5rem;
    left: 2rem;
    ${({pokemonImage}) => pokemonImage ? css`
  background-image: url(${pokemonImage})`
  : ''};
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -99;
`;
