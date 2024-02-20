import logo from './logo.svg';
import './App.css';
import ImageName from './Components/ImageName';
import React, { useEffect, useRef, useState } from 'react';
import Types from './Components/Types';
import StatsPanel from './Components/StatsPanel';

function App() {
  const [id, setId] = useState(1);
  const [stats, setStats] = useState(true);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState('#4CAF50'); 
  const [moves, setMoves] = useState('#E0E0E0');
  const [pokemonJSON, setPokemonJSON] = useState(null);

  async function APITemplate(id) {
    const URL = "https://pokeapi.co/api/v2/pokemon";
    setLoading(true);
    try {
        const response = await fetch(`${URL}/${id}/`);
        console.log('response', response);
        const pokemonJSON = await response.json();
        setPokemonJSON(pokemonJSON);
        console.log('pokemonJSON', pokemonJSON);
    } catch (error) {
      console.error("Error fetching data:", error);
      setPokemonJSON(null);
    }
    setLoading(false);
  }

  useEffect(() => {
    APITemplate(id);
  }, [id])


  return (
    <div className="App">
      <body>
        <h1 className='text-4xl font-bold py-5'>
          Exercise 5: Pokedex
        </h1>
        <div className='flex flex-row justify-center'>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
            <div className='flex-col px-16'>
              <ImageName json={pokemonJSON} />
              <Types json={pokemonJSON} />
              <button className='bg-gray-300 rounded-md px-6 py-1 mx-2 my-1 text-3xl' onClick={() => {if(id !== 1) {setId(id - 1)}}}>&lt;</button>
              <button className='bg-gray-300 rounded-md px-6 py-1 mx-2 my-1 text-3xl' onClick={() => setId(id + 1)}>&gt;</button>
            </div>
            <div className='flex-col px-16'>
              <StatsPanel json={pokemonJSON} stats={stats} />
              <button onClick={() => {setStats(true); setInfo('#4CAF50'); setMoves('#E0E0E0')}} style={{ backgroundColor: info }} className='rounded-md m-5 px-7 py-2 mt-10'>Info</button>
              <button onClick={() => {setStats(false); setInfo('#E0E0E0'); setMoves('#4CAF50')}} style={{ backgroundColor: moves }} className='rounded-md m-5 px-7 py-2 mt-10'>Moves</button>
            </div>
            </>
          )}
        </div>
      </body>
    </div>
  );
}

export default App;
