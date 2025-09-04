async function fetchPokemon() {
  const pokemonName = document.getElementById('pokemon-input').value.toLowerCase();

  if (!pokemonName) {
    alert("Por favor, insira o nome de um Pokémon!");
    return;
  }

  try {
    // Fazendo a requisição para a PokeAPI
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
    if (!response.ok) {
      throw new Error("Pokémon não encontrado!");
    }

    // Convertendo a resposta para JSON
    const data = await response.json();

    // Atualizando a interface com os dados do Pokémon
    document.getElementById('pokemon-name').textContent = capitalizeFirstLetter(data.name);
    document.getElementById('pokemon-img').src = data.sprites.front_default;
    
    // Tipos do Pokémon
    const types = data.types.map(type => type.type.name).join(', ');
    document.getElementById('pokemon-type').textContent = types;

    // Habilidades do Pokémon
    const abilities = data.abilities.map(ability => ability.ability.name).join(', ');
    document.getElementById('pokemon-ability').textContent = abilities;

  } catch (error) {
    alert(error.message);
    console.error(error);
  }
}

// Função auxiliar para capitalizar a primeira letra do nome
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
