import React, { useState, useEffect } from 'react';
import {
    Typography,
    AutoComplete,
    Input,
    Space,
    Select,
    Button,
    Divider,
} from 'antd';
import 'antd/dist/antd.css';

import Grid from '../../components/Grid';
import CardItem from '../../components/CardItem';
import * as S from './styled';
import Layout from '../../components/Layout';
import api from '../../service/api';

interface PropsPokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
}
const Search: React.FC = () => {
    const [pokemons, setPokemons] = useState<PropsPokemon[]>([]);
    // const [searchTerm, setSearchTerm] = useState('');

    const { Option } = AutoComplete;

    const { Title, Text } = Typography;

    async function getPokemons() {
        const response = await api.get('/pokemon-form/?offset=0&limit=300');
        const pokemons = response.data.results;

        const pokemonsData = [];

        for (const pokemon of pokemons) {
            const responseData = await api.get(`/pokemon-form/${pokemon.name}`);
            pokemonsData.push(responseData.data);
        }
        console.log(pokemonsData);
        setPokemons(pokemonsData);
    }

    useEffect(() => {
        getPokemons();
    }, []);

    // useEffect(() => {
    //     api.get('pokemon').then(response => {
    //         const responseData = response.data;
    //         console.log(responseData);

    //         setPokemonsAutoComplete(responseData.results);
    //     });
    // }, []);

    // const pokeItem = useSelector(state => state);

    // console.log(pokeItem);

    // async function getPokemonsAutoComplete(): Promise<any> {
    //     const response = await api.get('/pokemon/?limit=1050');
    //     const pokemons = response.data.results;

    //     // console.log(pokemons);
    //     setPokemonsAutoComplete(pokemons);
    // }

    // useEffect(() => {
    //     getPokemonsAutoComplete();
    //     getPokemons();
    //     searchPokemon(options);
    // }, [options]);

    return (
        <>
            <Grid>
                <Layout>
                    <S.BackgroundPoke />
                    <Button type="primary">My Pokédex</Button>

                    <S.Header>
                        <Title>List of Pokemons</Title>

                        <Text>Search for Pokémon by name</Text>
                    </S.Header>

                    <Select
                        showSearch
                        style={{
                            width: 280,
                            height: '100vh',
                        }}
                        optionFilterProp="children"
                    >
                        {pokemons.map(e => (
                            <Option
                                style={{
                                    textTransform: 'capitalize',
                                    fontSize: '1.65rem',
                                    fontWeight: 'bold',
                                }}
                                key={e.id}
                                value={e.name}
                            >
                                {e.name}

                                <img
                                    style={{ marginLeft: '6rem' }}
                                    src={e.sprites.front_default}
                                />
                            </Option>
                        ))}
                    </Select>
                </Layout>
            </Grid>
        </>
    );
};

export default Search;
