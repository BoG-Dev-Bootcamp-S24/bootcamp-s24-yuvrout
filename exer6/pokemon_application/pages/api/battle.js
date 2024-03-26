export default async function handler(req, res) {
    try {

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
      // Extracting data from the request body
      const { pokemon1, pokemon2 } = req.body;
      console.log(pokemon1)
      console.log(pokemon2)
  
      // Fetch data for the first Pokemon
      const response1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon1}`);
      const data1 = await response1.json();
  
      // Fetch data for the second Pokemon
      const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon2}`);
      const data2 = await response2.json();
      console.log(data2.stats)
  
      // Check if the data is valid
      if (data1 && data1.stats && data2 && data2.stats) {
        // Find the Pokemon with the higher base stat (assuming total base stats for simplicity)
        const totalBaseStat1 = data1.stats[0].base_stat;
        const totalBaseStat2 = data2.stats[0].base_stat;

        const winningPokemon = totalBaseStat1 > totalBaseStat2 ? data1 : data2;
  
        res.status(200).json({
          winner: {
            name: winningPokemon.name,
            sprite: winningPokemon.sprites.front_default,
            type: winningPokemon.types[0].type.name,
          },
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