import pokebola from "./assets/pokebola.png";

import { useEffect } from "react";
import { useState } from "react";
import Pokedex from "./layout/Pokedex";
import "./index.css";
import { Button } from "./components/Button";
import { NavArrowRight } from "iconoir-react";
import { NavArrowLeft } from "iconoir-react";

function App() {
  const [pokeId, setPokeId] = useState(1);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemon(pokeId);
  }, [pokeId]);

  async function getPokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeData = await res.json();
    const skill = await pokeData.stats.map((habi) => habi.stat.name);
    const ability = await pokeData.stats.map((habi) => habi.base_stat);
    let type = await pokeData.types.map((item) => [item.type.name]);
    const pokeInfo = {
      id: pokeData.id,
      name: pokeData.name,
      pokeimg: pokeData.sprites.other["official-artwork"].front_default,
      habilitys: [
        {
          id: pokeData.id,
          name: skill,
          points: ability,
        },
      ],
      type: { name: type },
      color: type[0],
    };

    setPokemon(pokeInfo);
  }
  return (
    <>
      {pokemon !== undefined ? (
        <div className={`${pokemon.color}`}>
          <Pokedex data={pokemon} />
          <div className="absolute top-[23.5%] flex w-full px-3 justify-between">
            <Button
              icon={<NavArrowLeft strokeWidth={2} width={50} height={50} />}
              handleClick={() =>
                pokeId === 1 ? setPokeId(1) : setPokeId(pokeId - 1)
              }
            />
            <Button
              icon={<NavArrowRight strokeWidth={2} width={50} height={50} />}
              handleClick={() =>
                pokeId === 905 ? setPokeId(905) : setPokeId(pokeId + 1)
              }
            />
          </div>
        </div>
      ) : (
        <img
          src={pokebola}
          alt=""
          className="animate-[spin_4s_linear_infinite]  w-full"
        />
      )}
    </>
  );
}

export default App;
