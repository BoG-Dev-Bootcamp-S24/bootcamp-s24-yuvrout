import React from 'react';

function ImageName({ json }) {
    if (!json) {
        return null;
    }

    const { name, sprites } = json;
    const image = sprites && sprites.front_default;

    console.log('image', image);

    return (
        <div className='pt-2 flex-col flex align-middle justify-center'>
            <img src={image} alt={name} className=' border-black border-2 h-80 m-2'/>
            <p className='container bg-gray-300 rounded-md p-3 m-2 border-1 border-black'>{name}</p>
        </div>
    );
}

export default ImageName;