import React from 'react';

import * as S from './styled';

interface PropsContainer {
    children: React.ReactNode;
}

const Container: React.FC<PropsContainer> = ({ children }: PropsContainer) => (
    <S.Container>{children}</S.Container>
);

export default Container;
