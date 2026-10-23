//DESARROLLA AQUI TUS SOLUCIONES
//1.
async function getRandomPokemon() {

  const PokemonAleatorio = Math.floor(Math.random()* 1025) +1;

  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonAleatorio}`);

  let data = await response.json();

  return PokemonAleatorio
}
//2.
async function getImageAndName(pokemon) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  let data = await response.json();
  let name = data.name;
  let img = data.sprites.front_default;
  return { name, img };
}
//3.

//4.

//5.

//6.

//7
