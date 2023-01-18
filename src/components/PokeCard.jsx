import React from "react";
import { Hability } from "./Hability";
import Pokeball from "../assets/Pokeball.png";

function PokeCard({ data }) {
  if (data !== undefined && data.habilitys !== undefined) {
    //investigra  https://pokemon.fandom.com/es/wiki/Tipos_elementales
    return (
      <>
        <section className="w-96 flex flex-col items-center">
          <div className=" w-64 h-80 bg-blue-500 rounded-2xl drop-shadow-2xl">
            <div className="flex justify-between bg-slate-900 rounded-t-2xl">
              <div className="pl-4 ">
                <p className="text-lg text-white font-bold">{data.name}</p>
              </div>
              <div className="bg-red-500 h-7 w-28 rounded-tr-2xl  flex justify-center ">
                <p className="text-2xl text-white font-bold gap-2">
                  # {data.id}
                </p>
              </div>
            </div>
            <div className="  px-auto pt-12 mx-auto  flex justify-center">
              <img src={Pokeball} alt="" className="absolute right-5" />
              <img
                className="w-52 drop-shadow-xl"
                src={data.pokeimg}
                alt={data.name}
              />
            </div>
          </div>

          <div className="flex justify-center gap-20  w-1/2 mt-3 text-center bg-slate-400 mx-auto">
            {data.type.name.map((item, index) => (
              <p className="w-14  bg-violet-600" key={index}>
                {item}
              </p>
            ))}
          </div>
          <section className="mx-auto">
            <div>
              {data.habilitys.map((item, index) => [
                <Hability key={index} name={item.name} point={item.points} />,
              ])}
            </div>
          </section>
        </section>
      </>
    );
  }
}

export { PokeCard };
