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
import _ from 'lodash';

import Grid from '../../components/Grid';
import * as S from './styled';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import api from '../../service/api';
import CardItem from '../../components/CardItem';
import { useDispatch, useSelector } from 'react-redux';
import { IPokemonList, IPokemonState } from '../../store/modules/types';
import { GetPokemon } from '../../store/modules/pokedex/action';

interface PropsPokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
}

const Search: React.FC = (props: any) => {
    const [pokemon, setPokemon] = useState<any>('pikachu');
    const [erroPoke, setErroPoke] = useState('');
    const [pokemonData, setPokemonData] = useState<any[]>([]);
    const [pokemonType, setPokemonType] = useState([]);
    const [showPokemon, setShowPokemon] = useState(false);
    const pokemonName = props.match.params.pokemon;

    const { Search } = Input;
    const { Title, Text } = Typography;

    const dispacth = useDispatch();
    const pokemonDetail = useSelector<IPokemonState, IPokemonList[]>(
        state => state.data,
    );

    console.log(pokemonDetail);

    useEffect(() => {
        dispacth(GetPokemon(pokemon));
    }, [pokemon]);

    const getPokemon = async () => {
        const toList = [];

        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const response = await api.get(url);
            toList.push(response.data);
            setPokemonType(response.data.types);
            setPokemonData(toList);
        } catch (e) {
            setErroPoke(e.name);
        }
    };

    const handleChange = (e: any) => {
        setPokemon(e.target.value.toLowerCase());
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        getPokemon();
        setShowPokemon(true);
    };

    const showData = () => {
        if (!_.isEmpty(pokemonDetail[pokemon])) {
            const pokeData = pokemonDetail[pokemon];

            console.log(pokeData);

            return (
                <div
                    style={{
                        backgroundColor: 'black',
                        width: '280',
                        height: '100',
                    }}
                >
                    <h1>OLA</h1>
                </div>
            );
        }
    };

    return (
        <>
            <Grid>
                <Layout>
                    <Link to={'/pokedex'}>
                        <Button type="primary">My Pokédex</Button>
                    </Link>
                    <S.Header>
                        <Title>List of Pokemons</Title>

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

                    {showPokemon && showData()}

                    {showPokemon && pokemon ? (
                        <CardItem
                            pokemonData={pokemonData}
                            pokemonType={pokemonType}
                        />
                    ) : (
                        ''
                    )}
                </Layout>
            </Grid>
        </>
    );
};

export default Search;
