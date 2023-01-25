import React from "react";
import { Header } from "../components/Header";
import { PokeCard } from "../components/PokeCard";
import pokebola from "../assets/pokebola.png";
import "../index.css";

function Pokedex({ data }) {


  if (data !== undefined) {
    return (
      <div className={` w-screen h-screen  ${data.color}`}>
        <Header />
        <section
          className={`mt-4  flex flex-col items-center  ${data.color}`}
        >
          {data !== undefined ? (
            <PokeCard
              id={data.id}
              name={data.name}
              img={data.pokeimg}
              habi={data.habilitys}
              color={data.color}
              type={data.type}
            />
          ) : (
            <img
              src={pokebola}
              alt=""
              className="animate-[spin_4s_linear_infinite]  w-full"
            />
          )}
        </section>
      </div>
    );
  }
}

export default Pokedex;
