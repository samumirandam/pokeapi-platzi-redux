import React from 'react';
import PokemonCard from './PokemonCard';

import './PokemonList.css';

const PokemonList = ({ pokemons }) => {
  console.log(
    '🚀 ~ file: PokemonList.jsx ~ line 7 ~ PokemonList ~ pokemons',
    pokemons
  );
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.name} name={pokemon.name} />;
      })}
    </div>
  );
};

export default PokemonList;
