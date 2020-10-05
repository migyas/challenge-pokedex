import React from 'react';

import Container from './Container';
import Content from './Content';

interface PropsGrid {
    children: React.ReactNode;
}

const Grid: React.FC<PropsGrid> = ({ children }: PropsGrid) => (
    <Container>
        <Content>{children}</Content>
    </Container>
);

export default Grid;
