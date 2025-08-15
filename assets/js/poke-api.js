const pokeapi = {}
pokeapi.getPokemons = (offset = 0, limit =10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
}