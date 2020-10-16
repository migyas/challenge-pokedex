import styled from 'styled-components';
import media from 'styled-media-query';


export const Content = styled.div`
    max-width: 32rem;
    padding: 0 2rem;

    ${media.lessThan('huge')`
        max-width: 76rem;
        padding: 0 2rem;
        margin: 0 auto;
    `}

    ${media.greaterThan('huge')`
        max-width: 76rem;
        padding: 0 2rem;
        margin: 0 auto;
    `}
`;
