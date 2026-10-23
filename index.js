//DESARROLLA AQUI TUS SOLUCIONES
//1.
async function getRandomPokemon() {
  const PokemonAleatorio = Math.floor(Math.random() * 1025) + 1;

  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${PokemonAleatorio}`,
  );

  let data = await response.json();

  return data;
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
async function printImageAndName() {
  const PokemonAleatorio = Math.floor(Math.random() * 1025) + 1;

  const response = await getImageAndName(PokemonAleatorio);

  return `<section>
        <img src ="${response.img}" alt="${response.name}">
        <h1>${response.name}</h1>
    </section>`;
}

//4.

async function getRandomDogImage() {

    const response = await fetch (`https://dog.ceo/api/breeds/image/random`);

    let data = await response.json();

    return data.message;
}

//5.

async function getRandomPokemonImage() {
    const response = await getRandomPokemon()
}

//6.

//7
