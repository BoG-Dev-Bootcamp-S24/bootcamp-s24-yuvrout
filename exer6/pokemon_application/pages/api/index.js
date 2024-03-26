export default async function handler(req, res) {
  try {
    // Get a random Pokemon ID
    const randomPokemonId = Math.floor(Math.random() * 1024) + 1; 

    // Fetch data for the random Pokemon
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
    const data = await response.json();

    // Check if the data is valid
    if (data && data.name) {
      res.status(200).json({
        name: data.name,
        sprite: data.sprites.front_default,
        type: data.types[0].type.name,
      });
    } else {
      // Invalid data
      res.status(400).json({ error: 'Invalid data' });
    }
  } catch (error) {
    // Server error
    res.status(500).json({ error: 'Internal Server Error' });
  }
}