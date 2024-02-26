import React from 'react';
import PokemonLogo from '/images/pokemon.png';
import { useRequest } from './hooks/useRequest';
import { Pokemon } from './components/Pokemon';
import { AudioPlayer } from './components/AudioPlayer';
import './App.css';

function App() {
  const { isLoading, data, error } = useRequest('/pokemon');

  const DisplayPokemon = () => {
    if(data) {
      return (
        <div className="row">
          {
            data.results.map((pokemon) => {
              return (
                <div>
                  < Pokemon key={pokemon.name} pokemon={pokemon} />
                </div>
              );
            })
          }
        </div>
        );
    }
  }

  const ErrorHandling = () => {
    if(isLoading) {
      return <div>Loading Pokemon data...</div>;
    } 
    // return <div>{error}: There was an error with getting data</div>;
  
    if(error){
      return <div>{error}: There was an error with getting data</div>;
    }
  }

  return (
    <div>
      <h1>Pokemon</h1>
      <img src={PokemonLogo} height={200} className="pokemon-logo"/>
      <div>
        {/* <AudioPlayer /> */}
        {< DisplayPokemon />} : {< ErrorHandling />}
      </div>
      
    </div>
  )
}

export default App
