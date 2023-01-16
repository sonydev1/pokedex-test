import { Header } from "./components/Header";
import { useEffect } from "react";
import { useState } from "react";
import { NavArrowLeft, NavArrowRight } from "iconoir-react";
import { PokeCard } from "./components/PokeCard";
import pokebola from "./assets/pokebola.png";

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
    const pokeInfo = {
      id: pokeData.id,
      name: pokeData.name,
      pokeimg: pokeData.sprites.other["official-artwork"].front_default,
      habilitys: [
        {
          id:pokeData.id,
          name: skill,
          points: ability,
        },
      ],
    };

    setPokemon(pokeInfo);
  }

  return (
    <div className=" w-screen h-screen bg-[#ffffff]">
      <Header />
      <div className="container px-4">
        <div className="flex justify-between mt-2 ">
          <button
            className="bg-yellow-500 rounded-full"
            onClick={() =>
              pokeId === 1 ? setPokeId(1) : setPokeId(pokeId - 1)
            }
          >
            <NavArrowLeft strokeWidth={2} width={50} height={50} />
          </button>
          <button
            className="bg-yellow-500 rounded-full"
            onClick={() => setPokeId(pokeId + 1)}
          >
            <NavArrowRight strokeWidth={2} width={50} height={50} />
          </button>
        </div>
        <section className="mt-5">
          {pokemon !== undefined ? (
            <PokeCard
              key={pokeId}
              id={pokemon.id}
              name={pokemon.name}
              img={pokemon.pokeimg}
              habi={pokemon.habilitys}
            />
          ) : (
            <img
              src={pokebola}
              alt=""
              className="animate-spin duration-75 w-full"
            />
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
