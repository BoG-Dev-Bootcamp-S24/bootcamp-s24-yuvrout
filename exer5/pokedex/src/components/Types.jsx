import React from 'react';
import './Types.css';

function Types({json}) {
    let types = json && json.types ? json.types.map(type => (
        <p key={type.type.name} className={type.type.name}>{type.type.name}</p>
    )) : [];

    console.log('types', types.map(type => type.key));

    return (
        <div className='flex flex-col justify-start p-3'>
            <h2 className='flex py-2 font-bold'>Types:</h2>
            <div className='flex flex-row flex-wrap'>
                {types.map((typeName, index) => (
                    <div key={index} className='{typeName} px-1'>
                        {typeName}
                    </div>
                ))}
             </div>
        </div>
    );
}

export default Types;