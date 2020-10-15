import styled, { css } from 'styled-components'

interface PropsModal {
    open?: boolean;
    pokemonImage?: any;
}

export const Header = styled.header`
    z-index: 1500;
    padding-top: 12rem;
    padding-bottom: 6rem;
    justify-content: flex-end;
    text-align: center;

    h1 {
        color: #ffffff;

    }
`;

export const ContainerModal = styled.div<PropsModal>`
    width: 100%;
    height: 100vh;
    background: #8CB230;
    z-index: 1000;
    opacity: 1;
    align-content: flex-start;

    section {
        background-color: #ffffff;
        padding: 1.5rem;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
    }
/*
${({ open }) =>
        open
            ? css`
          transform: translateX(0);
        `
            : css`
          transform: translateX(100%);
        `}; */

  transition: transform 0.3s ease-in-out;

`;

export const ButtonClose = styled.div<PropsModal>`
    position: fixed;
    top: 2.5rem;
    left: 2.5rem;
    cursor: pointer;


/* ${({ open }) =>
        open
            ? css`
          transform: translateX(0);
        `
            : css`
          transform: translateX(100%);
        `};
  transition: transform 0.3s ease-in-out; */

  svg {
    /* ${({ open }) =>
        open
            ? css`
            display: flex;
          `
            : css`
            display: none;
          `}; */
    color: #EA5D60;
    /* opacity: 0.2; */
  }

`;

export const PokemonImage = styled.div<PropsModal>`
    position: absolute;
    width: 100%;
    height: 13rem;
    top: 7rem;
    left: 1.5rem;
    ${({ pokemonImage }) => pokemonImage ? css`
  background-image: url(${pokemonImage})`
        : ''};
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1450;
`;
