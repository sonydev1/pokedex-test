import React from "react";
import { Header } from "../components/Header";
import { PokeCard } from "../components/PokeCard";
import pokebola from "../assets/pokebola.png";
import "../index.css";
import { NavArrowLeft } from 'iconoir-react';
import { NavArrowRight } from 'iconoir-react';
import { Button } from "../components/Button";
import { newp } from "../App";

function Pokedex({ data }) {


  if (data !== undefined) {
    return (
      <div
        className={` w-96  sm:w-full h-screen container px-3 mx-auto ${data.color}`}
      >
        <Header />
        <div className="mt-4 w-80 mx-auto flex justify-between">
          <Button
            icon={<NavArrowLeft strokeWidth={2} width={50} height={50} />}
            handleClick={newp}
          />
          <Button
            icon={<NavArrowRight strokeWidth={2} width={50} height={50} />}
          />
        </div>
        <section className={` flex justify-center  ${data.color}`}>
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
              className="animate-[spin_4s_linear_infinite] bg-red-500  w-full"
            />
          )}
        </section>
      </div>
    );
  }
}

export default Pokedex;
