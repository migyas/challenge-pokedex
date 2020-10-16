import React, { useState } from 'react';
import { Typography, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import _ from 'lodash';

import Grid from '../../components/Grid';
import * as S from './styled';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import api from '../../service/api';
import CardItem from '../../components/CardItem';

interface PropsPokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
}

const Search: React.FC = () => {
    const [pokemon, setPokemon] = useState<any>('pikachu');
    const [pokemonData, setPokemonData] = useState<any[]>([]);
    const [pokemonType, setPokemonType] = useState([]);
    const [pokemonName, setPokemonName] = useState([]);
    const [showPokemon, setShowPokemon] = useState(false);

    const { Search } = Input;
    const { Title, Text } = Typography;

    const getPokemon = async () => {
        const toList = [];

        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const response = await api.get(url);
            toList.push(response.data);
            setPokemonType(response.data.types);
            setPokemonName(response.data.name);
            setPokemonData(toList);
        } catch (e) {}
    };

    const handleChange = (e: any) => {
        setPokemon(e.target.value.toLowerCase());
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        getPokemon();
        setShowPokemon(true);
    };

    return (
        <>
            <Grid>
                <Layout>
                    <Link to={'/pokedex'}>
                        <Button type="primary">My Pokédex</Button>
                    </Link>
                    <S.Header>
                        <Title>Pokédex</Title>

                        <Text>
                            Search for Pokémon by name or National Pokémon
                            Number
                        </Text>
                    </S.Header>
                    <S.Form onSubmit={handleSubmit}>
                        <Search
                            type="text"
                            placeholder="Type a name or national number pokémon"
                            onChange={handleChange}
                        />
                    </S.Form>

                    {showPokemon && pokemon ? (
                        <Link to={`/pokemon/${pokemonName}`}>
                            <CardItem
                                pokemonData={pokemonData}
                                pokemonType={pokemonType}
                            />
                        </Link>
                    ) : (
                        ''
                    )}
                </Layout>
            </Grid>
        </>
    );
};

export default Search;
