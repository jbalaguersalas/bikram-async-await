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
    return response.sprites.front_default;
}

//6.
async function printPugVsPikachu() {
  const responsePug = await fetch (`https://dog.ceo/api/breed/pug/images/random`);
  const dataPug = await responsePug.json();

  const responsePikachu = await fetch (`https://pokeapi.co/api/v2/pokemon/pikachu`);
  const dataPikachu = await responsePikachu.json();

 
    const imgPug = document.createElement("img");
    imgPug.src = dataPug.message;
    document.body.appendChild(imgPug);
  
    const vs = document.createElement("h1");
    vs.innerText = "VS";
    document.body.appendChild(vs)

    const imgPikachu = document.createElement("img");
    imgPikachu.src = dataPikachu.sprites.front_default;
    document.body.appendChild(imgPikachu);
}
printPugVsPikachu();

//7.
async function getRandomCharacter() {
  const RandomCharacter = Math.floor(Math.random() * 826) +1;
  const response = await fetch (`https://rickandmortyapi.com/api/character/${RandomCharacter}`)
  const data = await response.json();
  return data;
}

//8.
async function getRandomCharacterInfo (){
  const character = await getRandomCharacter();

  const responseEpisode = await fetch(character.episode[0]);
  const episodeData = await responseEpisode.json();

  return {
    img:
    name:
    episodes:
    firstEpisode:
    dateEpisode:
  }
}

//9.
