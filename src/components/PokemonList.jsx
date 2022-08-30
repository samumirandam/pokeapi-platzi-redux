import React from 'react';
import PokemonCard from './PokemonCard';

import './PokemonList.css';

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
