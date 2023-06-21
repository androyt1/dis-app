import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
      .then(response => {
        const newPokemonList = response.data.results;
        setPokemonList(prevList => [...prevList, ...newPokemonList]);

        if (response.data.next) {
          setOffset(prevOffset => prevOffset + 20);
        } else {
          setHasMore(false);
        }
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  };

  const renderPokemon = () => {
    return pokemonList.map((pokemon, index) => (
      <div key={index}>
        <h3>{pokemon.name}</h3>
      </div>
    ));
  };

  return (
    <InfiniteScroll
      dataLength={pokemonList.length}
      next={fetchPokemon}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more Pokémon to display.</p>}
      scrollThreshold={0.8}
      key={offset}
    >
      {renderPokemon()}
    </InfiniteScroll>
  );
};

export default PokemonList;
