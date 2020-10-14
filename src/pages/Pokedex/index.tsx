import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import Grid from '../../components/Grid';
import CardItem from '../../components/CardItem';


const Pokedex: React.FC = () => {
    return (
        <Grid>
            <Layout>
                <Link to={'/'}>
                    <Button type="primary">Search</Button>
                </Link>
                <h1>My Pokédex</h1>
                <CardItem />
            </Layout>
        </Grid>
    );
};

export default Pokedex;
