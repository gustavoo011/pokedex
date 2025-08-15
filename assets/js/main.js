const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon){
  return `
  <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
          <ol class="types">
            <li class="type">Grass</li>
            <li class="type">Poison</li>
          </ol>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name} Image">  
        </div>
      </li>  
  `
}

const pokemonList = document.getElementById('pokemonList')
//'Fetch' retorna uma 'promessa' de um resultado
// Processamento assíncrono

fetch(url)
//Converte a resposta em JSON
  .then((response) => response.json())
//Retorna o resultado da JSONBody
  .then((jsonBody) => jsonBody.results)
//Exibe a lista de pokemons.
  .then((pokemons) => {
    for (let i = 0;  i < pokemons.length; i++) {
      const pokemon = pokemons[i];
      pokemonList.innerHTML += convertPokemonToLi(pokemon); 
    }
  })
//Exibe o erro, caso aconteça.
  .catch((error) => console.error(error))
