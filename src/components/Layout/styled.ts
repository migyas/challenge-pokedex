import styled from 'styled-components';
import backgroundPoke from '../../assets/main-background.svg';

export const LayoutContainer = styled.div`
    padding: 4rem 0;
    position: relative;
    z-index: 99;
`;
export const Header = styled.header`
    margin: 2.5rem 0;
`;

export const BackgroundPoke = styled.div`
    position: absolute;
    top: -16.7rem;
    left: -2.5rem;
    width: 33rem;
    height: 33rem;
    background-image: url(${backgroundPoke});
    background-size: contain;
    z-index: -100;
    opacity: 0.025;
`;
