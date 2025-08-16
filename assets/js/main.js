let offset = 0;
const limit = 10;
const maxRecords = 151;

const loadMoreButton = document.getElementById('loadMoreButton');

const pokemonList = document.getElementById('pokemonList')

function convertPokemonToLi(pokemon){
  return `
  <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
          <ol class="types">  
            ${pokemon.types.map((type)=> `<li class="type ${type}">${type}</li>`).join('')}
          </ol>
          <img src="${pokemon.photo}" alt="${pokemon.name} Image">  
        </div>
      </li>  
  `
}

//'Fetch' retorna uma 'promessa' de um resultado
// Processamento assíncrono

function loadPokemonItens(offset,limit){
  pokeApi.getPokemons(offset,limit).then((pokemons = [])=>{
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML += newHtml
  })
}

loadPokemonItens(offset,limit)

loadMoreButton.addEventListener("click", () =>{
  offset+= limit;
  const qtdRecordNextPage = offset+limit;
  if(qtdRecordNextPage >= maxRecords){
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset,newLimit);
    loadMoreButton.parentElement.removeChild(loadMoreButton)
  } else{
    loadPokemonItens(offset, limit);
  }

  
})