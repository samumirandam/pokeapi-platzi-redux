import React, { useEffect } from 'react';
import { Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemons } from './api/';

import { setPokemonsAction } from './actions';

import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';

import logo from './statics/logo.svg';

import './App.css';

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      dispatch(setPokemonsAction(pokemonsRes));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img className="App__logo" src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
