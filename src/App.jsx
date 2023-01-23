import { Header } from "./components/Header";
import { useEffect } from "react";
import { useState } from "react";
import { NavArrowLeft, NavArrowRight } from "iconoir-react";
import { PokeCard } from "./components/PokeCard";
import pokebola from "./assets/pokebola.png";
import { Button } from "./components/Button";


function App() {
  const [pokeId, setPokeId] = useState(1);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemon(pokeId);
  }, [pokeId]);

  async function getPokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeData = await res.json();
    const pokeInfo = {
      id: pokeData.id,
      name: pokeData.name,
      pokeimg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData.id}.png`,
      habilitys: [
        {
          points: pokeData.stats.map((habi) => habi.base_stat),
        },
      ],

      type: {
        name: pokeData.types.map((item) => [item.type.name]),
      },
    };

    setPokemon(pokeInfo);
  }

  return (
    <div className={`w-full h-full `}>
      <Header />
      <div className="  mx-auto ">
        <div className="w-[374px]  flex justify-between  mx-auto pt-2 ">
          <Button
            icon={<NavArrowLeft strokeWidth={2} width={50} height={50} />}
            handleClick={() =>
              pokeId === 1 ? setPokeId(1) : setPokeId(pokeId - 1)
            }
          />
          <Button
            icon={<NavArrowRight strokeWidth={2} width={50} height={50} />}
            handleClick={() => setPokeId(pokeId + 1)}
          />
          
        </div>
        <section className="mt-5">
          {pokemon !== undefined ? (
            <PokeCard data={pokemon} />
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
