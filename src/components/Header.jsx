import Pokedex from "../assets/pokedex.png";
import pokebola from "../assets/pokebola.png";
import { useState, useEffect } from "react";
/* import {getPokemon} from '../pokeAPI.js' */

function Header() {
  const [namePokemon, setNamePokemon] = useState(1);
  const [loadin, setLoading] = useState("animate-spin transition-all");

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    getPokemon(namePokemon);
  }, []);

  async function getPokemon(id) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokeData = await res.json();
      setPokemon(pokeData);
      console.log(pokeData.id);
    } catch (error) {
      console.log(error);
    }
  }

  function nextPokemon(){
setNamePokemon (++1)
  }

  return (
    <>
      <div className="grid grid-cols-1 justify-items-center  py-3 bg-red-500 h-72 border-b-[9px] border-[#58585a] ">
        <img src={Pokedex} className="h-24 " alt="Pokedex" />

        <div className="flex gap-4  h-11">
          <input
            type="text"
            placeholder="Nombre del pokemon"
            className="px-2 h-10 rounded-lg"
          />
          <button className="bg-yellow-500 px-2 h-10 rounded-lg"
            onClick={nextPokemon()}>search</button>
        </div>

        <div className="absolute top-56">
          <img
            src={pokebola}
            alt="pokebola"
            className={`h-28 ${loadin} transition-all`}
          />
        </div>
      </div>

      <div>
      <h1></h1>
      </div>
    </>
  );
}
export { Header };
