import React from "react";
import { Hability } from "./Hability";
import Pokebal from "../assets/Pokebal.png";

import "../index.css";
import { Pokeball } from "iconoir-react";

function PokeCard({ data }) {
  if (data !== undefined && data.habilitys !== undefined) {
    //investigra  https://pokemon.fandom.com/es/wiki/Tipos_elementales
    return (
      <>
        <section className="w-96 flex flex-col items-center mx-auto">
          <div
            className={` w-64 h-80  rounded-2xl drop-shadow-2xl ${data.type.name[0]} transition-colors`}
          >
            <div className="flex justify-between bg-slate-900  rounded-t-2xl">
              <div className="pl-4  w-52 z-10">
                <p className="text-lg text-white font-bold capitalize">
                  {data.name}
                </p>
              </div>
              <div className="bg-red-500 text-white w-28 rounded-tr-2xl  flex justify-center gap-2  ">
                <Pokeball className="my-auto" width={25} height={25} />
                <p className="text-xl  font-bold">{data.id}</p>
              </div>
            </div>
            <div className="relative  px-auto pt-12 mx-auto  flex justify-center">
              <img
                src={Pokebal}
                alt=""
                className="absolute right-5 -z-10  animate-[spin_5s_linear_infinite]"
              />
              <img
                className="w-52 drop-shadow-2xl "
                src={data.pokeimg}
                alt={data.name}
              />
            </div>
          </div>

          <div className="flex justify-center gap-20   mt-6 text-center  mx-auto ">
            {data.type.name.map((item, index) => (
              <p
                className={`w-20 ${item} capitalize text-white text-lg rounded-xl font-semibold drop-shadow-2xl decoration-[${item}]`}
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
          <section className="w-80  my-4 ">
            <div className="">
              {data.habilitys.map((item, index) => [
                <Hability
                  key={index}
                  point={item.points}
                  color={data.type.name[0]}
                />,
              ])}
            </div>
          </section>
        </section>
      </>
    );
  }
}

export { PokeCard };
