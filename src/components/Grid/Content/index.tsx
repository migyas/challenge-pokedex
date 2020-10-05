import React from 'react';

import * as S from './styled';

interface PropsContent {
    children: React.ReactNode;
}

const Content: React.FC<PropsContent> = ({ children }: PropsContent) => (
    <S.Content>{children}</S.Content>
);

export default Content;
