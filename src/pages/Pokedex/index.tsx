import React, { useCallback, useEffect } from 'react';
import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import Grid from '../../components/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { RemovePokemonSuccess } from '../../store/modules/pokedex/action';

const Pokedex: React.FC = () => {
    const pokedex = useSelector<any, any>(state => state.pokedex.pokemon);
    const dispacth = useDispatch();

    // const handleRemove = (id: number) => {
    //     const findIndex = pokedex.findIndex((e: any) => e.id === id);

    //     console.log(findIndex);
    //     console.log(pokedex.filter((e: any) => e.id !== id));
    //     pokedex.slice(findIndex, 1);
    //     pokedex.filter((e: any) => e.id !== id);
    // }

    useEffect(() => {

    },[])

    const handleRemovePokemonToPokemon = useCallback((i: number) => {
        dispacth(RemovePokemonSuccess(i));
    }, [dispacth]);
    return (
        <Grid>
            <Layout>
                <Link to={'/'}>
                    <Button type="primary">Search</Button>
                </Link>

                <h1>My Pokédex</h1>
                {pokedex.map((e: any, i: number) => (
                    <>
                        <Card
                            key={e.id}
                            style={{
                                marginBottom: '2rem',
                                backgroundColor: 'yellowgreen',
                                borderRadius: '25px',
                            }}
                        >
                            <Button
                                type="dashed"
                                danger
                                onClick={() => handleRemovePokemonToPokemon(e.id)}
                            >
                                Leave Pokemon
                            </Button>
                            <p>#{e.id}</p>
                            <h1 style={{ textTransform: 'uppercase' }}>
                                {e.name}
                            </h1>
                        </Card>
                    </>
                ))}
            </Layout>
        </Grid>
    );
};

export default Pokedex;
