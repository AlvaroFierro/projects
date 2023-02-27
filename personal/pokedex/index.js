const pokeContainer = document.getElementById('poke-container')

// TODO: get the pokemones from pokeapi

const getPokemon = async (pokemon) => {
  const URL = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  const data = await URL.json()

  console.log(data)
}

getPokemon('42')
