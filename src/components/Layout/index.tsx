import React from 'react';

import * as S from './styled';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <S.LayoutContainer>
                <S.BackgroundPoke />
                <main>{children}</main>
            </S.LayoutContainer>
        </>
    );
};

export default Layout;
