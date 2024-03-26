export default async function handler(req, res) {
    try {
      const { type } = req.query;
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await response.json();
      
      // Check if the data is valid
      if (data && data.pokemon) {
        const pokemonList = data.pokemon.map((pokemon) => ({
            name: pokemon.pokemon.name
          }));
    
        res.status(200).json(pokemonList);
      } else {
        // Invalid data
        res.status(400).json({ error: 'Invalid data' });
      }
    } catch (error) {
      console.log(error)
      // Server error
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }