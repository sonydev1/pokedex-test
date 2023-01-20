async function getPokemon2(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokeData = await res.json();
  const pokeInfo = {
    id: pokeData.id,
    name: pokeData.name,
    pokeimg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData.id}.png`,
    habilitys: [
      {
        name: pokeData.stats.map((habi) => habi.stat.name),
        points: pokeData.stats.map((habi) => habi.base_stat),
      },
    ],
    type: {
      name: pokeData.types.map((item) => [item.type.name]),
    },
  };

  return pokeInfo;
}
F;

function PokemonInfo(id, name, pokeimg, habilitys = [], type = {}) {
  return (pokeInfo = [
    id,
    name,
    pokeimg = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`),
    habilitys[""],
    type[""],
  ]);
}

export { getPokemon2 };
