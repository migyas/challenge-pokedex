import React from 'react';
import { Layout, Typography, Button } from 'antd';

import Grid from '../Grid';

const Header: React.FC = () => {
    const { Header } = Layout;
    const { Title } = Typography;
    return (
        <Header>
            <Grid>
                <Title style={{ color: '#fff' }}>Welcome</Title>
                <Button color="#EA5D60">Capture Now</Button>
            </Grid>
        </Header>
    );
};

export default Header;
