import React, { useEffect } from 'react';
import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import Grid from '../../components/Grid';
import CardItem from '../../components/CardItem';
import { useSelector } from 'react-redux';
import { IState, IPokemonState } from '../../store/modules/types';

const Pokedex: React.FC = () => {
    const pokedex = useSelector<any, any>(state => state.pokedex.pokemon);
    return (
        <Grid>
            <Layout>
                <Link to={'/'}>
                    <Button type="primary">Search</Button>
                </Link>

                <h1>My Pokédex</h1>
                {pokedex.map((e: any) => (
                    <>
                        <Card key={e.id} style={{marginBottom: '2rem',backgroundColor: 'yellowgreen', borderRadius: '25px'}}>
                            <Button type="dashed" danger>
                                Leave Pokemon
                            </Button>
                            <p>#{e.id}</p>
                            <h1 style={{ textTransform: 'uppercase' }}>
                                {e.name}
                            </h1>
                        </Card>
                    </>
                ))}
                {/*  */}
            </Layout>
        </Grid>
    );
};

export default Pokedex;
