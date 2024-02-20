import React from 'react';

function StatsPanel({ json, stats }) {
    if (!json) {
        return null; // or some fallback content if json is not available
    }

    console.log('json', json);

    if (stats) {
        return (
            <div className='flex flex-col'>
                <h2 className='justify-center py-3 font-bold text-2xl'>Info</h2>
                <ul className='flex flex-col bg-gray-200 justify-start align-top mx-1 pr-20 pb-28 pl-5 pt-5'>
                    <li className='flex'>Height: {json.height}m</li>
                    <li className='flex'>Weight: {json.weight}kg</li>
                    <li className='flex'>HP: {json.stats[0].base_stat}</li>
                    <li className='flex'>Attack: {json.stats[1].base_stat}</li>
                    <li className='flex'>Defense: {json.stats[2].base_stat}</li>
                    <li className='flex'>Special Attack: {json.stats[3].base_stat}</li>
                    <li className='flex'>Special Defense: {json.stats[4].base_stat}</li>
                    <li className='flex'>Speed: {json.stats[5].base_stat}</li>
                </ul>
            </div>
        );
    } else {
        return (
            <div className='flex flex-col'>
                <h2 className='justify-center py-3 font-bold text-2xl'>Moves</h2>
                <ul className='flex flex-col bg-gray-200 justify-start align-top mx-1 pr-32 pb-28 pl-5 pt-5'>
                    {json.moves && json.moves.map((move, i) => (
                        <li key={i} className='flex'>{move.move.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default StatsPanel;
